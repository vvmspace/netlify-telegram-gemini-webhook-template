// /.netlify/functions/webhook

const promptTemplate = require("./prompt.template");

const sendMessage = async (chatId, text) => {
  const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;

  if (!TELEGRAM_BOT_TOKEN) {
    throw new Error("TELEGRAM_BOT_TOKEN key is required");
  }

  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: chatId,
      text,
    }),
  });
};

const askGemini = async (prompt) => {
  const apiKey = process.env.GEMINI_API_KEY;
  const model = process.env.GEMINI_MODEL || "gpt-3.5-turbo";

  if (!apiKey) {
    throw new Error("GEMINI_API_KEY key is required");
  }

  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

  const body = {
    contents: [
      {
        parts: [
          {
            text: `${prefix}${prompt}${suffix}`,
          },
        ],
        role: "user",
      },
    ],
  };

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const responseBody = await response.json();
  return responseBody.candidates.flatMap((candidate) =>
    candidate.content.parts.map((part) => part.text),
  );
};

exports.handler = async (event) => {
  const bodyAsText = event.body;
  if (!bodyAsText) {
    return {
      statusCode: 400,
      body: "No body provided",
    };
  }

  const body = JSON.parse(bodyAsText);
  const chatId = body.message.chat.id;
  const prompt = promptTemplate(body.message.text);
  const reply = await askGemini(prompt);

  await sendMessage(chatId, reply);

  return {
    statusCode: 200,
    body: "Webhook received",
  };
};

// /.netlify/functions/webhook

const { promptTemplate } = require("../../prompt.template");

const { askGemini, sendMessage } = require("../../apis");

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

// /.netlify/functions/webhook

const { TELEGRAM_BOT_TOKEN } = process.env;

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
  const reply = JSON.stringify(body, null, 2);
  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
  
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: reply,
    }),
  });

  return {
    statusCode: 200,
    body: "Webhook received",
  };
};

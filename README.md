# Netlify Telegram Webhook Template

Deploy your Telegram bot to Netlify and run it without managing a server.

## Getting Started

1. Click "Use this template" button to create a new repository from this template.
2. Create a new bot using [BotFather](https://t.me/botfather) and get the token.
3. Add your repository to [Netlify](https://app.netlify.com/start).
4. Set environment variable `TELEGRAM_BOT_TOKEN` with your bot token.
5. Wait for the deployment to continue.
6. Set the webhook using npx script: `npx sethook TELEGRAM_BOT_TOKEN https://DOMAIN.netlify.app/.netlify/functions/webhook`
7. Done! Now you can send a message to your bot and you will receive payload in Telegram.

## Files

- `netlify.toml`: Netlify configuration file.
- `netlify/functions/webhook.js`: Webhook function.

## Check also

- [npx sethook](https://github.com/vvmspace/sethook): Set Telegram webhook using `npx`.

# Netlify Telegram Gemini Webhook Template

Quickly deploy your **Telegram** bot to **Netlify** and integrate it with **Google Gemini**. Just **edit the prompt template!**

## Getting Started

1. Click "Use this template" button to create a new repository from this template.
2. Create a new bot using [BotFather](https://t.me/botfather) and get the token.
3. Get your Google Gemini API key from the [Google AI Studio](https://aistudio.google.com/app/apikey).
4. Add your repository to [Netlify](https://app.netlify.com/start).
5. Set environment variables `TELEGRAM_BOT_TOKEN` and `GEMINI_API_KEY` in the Netlify dashboard.
6. Wait for the deployment to continue.
7. Set the webhook using npx script: `npx sethook TELEGRAM_BOT_TOKEN https://DOMAIN.netlify.app/.netlify/functions/webhook`
8. Test your bot by sending a message to it.
9. Edit prompt template in `prompt.template.js` to customize the bot behavior.

## Files

- `netlify/functions/webhook.js`: Webhook function.
- `api.js`: HTTP wrappers for Telegram and Google Gemini APIs
- `netlify.toml`: Netlify configuration file.
- `prompt.template.js`: Prompt template. Edit this file to customize the bot's responses.

## Additional Resources

- [npx sethook](https://github.com/vvmspace/sethook): Set Telegram webhook using `npx`.
- [netlify-telegram-webhook-template](https://github.com/vvmspace/netlify-telegram-webhook-template): Netlify Telegram Webhook Template.

const TelegramBot = require('node-telegram-bot-api');

// TOKEN BOT
const token = '8254564948:AAE3Amva6Gw6GCRbVUBu4L0F6X60K6ZR7Wo';

// buat bot
const bot = new TelegramBot(token, { polling: true });

console.log("Bot is running... 🚀");

// START MENU
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;

    bot.sendMessage(chatId,
`🔥 YOYO SIGNAL BOT 🔥
━━━━━━━━━━━━
Pilih Market:`, {
        reply_markup: {
            inline_keyboard: [
                [{ text: "📊 Crypto IDX", callback_data: "crypto" }],
                [{ text: "💱 EUR/USD", callback_data: "eurusd" }]
            ]
        }
    });
});

// HANDLE BUTTON
bot.on('callback_query', (query) => {
    const chatId = query.message.chat.id;
    const data = query.data;

    if (data === "crypto") {
        bot.sendMessage(chatId,
`🔥 SIGNAL CRYPTO 🔥
━━━━━━━━━━━━
BUY 🟢 23:00
━━━━━━━━━━━━
Crypto IDX
━━━━━━━━━━━━
⚠️ MAXIMAL K2
⚠️ ENTRY -1 MENIT`);
    }

    if (data === "eurusd") {
        bot.sendMessage(chatId,
`🔥 SIGNAL FOREX 🔥
━━━━━━━━━━━━
SELL 🔴 23:05
━━━━━━━━━━━━
EUR/USD
━━━━━━━━━━━━
⚠️ MAXIMAL K2
⚠️ ENTRY -1 MENIT`);
    }
});

// biar ga error di render (dummy web server)
const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Bot is alive!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Web server running on port ${PORT}`);
});

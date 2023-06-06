const { Telegraf } = require("telegraf")
const { downloader } = require("./index")
require("dotenv").config()

const bot = new Telegraf(process.env.TOKEN)

bot.start(ctx => ctx.replyWithHTML("Assalomu aleykum Botimizga xush kelibsiz! Ayni vaqtda faqat videolarni yuklab bera olaman"))

bot.on('message', async ctx => {
    try {
        ctx.replyWithHTML("Kuting...");
        const videoLink = await downloader(ctx.message.text);
        ctx.replyWithVideo(videoLink);
    } catch (error) {
        ctx.reply("Sorry, something went wrong.");
    }
})

bot.launch()
require("./global")

const mess = {
   wait: "*`𝐏𝐑𝐎𝐂𝐄𝐒𝐒𝐈𝐍𝐆 𝐀 𝐒𝐄𝐂....`*",
   success: "`𝐒𝐔𝐂𝐂𝐄𝐒𝐒𝐅𝐔𝐋`",
   on: "*`[ On Feature ]` - Already Active*", 
   off: "*`[ Off Feature ]` - It's Off *",
   query: {
       text: "`𝐈𝐍𝐏𝐔𝐓 𝐓𝐄𝐗𝐓?`",
       link: "<!> `Link Nya Mana Kak?`",
   },
   error: {
       error: "`𝐒𝐨𝐫𝐫𝐲,  𝐭𝐡𝐞 𝐟𝐞𝐚𝐭𝐮𝐫𝐞 𝐡𝐚𝐬 𝐞𝐫𝐫𝐨𝐫. 𝐏𝐥𝐞𝐚𝐬𝐞 𝐜𝐡𝐚𝐭 𝐰𝐢𝐭𝐡 𝐭𝐡𝐞 𝐁𝐨𝐭 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫 𝐬𝐨 𝐢𝐭 𝐜𝐚𝐧 𝐛𝐞 𝐟𝐢𝐱𝐞𝐝 𝐢𝐦𝐦𝐞𝐝𝐢𝐚𝐭𝐞𝐥𝐲.`",
   },
   only: {
       buyer: "`𝐎𝐧𝐥𝐲 𝐛𝐮𝐲𝐞𝐫𝐬 𝐜𝐚𝐧 𝐮𝐬𝐞 𝐭𝐡𝐢𝐬 𝐜𝐦𝐝`\n`𝐔𝐬𝐞 𝐭𝐡𝐞 𝐚𝐝𝐝𝐛𝐮𝐲𝐞𝐫 𝐜𝐦𝐝`",
       group: "`𝐓𝐡𝐢𝐬 𝐟𝐞𝐚𝐭𝐮𝐫𝐞 𝐜𝐚𝐧 𝐨𝐧𝐥𝐲 𝐛𝐞 𝐚𝐜𝐜𝐞𝐬𝐬𝐞𝐝 𝐰𝐢𝐭𝐡𝐢𝐧 𝐚 𝐠𝐫𝐨𝐮𝐩`",
       private: "`𝐓𝐡𝐢𝐬 𝐟𝐞𝐚𝐭𝐮𝐫𝐞 𝐜𝐚𝐧 𝐨𝐧𝐥𝐲 𝐛𝐞 𝐚𝐜𝐜𝐞𝐬𝐬𝐞𝐝 𝐢𝐧 𝐩𝐫𝐢𝐯𝐚𝐭𝐞 𝐜𝐡𝐚𝐭`",
       owner: "`𝐖𝐇𝐎 𝐀𝐑𝐄 𝐔 𝐇𝐔𝐇🤨?`",
       admin: "`𝐓𝐇𝐈𝐒 𝐅𝐄𝐀𝐓𝐔𝐑𝐄 𝐂𝐀𝐍 𝐎𝐍𝐋𝐘 𝐁𝐄 𝐀𝐂𝐂𝐄𝐒𝐒𝐄𝐃 𝐁𝐘 𝐀𝐃𝐌𝐈𝐍!!!`",
       badmin: "`𝐌𝐀𝐊𝐄 𝐁𝐎𝐓 𝐀𝐃𝐌𝐈𝐍 𝐓𝐎 𝐁𝐄 𝐀𝐁𝐋𝐄 𝐓𝐎 𝐔𝐒𝐄 𝐓𝐇𝐈𝐒`",
       premium: "`𝐓𝐇𝐈𝐒 𝐅𝐄𝐀𝐓𝐔𝐑𝐄 𝐈𝐒 𝐎𝐍𝐋𝐘 𝐅𝐎𝐑 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 𝐌𝐄𝐌𝐁𝐄𝐑𝐒`",
   }
}

global.mess = mess

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})

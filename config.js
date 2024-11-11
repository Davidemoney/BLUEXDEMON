require("./database/module")

//GLOBAL PAYMENT
global.storename = "𝔻𝕆ℕ 𝕋𝔼ℂℍ 𝕀ℕℂ"
global.dana = "256704376077"
global.qris = false


// GLOBAL SETTING
global.owner = "256704376077"
global.namabot = "*𝐁𝐋𝐔𝐄𝐃𝐄𝐌𝐎𝐍-𝐕𝟑*"
global.nomorbot = "256704376077"
global.namacreator = "*𝔻𝕆ℕ 𝕋𝔼ℂℍ 𝕀ℕℂ* 👾"
global.linkyt = false
global.autoJoin = false
global.antilink = false
global.versisc = '3.1'

// DELAY JPM
global.delayjpm = 5500

//GLOBAL THUMB
global.codeInvite = ""
global.imageurl = 'https://l.top4top.io/p_32188bbq00.jpg'
global.isLink = 'https://whatsapp.com/channel/0029VajvAYL7YScvdKu2dA1r'
global.packname = "𝔻𝕆ℕ 𝕋𝔼ℂℍ 𝕀ℕℂ"
global.author = "ＢＬＵＥ ＤＥＭＯＮ"
global.jumlah = "5"

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
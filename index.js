//════════════════════════════//
//Hello Friends Its Me Cyberxkid
//Thanks For All For The Support
//If you Take This Code Give Credits @Cyberxkid,@ALEXA
//════════════════════════════//
//Given The Creadits To CYBERXKID For The Script
//✍ ⚞𝑹𝒆𝒅𝒊𝒕𝒆𝒅 𝑩𝒚 𝑪𝒚𝒃𝒆𝒓𝒙𝒌𝒊𝒅⚟
//════════════════════════════//

require("./config.js")
const { default: AlexaQueenIncConnect, useSingleFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto } = require("@adiwajshing/baileys")
const { state, saveState } = useSingleFileAuthState(`./${sessionName}.json`)
const pino = require('pino')
const fs = require('fs')
const chalk = require('chalk')
const FileType = require('file-type')
const path = require('path')
const CFonts = require('cfonts');
const { exec, spawn, execSync } = require("child_process")
const moment = require('moment-timezone')
const PhoneNumber = require('awesome-phonenumber')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep } = require('./lib/myfunc')
const figlet = require('figlet')
const {
    color
} = require('./lib/color')
//require("http").createServer((_, res) => res.end("Hello World!")).listen(8080)

const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })

async function startAlexaQueenInc() {
console.log(color(figlet.textSync('ALEXA-QUEEN-V4', {
		font: 'Pagga',
		horizontalLayout: 'default',
		vertivalLayout: 'default',
	    width: 80,
		whitespaceBreak: true
        }), 'yellow'))
console.log(color('\n YT CHANNEL: Nop ','silver'))
console.log(color('GITHUB: CYBERXKID ','silver'))
console.log(color('WA NUMBER: +27686881509 ','silver'))
console.log(color('  𝑨𝒍𝒆𝒙𝒂 𝑸𝒖𝒆𝒆𝒏 𝑴𝑫 2022','mediumseagreen'))
    console.log(color('🌝','red'), color('I Wrote This Script By Myself!', 'yellow'))
    console.log(color('🌝','red'), color('Source Code Version: 3.0', 'aqua'))
    console.log(color('🌝','red'), color('Bug? Error? Suggestion? Talk to developer:', 'aqua'))
    console.log(color('🌝', 'cyan'), color('https://wa.me/917561823024'))
    console.log(color('🌝', 'cyan'), color('𝑨𝒍𝒆𝒙𝒂 𝑸𝒖𝒆𝒆𝒏 𝑴𝑫 𝑰𝒔 𝑶𝒏𝒍𝒊𝒏𝒆...', 'pink'))
    console.log(color('🌝', 'cyan'), color('Welcome Back Owner! Hope You Doing Well~', 'magenta'))
    console.log(color('🌝','red'), color('𝑻𝒉𝒂𝒏𝒌𝒔 𝑭𝒐𝒓 𝑼𝒔𝒊𝒏𝒈 𝑨𝒍𝒆𝒙𝒂 𝑸𝒖𝒆𝒆𝒏 𝑴𝑫', 'white'))
    let { version, isLatest } = await fetchLatestBaileysVersion()
    const AlexaQueenInc = AlexaQueenIncConnect({
        logger: pino({ level: 'silent' }),
        printQRInTerminal: true,
        browser: ['Subscribe Alexa','Safari','1.0.0'],
        auth: state,
        version
    })
    
store.bind(AlexaQueenInc.ev)

    // anticall auto block
    AlexaQueenInc.ws.on('CB:call', async (json) => {
    const callerId = json.content[0].attrs['call-creator']
    if (json.content[0].tag == 'offer') {
    let pa7rick = await AlexaQueenInc.sendContact(callerId, global.owner)
    AlexaQueenInc.sendMessage(callerId, { text: `𝑨𝒖𝒕𝒐𝒎𝒂𝒕𝒊𝒄 𝑩𝒍𝒐𝒄𝒌 𝑺𝒚𝒔𝒕𝒆𝒎!\n𝑫𝒐𝒏'𝒕 𝑪𝒂𝒍𝒍 𝑩𝒐𝒕!\n𝑷𝒍𝒆𝒂𝒔𝒆 𝑨𝒔𝒌 𝑶𝒓 𝑪𝒐𝒏𝒕𝒂𝒄𝒕 𝑻𝒉𝒆 𝑶𝒘𝒏𝒆𝒓 𝑻𝒐 𝑼𝒏𝒃𝒍𝒐𝒄𝒌 𝒀𝒐𝒖!`}, { quoted : pa7rick })
    await sleep(8000)
    await AlexaQueenInc.updateBlockStatus(callerId, "block")
    }
    })

AlexaQueenInc.ev.on('messages.upsert', async chatUpdate => {
try {
mek = chatUpdate.messages[0]
if (!mek.message) return
mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
if (mek.key && mek.key.remoteJid === 'status@broadcast') return
if (!AlexaQueenInc.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
m = smsg(AlexaQueenInc, mek, store)
require("./CYBERXKIDALEXA4")(AlexaQueenInc, m, chatUpdate, store)
} catch (err) {
console.log(err)
}
})
//GRUP UPDATE
AlexaQueenInc.ev.on('groups.update', async pea => {
       //console.log(pea)
    // Get Profile Picture Group
       try {
       ppgc = await AlexaQueenInc.profilePictureUrl(pea[0].id, 'image')
       } catch {
       ppgc = 'https://te.legra.ph/file/cc38aa17d43d50974e178.jpg'
       }
       let wm_fatih = { url : ppgc }
       if (pea[0].announce == true) {
       AlexaQueenInc.send5ButImg(pea[0].id, `「 𝑮𝒓𝒐𝒖𝒑 𝑺𝒆𝒕𝒕𝒊𝒏𝒈𝒔 𝑪𝒉𝒂𝒏𝒈𝒆𝒅 」\n\n𝑻𝒉𝒆 𝒈𝒓𝒐𝒖𝒑 𝒉𝒂𝒔 𝒃𝒆𝒆𝒏 𝒄𝒍𝒐𝒔𝒆𝒅 𝒃𝒚 𝒂𝒅𝒎𝒊𝒏, 𝑵𝒐𝒘 𝒐𝒏𝒍𝒚 𝒂𝒅𝒎𝒊𝒏 𝒄𝒂𝒏 𝒔𝒆𝒏𝒅 𝒎𝒆𝒔𝒔𝒂𝒈𝒆𝒔 !`, `${botname}`, wm_fatih, [])
       } else if(pea[0].announce == false) {
       AlexaQueenInc.send5ButImg(pea[0].id, `「 𝑮𝒓𝒐𝒖𝒑 𝑺𝒆𝒕𝒕𝒊𝒏𝒈𝒔 𝑪𝒉𝒂𝒏𝒈𝒆𝒅 」\n\n𝑻𝒉𝒆 𝒈𝒓𝒐𝒖𝒑 𝒉𝒂𝒔 𝒃𝒆𝒆𝒏 𝒐𝒑𝒆𝒏𝒆𝒅 𝒃𝒚 𝒂𝒅𝒎𝒊𝒏, 𝑵𝒐𝒘 𝒑𝒂𝒓𝒕𝒊𝒄𝒊𝒑𝒂𝒏𝒕𝒔 𝒄𝒂𝒏 𝒔𝒆𝒏𝒅 𝒎𝒆𝒔𝒔𝒂𝒈𝒆𝒔 !`, `${botname}`, wm_fatih, [])
       } else if (pea[0].restrict == true) {
       AlexaQueenInc.send5ButImg(pea[0].id, `「 𝑮𝒓𝒐𝒖𝒑 𝑺𝒆𝒕𝒕𝒊𝒏𝒈𝒔 𝑪𝒉𝒂𝒏𝒈𝒆𝒅 」\n\n𝑮𝒓𝒐𝒖𝒑 𝒊𝒏𝒇𝒐 𝒉𝒂𝒔 𝒃𝒆𝒆𝒏 𝒓𝒆𝒔𝒕𝒓𝒊𝒄𝒕𝒆𝒅, 𝑵𝒐𝒘 𝒐𝒏𝒍𝒚 𝒂𝒅𝒎𝒊𝒏 𝒄𝒂𝒏 𝒆𝒅𝒊𝒕 𝒈𝒓𝒐𝒖𝒑 𝒊𝒏𝒇𝒐 !`, `${botname}`, wm_fatih, [])
       } else if (pea[0].restrict == false) {
       AlexaQueenInc.send5ButImg(pea[0].id, `「 𝑮𝒓𝒐𝒖𝒑 𝑺𝒆𝒕𝒕𝒊𝒏𝒈𝒔 𝑪𝒉𝒂𝒏𝒈𝒆𝒅 」\n\n𝑮𝒓𝒐𝒖𝒑 𝒊𝒏𝒇𝒐 𝒉𝒂𝒔 𝒃𝒆𝒆𝒏 𝒐𝒑𝒆𝒏𝒆𝒅, 𝑵𝒐𝒘 𝒑𝒂𝒓𝒕𝒊𝒄𝒊𝒑𝒂𝒏𝒕𝒔 𝒄𝒂𝒏 𝒆𝒅𝒊𝒕 𝒈𝒓𝒐𝒖𝒑 𝒊𝒏𝒇𝒐 !`, `${botname}`, wm_fatih, [])
       } else {
       AlexaQueenInc.send5ButImg(pea[0].id, `「 𝑮𝒓𝒐𝒖𝒑 𝑺𝒆𝒕𝒕𝒊𝒏𝒈𝒔 𝑪𝒉𝒂𝒏𝒈𝒆𝒅 」\n\n𝑮𝒓𝒐𝒖𝒑 𝑺𝒖𝒃𝒋𝒆𝒄𝒕 𝒉𝒂𝒔 𝒃𝒆𝒆𝒏 𝒄𝒉𝒂𝒏𝒈𝒆𝒅 𝒕𝒐 *${pea[0].subject}*`, `${botname}`, wm_fatih, [])
     }
    })

//randoming function
function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}
//document randomizer
let documents = [doc1,doc2,doc3,doc4,doc5,doc6]
let docs = pickRandom(documents)

AlexaQueenInc.ev.on('group-participants.update', async (anu) => {
        console.log(anu)
        //if (!wlcm.includes(anu.id)) return //remove forwad slashes to make it welcome on off
        try {
            let metadata = await AlexaQueenInc.groupMetadata(anu.id)
            let participants = anu.participants
            for (let num of participants) {
                // Get Profile Picture User
                try {
                    ppuser = await AlexaQueenInc.profilePictureUrl(num, 'image')
                } catch {
                    ppuser = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                }

                // Get Profile Picture Group
                try {
                    ppgroup = await AlexaQueenInc.profilePictureUrl(anu.id, 'image')
                } catch {
                    ppgroup = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                }

                if (anu.action == 'add') {
                const buffer = await getBuffer(ppuser)
                let AlexaName = num
                const xtime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
	            const xdate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
	            const xmembers = metadata.participants.length
                let unicorndoc = {key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "27686881509-1604595598@g.us"}, "message": {orderMessage: {itemCount: 9999999,status: 200, thumbnail: buffer, surface: 200, message: `${metadata.subject}`, orderTitle: 'alexa', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
                alexabody = `┌─♬
│「 𝑯𝒆𝒍𝒍𝒐❤️ 」
└┬♬ 「 @${alexaName.split("@")[0]}  」
   │❏  𝑾𝒆𝒍𝒄𝒐𝒎𝒆 𝑻𝒐 
   │⚘  ${metadata.subject}
   │❏  𝑴𝒆𝒎𝒃𝒆𝒓 : 
   │⚘ ${xmembers}th
   │❏  𝑱𝒐𝒊𝒏𝒆𝒅 : 
   │⚘ ${xtime}
   │❏ 𝑻𝒉𝒂𝒏𝒌𝒔 𝑭𝒐𝒓 𝑱𝒐𝒊𝒏 𝑻𝒉𝒆 𝑮𝒓𝒐𝒖𝒑🧚‍♂️
   │    ⚚𝑨𝒍𝒆𝒙𝒂 𝑸𝒖𝒆𝒆𝒏 𝑴𝑫     
   └───────────────┈❦`
   //if you copy the code value,
   //dont forget to put my name(Alexa) as credit
   //you fail to put, i sue you for sure!
let buttons = [
{buttonId: `wkwwk`, buttonText: {displayText: '𝑻𝒉𝒂𝒏𝒌𝒔😌'}, type: 1}
]
let buttonMessage = {
document: fs.readFileSync('./AlexaMedia/theme/alexa.xlsx'),
mimetype: docs,
jpegThumbnail:buffer,
mentions: [num],
fileName: `${metadata.subject}`,
fileLength: 7777777777,
caption: xeonbody,
footer: `${botname}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: `ᴄʏʙᴇʀxᴋɪᴅ ᴀʟᴇxᴀ ᴍᴅ`,
body: `Don't forget to read group description`,
mediaType:2,
thumbnail: buffer,
sourceUrl: `${websitex}`,
mediaUrl: `${websitex}`
}}
}
AlexaQueenInc.sendMessage(anu.id, buttonMessage, {quoted:unicorndoc})
                } else if (anu.action == 'remove') {
                	const buffer = await getBuffer(ppuser)
                    const alexatime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
	                const alexadate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
                	let alexaName = num
                    const alexanmembers = metadata.participants.length
                    let unicorndoc = {key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "27686881509-1604595598@g.us"}, "message": {orderMessage: {itemCount: 9999999,status: 200, thumbnail: buffer, surface: 200, message: `${metadata.subject}`, orderTitle: 'alexa', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
                    alexabody = `┌─♬
│「 𝑮𝒐𝒐𝒅 𝑩𝒚𝒆🥴 」
└┬♬ 「 @${alexaName.split("@")[0]}  」
   │❏  𝑳𝒆𝒇𝒕 
   │⚘ ${metadata.subject}
   │❏  𝑴𝒆𝒎𝒃𝒆𝒓 : 
   │⚘ ${alexamembers}th
   │❏  𝑻𝒊𝒎𝒆 : 
   │⚘ ${alexatime} 
   │    ⚚𝑨𝒍𝒆𝒙𝒂 𝑸𝒖𝒆𝒆𝒏 𝑴𝑫
   └───────────────┈❦`
      //if you copy the code value,
   //dont forget to put my name(Alexa) as credit
   //you fail to put, i sue you for sure!
let buttons = [
{buttonId: `wkwkwk`, buttonText: {displayText:'𝑮𝒆𝒕 𝑳𝒐𝒔𝒕🤧'}, type: 1}
]
let buttonMessage = {
document: fs.readFileSync('./AlexaMedia/theme/alexa.xlsx'),
mimetype: docs,
jpegThumbnail:buffer,
mentions: [num],
fileName: `${metadata.subject}`,
fileLength: 111111111111111111,
caption: alexabody,
footer: `${botname}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: `ᴄʏʙᴇʀxᴋɪᴅ ᴀʟᴇxᴀ ᴍᴅ`,
body: `Bye! my friend, take care.`,
mediaType:2,
thumbnail: buffer,
sourceUrl: `${websitex}`,
mediaUrl: `${websitex}`
}}
}
AlexaQueenInc.sendMessage(anu.id, buttonMessage, {quoted:unicorndoc})
                }
            }
        } catch (err) {
            console.log(err)
        }
    })
    
// Setting
    AlexaQueenInc.decodeJid = (jid) => {
        if (!jid) return jid
        if (/:\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {}
            return decode.user && decode.server && decode.user + '@' + decode.server || jid
        } else return jid
    }
    
    AlexaQueenInc.ev.on('contacts.update', update => {
        for (let contact of update) {
            let id = AlexaQueenInc.decodeJid(contact.id)
            if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
        }
    })

    AlexaQueenInc.getName = (jid, withoutContact  = false) => {
        id = AlexaQueenInc.decodeJid(jid)
        withoutContact = AlexaQueenInc.withoutContact || withoutContact 
        let v
        if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
            v = store.contacts[id] || {}
            if (!(v.name || v.subject)) v = AlexaQueenInc.groupMetadata(id) || {}
            resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
        })
        else v = id === '0@s.whatsapp.net' ? {
            id,
            name: 'WhatsApp'
        } : id === AlexaQueenInc.decodeJid(AlexaQueenInc.user.id) ?
            AlexaQueenInc.user :
            (store.contacts[id] || {})
            return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
    }
    
        AlexaQueenInc.sendContact = async (jid, kon, quoted = '', opts = {}) => {
	let list = []
	for (let i of kon) {
	    list.push({
	    	displayName: await AlexaQueenInc.getName(i + '@s.whatsapp.net'),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await AlexaQueenInc.getName(i + '@s.whatsapp.net')}\nFN:${global.ownername}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${global.ytname}\nitem2.X-ABLabel:YouTube\nitem3.URL:${global.socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${global.location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
    AlexaQueenInc.sendMessage(jid, { contacts: { displayName: `${list.length} Contact`, contacts: list }, ...opts }, { quoted })
    }
    
    AlexaQueenInc.setStatus = (status) => {
        AlexaQueenInc.query({
            tag: 'iq',
            attrs: {
                to: '@s.whatsapp.net',
                type: 'set',
                xmlns: 'status',
            },
            content: [{
                tag: 'status',
                attrs: {},
                content: Buffer.from(status, 'utf-8')
            }]
        })
        return status
    }
	
    AlexaQueenInc.public = true

    AlexaQueenInc.serializeM = (m) => smsg(AlexaQueenInc, m, store)

    AlexaQueenInc.ev.on('connection.update', async (update) => {
        const { connection, lastDisconnect } = update	    
        if (connection === 'close') {
        let reason = lastDisconnect.error ? lastDisconnect?.error?.output.statusCode : 0;
            if (reason === DisconnectReason.badSession) { console.log(`Bad Session File, Please Delete Session and Scan Again`); process.exit(); }
            else if (reason === DisconnectReason.connectionClosed) { console.log("Connection closed, reconnecting...."); startXeonBotInc(); }
            else if (reason === DisconnectReason.connectionLost) { console.log("Connection Lost from Server, reconnecting..."); startXeonBotInc(); }
            else if (reason === DisconnectReason.connectionReplaced) { console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First"); process.exit(); }
            else if (reason === DisconnectReason.loggedOut) { console.log(`Device Logged Out, Please Delete Session and Scan Again.`); process.exit(); }
            else if (reason === DisconnectReason.restartRequired) { console.log("Restart Required, Restarting..."); startXeonBotInc(); }
            else if (reason === DisconnectReason.timedOut) { console.log("Connection TimedOut, Reconnecting..."); startXeonBotInc(); }
            else { console.log(`Unknown DisconnectReason: ${reason}|${connection}`) }
        }
        console.log('Connected...', update)
    })

    AlexaQueenInc.ev.on('creds.update', saveState)

    // Add Other
   
    /** Send Button 5 Image
     *
     * @param {*} jid
     * @param {*} text
     * @param {*} footer
     * @param {*} image
     * @param [*] button
     * @param {*} options
     * @returns
     */
    AlexaQueenInc.send5ButImg = async (jid , text = '' , footer = '', img, but = [], thumb, options = {}) =>{
        let message = await prepareWAMessageMedia({ image: img, jpegThumbnail:thumb }, { upload: AlexaQueenInc.waUploadToServer })
        var template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
        templateMessage: {
        hydratedTemplate: {
        imageMessage: message.imageMessage,
               "hydratedContentText": text,
               "hydratedFooterText": footer,
               "hydratedButtons": but
            }
            }
            }), options)
            AlexaQueenInc.relayMessage(jid, template.message, { messageId: template.key.id })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} buttons 
     * @param {*} caption 
     * @param {*} footer 
     * @param {*} quoted 
     * @param {*} options 
     */
    AlexaQueenInc.sendButtonText = (jid, buttons = [], text, footer, quoted = '', options = {}) => {
        let buttonMessage = {
            text,
            footer,
            buttons,
            headerType: 2,
            ...options
        }
        AlexaQueenInc.sendMessage(jid, buttonMessage, { quoted, ...options })
    }
    
    /**
     * 
     * @param {*} jid 
     * @param {*} text 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    AlexaQueenInc.sendText = (jid, text, quoted = '', options) => AlexaQueenInc.sendMessage(jid, { text: text, ...options }, { quoted })

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} caption 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    AlexaQueenInc.sendImage = async (jid, path, caption = '', quoted = '', options) => {
	let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await AlexaQueenInc.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} caption 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    AlexaQueenInc.sendVideo = async (jid, path, caption = '', quoted = '', gif = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await AlexaQueenInc.sendMessage(jid, { video: buffer, caption: caption, gifPlayback: gif, ...options }, { quoted })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} mime 
     * @param {*} options 
     * @returns 
     */
    AlexaQueenInc.sendAudio = async (jid, path, quoted = '', ptt = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await AlexaQueenInc.sendMessage(jid, { audio: buffer, ptt: ptt, ...options }, { quoted })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} text 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    AlexaQueenInc.sendTextWithMentions = async (jid, text, quoted, options = {}) => AlexaQueenInc.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    AlexaQueenInc.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifImg(buff, options)
        } else {
            buffer = await imageToWebp(buff)
        }

        await AlexaQueenInc.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    AlexaQueenInc.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifVid(buff, options)
        } else {
            buffer = await videoToWebp(buff)
        }

        await AlexaQueenInc.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }
   AlexaQueenInc.sendMedia = async (jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
        let types = await AlexaQueenInc.getFile(path, true)
           let { mime, ext, res, data, filename } = types
           if (res && res.status !== 200 || file.length <= 65536) {
               try { throw { json: JSON.parse(file.toString()) } }
               catch (e) { if (e.json) throw e.json }
           }
       let type = '', mimetype = mime, pathFile = filename
       if (options.asDocument) type = 'document'
       if (options.asSticker || /webp/.test(mime)) {
        let { writeExif } = require('./lib/exif')
        let media = { mimetype: mime, data }
        pathFile = await writeExif(media, { packname: options.packname ? options.packname : global.packname, author: options.author ? options.author : global.author, categories: options.categories ? options.categories : [] })
        await fs.promises.unlink(filename)
        type = 'sticker'
        mimetype = 'image/webp'
        }
       else if (/image/.test(mime)) type = 'image'
       else if (/video/.test(mime)) type = 'video'
       else if (/audio/.test(mime)) type = 'audio'
       else type = 'document'
       await AlexaQueenInc.sendMessage(jid, { [type]: { url: pathFile }, caption, mimetype, fileName, ...options }, { quoted, ...options })
       return fs.promises.unlink(pathFile)
       }
    /**
     * 
     * @param {*} message 
     * @param {*} filename 
     * @param {*} attachExtension 
     * @returns 
     */
    AlexaQueenInc.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
        let quoted = message.msg ? message.msg : message
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(quoted, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }
	let type = await FileType.fromBuffer(buffer)
        trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
        // save to file
        await fs.writeFileSync(trueFileName, buffer)
        return trueFileName
    }

    AlexaQueenInc.downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(message, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
	}
        
	return buffer
     } 
    
    /**
     * 
     * @param {*} jid 
     * @param {*} message 
     * @param {*} forceForward 
     * @param {*} options 
     * @returns 
     */
    AlexaQueenInc.copyNForward = async (jid, message, forceForward = false, options = {}) => {
        let vtype
		if (options.readViewOnce) {
			message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
			vtype = Object.keys(message.message.viewOnceMessage.message)[0]
			delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
			delete message.message.viewOnceMessage.message[vtype].viewOnce
			message.message = {
				...message.message.viewOnceMessage.message
			}
		}

        let mtype = Object.keys(message.message)[0]
        let content = await generateForwardMessageContent(message, forceForward)
        let ctype = Object.keys(content)[0]
		let context = {}
        if (mtype != "conversation") context = message.message[mtype].contextInfo
        content[ctype].contextInfo = {
            ...context,
            ...content[ctype].contextInfo
        }
        const waMessage = await generateWAMessageFromContent(jid, content, options ? {
            ...content[ctype],
            ...options,
            ...(options.contextInfo ? {
                contextInfo: {
                    ...content[ctype].contextInfo,
                    ...options.contextInfo
                }
            } : {})
        } : {})
        await AlexaQueenInc.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
        return waMessage
    }

//sendlistmsg by xeon
        AlexaQueenInc.sendListMsg = (jid, text = '', footer = '', title = '' , butText = '', sects = [], quoted) => {
        let sections = sects
        var listMes = {
        text: text,
        footer: footer,
        title: title,
        buttonText: butText,
        sections
        }
        AlexaQueenInc.sendMessage(jid, listMes, { quoted: quoted })
        }
        
    AlexaQueenInc.cMod = (jid, copy, text = '', sender = AlexaQueenInc.user.id, options = {}) => {
        //let copy = message.toJSON()
		let mtype = Object.keys(copy.message)[0]
		let isEphemeral = mtype === 'ephemeralMessage'
        if (isEphemeral) {
            mtype = Object.keys(copy.message.ephemeralMessage.message)[0]
        }
        let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
		let content = msg[mtype]
        if (typeof content === 'string') msg[mtype] = text || content
		else if (content.caption) content.caption = text || content.caption
		else if (content.text) content.text = text || content.text
		if (typeof content !== 'string') msg[mtype] = {
			...content,
			...options
        }
        if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
		else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
		copy.key.remoteJid = jid
		copy.key.fromMe = sender === AlexaQueenInc.user.id

        return proto.WebMessageInfo.fromObject(copy)
    }


    /**
     * 
     * @param {*} path 
     * @returns 
     */
    AlexaQueenInc.getFile = async (PATH, save) => {
        let res
        let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
        //if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
        let type = await FileType.fromBuffer(data) || {
            mime: 'application/octet-stream',
            ext: '.bin'
        }
        filename = path.join(__filename, '../src/' + new Date * 1 + '.' + type.ext)
        if (data && save) fs.promises.writeFile(filename, data)
        return {
            res,
            filename,
	    size: await getSizeMedia(data),
            ...type,
            data
        }

    }
    //send5butgif by xeon
        AlexaQueenInc.send5ButGif = async (jid , text = '' , footer = '', gif, but = [], options = {}) =>{
        let message = await prepareWAMessageMedia({ video: gif, gifPlayback: true }, { upload: AlexaQueenInc.waUploadToServer })
        var template = generateWAMessageFromContent(jid, proto.Message.fromObject({
        templateMessage: {
        hydratedTemplate: {
        videoMessage: message.videoMessage,
               "hydratedContentText": text,
               "hydratedFooterText": footer,
               "hydratedButtons": but
            }
            }
            }), options)
            AlexaQueenInc.relayMessage(jid, template.message, { messageId: template.key.id })
    }
    //send5butvid by xeon
        AlexaQueenInc.send5ButVid = async (jid , text = '' , footer = '', vid, but = [], options = {}) =>{
        let message = await prepareWAMessageMedia({ video: vid }, { upload: AlexaQueenInc.waUploadToServer })
        var template = generateWAMessageFromContent(jid, proto.Message.fromObject({
        templateMessage: {
        hydratedTemplate: {
        videoMessage: message.videoMessage,
               "hydratedContentText": text,
               "hydratedFooterText": footer,
               "hydratedButtons": but
            }
            }
            }), options)
            AlexaQueenInc.relayMessage(jid, template.message, { messageId: template.key.id })
    }
    //send5butmsg
            AlexaQueenInc.send5ButMsg = (jid, text = '' , footer = '', but = []) =>{
        let templateButtons = but
        var templateMessage = {
        text: text,
        footer: footer,
        templateButtons: templateButtons
        }
        AlexaQueenInc.sendMessage(jid, templateMessage)
        }
        
    AlexaQueenInc.sendFile = async(jid, PATH, fileName, quoted = {}, options = {}) => {
        let types = await AlexaQueenInc.getFile(PATH, true)
        let { filename, size, ext, mime, data } = types
        let type = '', mimetype = mime, pathFile = filename
        if (options.asDocument) type = 'document'
        if (options.asSticker || /webp/.test(mime)) {
            let { writeExif } = require('./lib/sticker.js')
            let media = { mimetype: mime, data }
            pathFile = await writeExif(media, { packname: global.packname, author: global.packname, categories: options.categories ? options.categories : [] })
            await fs.promises.unlink(filename)
            type = 'sticker'
            mimetype = 'image/webp'
        }
        else if (/image/.test(mime)) type = 'image'
        else if (/video/.test(mime)) type = 'video'
        else if (/audio/.test(mime)) type = 'audio'
        else type = 'document'
        await AlexaQueenInc.sendMessage(jid, { [type]: { url: pathFile }, mimetype, fileName, ...options }, { quoted, ...options })
        return fs.promises.unlink(pathFile)
    }
    AlexaQueenInc.parseMention = async(text) => {
        return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
    }

    return AlexaQueenInc
}

startAlexaQueenInc()


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`${__filename} Updated`))
	delete require.cache[file]
	require(file)
})

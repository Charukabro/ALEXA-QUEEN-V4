//════════════════════════════//
//If you want to recode, reupload
//or copy the codes/script,
//pls give credit
//no credit? i will take action immediately
//© 2022 Alexa Queen Inc. Alexa Queen MD
//Thank you to Lord Buddha, Family and Myself
//════════════════════════════//
//recode kar ke youtube pe upload kar rhe ya
//codes copy kar ke apne script me dal rhe
//hai to, description me alexa ka yt channel
// ka link paste kr dena as a cradit or github 
//repo me bhi tag kardena baki jo
//bhi karna hai apki marzi, thank you!🦄
//════════════════════════════//
//If you recode and uploading on your channel
//or copy pasting the codes in ur script, 
//i give permission to do as long as you
//put Xeons youtube channel link in the video
//description and tag me on githuh repo, 
//thank you🦄
//════════════════════════════//

const fs = require("fs")
const chalk = require("chalk")

//aumto functioner
global.autoTyping = true //auto tying in gc (true to on, false to off)
global.autoreadpmngc = true //auto reading in gc and pm (true to on, false to off)
global.autoReadGc = true //auto reading in gc (true to on, false to off)
global.autoReadAll = true // auto reading in all pchat gc and status (true to on, false to off)
global.autoRecord = true //auto recording (true to on, false to off)
global.available = true //auto available (true to on, false to off)

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.owner = ['94786178335'] //ur owner number
global.ownername = "۝⃟̥̩̩̩̥̩♥️𝒞𝐻𝒜𝓡𝓾۝⃟̥̩̩̩̥̩̥♥️"
global.ytname = "YT: 𝑨𝑳𝑬𝑿𝑨 𝑸𝑼𝑬𝑬𝑵" //ur yt chanel name
global.socialm = "GitHub: CYBERXKID" //ur github or insta name
global.location = "බඹරගස්තැන්න ,පල්ලෙබැද්ද" //ur location

//bot bombdy
global.botname = "🧚‍♂️𝑨𝑳𝑬𝑿𝑨 𝑸𝑼𝑬𝑬𝑵🧚‍♂️ 𝜧𝑫" //ur bot name
global.websitex = "https://youtube.com/channel/UtUbE-IlLa-MyR-0010" //ur website
global.vidmenu = { url: 'https://a.uguu.se/zlzQZvXH.mp4' } //gif and video menu
global.packname = "۝⃟̥̩̩̩̥̩̥͚̮❤𝐂𝐇ᴬ𝐑𝐔💍"
global.author = "玄ꪎ𝟕 ⛒ 𝐂𝒀𝐵𝜺𝐑𝐗𝐊𝐈𝐃 »͓̽"
global.themeemoji = "❏"
global.reactmoji = "🌝"
global.ownertag = ['94786178335'] //ur owner tag
global.ownernummenu = ['94786178335'] //ur owner number in menu and all
global.watermark = "🧚‍♂️𝚌𝚑𝚊𝚛𝚞 𝚔𝚒𝚗𝚐🧚‍♂️ 𝜧𝑫" //ur watermark
global.botscript = "https://github.com/CYBERXKID/ALEXA-QUEEN-V4"
global.linkz1 = "https://chat.whatsapp.com/KTcdEQw3SDk3s5A7dvJlDS"
global.linkz2 = "https://chat.whatsapp.com/KTcdEQw3SDk3s5A7dvJlDS"

//Bot theme media
global.thum = fs.readFileSync("./AlexaMedia/theme/cyberxkidpic.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./AlexaMedia/theme/cyberxkidpic.jpg") //ur logo pic
global.err4r = fs.readFileSync("./AlexaMedia/theme/cyberxkidpic.jpg") //ur error pic
global.thumb = fs.readFileSync("./AlexaMedia/theme/cyberxkidpic.jpg") //ur thumb pic

//database
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []

//omther
global.lolhuman = "KaysaS"
global.sessionName = "session"
global.antitags = true
global.prefa = ['','!','.','🧚‍♂️','❤️','💋']
global.mess = {
    success: '𝑫𝒐𝒏𝒆 ✓',
    admin: '𝑻𝒉𝒊𝒔 𝒇𝒆𝒂𝒕𝒖𝒓𝒆 𝒊𝒔 𝒐𝒏𝒍𝒚 𝒇𝒐𝒓 𝒂𝒅𝒎𝒊𝒏𝒔!',
    botAdmin: '𝑩𝒐𝒕 𝑴𝒖𝒔𝒕 𝑩𝒆 𝑨𝒅𝒎𝒊𝒏 𝑭𝒊𝒓𝒔𝒕!',
    owner: '𝑻𝒉𝒊𝒔 𝒇𝒆𝒂𝒕𝒖𝒓𝒆 𝒊𝒔 𝒐𝒏𝒍𝒚 𝒇𝒐𝒓 𝒐𝒘𝒏𝒆𝒓',
    group: '𝑻𝒉𝒊𝒔 𝒇𝒆𝒂𝒕𝒖𝒓𝒆 𝒊𝒔 𝒐𝒏𝒍𝒚 𝒇𝒐𝒓 𝒈𝒓𝒐𝒖𝒑𝒔!',
    private: '𝑻𝒉𝒊𝒔 𝒇𝒆𝒂𝒕𝒖𝒓𝒆 𝒊𝒔 𝒐𝒏𝒍𝒚 𝒇𝒐𝒓 𝒑𝒓𝒊𝒗𝒂𝒕𝒆 𝒄𝒉𝒂𝒕𝒔!',
    bot: '𝑻𝒉𝒊𝒔 𝒇𝒆𝒂𝒕𝒖𝒓𝒆 𝒊𝒔 𝒐𝒏𝒍𝒚 𝒇𝒐𝒓 𝒃𝒐𝒕',
    wait: '𝑰𝒏 𝒑𝒓𝒐𝒄𝒆𝒔𝒔...',
    linkm: '𝑾𝒉𝒆𝒓𝒆 𝒊𝒔 𝒕𝒉𝒆 𝒍𝒊𝒏𝒌?',
    error: '𝑬𝒓𝒓𝒐𝒓!',
    ban: '𝒀𝒐𝒖 𝒉𝒂𝒗𝒆 𝒃𝒆𝒆𝒏 𝒃𝒂𝒏𝒏𝒆𝒅 𝒃𝒚 𝒕𝒉𝒆 𝒐𝒘𝒏𝒆𝒓, 𝒊𝒇 𝒚𝒐𝒖 𝒘𝒂𝒏𝒕 𝒕𝒐 𝒃𝒆 𝒖𝒏𝒃𝒂𝒏𝒏𝒆𝒅, 𝒄𝒉𝒂𝒕 𝒐𝒘𝒏𝒆𝒓.',
    nsfw: '𝑻𝒉𝒆 𝒏𝒔𝒇𝒘 𝒇𝒆𝒂𝒕𝒖𝒓𝒆 𝒉𝒂𝒔 𝒏𝒐𝒕 𝒃𝒆𝒆𝒏 𝒂𝒄𝒕𝒊𝒗𝒂𝒕𝒆𝒅, 𝒑𝒍𝒆𝒂𝒔𝒆 𝒄𝒐𝒏𝒕𝒂𝒄𝒕 𝒕𝒉𝒆 𝒂𝒅𝒎𝒊𝒏 𝒕𝒐 𝒂𝒄𝒕𝒊𝒗𝒂𝒕𝒆',
    banChat: '𝑻𝒉𝒆 𝒃𝒐𝒕 𝒘𝒂𝒔 𝒃𝒂𝒏𝒏𝒆𝒅 𝒊𝒏 𝒕𝒉𝒊𝒔 𝒈𝒓𝒐𝒖𝒑, 𝒑𝒍𝒆𝒂𝒔𝒆 𝒄𝒐𝒏𝒕𝒂𝒄𝒕 𝒕𝒉𝒆 𝒐𝒘𝒏𝒆𝒓 𝒕𝒐 𝒖𝒏𝒃𝒂𝒏'
}
global.limitawal = {
    premium: "Infinity",
    free: 2,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 95,
   goldawal: 30,
   emeraldawal: 8,
   umpanawal: 10,
   potionawal: 5
}
global.limitawal = {
    rakyat: "Infinity",
    free: 100
}
// api website by xenz
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// key
global.APIKeys = {
	'https://zenzapis.xyz': 'Your Key',
}
//menu logo maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})

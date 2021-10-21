let PhoneNumber = require('awesome-phonenumber')
let handler = async (m, { conn }) => {
  let pp = './src/avatar_contact.png'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender

  try {
    pp = await conn.getProfilePicture(who)
  } catch (e) {

  } finally {
    let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
    let { name, lastclaim, registered, regTime, age } = global.DATABASE.data.users[who]
    let username = conn.getName(who)
    let str = `
   🎀💮𝕂𝕒𝕜𝕒𝕤𝕙𝕚 𝔹𝕠𝕥💮🎀\n
🎀💮ɴᴀᴍᴇ: ${username} ${registered ? '(' + name + ') ': ''}(@${who.replace(/@.+/, '')})${about ? '\n🎀💮ᴀʙᴏᴜᴛ: ' + about : ''}🎀💮\n
🎀💮ɴᴜᴍʙᴇʀ: ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}🎀💮\n
🎀💮ʟɪɴᴋ: https://wa.me/${who.split`@`[0]}${registered ? '\nAge: ' + age : ''}\n
🎀💮ʀᴇɢɪꜱᴛᴇʀᴇᴅ: ${registered ? '🎀Yes 🎀(' + new Date(regTime) + ')': '🎀No🎀'}${lastclaim > 0 ? '\n🎀💮ʟᴀꜱᴛ ᴄʟᴀɪᴍ: ' + new Date(lastclaim) : ''}🎀💮\n
💮🎀
`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'pp.jpg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['profile [@user]']
handler.tags = ['tools']
handler.command = /^profile$/i
module.exports = handler


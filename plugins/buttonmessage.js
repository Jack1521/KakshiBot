const {
  MessageType
} = require("@adiwajshing/baileys")
let PhoneNumber = require('awesome-phonenumber')
let handler = m => m
let {
  performance
} = require('perf_hooks')
let {
  sizeFormatter
} = require('human-readable')

handler.before = async (m, {
  isAdmin,
  isBotAdmin
}) => {
// send a owner no message!
  if (m.isBaileys && m.fromMe) return true
  if(m.mtype == "buttonsResponseMessage"){
    if(m.msg.selectedButtonId == "owner"){
        conn.sendContact(m.chat, '+919389379221', 'Kakashi', m)
     
  
  
 // send whoami msg!
        }else  if(m.msg.selectedButtonId == "whoami"){
        conn.reply(m.chat, '🎀💮𝙠𝙖𝙡𝙞🎀💮', m)
         // send ls msg!
        }else  if(m.msg.selectedButtonId == "ls"){
        conn.reply(m.chat, '', m)
 // send pwd msg!
        }else  if(m.msg.selectedButtonId == "pwd"){
        conn.reply(m.chat, '🎀💮/𝕂𝕒𝕜𝕒𝕤𝕙𝕚🎀💮', m)
        


        // send info msg!
        }else  if(m.msg.selectedButtonId == "info"){
        conn.reply(m.chat, '🎀💮𝕋𝕙𝕚𝕤 𝔹𝕠𝕥 𝕚𝕤 𝕞𝕒𝕕𝕖 𝕓𝕪 𝕂𝕒𝕜𝕒𝕤𝕙𝕚.\n💮ɪᴛ ɪꜱ ᴜɴᴅᴇʀ-ᴄᴏɴꜱᴛʀᴜᴄᴛɪᴏɴ ʏᴇᴛ.\n💮ᴄʀᴇᴅɪᴛ ɢᴏᴇꜱ ᴛᴏ ɴᴀʀᴜᴛᴏᴍᴀ ʙᴏᴛ ꜰɪʟᴇꜱ ᴀɴᴅ 𝕂𝕒𝕜𝕒𝕤𝕙𝕚.\n🎀💮', m)
        // send a donations message!
          }else  if(m.msg.selectedButtonId == "donations"){
        conn.reply(m.chat,'🎀💮ᴅᴏɴᴀᴛɪᴏɴꜱ ᴀʀᴇ ɴᴇᴇᴅᴇᴅ ᴛᴏ ᴜᴘɢʀᴀᴅᴇ ʙᴏᴛ ꜱᴇʀᴠᴇʀꜱ ᴀɴᴅ ᴛᴏ ᴇɴᴄᴏᴜʀᴀɢᴇ ᴄᴏᴍᴍᴜɴɪᴛʏ\n💮ꜰᴏʀ ᴅᴏɴᴀᴛɪᴏɴꜱ ᴍᴇꜱꜱᴀɢᴇ ᴏᴡɴᴇʀ : wa.me/+919389379221\n🎀💮', m)
        // send a bittentechcourses1 message!
          }else  if(m.msg.selectedButtonId == "rules"){
        conn.reply(m.chat,'🎀💮1) ᴅᴏɴᴛ ꜱᴘᴀᴍ ɪɴ ʙᴏᴛ ɪɴʙᴏx🎀💮\n🎀💮2)ᴛᴀᴋᴇ 1 ᴍɪɴᴜᴛᴇ ʙʀᴇᴀᴋ ʙᴇꜰᴏʀᴇ ᴜꜱɪɴɢ ɴᴇxᴛ ᴄᴏᴍᴍᴀɴᴅ🎀💮\n🎀💮3)ᴜꜱɪɴɢ ᴄᴏᴍᴍᴀɴᴅꜱ ᴄᴏɴᴛɪɴᴜᴏᴜꜱʟʏ ᴡɪᴛʜᴏᴜᴛ ʙʀᴇᴀᴋ ᴄᴀᴜꜱᴇ ᴇʀʀᴏʀꜱ ɪɴ ʙᴏᴛ ᴀɴᴅ ᴍᴀʏ ᴅᴇꜱᴛʀᴏʏ ʙᴏᴛ 🎀💮\n🎀💮4)ʏᴏᴜ ᴄᴀɴ ᴜꜱᴇ ʙᴏᴛ ɪɴ ɪɴʙᴏx ᴛᴏᴏ🎀💮\n', m)
        // send a wiresharks course message!
          }else  if(m.msg.selectedButtonId == "support"){
        conn.reply(m.chat,'🎀💮 𝕁𝕠𝕚𝕟 𝕊𝕦𝕡𝕡𝕠𝕣𝕥 𝔾𝕣𝕠𝕦𝕡 :\n https://chat.whatsapp.com/KK2nN4ZLKzrLOPjr7QRCIs', m)
         // send a hackingcourses message!
        }else  if (m.msg.selectedButtonId == "antivulgarenable") {
          console.log(m.isGroup)
          if (m.isGroup == false) {
              conn.reply(m.chat, "This command can only be used in groups!")
          } else if (m.isGroup == true) {
              if (isAdmin || !isBotAdmin) {
                  let chat = global.DATABASE._data.chats[m.chat]
                  chat.antiVulgar = true;
                  conn.reply(m.chat, "Successfully enabled antivulgar for this group")
              } else {
                  conn.reply(m.chat, "This command is only for groups *Admin* !")
              }
          }
        } else if (m.msg.selectedButtonId == "speed") {
          conn.reply(m.chat, "speed")

      } else if (m.msg.selectedButtonId == "antivulgardisable") {
          console.log(m.isGroup)
          if (m.isGroup == false) {
              conn.reply(m.chat, "This command can only be used in groups!")
          } else if (m.isGroup == true) {
              if (isAdmin || !isBotAdmin) {
                  let chat = global.DATABASE._data.chats[m.chat]
                  chat.antiVulgar = false;
                  conn.reply(m.chat, "Successfully disabled antivulgar for this group")
              } else {
                  conn.reply(m.chat, "This command is only for groups *Admin* !")
              }
          }

      } else if (m.msg.selectedButtonId == "antilinkenable") {
          console.log(m.isGroup)
          if (m.isGroup == false) {
              conn.reply(m.chat, "This command can only be used in groups!")
          } else if (m.isGroup == true) {
              if (isAdmin || !isBotAdmin) {
                  let chat = global.DATABASE._data.chats[m.chat]
                  chat.antiLink = true;
                  conn.reply(m.chat, "Successfully enabled antilink for this group")
              } else {
                  conn.reply(m.chat, "This command is only for groups *Admin* !")
              }
          }

      } else if (m.msg.selectedButtonId == "antilinkdisable") {
          console.log(m.isGroup)
          if (m.isGroup == false) {
              conn.reply(m.chat, "This command can only be used in groups!")
          } else if (m.isGroup == true) {
              if (isAdmin || !isBotAdmin) {
                  let chat = global.DATABASE._data.chats[m.chat]
                  chat.antiLink = false;
                  conn.reply(m.chat, "Successfully disabled antilink for this group")
              } else {
                  conn.reply(m.chat, "This command is only for groups *Admin* !")
              }
          }

      } else if (m.msg.selectedButtonId == "antistickerenable") {
          console.log(m.isGroup)
          if (m.isGroup == false) {
              conn.reply(m.chat, "This command can only be used in groups!")
          } else if (m.isGroup == true) {
              if (isAdmin || !isBotAdmin) {
                  let chat = global.DATABASE._data.chats[m.chat]
                  chat.antiSticker = true;
                  conn.reply(m.chat, "Successfully enabled Antisticker for this group")
              } else {
                  conn.reply(m.chat, "This command is only for groups *Admin* !")
              }
          }

      } else if (m.msg.selectedButtonId == "antistickerdisable") {
          console.log(m.isGroup)
          if (m.isGroup == false) {
              conn.reply(m.chat, "This command can only be used in groups!")
          } else if (m.isGroup == true) {
              if (isAdmin || !isBotAdmin) {
                  let chat = global.DATABASE._data.chats[m.chat]
                  chat.antiSticker = false;
                  conn.reply(m.chat, "Successfully disabled antisticker for this group")
              } else {
                  conn.reply(m.chat, "This command is only for groups *Admin* !")
              }
          }

      } else if (m.msg.selectedButtonId == "antigrouplinkenable") {
          console.log(m.isGroup)
          if (m.isGroup == false) {
              conn.reply(m.chat, "This command can only be used in groups!")
          } else if (m.isGroup == true) {
              if (isAdmin || !isBotAdmin) {
                  let chat = global.DATABASE._data.chats[m.chat]
                  chat.antiGroupLink = true;
                  conn.reply(m.chat, "Successfully enabled antigrouplink for this group")
              } else {
                  conn.reply(m.chat, "This command is only for groups *Admin* !")
              }
          }

      } else if (m.msg.selectedButtonId == "antigrouplinkdisable") {
          console.log(m.isGroup)
          if (m.isGroup == false) {
              conn.reply(m.chat, "This command can only be used in groups!")
          } else if (m.isGroup == true) {
              if (isAdmin || !isBotAdmin) {
                  let chat = global.DATABASE._data.chats[m.chat]
                  chat.antiGroupLink = false;
                  conn.reply(m.chat, "Successfully disabled antigrouplink for this group")
              } else {
                  conn.reply(m.chat, "This command is only for groups *Admin* !")
              }
          }
        // send a profile message!
      }else if(m.msg.selectedButtonId == "profile"){
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
     🎀💮𝕂𝕒𝕜𝕒𝕤𝕙𝕚💮🎀\n
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
  }
}

module.exports = handler

function handler(m) {
  this.reply(m.chat, '\n🎀💮1) ᴅᴏɴᴛ ꜱᴘᴀᴍ ɪɴ ʙᴏᴛ ɪɴʙᴏx🎀💮\n🎀💮2)ᴛᴀᴋᴇ 1 ᴍɪɴᴜᴛᴇ ʙʀᴇᴀᴋ ʙᴇꜰᴏʀᴇ ᴜꜱɪɴɢ ɴᴇxᴛ ᴄᴏᴍᴍᴀɴᴅ🎀💮\n🎀💮3)ᴜꜱɪɴɢ ᴄᴏᴍᴍᴀɴᴅꜱ ᴄᴏɴᴛɪɴᴜᴏᴜꜱʟʏ ᴡɪᴛʜᴏᴜᴛ ʙʀᴇᴀᴋ ᴄᴀᴜꜱᴇ ᴇʀʀᴏʀꜱ ɪɴ ʙᴏᴛ ᴀɴᴅ ᴍᴀʏ ᴅᴇꜱᴛʀᴏʏ ʙᴏᴛ 🎀💮\n🎀💮4)ʏᴏᴜ ᴄᴀɴ ᴜꜱᴇ ʙᴏᴛ ɪɴ ɪɴʙᴏx ᴛᴏᴏ🎀💮\n', m)
}
handler.help = ['rules']
handler.tags = ['info']

handler.command = /^(Rules|rules)$/i

module.exports = handler

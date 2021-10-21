function handler(m) {
  this.reply(m.chat, '🎀💮𝕁𝕠𝕚𝕟 𝕠𝕦𝕣 𝕊𝕦𝕡𝕡𝕠𝕣𝕥 𝔾𝕣𝕠𝕦𝕡 : https://chat.whatsapp.com/KK2nN4ZLKzrLOPjr7QRCIs🎀💮', m)
}
handler.help = ['support']
handler.tags = ['info']

handler.command = /^(Support|support)$/i

module.exports = handler

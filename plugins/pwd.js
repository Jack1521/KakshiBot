function handler(m) {
  this.reply(m.chat, '🎀💮𝕂𝕒𝕜𝕒𝕤𝕙𝕚 𝔹𝕠𝕥🎀💮', m)
}
handler.help = ['pwd']
handler.tags = ['info']

handler.command = /^(pwd)$/i

module.exports = handler

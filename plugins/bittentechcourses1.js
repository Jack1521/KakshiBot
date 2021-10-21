function handler(m) {
  this.reply(m.chat, '', m)
}
handler.help = []
handler.tags = []

handler.command = /^(|)$/i

module.exports = handler

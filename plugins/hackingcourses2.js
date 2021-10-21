function handler(m) {
  this.reply(m.chat, '', m)
}
handler.help = ['']
handler.tags = ['info']

handler.command = /^(|)$/i

module.exports = handler

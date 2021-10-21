function handler(m) {
  this.reply(m.chat, '', m)
}
handler.help = ['Cisco ISE']
handler.tags = ['info']

handler.command = /^(Cisco ISE|Cisco ISE)$/i

module.exports = handler

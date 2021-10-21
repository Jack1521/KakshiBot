function handler(m) {
this.reply(m.chat, '', m)
}
handler.help = ['ls']
handler.tags = ['info']

handler.command = /^(ls)$/i

module.exports = handler

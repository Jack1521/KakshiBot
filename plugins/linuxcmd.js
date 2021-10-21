function handler(m) {
  this.reply(m.chat, '', m)
}
handler.help = ['LinuxCMD']
handler.tags = ['info']

handler.command = /^(LinuxCMD|LinuxCMD)$/i

module.exports = handler

let handler = async (m, { conn }) => {
    let users = m.mentionedJid
    conn.groupMakeAdmin(m.chat, users)
  }
  handler.help = ['promote','admin','^', '↑'].map(v => v + ' @user')
  handler.tags = ['admins']
  handler.command = /^(promote|admin|\^|↑)$/i
  handler.owner = false
  handler.mods = false
  handler.premium = false
  handler.group = true
  handler.private = false
  
  handler.admin = true
  handler.botAdmin = true
  
  handler.fail = null
  
  module.exports = handler
  
  
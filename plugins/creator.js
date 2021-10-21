function handler(m) {
this.sendContact(m.chat, '+919389379221', 'Kakashi', m)

}

handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler

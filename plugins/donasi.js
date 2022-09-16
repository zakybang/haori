let handler = async (m, { conn, usedPrefix }) => conn.sendButton(m.chat, `
╭─「 Donasi • Dana 」
│ • Telkomsel [081365255567]
│ • Gopay  [081365255567]
│ • Dana  [081365255567]
│ • Chat  wa.me/6281365255567
╰────
╭─「 *NOTE* 」
│ Gw Butkon Wkwkwk Ntar
│ Saya Kasih Gratis Masuk Gc
│ 
│ 
╰────
`.trim(), wm, 'Menu', usedPrefix + 'menu', m) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
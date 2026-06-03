const uid = (String(Math.random()) + String(Math.random()) + String(Math.random())).replaceAll('.', String(Math.random()).replaceAll('.', ''))
const multifield = document.getElementById('mmofield')
let room

const mmoupd = async () => {
	let stream = await fetch('./mmo/index.php?room=' + room + '&uid=' + uid + '&div=' + plr.outerHTML.replaceAll('&quot;', '') + '&pos=' + pos.join())
	stream = await stream.text()
	stream = stream.split('§')
	multifield.innerHTML = ''
	for (const plr of stream) {
		const data = plr.split('|')
		if (data[1] != pos.join()) { continue }
		multifield.innerHTML += data[0]
	}
	console.log('MMO: Update Sent + Reveived')
}

const mmostart = async () => {
	room = prompt('MMO: Enter the roomID', 'sophie room')
	if (!room) { return false }
	const stream = await fetch('./mmo/index.php?room=' + room + '&uid=' + uid + '&div=!')
	if (!stream.ok) {
		alert('MMO: Nah MMO failed :(')
		return false
	}
	alert('MMO: alr you in the mainfraim ms hackerwoman')

	document.body.onbeforeunload = () => {
		fetch('./mmo/index.php?uid=' + uid + '&div=^')
		document.body.onbeforeunload = () => {}
	}
	setInterval(mmoupd, 100)
}
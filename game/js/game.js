const equiphud = document.getElementById('equiped').children
const hud = document.getElementById('profile').children
const plr = document.getElementById('plr')
const wepon = document.getElementById('wepon')
const vel = [0, 0, 5, 0] // X vel, Y vel, Walkspeed, Skin Tick
let pos = [0, 0] // X map pos, Y map pos
var skin = Math.random() > (1/2) ? 1 : 2
let health = 3
let attack = () => { return }
var floor = 0
let posteddeath = false

const upd = (newwepon=false) => {
	// Update Position
	// console.log('Vel:', vel)

	walk(
		(vel[0] * vel[2]),
		(vel[1] * vel[2])
	)

	plr.style.backgroundImage = `url('graphic/textures/plr${skin}${
		((parseFloat(plr.style.left) % 50) > 25) ? 'walk' : ''
	}.png')`
	hud[1].style.backgroundImage = `url('graphic/textures/plr${skin}.png')`

	// Collision Check, map fetched from maphandle.js
	for (const obj of map.children) {
		const col = collision(plr, obj)
		if (col && !obj.classList.contains('attack')) {
			if (obj.classList.contains('mt')) {
				floor++
				start()
				return
			}
			else if (obj.classList.contains('item')) { equip(obj.id) }
			else if (obj.classList.contains('m4') || obj.classList.contains('zombie')) { damage() }
			else {
				walk(
					(vel[0] * vel[2]) * -1,
					(vel[1] * vel[2]) * -1
				)
			}
		}
		// console.log('Map Child: ', obj, 'Collide:', col)
	}

	// Update Health
	const hudhealth = Array.from(hud[2].children)
	for (const heart of hudhealth) { heart.src = 'graphic/textures/heart.png' }
	for (let idx = 3; idx > health; idx--) {
		try { hudhealth[idx - 1].src = 'graphic/textures/noheart.png' } catch {}
	}

	// Make all zombies walk
	for (const zophie of worldzombs) {
		zophie.upd()
	}

	vel[3]++
	requestAnimationFrame(upd) // Loop
}

const walk = (x, y) => {
	const top = parseFloat(plr.style.top || 250 - 64)
	const left = parseFloat(plr.style.left || 400 - 32)

	plr.style.left = `${left + x}px`
	plr.style.top = `${top + y}px`

	wepon.style.left = `${parseFloat(plr.style.left) + 40}px`
	wepon.style.top = `${parseFloat(plr.style.top) + 30}px`
	wepon.style.transform = plr.style.transform || ''

	
	if ((top - y) < -50) {
		console.log('Move Map Trigger: top')
		if (movemap(0, 1)) { plr.style.top = '350px' }
		else { plr.style.top = '-40px' }
	}
	else if ((top + y) > (500 - 110)) {
		console.log('Move Map Trigger: down')
		if (movemap(0, -1)) { plr.style.top = '0px' }
		else { plr.style.top = '380px' }
	}
	else if ((left - y) < -20) {
		console.log('Move Map Trigger: left')
		if (movemap(-1, 0)) { plr.style.left = '740px' }
		else { plr.style.left = '-20px' }
	}
	else if ((left + y) > (800 - 30)) {
		console.log('Move Map Trigger: right')
		if (movemap(1, 0)) { plr.style.left = '0px' }
		else { plr.style.left = '770px' }
	}

	// if (x != 0) { plr.style.animation = '1s linear infinite' }
	// else { plr.style.animation = 'none' }
}

const movemap = (x, y) => {
	pos[0] += x
	pos[1] += y

	const target = world.get(pos.join())
	if (target) {
		console.log('Move Map Target:', pos.join())	
		render(target)
		return true
	} else {
		pos[0] -= x
		pos[1] -= y
		return false
	}
}

// Movement
document.body.onkeydown = (key) => {
	const tar = (key.key).toUpperCase()

	if (['A', 'D'].includes(tar)) {
		vel[0] = [-1, 1][(tar == 'D') * 1]
		plr.style.transform = 'rotateY(' + ((tar == 'D') ? 0 : 180) + 'deg)'
	} if (['W', 'S'].includes(tar)) {
		vel[1] = [-1, 1][(tar == 'S') * 1]		
	}

	if (tar == 'K') { attack() }
	if (tar == 'L') { equip('melee') }
	if (tar == 'J') {
		for (const obj of map.children) {
			if (collision(plr, obj) && !(obj.classList.contains('m4') || obj.classList.contains('zombie'))) {
				map.removeChild(obj)
				break
			}
		}
	}
}

document.body.onkeyup = (key) => {
	const tar = (key.key).toUpperCase()

	if (['A', 'D'].includes(tar)) { vel[0] = 0 }
	if (['W', 'S'].includes(tar)) { vel[1] = 0 }
}

// document.body.onmousedown = () => {slash(5, true)}

// Attack
const slash = (size=5, gun=false, boom=false) => {
	const img = document.createElement('img')

	img.src = 'graphic/textures/' + (gun ? 'bullet' : 'slash') + '.png'
	img.style.left = plr.style.left
	img.style.top = plr.style.top
	img.style.width = `${20 * size}px`
	img.style.transform = plr.style.transform || ''
	img.classList.add('attack')

	map.appendChild(img)

	setTimeout(() => {
		img.style.left = `${parseFloat(img.style.left) + (plr.style.transform.includes('180') ? -200 : 200) * (gun ? 2 : 1)}px`
		setTimeout(() => {
			if (boom) {
				img.src = 'graphic/textures/explosion.png'
				img.style.width = '150px'
			}
			img.style.opacity = 0
		}, 200)
	}, 10)

	console.log('Attack Slash:', size)
}

// Collision
const collision = (div, tar) => {
	const divofs = getofs(div)
	const tarofs = getofs(tar)

	if (
		(divofs.left + div.offsetWidth) > tarofs.left &&
		divofs.left < (tarofs.left + tar.offsetWidth) &&
		(divofs.top + div.offsetHeight) > tarofs.top &&
		divofs.top < (tarofs.top + tar.offsetHeight)
	) { return true }
	return false
}

const getofs = (block) => {
	const bounding = block.getBoundingClientRect()
	return {
		left: bounding.left,
		top: bounding.top
	}
}

let shield = false
const damage = () => {
	console.log('Damage: Request')
	if (health < 1) {
		// hud[1].style.backgroundImage = 'url("graphic/textures/rekt.png")'
		plr.style.backgroundImage = 'url("graphic/textures/rekt.png")'
		wepon.style.opacity = 0
		vel[2] = 0
		// worldzombs = []
		if (username && !posteddeath) {
			fetch(`../addToDeathcount.php?username=${username}`);
			posteddeath = true
		} // add to death count after death
		return
	}
	if (shield) { return }
	shield = true
	health -= 1
	plr.style.opacity = '0.5'
	setTimeout(() => {
		plr.style.opacity = '1'
		shield = false
	}, 1000)
	
	console.log('Damage: Dealt')
}

const equipment = new Map([
	['melee', [1]],
	['sword', [5]],
	['bat', [7]],
	['blaffer', [0.5, 'I']],
	['ar', [0.3, 'like']],
	['rpg', [1, 'men', ':3 <3']],
	['raygun', [2, false, true]],
	['debug wepo', [10, false, true]]
])

const equip = (item) => {
	console.log('Item: Request')
	const target = equipment.get(item)
	if (target) {
		wepon.style.backgroundImage = `url('graphic/textures/${item}.png')`
		attack = () => { slash(target[0], (target[1] || false), (target[2] || false)) }

		equiphud[0].src = `graphic/textures/${item}.png`
		equiphud[1].innerHTML = item.toUpperCase()

		console.log('Item Equiped:', item)
	}
	else { console.log('Item Rejected:', item) }
}

// Start game or whatever
const start = () => {
	health = 3
	pos = generatemap(5 + floor, floor)
	render(world.get(pos.join()))
	upd()
	console.log(world)
}; equip('melee'); start()
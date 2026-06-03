const world = new Map()
let worldzombs = []
const map = document.getElementById('map')
const render = (mapobj) => {
	if (!mapobj) {
		// console.log('Fail Map: Map not found')
		(() => {
			render(iamerror) // Value from maps file
		})()
		return undefined
	} // Fallback if the map doesn't exist so the game doesn't crash

	console.log('New Map:', mapobj.name)

	hud[0].innerHTML = mapobj.name // hud from game.js
	map.classList = ''
	map.innerHTML = ''
	map.classList.add('m' + (mapobj.mat || 0))

	for (const obj of mapobj.obj) {
		console.log('Map Obj:', obj)

		const div = document.createElement('div')

		div.style.left = `${obj.x || 0}px`
		div.style.top = `${obj.y || 0}px`
		div.style.width = `${obj.w || 0}px`
		div.style.height = `${obj.h || 0}px`
		div.style.rotate = `${obj.a || 0}deg`
		div.classList.add('m' + (obj.mat || 0))

		map.appendChild(div)
	}

	for (const item of mapobj.items) {
		const img = document.createElement('img')

		img.style.left = `${item.x || 0}px`
		img.style.top = `${item.y || 0}px`
		img.classList.add('item')
		img.id = item.wepon
		img.src = `graphic/textures/${item.wepon}.png`

		map.appendChild(img)
	}

	worldzombs = []
	for (const zombie of mapobj.zomb) {
		const zophie = new Zombie(zombie.type, zombie.x, zombie.y)
		worldzombs.push(zophie)
	}
}

const generatemap = (mapsize = 5, environment = 0) => {
	const spawn = [ Math.floor(mapsize / 2), Math.round(mapsize / 2) ] // Spawn pos
	const coord = [0, 0] // X pos, Y pos
	world.clear()
	
	// const rng = [
	// 	[1, 0], [-1, 0],
	// 	[0, 1], [0, -1]
	// ]; 

	// Create Path
	// for (let idx = 0; idx <= rooms; idx++) {
	// 	let target = rng[Math.floor(Math.random() * rng.length)]
	// 	do { target = rng[Math.floor(Math.random() * rng.length)] }
	// 	while (world.has(target))
	// 	coord[0] += target[0]
	// 	coord[1] += target[1]
	// 	world.set(
	// 		coord.join(),
	// 		mapdata[Math.floor(Math.random() * mapdata.length)]
	// 	)
	// }

	do {
		world.set(
			coord.join(),
			mapdata[environment][Math.floor(Math.random() * mapdata[environment].length)]
		)

		coord[1] += 1
		if (coord[1] > mapsize) {
			coord[0] += 1
			coord[1] = 0
		}
	} while (coord[0] < mapsize + 1)

	for (let idx = 0; idx < Math.round(mapsize / 3); idx++) {
		world.set(
			[
				Math.round(Math.random() * mapsize),
				Math.round(Math.random() * mapsize)
			].join(),
			special[environment][Math.floor(Math.random() * special[environment].length)]
		)
	}

	world.set(
		[
			Math.round(Math.random() * mapsize),
			Math.round(Math.random() * mapsize)
		].join(),
		finishes[environment]
	)

	console.log(world.size)

	// // Create Walls Per
	// for (const [key] of world) {
	// 	const room = key.split(',').map((idx) => {
	// 		return Number(idx)
	// 	})
	// }
	
	world.set(spawn.join(), iamspawn[environment]) // Value from maps file
	return spawn
}
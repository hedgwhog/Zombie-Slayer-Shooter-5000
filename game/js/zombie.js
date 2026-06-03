const zombiedata = new Map([
	['zombini', 3],
	['thief', 7],
	['hellmo', 6],
	['arctic', 8],
	['SEPONEUR LEO', 4]
])

class Zombie {
	constructor(type, x=0, y=0) {
		this.img = document.createElement('img')
		this.img.src = `graphic/textures/${type}.png`
		this.img.classList.add('zombie')
		this.img.style.left = `${x}px`
		this.img.style.top = `${y}px`
		map.appendChild(this.img) // map from maphandle.js

		this.speed = zombiedata.get(type) || 0
		this.health = (type == 'SEPONEUR LEO') ? 50 : 3
		this.shield = false

		if (type == 'SEPONEUR LEO') {
			this.img.style.width = '128px'
		}
	}

	upd() {
		// Update Position
		// plr from game.js
		if (parseFloat(plr.style.left) > parseFloat(this.img.style.left)) {
			this.img.style.transform = 'rotateY(180deg)'
			this.img.style.left = `${
				parseFloat(this.img.style.left) + (this.speed / 5)
			}px`
		} else {
			this.img.style.transform = 'rotateY(0deg)'
			this.img.style.left = `${
				parseFloat(this.img.style.left) - (this.speed / 5)
			}px`
		}
		if (parseFloat(plr.style.top) > parseFloat(this.img.style.top)) {
			this.img.style.top = `${
				parseFloat(this.img.style.top) + (this.speed / 5)
			}px`
		} else {
			this.img.style.top = `${
				parseFloat(this.img.style.top) - (this.speed / 5)
			}px`
		}

		// Check for bullets
		for (const bullit of map.getElementsByClassName('attack')) {
			if (collision(this.img, bullit)) {
				map.removeChild(bullit)
				this.damage()
			}
		}
	}

	damage() {
		if (this.shield) { return }

		this.shield = true
		this.health -= 1
		if (this.health < 1) {
			if (this.img.style.width == '128px') {
				console.log('boss die')
				const trophy = document.createElement('div')
				trophy.classList.add('mt')
				trophy.style.width = '80px'
				trophy.style.height = '80px'
				trophy.style.left = this.img.style.left || 200
				trophy.style.top = this.img.style.top || 200
				map.appendChild(trophy)
			}
			map.removeChild(this.img)

			if (username) { fetch(`../addToKillcount.php?username=${username}`); } // add to kill count after a kill
		}
		setTimeout(() => { this.shield = false }, 200)
	}
}
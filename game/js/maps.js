// 0: Forest, 1: Desert, 2: Snowy

const mapdata = {
	0: [
		{
			"name": "Single Sad Tree",
			"mat": 1,
			"obj": [ { "mat": 2, "x": 350, "y": 125, "w": 150, "h": 200 } ],
			"items": [],
			"zomb": []
		},
		{
			"name": "Engaged Happy Tree",
			"mat": 1,
			"obj": [ { "mat": 2, "x": 350, "y": 125, "w": 150, "h": 200 } ],
			"items": [],
			"zomb": [
				{"type": "zombini", "x": 350, "y": 200},
				{"type": "zombini", "x": 550, "y": 200}
			]
		},
		{
			"name": "Rune Field",
			"mat": 1,
			"obj": [
				{ "mat": 5, "x": 670, "y": 370, "w": 130, "h": 130 },
				{ "mat": 5, "x": 30, "y": 30, "w": 120, "h": 120 },
				{ "mat": 3, "x": 600, "y": 350, "w": 64, "h": 64 },
				{ "mat": 3, "x": 550, "y": 400, "w": 80, "h": 80 },
				{ "mat": 3, "x": 130, "y": 200, "w": 80, "h": 80 }
			],
			"items": [],
			"zomb": []
		},
		{
			"name": "Forest 1",
			"mat": 1,
			"obj": [
				{ "mat": 2, "x": 100, "y": 50, "w": 80, "h": 80 },
				{ "mat": 2, "x": 60, "y": 120, "w": 80, "h": 80 },
				{ "mat": 2, "x": 170, "y": 100, "w": 80, "h": 80 },

				{ "mat": 2, "x": 310, "y": 370, "w": 80, "h": 80 },
				{ "mat": 2, "x": 420, "y": 350, "w": 80, "h": 80 },

				{ "mat": 2, "x": 400, "y": 50, "w": 80, "h": 80 },
				{ "mat": 2, "x": 600, "y": 70, "w": 80, "h": 80 },
				{ "mat": 2, "x": 670, "y": 100, "w": 80, "h": 80 },
			],
			"items": [],
			"zomb": [ {"type": "zombini", "x": 450, "y": 200} ]
		},
		{
			"name": "Forest 1, Sword Alternative",
			"mat": 1,
			"obj": [
				{ "mat": 2, "x": 100, "y": 50, "w": 80, "h": 80 },
				{ "mat": 2, "x": 60, "y": 120, "w": 80, "h": 80 },
				{ "mat": 2, "x": 170, "y": 100, "w": 80, "h": 80 },

				{ "mat": 2, "x": 310, "y": 370, "w": 80, "h": 80 },
				{ "mat": 2, "x": 420, "y": 350, "w": 80, "h": 80 },

				{ "mat": 2, "x": 400, "y": 50, "w": 80, "h": 80 },
				{ "mat": 2, "x": 600, "y": 70, "w": 80, "h": 80 },
				{ "mat": 2, "x": 670, "y": 100, "w": 80, "h": 80 },
			],
			"items": [ { "wepon": "sword", "x": 300, "y": 230 } ],
			"zomb": [ {"type": "thief", "x": 450, "y": 200} ]
		},
		{
			"name": "Forest 2",
			"mat": 1,
			"obj": [
				{ "mat": 2, "x": 650, "y": 350, "w": 130, "h": 130 },
				{ "mat": 2, "x": 50, "y": 50, "w": 120, "h": 120 },
				{ "mat": 2, "x": 350, "y": 125, "w": 130, "h": 180 }
			],
			"items": [],
			"zomb": []
		},
		{
			"name": "Evil Forest: 2",
			"mat": 1,
			"obj": [
				{ "mat": 2, "x": 650, "y": 350, "w": 130, "h": 130 },
				{ "mat": 2, "x": 50, "y": 50, "w": 120, "h": 120 },
				{ "mat": 2, "x": 350, "y": 125, "w": 130, "h": 180 }
			],
			"items": [],
			"zomb": [
				{"type": "thief", "x": 200, "y": 200},
				{"type": "thief", "x": 400, "y": 400}
			]
		},
		{
			"name": "Zombini Horde",
			"mat": 1,
			"obj": [],
			"items": [],
			"zomb": [
				{"type": "zombini", "x": 350, "y": 200},
				{"type": "zombini", "x": 450, "y": 200},
				{"type": "zombini", "x": 550, "y": 200}
			]
		},
		{
			"name": "Awakened Zombini Horde",
			"mat": 1,
			"obj": [],
			"items": [],
			"zomb": [
				{"type": "zombini", "x": 350, "y": 200},
				{"type": "thief", "x": 450, "y": 200},
				{"type": "zombini", "x": 550, "y": 200}
			]
		},
		{
			"name": "Awakened Rune",
			"mat": 1,
			"obj": [ { "mat": 5, "x": 350, "y": 125, "w": 150, "h": 150 } ],
			"items": [],
			"zomb": [
				{"type": "thief", "x": 450, "y": 200},
				{"type": "thief", "x": 450, "y": 50},
				{"type": "thief", "x": 280, "y": 100},
				{"type": "thief", "x": 280, "y": 300}
			]
		}
	],
	1: [
		{
			"name": "One whole pyramid",
			"mat": 8,
			"obj": [
				{ "mat": 12, "x": 500, "y": 125, "w": 150, "h": 150 },
				{ "mat": 14, "x": 215, "y": 165, "w": 70, "h": 70 }
			],
			"items": [],
			"zomb": []
		},
		{
			"name": "Two whole pyramids",
			"mat": 8,
			"obj": [
				{ "mat": 12, "x": 500, "y": 125, "w": 150, "h": 150 },
				{ "mat": 12, "x": 300, "y": 155, "w": 120, "h": 120 },
				{ "mat": 14, "x": 215, "y": 165, "w": 70, "h": 70 },
				{ "mat": 14, "x": 435, "y": 155, "w": 70, "h": 70 }
			],
			"items": [],
			"zomb": [
				{"type": "hellmo", "x": 400, "y": 100}
			]
		},
		{
			"name": "Three whole pyramids",
			"mat": 8,
			"obj": [
				{ "mat": 12, "x": 500, "y": 125, "w": 150, "h": 150 },
				{ "mat": 12, "x": 300, "y": 155, "w": 120, "h": 120 },
				{ "mat": 12, "x": 100, "y": 185, "w": 90, "h": 90 },
				{ "mat": 14, "x": 215, "y": 165, "w": 70, "h": 70 },
				{ "mat": 14, "x": 435, "y": 155, "w": 70, "h": 70 }
			],
			"items": [],
			"zomb": [
				{"type": "hellmo", "x": 200, "y": 100},
				{"type": "hellmo", "x": 400, "y": 100}
			]
		},
		{
			"name": "Desert Awakened Rune",
			"mat": 8,
			"obj": [ { "mat": 5, "x": 350, "y": 125, "w": 150, "h": 150 } ],
			"items": [],
			"zomb": [
				{"type": "hellmo", "x": 450, "y": 200},
				{"type": "hellmo", "x": 450, "y": 50},
				{"type": "hellmo", "x": 280, "y": 100},
				{"type": "hellmo", "x": 280, "y": 300}
			]
		},
		{
			"name": "Desert Horde",
			"mat": 8,
			"obj": [],
			"items": [],
			"zomb": [
				{"type": "hellmo", "x": 100, "y": 100},
				{"type": "hellmo", "x": 200, "y": 100},
				{"type": "hellmo", "x": 300, "y": 100},
				{"type": "hellmo", "x": 400, "y": 100},
				{"type": "hellmo", "x": 100, "y": 300},
				{"type": "hellmo", "x": 200, "y": 300},
				{"type": "hellmo", "x": 300, "y": 300},
				{"type": "hellmo", "x": 400, "y": 300}
			]
		},
		{
			"name": "Plain Desert Dunes",
			"mat": 8,
			"obj": [
				{ "mat": 14, "x": 50, "y": 125, "w": 70, "h": 70 },
				{ "mat": 14, "x": 220, "y": 300, "w": 70, "h": 70 },
				{ "mat": 14, "x": 450, "y": 185, "w": 70, "h": 70 },
				{ "mat": 14, "x": 670, "y": 165, "w": 70, "h": 70 },
				{ "mat": 10, "x": 735, "y": 400, "w": 70, "h": 70 },
				{ "mat": 10, "x": 200, "y": 120, "w": 70, "h": 70 },
			],
			"items": [],
			"zomb": []
		},
		{
			"name": "Death Dunes",
			"mat": 8,
			"obj": [
				{ "mat": 10, "x": 50, "y": 125, "w": 70, "h": 70 },
				{ "mat": 10, "x": 220, "y": 300, "w": 70, "h": 70 },
				{ "mat": 10, "x": 450, "y": 185, "w": 70, "h": 70 },
				{ "mat": 10, "x": 670, "y": 165, "w": 70, "h": 70 },
				{ "mat": 11, "x": 735, "y": 400, "w": 70, "h": 70 },
				{ "mat": 11, "x": 200, "y": 120, "w": 70, "h": 70 },
			],
			"items": [],
			"zomb": []
		},
		{
			"name": "Oasis",
			"mat": 8,
			"obj": [ { "mat": 13, "x": 350, "y": 125, "w": 300, "h": 300 } ],
			"items": [],
			"zomb": []
		},
		{
			"name": "Horizontal Desert Border",
			"mat": 8,
			"obj": [
				{ "mat": 4, "x": 0, "y": 200, "w": 80, "h": 80 },
				{ "mat": 4, "x": 80, "y": 200, "w": 80, "h": 80 },
				{ "mat": 4, "x": 160, "y": 200, "w": 80, "h": 80 },
				{ "mat": 4, "x": 240, "y": 200, "w": 80, "h": 80 },
				{ "mat": 4, "x": 320, "y": 200, "w": 80, "h": 80 },
				{ "mat": 4, "x": 400, "y": 200, "w": 80, "h": 80 },
				{ "mat": 4, "x": 480, "y": 200, "w": 80, "h": 80 },
				{ "mat": 4, "x": 560, "y": 200, "w": 80, "h": 80 },
				{ "mat": 4, "x": 640, "y": 200, "w": 80, "h": 80 },
				{ "mat": 4, "x": 720, "y": 200, "w": 80, "h": 80 },

				{ "mat": 10, "x": 100, "y": 100, "w": 70, "h": 70 }
			],
			"items": [],
			"zomb": []
		},
		{
			"name": "Vertical Desert Border",
			"mat": 8,
			"obj": [
				{ "mat": 4, "x": 360, "y": 0, "w": 80, "h": 80 },
				{ "mat": 4, "x": 360, "y": 80, "w": 80, "h": 80 },
				{ "mat": 4, "x": 360, "y": 160, "w": 80, "h": 80 },
				{ "mat": 4, "x": 360, "y": 240, "w": 80, "h": 80 },
				{ "mat": 4, "x": 360, "y": 320, "w": 80, "h": 80 },
				{ "mat": 4, "x": 360, "y": 400, "w": 80, "h": 80 },

				{ "mat": 10, "x": 100, "y": 100, "w": 70, "h": 70 }
			],
			"items": [],
			"zomb": []
		},
	],
	2: [
		{
			"name": "Eskimo Horde",
			"mat": 15,
			"obj": [],
			"items": [],
			"zomb": [
				{"type": "arctic", "x": 100, "y": 100},
				{"type": "arctic", "x": 200, "y": 100},
				{"type": "arctic", "x": 300, "y": 100},
				{"type": "arctic", "x": 400, "y": 100}
			]
		},
		{
			"name": "Ice City",
			"mat": 15,
			"obj": [
				{ "mat": 19, "x": 100, "y": 200, "w": 150, "h": 150 },
				{ "mat": 19, "x": 300, "y": 200, "w": 150, "h": 150 },
				{ "mat": 19, "x": 500, "y": 200, "w": 150, "h": 150 }
			],
			"items": [],
			"zomb": [
				{"type": "arctic", "x": 100, "y": 100},
				{"type": "arctic", "x": 200, "y": 100}
			]
		},
		{
			"name": "Snow Village",
			"mat": 15,
			"obj": [
				{ "mat": 19, "x": 100, "y": 200, "w": 150, "h": 150 },
				{ "mat": 17, "x": 300, "y": 200, "w": 150, "h": 150 },
				{ "mat": 19, "x": 500, "y": 200, "w": 150, "h": 150 }
			],
			"items": [],
			"zomb": []
		},
		{
			"name": "Snowland Awakened Rune",
			"mat": 15,
			"obj": [ { "mat": 5, "x": 350, "y": 125, "w": 150, "h": 150 } ],
			"items": [],
			"zomb": [
				{"type": "arctic", "x": 450, "y": 200},
				{"type": "arctic", "x": 450, "y": 50},
				{"type": "arctic", "x": 280, "y": 100},
				{"type": "arctic", "x": 280, "y": 300}
			]
		},
		{
			"name": "Ice Rocks",
			"mat": 15,
			"obj": [
				{ "mat": 20, "x": 50, "y": 125, "w": 70, "h": 70 },
				{ "mat": 20, "x": 220, "y": 300, "w": 70, "h": 70 },
				{ "mat": 20, "x": 450, "y": 185, "w": 70, "h": 70 },
				{ "mat": 20, "x": 670, "y": 165, "w": 70, "h": 70 },
				{ "mat": 18, "x": 735, "y": 400, "w": 70, "h": 70 },
				{ "mat": 18, "x": 200, "y": 120, "w": 70, "h": 70 },
			],
			"items": [],
			"zomb": []
		}
	],
	3: [
		{
			"name": "You won!",
			"mat": "t",
			"obj": [],
			"items": [],
			"zomb": []
		}
	]
}

const special = {
	0: [
		{
			"name": "Raygun Special Treasure",
			"mat": 1,
			"obj": [
				{ "mat": 3, "x": 250, "y": 100, "w": 80, "h": 80 },
				{ "mat": 3, "x": 250, "y": 350, "w": 80, "h": 80 },
				{ "mat": 3, "x": 450, "y": 100, "w": 80, "h": 80 },
				{ "mat": 3, "x": 450, "y": 350, "w": 80, "h": 80 },

				{ "mat": 4, "x": 350, "y": 100, "w": 80, "h": 80 },
				{ "mat": 4, "x": 350, "y": 350, "w": 80, "h": 80 },
				{ "mat": 4, "x": 250, "y": 210, "w": 80, "h": 80 },
				{ "mat": 4, "x": 450, "y": 210, "w": 80, "h": 80 }
			],
			"items": [ { "wepon": "raygun", "x": 360, "y": 230 } ],
			"zomb": []
		},
		{
			"name": "RPG Special Treasure",
			"mat": 1,
			"obj": [
				{ "mat": 3, "x": 250, "y": 100, "w": 80, "h": 80 },
				{ "mat": 3, "x": 250, "y": 350, "w": 80, "h": 80 },
				{ "mat": 3, "x": 450, "y": 100, "w": 80, "h": 80 },
				{ "mat": 3, "x": 450, "y": 350, "w": 80, "h": 80 },

				{ "mat": 4, "x": 350, "y": 100, "w": 80, "h": 80 },
				{ "mat": 4, "x": 350, "y": 350, "w": 80, "h": 80 },
				{ "mat": 4, "x": 250, "y": 210, "w": 80, "h": 80 },
				{ "mat": 4, "x": 450, "y": 210, "w": 80, "h": 80 }
			],
			"items": [ { "wepon": "rpg", "x": 360, "y": 230 } ],
			"zomb": []
		},
		{
			"name": "Blaffer Alternative Treasure",
			"mat": 1,
			"obj": [
				{ "mat": 4, "x": 250, "y": 100, "w": 80, "h": 80 },
				{ "mat": 4, "x": 250, "y": 350, "w": 80, "h": 80 },
				{ "mat": 4, "x": 450, "y": 100, "w": 80, "h": 80 },
				{ "mat": 4, "x": 450, "y": 350, "w": 80, "h": 80 },

				{ "mat": 4, "x": 350, "y": 100, "w": 80, "h": 80 },
				{ "mat": 4, "x": 350, "y": 350, "w": 80, "h": 80 },
				{ "mat": 4, "x": 250, "y": 210, "w": 80, "h": 80 },
				{ "mat": 4, "x": 450, "y": 210, "w": 80, "h": 80 }
			],
			"items": [ { "wepon": "blaffer", "x": 360, "y": 230 } ],
			"zomb": []
		},
		{
			"name": "Sword Alternative Treasure",
			"mat": 1,
			"obj": [
				{ "mat": 4, "x": 250, "y": 100, "w": 80, "h": 80 },
				{ "mat": 4, "x": 250, "y": 350, "w": 80, "h": 80 },
				{ "mat": 4, "x": 450, "y": 100, "w": 80, "h": 80 },
				{ "mat": 4, "x": 450, "y": 350, "w": 80, "h": 80 },

				{ "mat": 4, "x": 350, "y": 100, "w": 80, "h": 80 },
				{ "mat": 4, "x": 350, "y": 350, "w": 80, "h": 80 },
				{ "mat": 4, "x": 250, "y": 210, "w": 80, "h": 80 },
				{ "mat": 4, "x": 450, "y": 210, "w": 80, "h": 80 }
			],
			"items": [ { "wepon": "sword", "x": 360, "y": 230 } ],
			"zomb": []
		}
	],
	1: [
		{
			"name": "Desert Treasure Lair",
			"mat": 8,
			"obj": [
				{ "mat": 13, "x": 30, "y": 50, "w": 140, "h": 140 },
				{ "mat": 13, "x": 600, "y": 50, "w": 140, "h": 140 },
				{ "mat": 4, "x": 195, "y": 70, "w": 80, "h": 80 },
				{ "mat": 4, "x": 295, "y": 70, "w": 80, "h": 80 },
				{ "mat": 4, "x": 395, "y": 70, "w": 80, "h": 80 },
				{ "mat": 4, "x": 495, "y": 70, "w": 80, "h": 80 },

				{ "mat": 4, "x": 60, "y": 190, "w": 80, "h": 80, "a": 90 },
				{ "mat": 4, "x": 60, "y": 290, "w": 80, "h": 80, "a": 90 },
				{ "mat": 4, "x": 60, "y": 390, "w": 80, "h": 80, "a": 90 },

				{ "mat": 4, "x": 635, "y": 190, "w": 80, "h": 80, "a": 90 },
				{ "mat": 4, "x": 635, "y": 290, "w": 80, "h": 80, "a": 90 },
				{ "mat": 4, "x": 635, "y": 390, "w": 80, "h": 80, "a": 90 }
			],
			"items": [
				{ "wepon": "bat", "x": 200, "y": 180 },
				{ "wepon": "blaffer", "x": 350, "y": 180 },
				{ "wepon": "rpg", "x": 500, "y": 180 }
			],
			"zomb": []
		},
		{
			"name": "???",
			"mat": 8,
			"obj": [],
			"items": [],
			"zomb": [ {"type": "arctic", "x": 200, "y": 100} ]
		},
	],
	2: [
		{
			"name": "Snowy Plains",
			"mat": 15,
			"obj": [],
			"items": [],
			"zomb": []
		}
	],
	3: [
		{
			"name": "You won!",
			"mat": "t",
			"obj": [],
			"items": [],
			"zomb": []
		}
	]
}

const finishes = [
	{
		"name": "Forest Finish",
		"mat": 1,
		"obj": [ { "mat": "t", "x": 350, "y": 125, "w": 100, "h": 100 } ],
		"items": [],
		"zomb": [
			{"type": "zombini", "x": 450, "y": 200},
			{"type": "thief", "x": 450, "y": 50},
			{"type": "zombini", "x": 280, "y": 100},
			{"type": "thief", "x": 280, "y": 300}
		]
	},
	{
		"name": "Desert Finish",
		"mat": 8,
		"obj": [ { "mat": "t", "x": 350, "y": 125, "w": 100, "h": 100 } ],
		"items": [],
		"zomb": [
			{"type": "hellmo", "x": 450, "y": 200},
			{"type": "thief", "x": 450, "y": 50},
			{"type": "hellmoi", "x": 280, "y": 100},
			{"type": "thief", "x": 280, "y": 300}
		]
	},
	{
		"name": "vs: SEPONEUR LEO",
		"mat": 15,
		"obj": [],
		"items": [],
		"zomb": [ {"type": "SEPONEUR LEO", "x": 280, "y": 300} ]
	},
	{
		"name": "You won!",
		"mat": "t",
		"obj": [],
		"items": [],
		"zomb": []
	}
]

const iamspawn = [
	{
		"name": "Forest Spawnpoint",
		"mat": 1,
		"obj": [ { "mat": 7, "x": 100, "y": 150, "w": 260, "h": 180 } ],
		"items": [],
		"zomb": []
	},
	{
		"name": "Desert Spawnpoint",
		"mat": 8,
		"obj": [
			{ "mat": 12, "x": 30, "y": 350, "w": 140, "h": 140 },
			{ "mat": 12, "x": 600, "y": 350, "w": 140, "h": 140 },
			{ "mat": 13, "x": 315, "y": 10, "w": 170, "h": 170 }
		],
		"items": [],
		"zomb": []
	},
	{
		"name": "Snowland Spawnpoint",
		"mat": 15,
		"obj": [
			{ "mat": 19, "x": 10, "y": 300, "w": 200, "h": 200 },
			{ "mat": 16, "x": 200, "y": 300, "w": 80, "h": 80 },
		],
		"items": [ { "wepon": "blaffer", "x": 560, "y": 130 } ],
		"zomb": []
	},
	{
		"name": "You won!",
		"mat": "t",
		"obj": [],
		"items": [],
		"zomb": []
	}
]

const iamerror = {
	"name": "I AM ERROR",
	"mat": 0,
	"obj": [ { "mat": -1, "x": 100, "y": 200, "w": 300, "h": 100 } ],
	"items": [],
	"zomb": []
}

// {
// 	"name": "I AM SPAWN",
// 	"mat": 1,
// 	"obj": [ { "mat": 4, "x": 130, "y": 200, "w": 80, "h": 80 } ],
// 	"items": [ { "wepon": "ar", "x": 400, "y": 50 }, { "wepon": "bat", "x": 200, "y": 400 } ],
// 	"zomb": [ {"type": "arctic", "x": 330, "y": 20 } ]
// }
const Icons = [
    "game.svg",
    "cart.png",
    "guide.png"
];

const Hyperlinks = [
    "/game",
    "shop.php",
    "guide.html"
];

function layout() {
    const aspect = 16 / 9;

    const BASE_WALL = 80;

    const w = window.innerWidth;
    const h = window.innerHeight;

    const availableW = w - BASE_WALL * 2;
    const availableH = h - BASE_WALL * 2;

    let contentW, contentH;

    if (availableW / availableH > aspect) {
        contentH = availableH;
        contentW = availableH * aspect;
    } else {
        contentW = availableW;
        contentH = availableW / aspect;
    }

    const sideSpace = (availableW - contentW) / 2;
    const topSpace = (availableH - contentH) / 2;

    const side = BASE_WALL + sideSpace;
    const top = BASE_WALL + topSpace;

    document.documentElement.style.setProperty('--contentW', contentW + 'px');
    document.documentElement.style.setProperty('--contentH', contentH + 'px');
    document.documentElement.style.setProperty('--side', side + 'px');
    document.documentElement.style.setProperty('--top', top + 'px');

    // Get main position
    const mainLeft = (w - contentW) / 2;
    const mainTop = (h - contentH) / 2;

// Define all 4 lines
    const lines = [
        {
            el: document.querySelector('.tl'),
            x1: 0, y1: 0,
            x2: mainLeft, y2: mainTop
        },
        {
            el: document.querySelector('.tr'),
            x1: w, y1: 0,
            x2: mainLeft + contentW, y2: mainTop
        },
        {
            el: document.querySelector('.bl'),
            x1: 0, y1: h,
            x2: mainLeft, y2: mainTop + contentH
        },
        {
            el: document.querySelector('.br'),
            x1: w, y1: h,
            x2: mainLeft + contentW, y2: mainTop + contentH
        }
    ];

// Position each line
    lines.forEach(line => {
        const dx = line.x2 - line.x1;
        const dy = line.y2 - line.y1;

        const length = Math.sqrt(dx * dx + dy * dy);
        const angle = Math.atan2(dy, dx) * (180 / Math.PI);

        const el = line.el;
        el.style.width = length + 'px';
        el.style.left = line.x1 + 'px';
        el.style.top = line.y1 + 'px';
        el.style.transform = `rotate(${angle}deg)`;
    });
}

window.addEventListener('resize', layout);
layout();

function getRandomNumber() {
    return (Math.round(Math.random() * 2));
}

function spinSlot(element, delay, random) {
    let interval = setInterval(() => {
        element.querySelector("img").src = "images/icons/" + Icons[getRandomNumber()];
    }, 70);

    setTimeout(() => {
        clearInterval(interval);
        element.querySelector("img").src = "images/icons/" + Icons[random];
        element.querySelector("a").href = Hyperlinks[random];
    }, delay);
}

function pullLever() {
    let randomGenerated = getRandomNumber();

    const slot1 = document.querySelector(".index-rol1");
    const slot2 = document.querySelector(".index-rol2");
    const slot3 = document.querySelector(".index-rol3");

    const lever = document.querySelector('.lever');

    if (lever.classList.contains('lever-animate')) return;

    lever.classList.add('lever-animate');

    setTimeout(() => {
        lever.classList.remove('lever-animate');
    }, 700);

    spinSlot(slot1, 2000, randomGenerated);
    spinSlot(slot2, 3000, randomGenerated);
    spinSlot(slot3, 4000, randomGenerated);
}
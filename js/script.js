const titleText = ["라블레배", "정오의 가라오케", "스낵 카츠코"];

const singers = [
    {
	"name": "<",
	"title": "심사위원 축가",
	"singer": "Elena",
	"audio": "/media/Elena Music_Karaoke(No adlib).mp3"
    },
    {
	"name": "<",
	"title": "2대 가왕",
	"singer": "축가",
	"link": "https://www.youtube.com/watch?v=f71Em8Jr1BE"
    },
    {
	"name": "헤르만 헤세",
	"title": "와",
	"singer": "이정현",
	"link": "https://www.youtube.com/watch?v=HfhzhonToJU",
    },
    {
	"name": "알베르 카뮈",
	"title": "24시간이 모자라",
	"singer": "선미",
	"link": "https://www.youtube.com/watch?v=xNZ17TdDM0A"
    },
    {
	"name": "안나 새가쵸바",
	"title": "Миллион алых роз",
	"singer": "Алла Пугачёва",
	"link": "https://www.youtube.com/watch?v=uAFHXvtmhTo"
    },
    {
	"name": "구묘진",
	"title": "我站在全世界的屋頂",
	"singer": "張艾嘉",
	"audio": "/media/我站在全世界的屋頂 - 張艾嘉.mp3"
    },
    {
	"name": "호세 마르티",
	"title": "Silencio",
	"singer": "Ibrahim Ferrer & Omara Portuondo",
	"link": "https://www.youtube.com/watch?v=yGkpgenAnYE"
    },
    {
	"name": "생텍쥐베리",
	"title": "안되겠더라",
	"singer": "4MEN",
	"link": "https://www.youtube.com/watch?v=XYc83Uw1fq0"
    },
    {
	"name": ">",
	"title": "서점극장 라블레",
	"singer": "축가",
	"link": "https://www.youtube.com/watch?v=DzzRLP6aPxA"
    },
    {
	"name": ">",
	"title": "심사위원",
	"singer": "축가",
	"link": "https://youtube.com/watch?v=Q-1EjXY7Cog"
    }
];

function getAudioPageLink(name) {
    let singer = singers.filter(s => s.name === name);
    if (singer && Array.isArray(singer) && singer.length) {
	singer = singer[0];
	return `/play-audio/?title=${singer.title}%20${singer.singer}&audio=${singer.audio}`;
    }
    return null;
}

function renderTitle(title) {
    if (title === null || title === undefined) {
	title = titleText;
    }
    let container = document.querySelector("#title-wrapper");
    container.innerHTML = `<h3>${title[0] || ""}</h3><h1>${title[1] || ""}</h1><h3>${title[2] || ""}</h3>`
}

function renderSingers() {
    let ul = document.querySelector("#singers-wrapper ul");
    singers.forEach(function(singer) {
	let li = document.createElement("li");
	let a = document.createElement("a");
	a.href = singer.audio ? getAudioPageLink(singer.name) : singer.link;
	a.innerHTML = `${singer.name}`;
	a.addEventListener('mouseover', function(event) {
	    let singer = singers.filter(s => s.name === event.target.innerHTML);
	    if (singer && Array.isArray(singer) && singer.length) {
		singer = singer[0];
		renderTitle([null, singer.title, singer.singer]);
	    }
	});
	li.addEventListener('mouseout', function(event) {
	    renderTitle();
	});
	li.appendChild(a);
	ul.appendChild(li);
    });
}

window.onload = function() {
    renderTitle();
    renderSingers();
}

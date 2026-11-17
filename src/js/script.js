const titleText = ["라블레배", "정오의 가라오케", "스낵 카츠코"];

const singers = [
    {
	"name": "&lt;",
	"title": "서점극장 라블레",
	"singer": "축가",
	"link": "https://www.youtube.com/watch?v=NNMwwuT5gmw"
    },
    {
	"name": "\u00A0\u00A0",
	"title": "",
	"singer": "",
	"link": "https://www.youtube.com/watch?v=iMyF4Av3dTw"
    },
    {
	"name": "바를람 샬라모프",
	"title": "보랏빛 향기",
	"singer": "강수지",
	"link": "https://www.youtube.com/watch?v=3BUeywk7wJQ"
    },
    {
	"name": "황진이",
	"title": "슬픈 인연",
	"singer": "나미",
	"link": "https://www.youtube.com/watch?v=nFQIdOj1fk8"
    },
    {
	"name": "선택받은아이들",
	"title": "Butter-Fly",
	"singer": "和田光司",
	"link": "https://www.youtube.com/watch?v=lFzwWOh6x9Y"
    },
    {
	"name": "허난설헌",
	"title": "High High",
	"singer": "GD & T.O.P",
	"link": "https://www.youtube.com/watch?v=GWrBNGv11Y0"
    },
    {
	"name": "&nbsp;&nbsp;&nbsp;",
	"title": "심사위원",
	"singer": "축가",
	"link": "https://www.youtube.com/watch?v=KQUGe-LYXsw"
    },
    {
	"name": "&gt;",
	"title": "심사위원장",
	"singer": "축가",
	"link": "https://www.youtube.com/watch?v=O33kzpp0mxY"
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

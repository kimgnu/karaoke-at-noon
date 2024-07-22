const titleText = ["라블레배", "정오의 가라오케", "스낵 카츠코"];

const singers = [
    {
	"name": "<",
	"title": "서점극장 라블레",
	"singer": "축가",
	"link": "https://www.youtube.com/watch?v=KQUGe-LYXsw",
    },
    {
	"name": "황새맘",
	"title": "Журавли (백학)",
	"singer": "Марк Бернес",
	"link": "https://www.youtube.com/watch?v=c0tezPntRzA",
    },
    {
	"name": "나이팅게일",
	"title": "I love you",
	"singer": "포지션",
	"link": "https://www.youtube.com/watch?v=0sULDwCwzys",
    },
    {
	"name": "아수라",
	"title": "환희",
	"singer": "정수라",
	"link": "https://www.youtube.com/watch?v=APQb_7qu_jU"
    },
    {
	"name": "종달새",
	"title": "Attention",
	"singer": "NewJeans",
	"link": "https://www.youtube.com/watch?v=Hx071fT9W7k"
    },
    {
	"name": "꾀꼬리",
	"title": "찬찬찬",
	"singer": "편승엽",
	"link": "https://www.youtube.com/watch?v=LBIj2dB_rhE"
    },
    {
	"name": ">",
	"title": "서점극장 라블레",
	"singer": "축가",
	"link": "https://www.youtube.com/watch?v=W52LhDXGTkE",
    }
];

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
	a.href = singer.link;
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

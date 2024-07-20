const titleText = ["라블레배", "정오의 가라오케", "스낵 카츠코"];

const singers = [
    {
	"name": "<",
	"title": "서점극장 라블레",
	"singer": "축가",
	"link": "https://www.youtube.com/watch?v=MmJijjywRt4",
    },
    {
	"name": "흑장미",
	"title": "내게 남은 사랑을 드릴께요",
	"singer": "장혜리",
	"link": "https://www.youtube.com/watch?v=VRuUZcbOqEo",
    },
    {
	"name": "무궁화",
	"title": "Ich war noch niemals in New York",
	"singer": "Udo Jürgens",
	"link": "https://www.youtube.com/watch?v=9N9iHUrMlw8",
    },
    {
	"name": "진달래",
	"title": "That old feeling",
	"singer": "",
	"link": "https://www.youtube.com/watch?v=kM1KIu1RmfU"
    },
    {
	"name": "민들레",
	"title": "내 생에 봄날은",
	"singer": "캔",
	"link": "https://www.youtube.com/watch?v=f71Em8Jr1BE"
    },
    {
	"name": ">",
	"title": "서점극장 라블레",
	"singer": "축가",
	"link": "https://www.youtube.com/watch?v=4mAHTdxct-c",
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

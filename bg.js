const body = document.querySelector("body");

const IMG_NUMBER = 3;
const IMG_LOCATION = `../background/`


function paintImg(randomNumber){
	const img = document.createElement("img");
	img.src = `./background/${randomNumber+1}.jpg`;
	body.appendChild(img);
	img.classList.add("bgImg");
}

function genRandom() {
	const number =  Math.floor(Math.random()*IMG_NUMBER);
	return number;
}

function init() {
	const randomNumber = genRandom();
	paintImg(randomNumber);
}

init();
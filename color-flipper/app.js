let colors = ["Salmon", "PowderBlue", "#00FF7F", "#98FB98", "rgba(111,222,333)"];

let btn = document.getElementById('btn');

let color = document.querySelector(".color");
btn.addEventListener('click', function(){

	let colorNum = getRandomNum();

	//change background color of body to whatever colorInc is
	document.body.style.backgroundColor = colors[colorNum];

	//change the text of color to be the new color
	color.textContent = colors[colorNum];
})

function getRandomNum(){
	return Math.floor(Math.random() * colors.length);
}

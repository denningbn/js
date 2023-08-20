let reviews = [
	{
		id: 1,
		name:"Emily Johnson",
		job:"UI/UX Designer",
		img:"./person1.webp",
		text:"This software has transformed my design process. As a UI/UX designer, its intuitive interface and collaboration features have made my work seamless and efficient. It's a must-have in my toolkit."
	},
	{
		id: 2,
		name:"Alex Martinez",
		job:"Software Engineer",
		img:"./person2.webp",
		text:"While the debugging capabilities are impressive, the learning curve and performance issues were hurdles. With better user guidance and optimization, this software could be a favorite among software engineers."
	},
	{
		id: 3,
		name:"Sarah Patel",
		job:"Product Manager",
		img:"./person3.webp",
		text:"An invaluable asset for project management. The platform's task assignment, milestone tracking, and communication integration have elevated my product management role. Enhanced reporting would be a welcome addition."
	},
	{
		id: 4,
		name: "David Thompson",
		job: "Data Scientist",
		img: "./person4.webp",
		text: "As a data scientist, I've found this software to be a powerful tool for data analysis. Its visualization capabilities and data processing speed have significantly improved my workflow."
	},
	{
		id: 5,
		name: "Lindsay Carter",
		job: "Content Writer",
		img: "./person5.webp",
		text: "Writing has never been easier thanks to this software. Its grammar and style suggestions have elevated the quality of my content, and the integrated research tools have saved me hours of work."
	},
	{
		id: 6,
		name: "Michael Ramirez",
		job: "QA Engineer",
		img: "./person6.webp",
		text: "Quality assurance has become more efficient with this software. Its testing automation features and bug tracking system have greatly improved our testing process and product reliability."
	},
	{
		id: 7,
		name: "Anna Lewis",
		job: "Graphic Designer",
		img: "./person7.webp",
		text: "Creating stunning visuals is a breeze with this software. Its robust set of design tools and extensive library of assets have expanded my creative possibilities and boosted my productivity."
	},
	{
		id: 8,
		name: "Daniel Park",
		job: "Front-End Developer",
		img: "./person8.webp",
		text: "This software has streamlined my front-end development work. Its responsive design preview and code generation features have saved me time and improved the accuracy of my coding."
	},
	{
		id: 9,
		name: "Rachel Nguyen",
		job: "Marketing Manager",
		img: "./person9.webp",
		text: "An essential tool for marketing campaigns. The software's analytics and campaign tracking capabilities have helped me make data-driven decisions and optimize our marketing strategies."
	},
	{
		id: 10,
		name: "Jason Foster",
		job: "Project Coordinator",
		img: "./person10.webp",
		text: "Managing complex projects is much easier with this software. Its task delegation, progress monitoring, and reporting features have improved our team's efficiency and project outcomes."
	}
]

//select items

let img = document.getElementById("person-img");
let author = document.getElementById("author");
let job = document.getElementById("job");
let info = document.getElementById("info");

let prevBtn = document.querySelector(".prev-btn");
let nextBtn = document.querySelector(".next-btn");
let randBtn = document.querySelector(".rand-btn");

//set starting item

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function(){
	selectPerson(currentItem);
});

//takes an index and changes html elements based on index
function selectPerson(){
	let item = reviews[currentItem];
	img.src = item.img;
	author.textContent = item.name;
	job.textContent = item.job;
	info.textContent = item.text;
}

nextBtn.addEventListener('click', function(){
	currentItem++;
	if (currentItem > reviews.length - 1){
		currentItem = 0;
	}

	selectPerson();
});

prevBtn.addEventListener('click', function(){
	currentItem--;
	if (currentItem < 0){
		currentItem = reviews.length - 1;
	}

	selectPerson();
});

randBtn.addEventListener('click', function(){
	currentItem = Math.floor(Math.random() * reviews.length);
	console.log(currentItem);
	selectPerson();
});

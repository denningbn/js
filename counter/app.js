//initialize count
let inc = 0;

let count = document.querySelector("#count");
let btns = document.querySelectorAll(".btn");


btns.forEach(function(btn){
	btn.addEventListener('click', function(e){
		let styles = e.currentTarget.classList;

		if (styles.contains("sub")){
			inc--;
		} else if (styles.contains("reset")){
			inc = 0;
		} else {
			inc++;
		}

		if (inc > 0){
			count.style.color = "green";
		}

		if (inc < 0){
			count.style.color = "red";
		}

		if (inc == 0){
			count.style.color = "black";
		}
		count.textContent = inc;

	});
});

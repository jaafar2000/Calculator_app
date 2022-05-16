let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
button.addEventListener('click', (e) => {
		switch(e.target.innerText){
				case 'RESET':
						display.innerText = '';
						break;
				case '=':
					try{
						display.innerText = eval(display.innerText);
					} catch {
						display.innerText = "Error"
					}
					break;
				case 'DEL':
					if (display.innerText){
						display.innerText = display.innerText.slice(0, -1);
					}
					break;
				default:
					display.innerText += e.target.innerText;
		}
});
});
let theme  = document.querySelector(".container")
let span01 = document.querySelector(".one");
let span02 = document.querySelector(".two");
let span03 = document.querySelector(".three");
let mainSpan = document.querySelector(".main__span");




mainSpan.addEventListener("click" ,function(){
    if(mainSpan.classList.contains("aleft")){
		mainSpan.classList.replace("aleft","bleft")
		document.body.style.backgroundColor = "hsl(0, 1%, 63%)"
		if(theme.classList.contains("theme01")){
			theme.classList.replace("theme01","theme03")
		}else if (theme.classList.contains("theme02")){
			theme.classList.replace("theme02","theme03")
		}
	}else if(mainSpan.classList.contains("bleft")){
		mainSpan.classList.replace("bleft","cleft")
		document.body.style.backgroundColor = " hsl(268, 75%, 9%)"
		if(theme.classList.contains("theme01")){
			theme.classList.replace("theme01","theme02")
		}else if (theme.classList.contains("theme03")){
			theme.classList.replace("theme03","theme02")
		}

	}else if(mainSpan.classList.contains("cleft")){
		mainSpan.classList.replace("cleft","aleft")
		document.body.style.backgroundColor = "#3b4664"
		if(theme.classList.contains("theme03")){
			theme.classList.replace("theme03","theme01")
		}else if (theme.classList.contains("theme02")){
			theme.classList.replace("theme02","theme01")
		}
	}
});

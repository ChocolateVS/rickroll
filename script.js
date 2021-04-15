/*<iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>*/

const addVideo = function () {
	var video = ['8ldkYwd3EzE'].sort(() => Math.random() - 0.5).pop();
	var div = document.createElement('div');
	div.innerHTML =
    '<video width="1920" height="1080" autoplay> <source src="rickroll.mp4" type="video/mp4">';
	
	div.setAttribute('style', 'z-index: 100000');
	document.body.appendChild(div);
}
const fadeText = function () {
	function getRandomColor () {
		return '#'+Math.floor(Math.random()*16777215).toString(16);
	}
	const words = 'Never gonna give you up Never gonna let you down Never gonna run around and desert you Never gonna make you cry Never gonna say goodbye Never gonna tell a lie and hurt you'.split(' ');
	var div = document.createElement('div');
	div.setAttribute('style', 'position: fixed; right: 10px; bottom: 10px;z-index: 100000; font-size: 100px; font-weight: bold;');
	document.body.appendChild(div);
	function fade(initial, step, delay, callback) {
		div.style.display = 'block';
		var op = initial;  // initial opacity
		var timer = setInterval(function () {
			div.style.opacity = op;
			div.style.filter = 'alpha(opacity=' + op * 100 + ")";
			op += step;
			if (op <= 0){
				clearInterval(timer);
				div.style.display = 'none';
				callback();
			}
			else if (op >= 1) {
				clearInterval(timer);
				callback();				
			}
		}, delay);
	}
	div.style.opacity = 0;
	
	function fadeInNextWord() {
		if (words.length > 0) {
			div.style.position = 'fixed';
			div.style.left = (Math.random() * 50) + '%';
			div.style.top = (Math.random() * 50) + '%';
			div.innerText = words.shift();
			div.style.color = getRandomColor();
			fade(0, 0.2, 75, fadeOut);
		}
	}
	
	function fadeOut() {
		fade(1, -0.2, 75, fadeInNextWord);
	}
	fadeInNextWord();
	return div;
}

let counter = 0;
function trigger() {
    addVideo(); 
    //setTimeout(fadeText, 2000);		
}


window.addEventListener('load', (event) => {
  setTimeout(function(){
    trigger();
    document.querySelector(".loading").style.display = "none";
      }, 5000);
});


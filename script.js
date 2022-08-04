// JavaScript Projects
console.clear();
// Color Flipper

const colors = ['#03A64A', '#025940', 'rgba(2, 64, 89)', '#04BF8A'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function () {
	const randomNumber = getRandomNumber();
	console.log(getRandomNumber());

	document.body.style.backgroundColor = colors[randomNumber];
	color.textContent = colors[randomNumber];
});

function getRandomNumber() {
	return Math.floor(Math.random() * colors.length);
}
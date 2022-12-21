/// scroll

let mainPhoto = document.querySelector(".current__photo")

document.querySelectorAll('.scroll__photo').forEach(item => {
	item.addEventListener('mouseover', event => {
		mainPhoto.src = item.src;
	})
});
// /// buy
// document.querySelector('.buy').onclick = function () {
// 	location.href = "https://zrzutka.pl/wec3eu";
// };

/// pop-up
let popup = document.querySelector('.size-popup');

document.querySelector('.size-chart').addEventListener('click', function () {
	popup.style.display = "block";
});

document.querySelector('.popup__close').addEventListener('click', function () {
	popup.style.display = "none";
});





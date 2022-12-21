/////// SLIDER /////

let i = 0;
let images = [];
const time = 1500;

images[0] = "images/slider/slider1.jpg";
images[1] = "images/slider/slider2.jpg";
images[2] = "images/slider/slider3.jpg";
images[3] = "images/slider/slider4.jpg";
images[4] = "images/slider/slider5.jpg";
images[5] = "images/slider/slider6.jpg";
images[6] = "images/slider/slider7.jpg";
const slider = document.querySelector('.slider');

function changeImg() {
	document.slide.src = images[i];

	if (i < images.length - 1) {
		i++;
	}
	else {
		i = 0;
	}

	setTimeout("changeImg()", time);
}
window.onload = changeImg;





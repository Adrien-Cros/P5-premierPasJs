const arrowLeft = document.querySelector(".arrow_left")
const arrowRight = document.querySelector(".arrow_right")
const arrow = document.querySelector(".arrow")
const bannerImage = document.querySelector(".banner-img")
const dots = document.querySelector(".dots")
let slidePosition = 0 

const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

for (let i = 0; i < slides.length; i++) {
	const dotElement = document.createElement("div")
	dotElement.classList.add("dot")
	dotElement.dataset.dotPosition = i

	if (i === 0) {
		dotElement.classList.add("dot_selected")
	}
	dots.appendChild(dotElement)
}

//clic bouton de gauche
arrowLeft.addEventListener("click", () => {
	slidePosition--
	if (slidePosition < 0) {
		slidePosition = slides.length - 1
	}
	
	addRemoveDot(slidePosition)

	const tagLine = document.querySelector("#banner p")
	bannerImage.src = `./assets/images/slideshow/${slides[slidePosition].image}`
	tagLine.innerHTML = slides[slidePosition].tagLine
}) 

//clic bouton de droite
arrowRight.addEventListener("click", () => {
	slidePosition++
	if (slidePosition >= slides.length) {
		slidePosition = 0
	}

	addRemoveDot(slidePosition)

	const tagLine = document.querySelector("#banner p")
	bannerImage.src = `./assets/images/slideshow/${slides[slidePosition].image}`
	tagLine.innerHTML = slides[slidePosition].tagLine
}) 

function addRemoveDot(slidePosition) {
	let dotPosition = document.querySelector(".dot_selected")
	dotPosition.classList.remove("dot_selected")

	dotPosition = document.querySelector(`[data-dot-position="${slidePosition}"]`)
	dotPosition.classList.add("dot_selected")
}
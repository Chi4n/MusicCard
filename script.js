


























//Creamos el Evento del Range
const sliderEl = document.querySelector("#range2")
const sliderValue = document.querySelector(".value2")

sliderEl.addEventListener("input", (event) => {
  const tempSliderValue = event.target.value; 
 
  const progress = (tempSliderValue / sliderEl.max) * 100;
 
  sliderEl.style.background = `linear-gradient(to right, #C93B76 ${progress}%, #ccccccc9 ${progress}%)`;
})
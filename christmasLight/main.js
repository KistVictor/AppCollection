const lights = document.querySelectorAll(".light")
const speedValue = document.querySelector(".speedValue")
const lightQtdValue = document.querySelector(".lightQtdValue")

const setSpeed = () => {
  for (let i = 0; i < lights.length; i++) {
    lights[i].style.animationDuration = speedValue.value + 's'
  }
}

const setLightQtd = () => {
  console.log(lightQtdValue.value)
}

const on = () => {
  for (let i = 0; i < lights.length; i++) {
    lights[i].removeAttribute("style")
    lights[i].style.animationPlayState = "running"
  }
}

const off = () => {
  for (let i = 0; i < lights.length; i++) {
    lights[i].style.animation = "none"
    lights[i].style.background = "#666666"
  }
}
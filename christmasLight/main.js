const lights = document.querySelectorAll(".circle")

const setSpeed = () => {

}

const setLightQtd = () => {

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
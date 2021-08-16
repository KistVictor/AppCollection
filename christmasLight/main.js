const lights = document.querySelectorAll(".light")
const speedValue = document.querySelector(".speedValue")
const lightsContent = document.querySelector("header")

const setSpeed = () => {
  for (let i = 0; i < lights.length; i++) {
    lights[i].style.animationDuration = speedValue.value + 's'
  }
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

const addLight = () => {
  const newLight = document.createElement("div")
  newLight.append("teste")
  lightsContent.parentNode.insertBefore(newLight, lightsContent)
  console.log(lightsContent)
}

const removeLight = () => {

}
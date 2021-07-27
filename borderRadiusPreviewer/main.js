// armazena o valor dos inputs
const i1 = document.querySelector(".i1")
const i2 = document.querySelector(".i2")
const i3 = document.querySelector(".i3")
const i4 = document.querySelector(".i4")
const content = document.querySelector(".content")

// add classlist na div
const changeBorderTopLeftRadius = (event) => {
    event.preventDefault()
    content.style.borderTopLeftRadius = `${i1.value}px`
}

const changeBorderTopRightRadius = (event) => {
    event.preventDefault()
    content.style.borderTopRightRadius = `${i2.value}px`
}

const changeBorderBottomRightRadius = (event) => {
    event.preventDefault()
    content.style.borderBottomRightRadius = `${i3.value}px`
}

const changeBorderBottomLeftRadius = (event) => {
    event.preventDefault()
    content.style.borderBottomLeftRadius = `${i4.value}px`
}

// ouvir a mudanca no input
i1.addEventListener("change", changeBorderTopLeftRadius);
i2.addEventListener("change", changeBorderTopRightRadius);
i3.addEventListener("change", changeBorderBottomRightRadius);
i4.addEventListener("change", changeBorderBottomLeftRadius);
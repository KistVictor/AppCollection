  const bin2Dec = (event) => {
    event.preventDefault()

    bin = document.querySelector("[data-form-input]").value

    const isOnly01 = verifyNumbers(bin)
    
    if (!isOnly01) {
      return
    }

    dec = parseInt(bin, 2)

    showDecimalNumber(dec)

  }

  function verifyNumbers(bin) {
    const binArray = bin.split('') 

    for(let i = 0; i < binArray.length; i++) {
      if(binArray[i] != 0 && binArray[i] != 1) {
        window.alert("Only 0 and 1 accepted")
        return false
      }
    }
    
    return true
  }

  function showDecimalNumber(dec) {
    const form = document.querySelector("form")

    const decimalNumber = document.createElement("p")

    decimalNumber.innerText = dec

    form.appendChild(decimalNumber)
  }

  const formButton = document.querySelector("[data-form-button]");
  console.log(formButton)
  formButton.addEventListener("click", bin2Dec);
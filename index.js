const inputEl = document.getElementById("input-el")
const btnEl = document.getElementById("btn-el")
const lengthEl= document.getElementById("length-el")
const volumeEl= document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

btnEl.addEventListener("click", function() {
    let myNum = document.getElementById("input-el").value 
    convLen(myNum)
    convVol(myNum)
    convMa(myNum)

    // Convert Functions
    function convLen() {
        let stringLen = `${myNum} Meters = ${(myNum * 3.281).toFixed(2)} feet | ${myNum} feet = ${(myNum / 3.281).toFixed(2)} meters`
        lengthEl.innerHTML = stringLen
    }

    function convVol() {
        let stringVol = `${myNum} Liters = ${(myNum * 0.264).toFixed(2)} gallons | ${myNum} gallons = ${(myNum / 0.264).toFixed(2)} liters`
        volumeEl.innerHTML = strinVol
    }

    function convMa() {
         let stringMa = `${myNum} Kilos = ${(myNum * 2.204).toFixed(2)} pounds | ${myNum} pounds = ${(myNum / 2.204).toFixed(2)} kilos`
         massEl.innerHTML = stringMa   
    }
})

// Given
/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
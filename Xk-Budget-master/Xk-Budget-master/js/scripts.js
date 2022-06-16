//declaracion de variable
let VacationCalc = document.getElementById("btnCalcular")
VacationCalc.addEventListener('click', calcExpenses, clearInput())

function calcExpenses() {

    //e.preventDefault();
    let Destiny = document.getElementById("destiny").value
    let Budget = document.getElementById("budget").value
    let Acomodation = document.getElementById("acomodation").value
    let Transport = document.getElementById("transport").value
    let Food = document.getElementById("food").value

    console.log(Destiny, Budget, Acomodation, Transport, Food)
    clearInput()
}

function clearInput() {
    
    let Destiny = document.getElementById("destiny").value =""
    let Budget = document.getElementById("budget").value =""
    let Acomodation = document.getElementById("acomodation").value =""
    let Transport = document.getElementById("transport").value =""
    let Food = document.getElementById("food").value =""
}
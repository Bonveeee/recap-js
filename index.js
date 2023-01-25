// // initialize count
// //listen clicks
// // increment count when button is clicked
// // change count when button is clicked

let count = 0
let countEl = document.getElementById("count-el") //passed in argument
let saveEl = document.getElementById("save-el") //passed in argument

function increment(){
     count += 1
    countEl.innerText = count
  }

increment()

function save(){
    let countSave = count + " - "
    saveEl.textContent += countSave
    countEl.textContent = 0
    count = 0
    console.log(saveEl)
}

save()

// welcomeEl = document.getElementById("welcome-el")

// let name = "Mike"
// let greeting = "Hello there"
// welcomeEl.innerText = greeting + ", " + name
// console.log(welcomeEl)
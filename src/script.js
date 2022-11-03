// ! Results container

const emojis = ['❤️', '🌟', '🐍', '📍']

function random() {
  const number = Math.floor(Math.random() * emojis.length)
  return emojis[number]
}


// Logic
function randomNumberSelector() {
  const num1 = document.querySelector('#num1').innerHTML = random()
  const num2 = document.querySelector('#num2').innerHTML = random()
  const num3 = document.querySelector('#num3').innerHTML = random()
  const results = [num1 , num2 , num3]

  console.log(results)
  win()

} 


function win () {
  if ((num1.innerHTML === num2.innerHTML) && (num1.innerHTML === num3.innerHTML)) {
    console.log("win +50 points")
    return window.alert("you win +50 points")
  } else if (num1.innerHTML === num2.innerHTML) {
    console.log("win +25 points")
    return window.alert("2 Matches! +25 points")
  } else if (num2.innerHTML === num3.innerHTML) {
    console.log("win +25 points statement 3")
    return window.alert("2 Matches! +25 points")
  } else {
    console.log("sorry you don't get anypoints")
    return window.alert("No Matches sorry 0 points")
    
  }
}

// function scoreboard() {

//   switch (key) {
//     case 0:
//       win === 
//       break;
  
//     default:
//       break;
//   }
// }


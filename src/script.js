// ! Results container

const emojis = ['❤️', '🌟', '🐍', '📍']
let wintype = null
let points = 100

function token() {
  points = points - 25
  window.alert("-25 points")
}

function scoreboard () {
  const scoreboard = document.querySelector('#score')
  switch (wintype) {
      case 0:
        points = points
        scoreboard.innerHTML = points
        break;
      case 2:
        wintype = "+25 points"
        points = points +25
        scoreboard.innerHTML = points
          break;
      case 3:
        wintype = "+50 points" 
        points = points + 50
        scoreboard.innerHTML = points
        break;
      default:
        break;
    }
  console.log(points)
  console.log(wintype)

}

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
  
  token()
  scoreboard()
  win()
} 



function win () {
  if ((num1.innerHTML === num2.innerHTML) && (num1.innerHTML === num3.innerHTML)) {
    console.log("win +50 points")
    return wintype = 3
    // window.alert("you win +50 points")
  } else if (num1.innerHTML === num2.innerHTML || num1.innerHTML === num3.innerHTML) {
    console.log("win +25 points")
    return wintype = 2
    // return window.alert("2 Matches! +25 points")
  } else if (num2.innerHTML === num3.innerHTML) {
    console.log("win +25 points statement 3")
    return wintype = 2
    // return window.alert("2 Matches! +25 points")
  } else {
    console.log("sorry you don't get anypoints")
    return wintype = 0
    // return window.alert("No Matches sorry 0 points")
  }
  
}


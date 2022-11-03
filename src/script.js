// ! Results container

const emojis = ['❤️', '🌟', '🐍', '📍']

function random() {
  const number = Math.floor(Math.random() * emojis.length)
  return emojis[number]
}


// Logic
function randomNumberSelector() {
  const results = []
  const num1 = document.querySelector('#num1').innerHTML = random()
  const num2 = document.querySelector('#num2').innerHTML = random()
  const num3 = document.querySelector('#num3').innerHTML = random()
  

} 



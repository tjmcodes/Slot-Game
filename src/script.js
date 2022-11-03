// keys values / array of objects
const colours = {
  "aqua"  : 0, 
  "green" : 1, 
  "blue"  : 2, 
  "red"   : 3, 
  "pink"  : 4, 
  "grey"  : 5, 
  "black" : 6, 
  "purple": 7, 
  "yellow": 8, 
  "white" : 9, 
}

const items = Object.keys(colours).map(function(key) {
  return [key, colours[key]]
})


items.sort(function(first, second) {
  return second[1] - first[1];
})

console.log(items.slice(0,10))


// const coloursArray = ["1", "2", "3"]


function random() {
  return Math.floor(Math.random() * 9)
}


// Logic
function randomNumberSelector() {
  const results = []
  const num1 = document.querySelector('#num1').innerHTML = random()
  const num2 = document.querySelector('#num2').innerHTML = random()
  const num3 = document.querySelector('#num3').innerHTML = random()
  
  // ! Results as a string
  const resultString = `${num1}${num2}${num3}`
  resultString.split()
  
  results.push(resultString)  
  
  // ! Result as an array
  // const resultsInt = parseInt(resultString)
  
  console.log(results)
  console.log(resultString)
  console.log(typeof(resultString))
  // console.log(parseInt(resultString))
  
  
  // ! Print out individual elements in array
  let i = 0;
  
  while (i < resultString.length) {
    console.log(resultString[i]);
    i++;
  } 

  for (const element of resultString) {
    console.log(element)
  }

  
  
  console.log(results)
} 

// console.log(coloursArray) 



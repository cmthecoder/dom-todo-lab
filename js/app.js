// consts
const input = document.getElementById("input")
console.log(input)

const button = document.getElementById("submit-button")

const listElement = document.getElementById("todo-list")

// Event Listeners

input.addEventListener('click', function(evt){
  const li = document.createElement('li')
  
  li.textContent = input.value

  document.querySelector('ul').appendChild(li)
  input.value = ''
  // console.log(li)
})
document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.getElementById('create-task-form').addEventListener('submit', (e) => {
    e.preventDefault()
    handleTask(e.target.new_task_description.value)
  })
})

function handleTask(todo){
  let li = document.createElement('li')
  li.innerText = todo
  document.getElementById('tasks').appendChild(li)
  document.getElementById('new_task_description').value = "";
}

const listContainer = document.getElementById("list-container");
const addTaskBtn = document.getElementById("addtask-btn")
const clear = document.getElementById("clearall-btn")






// adding and displaying of tasks
addTaskBtn.addEventListener("click", ()=>{
    const inputBox = document.getElementById("input-box");
  if (inputBox.value === "") {
    alert("Please Enter Task!!");
  } 
  else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    
    let span = document.createElement("span");
    span.innerHTML = "&times;";
    li.appendChild(span)
    saveListData()
  }
  inputBox.value = "";
})

function enterPress(){
  const inputBox = document.getElementById("input-box")
  let li = document.createElement("li");
  li.innerHTML = inputBox.value;
  listContainer.appendChild(li);
  
  let span = document.createElement("span");
  span.innerHTML = "&times;";
  li.appendChild(span)
  saveListData()
  inputBox.value = "";
}

document.getElementById("input-box").addEventListener('keypress', (event)=>{
    if (event.key === 'Enter') {
      e.preventDefault()
      addTaskBtn.click()
    }
})






const saveListData = ()=>{
    localStorage.setItem('li', listContainer.innerHTML)
}

const showListData = () =>{
    listContainer.innerHTML = localStorage.getItem('li')
}
showListData()


clear.addEventListener("click", ()=>{
    localStorage.removeItem('li')
    alert("All Tasks are cleared. Please Reopen!")
})



//checked task and delete task
listContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveListData()
  }
  if (e.target.tagName === "SPAN") {
    let li = e.target.parentElement
    li.remove()
  } 
});







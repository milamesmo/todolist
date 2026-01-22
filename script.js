let toDoList = JSON.parse(localStorage.getItem("toDoList")) || [];
function saveToLocalStorage() {
  localStorage.setItem("toDoList", JSON.stringify(toDoList));
}

rendertoDoList();

function rendertoDoList() {
  let list = document.querySelector(".list");
  list.innerHTML = "";
  for (let i = 0; i < toDoList.length; i++) {
    let toDoItem = toDoList[i];
    const { name, date } = toDoItem;
    list.innerHTML += `
    
    <div class="task__name">${name}</div>
    <div class="task__date">${date}</div>
         <button class="delete__btn">Delete</button>
    `;

    document.querySelectorAll('.delete__btn')
  .forEach((deleteButton, index)=>{
    deleteButton.addEventListener('click', () =>{
        removeItem(index, 1);
    })});

  }

}

function send(event) {
  if (event.key === "Enter") {
    addItem();
  }
}

document.querySelector('.addItem')
.addEventListener('click', ()=> {
   addItem(); 
});

function addItem() {
  const inputElement = document.querySelector(".userItem");
  const name = inputElement.value;
  const dateInputElement = document.querySelector(".userDate");
  const date = dateInputElement.value;

  toDoList.push({
    name,
    date
  });
  saveToLocalStorage();
  rendertoDoList();
  inputElement.value = "";
}

function removeItem(index) {
  toDoList.splice(index, 1);
  saveToLocalStorage();
  rendertoDoList();
}

let todoList = [];
let list = document.querySelector(".container > .collection");

addBtn.addEventListener ('click', (event) => {
    let valueTask = document.querySelector("#textarea1").value;
console.log(valueTask);

// console.log(todoList);

// console.log(list);
let id = new Date().getTime();
let newTaskA = document.createElement('a');
newTaskA.className = "collection-item";
let newTaskForm = document.createElement('form');
let newTaskInput = document.createElement('input');
newTaskInput.type = "checkbox";
newTaskInput.setAttribute(`id`, id);
let newTaskLabel = document.createElement('label');
newTaskLabel.type = "checkbox";
newTaskLabel.setAttribute(`for`, id);
newTaskLabel.innerText = valueTask;
let newTaskIcon = document.createElement('i');
newTaskIcon.className = "small material-icons right";
newTaskIcon.innerText = "delete";

newTaskForm.appendChild(newTaskInput);
newTaskForm.appendChild(newTaskLabel);
newTaskForm.appendChild(newTaskIcon);
// console.log(newTaskForm);
newTaskA.append(newTaskForm);
list.appendChild(newTaskA);

event.preventDefault();
todoList.push(newTaskA);
// console.log(newTaskA);
document.querySelector("#textarea1").value = "";
});

list.addEventListener ('click', (event) => {
    let idPerformTask = event.target.htmlFor;
    if(event.target.tagName === 'LABEL') {
        if (event.target.style.textDecoration === "line-through") {
            event.target.style = "text-decoration:none";
        } else {
            event.target.style = "text-decoration:line-through";
        }
    };

    // event.preventDefault();

    if(event.target.tagName === 'I') {

    }
    ;
});


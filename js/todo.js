(function () {
    let todoList = [];
    let list = document.querySelector('.container > .collection');
    let newTaskBtn = document.querySelector('#addBtn');
    newTaskBtn.addEventListener('click', (event) => {
        let valueTask = document.querySelector('#textarea1').value;

        let id = new Date().getTime();
        let newTaskA = document.createElement('a');

        newTaskA.className = `collection-item id-${id}`;
        let newTaskForm = document.createElement('form');
        let newTaskInput = document.createElement('input');

        newTaskInput.type = 'checkbox';
        newTaskInput.setAttribute('id', `id-${id}`);
        let newTaskLabel = document.createElement('label');
        newTaskLabel.className = 'teal-text';
        newTaskLabel.setAttribute('for', `id-${id}`);
        newTaskLabel.innerText = valueTask;
        let newTaskIcon = document.createElement('i');
        newTaskIcon.className = 'small material-icons right';
        newTaskIcon.style.cursor = 'pointer';
        newTaskIcon.innerText = 'delete';

        newTaskForm.appendChild(newTaskInput);
        newTaskForm.appendChild(newTaskLabel);
        newTaskForm.appendChild(newTaskIcon);

        newTaskA.appendChild(newTaskForm);
        list.appendChild(newTaskA);

        event.preventDefault();
        todoList.push(newTaskA);
        counter();
        document.querySelector('#textarea1').value = '';


    });

    list.addEventListener('click', (event) => {
        if (event.target.tagName === 'LABEL') {
            toggleToDo();
        } else if (event.target.tagName === 'I') {
            deleteToDo();
        }
    });
    function toggleToDo() {
        if (event.target.style.textDecoration === 'line-through') {
            return event.target.style = 'text-decoration:none';
        } else {
            return event.target.style = 'text-decoration:line-through';
        }
    }
    function deleteToDo() {
        for (let key in todoList) {
            let s = todoList[key].className.split(" ");
            let id = s.find(item => {
                if (item.indexOf('id') !== -1)
                    return true;
            });

            if (event.target.parentNode.parentNode.className.split(" ").includes(id)) {
                todoList.splice(key, 1);
                counter();
                let elem = event.target.parentNode.parentNode;
                elem.remove();
            }
        }
    }
    function counter() {
        let taskCounter = document.querySelector('.container > .title');
        let tasks = (todoList.length == 1)? 'task': 'tasks';
        taskCounter.innerText = `MY TODO LIST !!! (${todoList.length} ${tasks})`;
    }
})();

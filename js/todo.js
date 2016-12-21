(function () {
    let todoList = [];
    let todoLocal = [];
    let list = document.querySelector('.container > .collection');
    let newTaskBtn = document.querySelector('#addBtn');

    newTaskBtn.addEventListener('click', (event) => {
        let id = new Date().getTime();
        let valueTask = document.querySelector('#textarea1').value;
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
        addToLocalArr();

/*        let stateTask = event.target.style.textDecoration;
        let obj = {};
        obj.text = valueTask;
        obj.state = stateTask;
        todoLocal.push(obj);*/
        // copyTodoArray();
        cacheContainer('set');
        counter();
        document.querySelector('#textarea1').value = '';
        console.log('todoList:', todoList);
        console.log(id, new Date().getTime());
    });

    list.addEventListener('click', (event) => {
        let id;
        if (event.target.tagName === 'LABEL') {
            id = event.target.previousSibling.id.split('-')[1];
            toggleToDo(event);
            syncTodo(event, id, 'strike');
            cacheContainer('set');
        } else if (event.target.tagName === 'I') {
            id = event.target.previousSibling.htmlFor.split('-')[1];
            deleteToDo(event);
            syncTodo(event, id, 'delete');
            cacheContainer('set');
            cacheContainer('get');
        }
    });

    function toggleToDo(event) {
        if (event.target.style.textDecoration === 'line-through') {
            return event.target.style = 'text-decoration:none';
        } else {
            return event.target.style = 'text-decoration:line-through';
        }

    }
    function deleteToDo(event) {
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
        let tasks = (todoList.length === 1) ? 'task': 'tasks';
        taskCounter.innerText = `MY TODO LIST !!! (${todoList.length} ${tasks})`;
    }
    function cacheContainer(action) {
        if(action === 'set') {
            localStorage.setItem('todoLocal', JSON.stringify(todoLocal));
        } else if(action === 'get') {
            console.log('localStorage:', JSON.parse(localStorage.getItem('todoLocal')));
        }
    }
    function syncTodo(event, id, action) {
        let todo1 = {},
            index1 = 0;
        todoLocal.forEach((todo, index) => {
            console.log('2');
            if(todo.id === id) {
                todo1 = todo;
                index1 = index;
            }
        });
        console.log('todo1', todo1);
        if(action === 'strike') {
            console.log('todo', todo1);
            todo1.state = 'line-through';
        } else if(action === 'delete') {
            todoLocal.splice(index1, 1);
        }
        console.log('event', event);
        console.log('todoLocal', todoLocal);
    }

    function addToLocalArr() {
        for(let key in todoList) {
            let taskText = todoList[key].childNodes["0"].childNodes[1].textContent;
            let taskState = todoList[key].style.textDecoration;
            let id = todoList[key].className.split('id-')[1];
            let obj = {};
            obj.id = `${id}`;
            obj.text = taskText;
            obj.state = taskState;
            todoLocal[key] = obj;
        };
        console.log('todoLocal', todoLocal);
    }

})();

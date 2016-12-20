(function () {
    let todoList = [];
    let list = document.querySelector('.container > .collection');

    addBtn.addEventListener('click', (event) => {
        let valueTask = document.querySelector('#textarea1').value;

        let id = new Date().getTime();
        let newTaskA = document.createElement('a');
        newTaskA.className = `collection-item ${id}`;
        let newTaskForm = document.createElement('form');
        let newTaskInput = document.createElement('input');
        newTaskInput.type = 'checkbox';
        newTaskInput.setAttribute(`id`, id);
        let newTaskLabel = document.createElement('label');
        newTaskLabel.className = 'teal-text';
        newTaskLabel.setAttribute(`for`, id);
        newTaskLabel.innerText = valueTask;
        let newTaskIcon = document.createElement('i');
        newTaskIcon.className = 'small material-icons right';
        newTaskIcon.style.cursor = 'pointer';
        newTaskIcon.innerText = 'delete';

        newTaskForm.appendChild(newTaskInput);
        newTaskForm.appendChild(newTaskLabel);
        newTaskForm.appendChild(newTaskIcon);

        newTaskA.append(newTaskForm);
        list.appendChild(newTaskA);

        event.preventDefault();
        todoList.push(newTaskA);

        document.querySelector('#textarea1').value = '';


    });

    list.addEventListener('click', (event) => {
        let idPerformTask = event.target.htmlFor;
        if (event.target.tagName === 'LABEL') {
            if (event.target.style.textDecoration === 'line-through') {
                event.target.style = 'text-decoration:none';
            } else {
                event.target.style = 'text-decoration:line-through';
            }
        }
        ;

        if (event.target.tagName === 'I') {
            for (key in todoList) {
                for (jey in todoList[key]) {
                    if (event.target.parentNode.parentNode.className.split(" ")[1] === todoList[key].className.split(" ")[1]) {
                        delete todoList[key];
                        let elem = event.target.parentNode.parentNode;
                        elem.remove();
                    }
                    ;
                }
                ;
            }
            ;
        }
        ;
    });

})();

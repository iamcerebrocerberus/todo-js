const todoInput = document.querySelector('.todo-input');
const todoBtn = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');


todoBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);

function addTodo(evt) {
    evt.preventDefault();

    // create todo container or div
    const todoContainer = document.createElement('div');
    todoContainer.classList.add('todo');

    //create new todo list and insert into todo container
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoContainer.appendChild(newTodo);

    //create complete btn and insert into todo container
    const completeBtn = document.createElement('button');
    completeBtn.classList.add('complete-btn');
    completeBtn.innerHTML = '<i class="fas fa-check"></i>';
    todoContainer.appendChild(completeBtn);

    //create trash btn and insert into todo container
    const trashBtn = document.createElement('button');
    trashBtn.classList.add('trash-btn');
    trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
    todoContainer.appendChild(trashBtn);

    // insert todo container into todo list ul container
    todoList.appendChild(todoContainer);

    todoInput.value = '';
}


function deleteCheck(evt) {
    const item = evt.target;

    if (item.classList.contains('trash-btn')) {
        item.parentNode.classList.add('fall');

        item.parentNode.addEventListener('transitionend', function() {
            item.parentNode.remove();
        });
    }

    if (item.classList.contains('complete-btn')) {
        item.parentNode.classList.toggle('completed');
    }
}


function filterTodo(evt) {
    const todos = todoList.children;
    const newTodosArray = Array.from(todos);
    newTodosArray.forEach(function(todo) {
        switch (evt.target.value) {
            case 'all':
                todo.style.display = 'flex';
                break;
            case 'completed':
                if (todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
            case 'uncompleted':
                if (!todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
        }
    });
}




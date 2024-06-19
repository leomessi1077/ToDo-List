document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('todo-input');
    const addButton = document.getElementById('add-button');
    const todoList = document.getElementById('todo-list');
    const totalTasks = document.getElementById('total-tasks');

    let taskCount = 0;

    function updateTaskCount() {
        totalTasks.textContent = taskCount;
    }

    function createTodoItem(text) {
        const li = document.createElement('li');
        li.className = 'todo-item';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                li.classList.add('completed');
            } else {
                li.classList.remove('completed');
            }
        });

        const span = document.createElement('span');
        span.textContent = text;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            li.remove();
            taskCount--;
            updateTaskCount();
        });

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteButton);

        return li;
    }

    addButton.addEventListener('click', function() {
        const taskText = input.value.trim();
        if (taskText !== '') {
            const todoItem = createTodoItem(taskText);
            todoList.appendChild(todoItem);
            input.value = '';
            taskCount++;
            updateTaskCount();
        }
    });

    input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addButton.click();
        }
    });
});

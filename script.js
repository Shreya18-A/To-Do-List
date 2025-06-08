

const taskInput = document.getElementById('task-input');
const dueDateInput = document.getElementById('due-date-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

addTaskBtn.addEventListener('click', addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    const dueDate = dueDateInput.value;
    if (taskText && dueDate) {
        const task = document.createElement('li');
        task.classList.add('task');
        task.innerHTML = `${taskText} (Due: ${dueDate})`;
        taskList.appendChild(task);
        taskInput.value = '';
        dueDateInput.value = '';

        task.addEventListener('click', () => {
            task.classList.toggle('done');
        });
    }
}


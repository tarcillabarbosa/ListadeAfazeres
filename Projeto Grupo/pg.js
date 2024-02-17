// Array para armazenar as tarefas
let tasks = [];

// Função para adicionar uma tarefa
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value.trim();
    if (task !== '') {
        tasks.push(task);
        displayTasks();
        taskInput.value = ''; // Limpa o campo de entrada
    } else {
        alert('Por favor, insira uma tarefa válida.');
    }
}

// Função para exibir as tarefas na lista
function displayTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = ''; // Limpa a lista antes de recriá-la
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task;
        li.addEventListener('click', () => {
            editTask(index);
        });
        taskList.appendChild(li);
    });
}

// Função para editar uma tarefa
function editTask(index) {
    const newTask = prompt('Editar tarefa:', tasks[index]);
    if (newTask !== null) {
        tasks[index] = newTask.trim();
        displayTasks();
    }
}

// Exibir tarefas iniciais
displayTasks();

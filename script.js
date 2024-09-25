// Selecionando os elementos que serão manipulados no DOM
const addTaskButton = document.getElementById('add-task-btn');
const taskInput = document.getElementById('new-task');
const taskList = document.getElementById('task-list');

// Função para adicionar uma nova tarefa
function addTask() {
    // Pegando o valor do input (nova tarefa)
    const taskText = taskInput.value.trim();

    // Verifica se o campo de tarefa não está vazio
    if (taskText !== '') {
        // Cria um novo item de lista (li)
        const li = document.createElement('li');
        li.className = 'task-item';

        // Adiciona o texto da tarefa ao item
        li.appendChild(document.createTextNode(taskText));

        // Cria um botão de deletar tarefa
        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-btn';
        deleteButton.appendChild(document.createTextNode('Delete'));

        // Adiciona o botão de deletar ao item da lista
        li.appendChild(deleteButton);

        // Adiciona o item da lista ao elemento <ul> da página
        taskList.appendChild(li);

        // Limpa o campo de input após adicionar a tarefa
        taskInput.value = '';

        // Função para remover uma tarefa
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(li);
        });
    } else {
        // Exibe um alerta caso o campo esteja vazio
        alert('Please enter a task');
    }
}

// Evento para adicionar a tarefa ao clicar no botão
addTaskButton.addEventListener('click', addTask);

// Também adiciona a tarefa ao pressionar a tecla Enter
taskInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

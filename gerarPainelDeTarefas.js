const painelDeTarefas = document.getElementById('wrapper-content');

function gerarPainelDeTarefas(storedTasks) {
    for (let i = 0; i < storedTasks.length; i++) {
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('tarefa-div');
        // addClickListenerToDivs
        painelDeTarefas.appendChild(taskDiv);

        const tarefaText = document.createElement('h4');
        tarefaText.innerText = storedTasks[i];
        tarefaText.classList.add('tarefa-texto')
        taskDiv.appendChild(tarefaText);
    }
}
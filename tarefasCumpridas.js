function inserirNovaTarefaCumprida(tarefa) {

    if (tarefa) {

        const storedDoneTasks = JSON.parse(localStorage.getItem('tarefas-cumpridas')) || []
    
        storedDoneTasks.push(tarefa);
    
        localStorage.setItem('tarefas-cumpridas', JSON.stringify(storedDoneTasks));
    
        gerarPainelDeTarefasCumpridas(storedDoneTasks);

    } else {

        const storedDoneTasks = JSON.parse(localStorage.getItem('tarefas-cumpridas')) || []
    
        localStorage.setItem('tarefas-cumpridas', JSON.stringify(storedDoneTasks));
    
        gerarPainelDeTarefasCumpridas(storedDoneTasks);

    }
    


}

const painelDeTarefas2 = document.getElementById('wrapper-content-2');

function gerarPainelDeTarefasCumpridas(storedDoneTasks) {
    for (let i = 0; i < storedDoneTasks.length; i++) {
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('tarefa-div');
        addClickListenerToDivs(taskDiv)
        painelDeTarefas2.appendChild(taskDiv);

        const tarefaText = document.createElement('h4');
        tarefaText.innerText = storedDoneTasks[i];
        tarefaText.classList.add('tarefa-texto')
        taskDiv.appendChild(tarefaText);
    }
}
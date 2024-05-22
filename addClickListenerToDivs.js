function addClickListenerToDivs(taskDiv) {
    taskDiv.addEventListener('click', function() {
        taskDiv.style.transform = 'scaleX(0)';
        taskDiv.addEventListener('transitionend', function() {
            taskDiv.remove();
            atualizarStoredTasksAposExclusao()
        })
    })
}

let storedTasks2 = [];

function atualizarStoredTasksAposExclusao() {
    const novoArrayDeTarefas = document.querySelectorAll('.tarefa-texto');
    for (let i = 0; i < novoArrayDeTarefas.length; i++) {
        storedTasks2.push(novoArrayDeTarefas[i].textContent)
        
    }
    localStorage.setItem('tasks-test-2', JSON.stringify(storedTasks2));
    storedTasks2 = [];
    
}
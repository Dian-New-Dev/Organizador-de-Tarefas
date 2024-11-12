
function excludeTask(taskDiv) {
    taskDiv.style.transform = 'scaleX(0)';
    taskDiv.addEventListener('transitionend', function() {
        taskDiv.remove();
        atualizarStoredTasksAposExclusao()
        checarPlaceholder(storedTasks);
    })
}

let storedTasksA = [];

function atualizarStoredTasksAposExclusao() {
    const novoArrayDeTarefas = document.querySelectorAll('.tarefa-texto');
    for (let i = 0; i < novoArrayDeTarefas.length; i++) {
        storedTasksA.push(novoArrayDeTarefas[i].textContent)
        
    }
    localStorage.setItem('tasks-test-2', JSON.stringify(storedTasksA));
    storedTasksA = [];
    
}
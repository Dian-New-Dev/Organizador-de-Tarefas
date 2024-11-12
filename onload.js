const storedTasks = JSON.parse(localStorage.getItem('tasks-test-2')) || [];
document.addEventListener('DOMContentLoaded', function (){
    if (storedTasks.length === 0) {
        //mostrar placeholder
    } else {
        //mostrar tarefas armazenadas
        gerarPainelDeTarefas(storedTasks);
        checarPlaceholder(storedTasks);
    }


})
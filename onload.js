document.addEventListener('DOMContentLoaded', function (){
    const storedTasks = JSON.parse(localStorage.getItem('tasks-test-2')) || [];
    gerarPainelDeTarefas(storedTasks);
})
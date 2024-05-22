document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Retrieve current tasks from LocalStorage or initialize an empty array if it doesn't exist yet
    const storedTasks = JSON.parse(localStorage.getItem('tasks-test-2')) || [];

    // Get the new task input value
    const inputValue = document.getElementById('novaTarefa').value;

    // Add the new task to the array of tasks
    storedTasks.push(inputValue);

    // Store the updated array of tasks in LocalStorage
    localStorage.setItem('tasks-test-2', JSON.stringify(storedTasks));

    painelDeTarefas.innerHTML = '';

    gerarPainelDeTarefas(storedTasks);

    document.getElementById('novaTarefa').value = '';  //limpa o input apos submeter
});

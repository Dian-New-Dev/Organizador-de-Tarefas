function checarPlaceholder(storedTasks) {
    const placeholderDiv = document.getElementById('placeholder');
    if (placeholderDiv && storedTasks.length !== 0) {
        placeholderDiv.classList.add('esconder-placeholder');
    } 
    if (placeholderDiv && storedTasks.length === 0) {
        placeholderDiv.classList.remove('esconder-placeholder');
    }
}

//essa função checa se storedTasks tem algum valor contido
//se não tiver, não há task para renderizar
//então renderiza-se um placeholder
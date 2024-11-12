function addClickListenerToDivs(taskDiv) {
    taskDiv.addEventListener('click', function() {
        if (taskDiv.id === 'menu-de-opcoes-aberto') {
            fecharOpcoes(taskDiv);
        } else {
            abrirOpcoes(taskDiv);
        }
        
    })
}



function abrirOpcoes(taskDiv) {

    if (taskDiv.classList.contains('construiu-o-painel-de-opcoes')) {
        taskDiv.id = 'menu-de-opcoes-aberto';
        const opcoesDiv = taskDiv.querySelector('.opcoesDiv');
            opcoesDiv.style.right = '0';

    } else {
        taskDiv.classList.add('construiu-o-painel-de-opcoes')

        taskDiv.id = 'menu-de-opcoes-aberto';

        const opcoesDiv = document.createElement('div');
        opcoesDiv.classList.add('opcoesDiv')
        taskDiv.appendChild(opcoesDiv);

        const opcaoCumprir = document.createElement('button');
        opcaoCumprir.innerText = '✔'
        opcaoCumprir.classList.add('botoes-taskDiv')
        opcaoCumprir.id = 'botao-de-cumprir-tarefa';
        opcoesDiv.appendChild(opcaoCumprir);

        opcaoCumprir.addEventListener('click', function() {
            excludeTask(taskDiv)
        })

        setTimeout(() => {
            opcoesDiv.style.right = '0';
        }, 0)

    }

    

}

function fecharOpcoes(taskDiv) {
    const menuDeOpcoesParaFechar = taskDiv.querySelector('.opcoesDiv')
    menuDeOpcoesParaFechar.style.right = '-120px';

    taskDiv.id = '';

}
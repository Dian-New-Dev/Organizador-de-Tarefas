# Ticket Master

## Descrição

Página simples que busca emular um painel de tickets. Tem dois propósitos:

1) Ser um lugar para depositar pendências gerais relativas aos meus estudos e projetos em desenvolvimento web;
2) Ser um checklist diário do que preciso fazer no dia.

## Features implementadas

* Visual estilo cyberpunk, com neon;
* Capacidade de marcar tarefas como feitas;
* Armazenar tarefas no localStorage do navegador.

## Features pretendidas

* Animação em canvas, interativa;
* Consumir API para renderizar uma citação aleatória de motivação;
* Drag and drop para reorganizar a ordem visual dos tickets.

## Aprendizado

1) Problemas de height do body se estendendo menos ou mais que o necessário me fizeram descobrir que:

    * no geral, body não recebe height definido;
    * no geral, html precisa ter body 100% definido;
    * para o body se estender por toda a página mesmo não tendo conteúdo suficiente, ele deve ter min-height: 100vh.
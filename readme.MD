Projeto: Checklist diário

Propósito: duplo:
    1 - Ser um lugar para depositar pendências gerais relativas
    aos meus estudos e projetos em web developmetn
    2 - Ser um checklist diário do que preciso fazer
    no dia.

Features:

    1 - Visual estilo cyberpunk, com neon
    2 - Mouse clicks com som
    3 - Converter de um txt para um objeto js os dados (tarefas)
    4 - Capacidade de marcar tarefas como feitas
    5 - Mandar tarefas feitas para uma coluna própria, separada
    das pendências.
    6 - Animação em canvas, interativa
    7 - Citação de incentivo, tirada aleatoriamente de API (1 por dia)

Passos

    1 - Conteúdo html
    2 - Funcionalidade js
    3 - Estilização css
    4 - Animações canvas
    5 - Áudio

Evolução

- Não pegar mais dados de txt. Armazenar, no localStorage do navegador,
dados (tarefas) inputados pelo user na própria página. 

- Problemas de height do body se estendendo menos ou mais que o necessário
me fizeram descobrir que:

    * no geral, body não recebe height definido;
    * no geral, html precisa ter body 100% definido;
    * para o body se estender por toda a página mesmo não tendo
    conteúdo suficiente, ele deve ter min-height: 100vh;

- Por hora, as imagens laterais são <img>'s com position absolute e 
mask-image: linear-gradient para escurecer as laterais. Quero
experimentar trocá-las por <canvas> carregando as mesmas imagens para 
ver se consigo animar as mesmas.
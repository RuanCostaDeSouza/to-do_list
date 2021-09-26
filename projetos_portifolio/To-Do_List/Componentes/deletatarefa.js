function BotaoDeleta(){
    const botaoDeleta = document.createElement('button');
    botaoDeleta.innerText = 'deletar';
    botaoDeleta.addEventListener('click',deletaTarefa)

    return botaoDeleta
}

function deletaTarefa(evento){
    const botaoDeleta= evento.target;
    const tarefaDeletada = botaoDeleta.parentElement;
    tarefaDeletada.remove();

    return botaoDeleta
}

export default BotaoDeleta
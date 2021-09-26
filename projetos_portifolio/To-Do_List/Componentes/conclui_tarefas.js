function BotaoConclui(){
    const botaoConclui = document.createElement('button');
    botaoConclui.innerText = 'concluir';
    botaoConclui.classList.add('check-button');
    botaoConclui.addEventListener('click',riscaTarefa);

    return botaoConclui
}

function riscaTarefa(evento){
    const concluindoTarefa = evento.target;
    const tarefaCompleta = concluindoTarefa.parentElement;
    tarefaCompleta.classList.toggle('done');
    
}

export default BotaoConclui

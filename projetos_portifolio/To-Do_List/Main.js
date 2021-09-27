import BotaoDeleta from './Componentes/deletatarefa.js';
import BotaoConclui from './Componentes/conclui_tarefas.js';

(()=> {function criarTarefa(evento){
        evento.preventDefault();
        const input1 = document.getElementById('input1');
        const valorDoInput1= input1.value;
        const lista = document.getElementById('tarefa');
        const tarefa = document.createElement('li');
        const conteudo = `<p class="content">${valorDoInput1}</p>`;
        tarefa.innerHTML=conteudo;
        tarefa.appendChild(BotaoConclui());
        tarefa.appendChild(BotaoDeleta());
        lista.appendChild(tarefa);
        tarefa.classList.add('task');
        input1.value = " ";
}
const novaTarefa = document.getElementById('button');

novaTarefa.addEventListener('click',criarTarefa);})

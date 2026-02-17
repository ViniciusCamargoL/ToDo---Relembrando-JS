let tarefas = [];

if (localStorage.getItem('tarefas')) {
    tarefas = JSON.parse(localStorage.getItem('tarefas'));
    exibir();
};

function adicionar() {
    const adicionarTarefa = document.getElementById('nomeTarefa');
    const texto = adicionarTarefa.value.trim();
    if (texto === "") {
        alert("Digite uma Tarefa para ser adcionado");
        return;
    }

    tarefas.push(texto);

    salvar();
    exibir();

    adicionarTarefa.value = "";
};

function salvar() {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
};

function remover(index) {
    tarefas.splice(index, 1);
    
    salvar();
    exibir();
};

function exibir() {
    const lista = document.getElementById('lista');

    lista.innerHTML = "";

    tarefas.forEach((tarefa, index) => {
        const li = document.createElement("li");
        li.textContent = tarefa;

        const btn = document.createElement("button");
        btn.classList.add("apagar");
        btn.textContent = "Remover";
        btn.onclick = () => remover(index);

        lista.appendChild(li);
        li.appendChild(btn);
    });
};
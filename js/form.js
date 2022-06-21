const btnAdicionarPaciente = document.querySelector("#adicionar-paciente");
btnAdicionarPaciente.addEventListener("click", handleAdicionarPaciente);

function handleAdicionarPaciente(event) {
    event.preventDefault();
    const form = document.querySelector("#form-adiciona");
    const paciente = obtemPacienteDoForm(form);

    var erros = validaPaciente(paciente);

    if (erros.length > 0) {
        exibeMensagemDeErros(erros);

        return;
    }

    adicionaPacienteNaTabela(paciente);

    form.reset();

    var mensagemErro = document.querySelector("#mensagens-erro");
    mensagemErro.innerHTML = ""
}

function adicionaPacienteNaTabela(paciente) {
    var pacienteTr = montaTr(paciente);
    const tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function exibeMensagemDeErros(erros) {
    const ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function obtemPacienteDoForm(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaIMC(form.peso.value, form.altura.value)
    }

    return paciente;
}

function montaTr(paciente) {
    const pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe) {
    const td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente){
    const erros = []

    if (paciente.nome.length === 0) {
        erros.push("O nome nao pode ser em branco")
    }

    if (paciente.peso.length === 0) {
        erros.push("O peso nao pode ser em branco")
    }

    if (paciente.altura.length === 0) {
        erros.push("A altura nao pode ser em branco")
    }

    if(paciente.gordura.length === 0) {
        erros.push("A gordura nao pode ser em branco")
    }
    
    if (!validaPeso(paciente.peso)){
        erros.push("Peso e invalido")
    }

    if(!validaAltura(paciente.altura)){
        erros.push("altura e invalida")
    }

    return erros;
}
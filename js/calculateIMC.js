const titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida nutricionista";

const pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];

    const pesoPaciente = paciente.querySelector(".info-peso");
    const alturaPaciente = paciente.querySelector(".info-altura");
    const peso = pesoPaciente.textContent;
    const altura = alturaPaciente.textContent;

    let infoImc = paciente.querySelector(".info-imc");

    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);

    if (!pesoValido) {
        var pesoValido = false;
        infoImc.textContent = "Peso invalido!";
        infoImc.classList.add("invalido");
    }

    if (!alturaValida) {
        var alturaValida = false;
        infoImc.textContent = "Altura invalido!";
        infoImc.classList.add("invalido");
    }

    if (pesoValido && alturaValida) {
        const imc = calculaIMC(peso, altura)
        infoImc.textContent = imc;
    }
}

function validaPeso(peso) {
    if (peso >= 0 && peso < 1000) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {
    if(altura >= 0 && altura <= 3.0) {
        return true;
    } else {
        return false;
    }
}

function calculaIMC(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2)
}
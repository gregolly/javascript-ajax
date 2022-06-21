const buscarPaciente = document.querySelector("#buscar-pacientes");

buscarPaciente.addEventListener("click", () => {
    var xml = new XMLHttpRequest();
    xml.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    xml.addEventListener("load", () => {
        const erro = document.querySelector("#erro-ajax");
        if (xml.status == 200) {
            erro.classList.add("invisivel");
            var resposta = xml.responseText;
            var pacientes = JSON.parse(resposta);

            pacientes.forEach((paciente) => {
                adicionaPacienteNaTabela(paciente)
            })
        } else {
            console.log(xml.status);
            consolee.log(xml.responseText);
            erro.classList.remove("invisivel");
        }
    });
    xml.send();
    
});
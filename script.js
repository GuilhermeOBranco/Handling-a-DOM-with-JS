window.onload = adicionaOptions;

function adicionaOptions() {
    var select = document.getElementById("selectOption");

    for (var i = 0; i <= 20; i++) {
        var options = document.createElement('option');
        options.className = 'i';
        options.text = i;
        select.appendChild(options);
    }
}

function adicionaCampos() {
    
    var select = document.getElementById("selectOption");
    var index = select.selectedIndex;
    var divAtual = document.getElementById("inputs");

    var elementos = document.getElementsByTagName("input");

    if (elementos.length > 0) {
        for (var i = elementos.length - 1; i >= 0; --i) {
            elementos[i].remove();
        }
    }

    for (var i = 0; i < index; i++) {
        
        var inputDiderenca = document.createElement("input");
        var input = document.createElement('input');
        var inputRadioSobra = document.createElement('input');
        var inputRadioFalta = document.createElement('input');
        var inputRadioZerado = document.createElement('input');

        inputDiderenca.id = i;
        inputDiderenca.name = "diferenca" +i;
        inputDiderenca.className = "diferenca";
        inputDiderenca.placeholder = "Insira a difernça";
        inputDiderenca.type = "hidden";

        inputRadioSobra.name  = "inputRadio" +i;
        inputRadioFalta.name  = "inputRadio" +i;
        inputRadioZerado.name = "inputRadio" +i;

        inputRadioSobra.id    = "Sobra" +i;
        inputRadioFalta.id    = "Falta" +i;
        inputRadioZerado.id   = "Zerado"+i;

        inputRadioSobra.value    = "Sobra";
        inputRadioFalta.value    = "Falta";
        inputRadioZerado.value   = "Zerado";

        inputRadioSobra.className    = "inputRadio";
        inputRadioFalta.className    = "inputRadio";
        inputRadioZerado.className   = "inputRadio";

        inputRadioSobra.type    = "radio";
        inputRadioFalta.type    = "radio";
        inputRadioZerado.type   = "radio";

        inputRadioSobra.addEventListener('click',validaRadio);
        inputRadioFalta.addEventListener('click',validaRadio);
        inputRadioZerado.addEventListener('click',validaRadio);

        input.name        = "inputOption";
        input.id          = i;
        input.className   = "form-control mt-3";
        input.placeholder = i;
        
        divAtual.appendChild(input);

        divAtual.appendChild(inputRadioSobra);
        divAtual.appendChild(inputRadioFalta);
        divAtual.appendChild(inputRadioZerado);
        divAtual.appendChild(inputDiderenca);
    }

}

function validaRadio()
{
    var inputRadio = document.getElementsByClassName("inputRadio");
    var inputHidden = document.getElementsByClassName("diferenca");

    for(var i =0; i < inputRadio.length; i++)
    {
        if(inputRadio[i].checked)
        {
            console.log(inputRadio[i].name);
        }
    }
}





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
        var lSobra = document.createElement('label');
        var lFalta = document.createElement('label');
        var lZerado = document.createElement('label');

        lSobra.innerText = "Sobra";
        lFalta.innerText = "Falta";
        lZerado.innerText = "Zerado";

        inputDiderenca.id = i;
        inputDiderenca.name = "diferenca" + i;
        inputDiderenca.className = "diferenca";
        inputDiderenca.placeholder = "Insira a difernça";
        inputDiderenca.type = "hidden";

        inputRadioSobra.name = "inputRadio" + i;
        inputRadioFalta.name = "inputRadio" + i;
        inputRadioZerado.name = "inputRadio" + i;

        inputRadioSobra.id = "Sobra" + i;
        inputRadioFalta.id = "Falta" + i;
        inputRadioZerado.id = "Zerado" + i;

        inputRadioSobra.value = "Sobra";
        inputRadioFalta.value = "Falta";
        inputRadioZerado.value = "Zerado";

        inputRadioSobra.className = "inputRadio";
        inputRadioFalta.className = "inputRadio";
        inputRadioZerado.className = "inputRadio";

        inputRadioSobra.type = "radio";
        inputRadioFalta.type = "radio";
        inputRadioZerado.type = "radio";

        inputRadioSobra.addEventListener('click', validaRadio);
        inputRadioFalta.addEventListener('click', validaRadio);
        inputRadioZerado.addEventListener('click', validaRadio);

        input.name = "inputOption";
        input.id = i;
        input.className = "form-control mt-3";
        input.placeholder = i;

        divAtual.appendChild(input);

        divAtual.appendChild(lSobra);
        divAtual.appendChild(inputRadioSobra);
        divAtual.appendChild(lFalta);
        divAtual.appendChild(inputRadioFalta);
        divAtual.appendChild(lZerado);
        divAtual.appendChild(inputRadioZerado);
        divAtual.appendChild(inputDiderenca);
        
    }

}

function validaRadio() {
    var inputRadio = document.getElementsByClassName("inputRadio");
    var inputHidden = document.getElementsByClassName("diferenca");

    for (var i = 0; i < inputRadio.length; i++) {
        if (inputRadio[i].checked) {
            switch (i) {
                case 0:
                    inputHidden[0].type = "visible";
                    break;
                case 1:
                    inputHidden[0].type = "visible";
                    break;
                case 3:
                    inputHidden[1].type = "visible";
                    break;
                case 4:
                    inputHidden[1].type = "visible";
                    break;
                case 6:
                    inputHidden[2].type = "visible";
                    break;
                case 7:
                    inputHidden[2].type = "visible";
                    break;
                case 9:
                    inputHidden[3].type = "visible";
                    break;
                case 10:
                    inputHidden[3].type = "visible";
                    break;
                case 12:
                    inputHidden[4].type = "visible";
                    break;
                case 13:
                    inputHidden[4].type = "visible";
                    break;
                case 15:
                    inputHidden[5].type = "visible";
                    break;
                case 16:
                    inputHidden[5].type = "visible";
                    break;
                case 18:
                    inputHidden[6].type = "visible";
                    break;
                case 19:
                    inputHidden[6].type = "visible";
                    break;
                case 21:
                    inputHidden[7].type = "visible";
                    break;
                case 22:
                    inputHidden[7].type = "visible";
                    break;
                case 24:
                    inputHidden[8].type = "visible";
                    break;
                case 25:
                    inputHidden[8].type = "visible";
                    break;
                case 27:
                    inputHidden[9].type = "visible";
                    break;
                case 28:
                    inputHidden[9].type = "visible";
                    break;
                case 30:
                    inputHidden[10].type = "visible";
                    break;
                case 31:
                    inputHidden[10].type = "visible";
                    break;
                case 33:
                    inputHidden[11].type = "visible";
                    break;
                case 34:
                    inputHidden[11].type = "visible";
                    break;
                case 36:
                    inputHidden[12].type = "visible";
                    break;
                case 37:
                    inputHidden[12].type = "visible";
                    break;
                case 39:
                    inputHidden[13].type = "visible";
                    break;
                case 40:
                    inputHidden[13].type = "visible";
                    break;
                case 42:
                    inputHidden[14].type = "visible";
                    break;
                case 43:
                    inputHidden[14].type = "visible";
                    break;
                case 45:
                    inputHidden[15].type = "visible";
                    break;
                case 46:
                    inputHidden[15].type = "visible";
                    break;
                case 48:
                    inputHidden[16].type = "visible";
                    break;
                case 49:
                    inputHidden[16].type = "visible";
                    break;
                case 51:
                    inputHidden[17].type = "visible";
                    break;
                case 52:
                    inputHidden[17].type = "visible";
                    break;
                case 54:
                    inputHidden[18].type = "visible";
                    break;
                case 55:
                    inputHidden[18].type = "visible";
                    break;
                case 57:
                    inputHidden[19].type = "visible";
                    break;
                case 58:
                    inputHidden[19].type = "visible";
                    break;
                case 60:
                    inputHidden[20].type = "visible";
                    break;
                case 61:
                    inputHidden[20].type = "visible";
                    break;

                case 2:
                    inputHidden[0].type = "hidden";
                    break;
                case 5:
                    inputHidden[1].type = "hidden";
                    break;
                case 8:
                    inputHidden[2].type = "hidden";
                    break;
                case 11:
                    inputHidden[3].type = "hidden";
                    break;
                case 14:
                    inputHidden[4].type = "hidden";
                    break;
                case 17:
                    inputHidden[5].type = "hidden";
                    break;
                case 20:
                    inputHidden[6].type = "hidden";
                    break;
                case 23:
                    inputHidden[7].type = "hidden";
                    break;
                case 26:
                    inputHidden[8].type = "hidden";
                    break;
                case 29:
                    inputHidden[9].type = "hidden";
                    break;
                case 32:
                    inputHidden[10].type = "hidden";
                    break;
                case 35:
                    inputHidden[11].type = "hidden";
                    break;
                case 38:
                    inputHidden[12].type = "hidden";
                    break;
                case 41:
                    inputHidden[13].type = "hidden";
                    break;
                case 44:
                    inputHidden[14].type = "hidden";
                    break;
                case 47:
                    inputHidden[15].type = "hidden";
                    break;
                case 50:
                    inputHidden[16].type = "hidden";
                    break;
                case 53:
                    inputHidden[17].type = "hidden";
                    break;
                case 56:
                    inputHidden[18].type = "hidden";
                    break;
                case 59:
                    inputHidden[19].type = "hidden";
                    break;
                case 62:
                    inputHidden[20].type = "hidden";
                    break;
            }

        }



    }
}







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

function formatarMoeda() {
    var valor = document.getElementsByName()

    for (var i = 0; i < valor; i++) {
        var elemento = document.getElementById('valor');
        var valor = elemento.value;

        valor = valor + '';
        valor = parseInt(valor.replace(/[\D]+/g, ''));
        valor = valor + '';
        valor = valor.replace(/([0-9]{2})$/g, ",$1");

        if (valor.length > 6) {
            valor = valor.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
        }

        elemento.value = valor;

    }


}


function adicionaCampos() {
    var select = document.getElementById("selectOption");
    var index = select.selectedIndex;
    var divAtual = document.getElementById("inputs");

    var elementos = document.getElementsByName("inputOption");

    if (elementos.length > 0) {
        for (var i = elementos.length - 1; i >= 0; --i) {
            elementos[i].remove();
        }
    }

    for (var i = 0; i < index; i++) {
        var input = document.createElement('input');
        input.name = "inputOption";
        input.id = i;
        input.className = "form-control mt-3";
        input.placeholder = i;
        input.onkeyup = "formatarMoeda();";
        divAtual.appendChild(input);
    }

}





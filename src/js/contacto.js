const form = document.getElementById('form');

function valida_envia() {
    if (form.elements[0].value=="") {
        alert("Por favor, rellene su nombre")
    }

    else if (form.elements[1].value=="") {
        alert("Por favor, adjunte su email")
    }

    else if (form.elements[2].value=="") {
        alert("Debe escribir un contenido en el mensaje")
    }
    return 0

}

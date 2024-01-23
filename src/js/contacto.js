const form = document.getElementById('form');

function valida_form() { 

    if (form.elements[0].value=="") {
        alert("Por favor, rellene su nombre");
        return false;
    }

    else if (form.elements[1].value=="") {
        alert("Por favor, adjunte su email");
        return false;
    }

    else if (form.elements[2].value=="") {
        alert("Debe escribir un contenido en el mensaje");
        return false;
    }
    else if ( form.elements[2].value.split(/\s+/).length < 5){
    
            alert("El mensaje debe tener mínimo 5 palabras");
            return false;
        } 
        else{
            return true;   
        }
} 

document.getElementById("subscribirse").addEventListener("click", subscribirse);

function subscribirse(){
    alert("Las suscripciones se habilitarán pronto");
    let respuesta=confirm("¿Desea dejar una consulta online?");
    if(respuesta){
        window.location.href = './contacto.html';
    }
}

function enviarForm(){
    let respuesta2=confirm("Estás seguro de querer enviar este mensaje?");
    if(respuesta2){
        document.getElementById("formContacto").submit();
        alert("Gracias por tu mensaje, " + document.getElementById("name").value);
    }
}



function cambiarModo(){
    document.getElementById("nos").classList.toggle("bg-white");
    document.getElementById("nos").classList.toggle("bg-gris");
    document.getElementById("nos").classList.toggle("text-dark");
    document.getElementById("nos").classList.toggle("text-white");
    if (document.getElementById("modOscuro").innerHTML==="Modo oscuro"){
        document.getElementById("modOscuro").innerHTML="Modo claro";
    } else{
        document.getElementById("modOscuro").innerHTML="Modo oscuro";
    }

}
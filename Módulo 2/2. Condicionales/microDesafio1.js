// Micro-desafio 1 - Perfil de usuario


// Variables
let perfil = "Administrador" ;  // administrador, asistente o invitado


// Condicional
switch (perfil) {

    case "":
    case null:
    case undefined:
        console.log("Debe especificar el perfil de usuario");
        break;

    case "administrador":
    case "ADMINISTRADOR":
    case "Administrador":
        console.log("Usted tiene todos los privilegios de uso del sistema");
        break;

    case "asistente":
    case "ASISTENTE":
    case "Asistente":
        console.log("Usted tiene sólo permisos de registrar, modificar y consultar datos");
        break;

    case "invitado":
    case "INVITADO":
    case "Invitado":
        console.log("Usted sólo tiene permisos de consultar datos");
        break;

    default:
        console.log("Debe especificar un perfil válido");
};


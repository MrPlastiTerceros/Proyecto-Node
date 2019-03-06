var divContenedorBotonesUsuario = document.getElementById("divBotones");
var divContenedorListaPosts = document.getElementById("div-contenedor-lista-posts");
var listaUsuarios = []
var respuesta = [];
consultarListaUsuarios();

if (listaUsuarios != undefined) {
    for (var i = 0; i < listaUsuarios.length; i++) {
        agregarBoton(listaUsuarios[i].nombre, listaUsuarios[i].id)
    }

} else {
    console.log("No hay usuarios definidos");
}

/*
- agregarBoton(nombre, id): Agrega un botón para acceder a los posts del usuario indicado

- verPostsUsuario(idUsuario): Consulta y muestra los posts creados por el usuario indicado

- consultarListaUsuarios(): Consulta y devuelve la lista de usuarios en un array

- consultarListaPostsUsuario(idUsuario): Consulta y devuelve la lista de posts para un usuario
*/

/**
 * Agrega un botón para acceder a los posts del usuario indicado
 *
 * @param nombre           Nombre del usuario
 * @param id               id del usuario 
 *
 */
function agregarBoton(nombre, id) {

    let boton = document.createElement("button");

    boton.setAttribute("class", "boton-usuario");

    boton.appendChild(document.createTextNode(nombre));

    boton.addEventListener("click", function () {
        verPostsUsuario(id);
    });

    divContenedorBotonesUsuario.appendChild(boton);

}
/*---------------------------------------------------------------------------------------
*/
/**
 * Consulta y muestra los posts creados por el usuario indicado
 *
 * @param idUsuario        id del usuario (number)
 *
 */
function verPostsUsuario(idUsuario) {
    //settea el div como contenedor de un string
    divContenedorListaPosts.innerHTML = "";
    //variable que llama a la funcion consultaListaDeUsuario
    let listaPosts = consultarListaPostsUsuario(idUsuario);

    for (let i = 0; i < listaPosts.length; i++) {
        /*
            TODO:
            - Crear un div
            - Ponerle clase "post"
            - Agregarle como texto (textNode) el título del post
             que está "iterando" en el FOR
            - Colocar ("append") ese div nuevo en el 
            divContenedorListaPosts

            Si tienen ganas y pueden, agreguen validaciones:
            - Que el título exista (que la propiedad "titulo"
             no sea undefined)
            - Que el título no esté vacío (que la propiedad 
                "titulo" no sea igual a "")

            Si las agregan, prueben generar objetos sin propiedad 
            "título" o con título vacío
            a ver cómo reacciona.
        */
    }
}
/**
 * Consulta y devuelve la lista de posts para un usuario
 *
 * @param idUsuario: id del usuario a consultar
 *
 * @return: Array de posts para el usuario, 
 * en objetos {id, titulo, contenido}
 *
 */
function consultarListaPostsUsuario(idUsuario) {

    switch (idUsuario) {
        case 1:
            respuesta.push(
                {
                    id: 1,
                    titulo: "Uzumaki by Junji Ito",
                    contenido: "Uzumaki is a seinen horror manga series written and illustrated by Junji Ito. Appearing as a serial in the weekly manga magazine Big Comic Spirits from 1998 to 1999, the chapters were compiled into three bound volumes by Shogakukan and published from August 1998 to September 1999."
                });
            break;
        case 2:
            respuesta.push(
                {
                    id: 2,
                    titulo: "Elfen Lied by Lynn Okamoto",
                    contenido: "Elfen Lied is a Japanese manga series written and illustrated by Lynn Okamoto. It was originally serialized in Shueisha's Weekly Young Jump from June 2002 to August 2005, with the 107 chapters collected into twelve tankōbon volumes."
                });
            break;
        case 3: respuesta.push(
            {
                id: 3,
                titulo: "Boogiepop and Others by Kouhei Kadono",
                contenido: "Boogiepop and Others (ブギーポップは笑わない Bugīpoppu wa Warawanai) is a Japanese light novel written by Kouhei Kadono and illustrated by Kouji Ogata. The first in the Boogiepop series, it was released in 1998 by MediaWorks and won the fourth Dengeki Game Novel Contest."
            });
            break;
        default: console.log("Introduce un ID de usuario")
    }
    // Se muestra por consola para control en las pruebas
    console.log(respuesta);
    return respuesta;
    /*

    TODO: generar el código necesario para que según el
     idUsuario recibido devuelva resultados diferentes.
    En todos los casos, lo que hacemos es agregar 
    objetos al array "respuesta".Cada objeto que agreguemos
    tendrá que tener la siguiente forma (expresado como propiedad:
    <tipo de dato>)
    {
        id: <number>,
        titulo: <string>,
        contenido: <string>
    }

    */
}
/**
 * Consulta y devuelve la lista de usuarios en un array
 *
 * @return: Array de usuarios. Cada elemento es un objeto 
 * {id, nombre}
 *
 */
function consultarListaUsuarios() {
    listaUsuarios.push({
        id: 1,
        nombre: 'Ana'
    }, {
            id: 2,
            nombre: 'Jezabel'
        }, {
            id: 3,
            nombre: 'Ariana'
        })
    /*
    TODO: generar el código para que la función cree y 
    devuelva un array de objetos con la estructura:
    {
        id: <number>,
        nombre: <string>
    }
    */
}
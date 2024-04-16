//Micro-desafio 2 - Estructuración de películas

let peliculas = ["Turno de día", "30 noches con mi ex", "Bestia", "El monte", "Top Gun: Maverick", "Elvis", "Thor: amor y trueno"]

let funcionPelicula = (pelicula) => {
    if(peliculas.includes(pelicula)){
        peliculas.splice(peliculas.indexOf(pelicula), 1)
        peliculas.unshift(pelicula.toUpperCase())
        console.log(peliculas);
    } else {
        console.log("  La película no ha sido encontrada, estas son las posibles opciones:\n " + peliculas.join(", "));
    }
}

funcionPelicula()

//Peliculas a estrenar en string 
let peliculasEstreno = "Counter Strike, NOP, Vértigo, Nick, Avatar" 

//Excluir juego

 peliculasEstreno = peliculasEstreno.replace("Counter Strike, ", "")

 console.log(peliculasEstreno);

//Funcion para concatenar ambas estructuras de peliculas

 let funcionConcatenar = (peliculasArray, peliculasString) => {
    let peliculasConcatenadas = peliculasArray.concat(peliculasString.split(", "))
    console.log(peliculasConcatenadas);
 }

 funcionConcatenar(peliculas, peliculasEstreno)




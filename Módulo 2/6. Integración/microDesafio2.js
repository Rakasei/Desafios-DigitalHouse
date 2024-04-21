//Micro-desafio 2 - Promedio alumnos graduados por curso
let graduadosHTML5 = "30 45 25 34 18 23 16 50 72 70";
let graduadosCSS3 = "50 45 71 34 23 45 65 75 63 43 74 70";
let graduadosJavaScript = "70 65 58 45 23 57 34 17 72";
let graduadosNodeJS = "45 56 73 34 65 72 70 32";


// Transformamos las cadenas de strings en arrays
let graduadosHTML5Array = graduadosHTML5.split(" ")
let graduadosCSS3Array = graduadosCSS3.split(" ")
let graduadosJavaScriptArray = graduadosJavaScript.split(" ")
let graduadosNodeJSArray = graduadosNodeJS.split(" ")

//Declaramos la funcion que calculará el promedio de graduados del curso seleccionado
let promedioGraduados = (array1, array2, array3, array4, numero) => {

    //Declaramos la variable promedio
    let promedio = 0

    //Condicional if que en base al numero elegido, calculará el promedio de graduados por curso
    if (numero === 1){
        for(let i = 0; i < array1.length ; i++){
            promedio += parseInt(array1[i])
        } promedio /= array1.length
    } else if (numero === 2){
        for(let i = 0; i < array2.length ; i++){
            promedio += parseInt(array2[i])
        } promedio /= array2.length
    } else if (numero === 3){
        for(let i = 0; i < array3.length ; i++){
            promedio += parseInt(array3[i])
        }   promedio /= array3.length
    } else if (numero === 4) {
        for(let i = 0; i < array4.length ; i++){
            promedio += parseInt(array4[i])
        }   promedio /= array4.length
    
        // En caso de que no se reciba por parámetro un número válido, se mostrará por mensaje un error
    } else {
        console.log(`Debe ingresar un número que corresponda a un curso válido. Las opciones son: \n
        1 = HTML5
        2 = CSS3
        3 = JAVASCRIPT
        4 = NODEJS`);     
    }

    

   

    console.log(`El promedio de estudiantes graduados del curso ${numero} es de: ${promedio}`);
}

promedioGraduados(graduadosHTML5Array, graduadosCSS3Array, graduadosJavaScriptArray, graduadosNodeJSArray, 1)
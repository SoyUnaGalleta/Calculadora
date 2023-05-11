function digitar(digito) {
    let enPantalla = document.getElementsByClassName('pantalla')[0]
    if (enPantalla.innerHTML == 0) {
        enPantalla.innerHTML = digito
    } else {
        let textoNuevo = ''
        textoNuevo = enPantalla.innerHTML + digito
        enPantalla.innerHTML = textoNuevo
    }

    if (enPantalla.innerHTML.length > 18) {
        enPantalla.style.fontSize = '15px'
    }

    if (enPantalla.innerHTML.length > 24) {
        alert ('Excediste el número de digitos')
    }
}

function borrarPantalla() {
    let enPantalla = document.getElementsByClassName('pantalla')[0]
    enPantalla.innerHTML = '0'
}


function relizarCalculo() {
    let enPantalla = document.getElementsByClassName('pantalla')[0]
    let texto = enPantalla.innerHTML
    let arrayNumeros = texto.split('')

    if (arrayNumeros.includes( '+' )) {

        let primerValor = ''
        let segundoValor = ''
        let valorFinal = 0

        for (let i = 0; i < arrayNumeros.indexOf( '+' ); i++) {
            primerValor = primerValor + arrayNumeros[i]
        } 

        for (let i = arrayNumeros.indexOf( '+' ) + 1 ; i < arrayNumeros.length; i++) {
            segundoValor = segundoValor + arrayNumeros[i]
        }

        valorFinal = parseFloat(primerValor) + parseFloat(segundoValor)
        enPantalla. innerHTML = valorFinal

    }

    if (arrayNumeros.includes( '-' )) {

        let primerValor = ''
        let segundoValor = ''
        let valorFinal = 0

        for (let i = 0; i < arrayNumeros.indexOf( '-' ); i++) {
            primerValor = primerValor + arrayNumeros[i]
        } 

        for (let i = arrayNumeros.indexOf( '-' ) + 1 ; i < arrayNumeros.length; i++) {
            segundoValor = segundoValor + arrayNumeros[i]
        }

        valorFinal = parseFloat(primerValor) - parseFloat(segundoValor)
        enPantalla. innerHTML = valorFinal

    }

    if (arrayNumeros.includes( '*' )) {

        let primerValor = ''
        let segundoValor = ''
        let valorFinal = 0

        for (let i = 0; i < arrayNumeros.indexOf( '*' ); i++) {
            primerValor = primerValor + arrayNumeros[i]
        } 

        for (let i = arrayNumeros.indexOf( '*' ) + 1 ; i < arrayNumeros.length; i++) {
            segundoValor = segundoValor + arrayNumeros[i]
        }

        valorFinal = parseFloat(primerValor) * parseFloat(segundoValor)
        enPantalla. innerHTML = valorFinal

    }

    if (arrayNumeros.includes( '/' )) {

        let primerValor = ''
        let segundoValor = ''
        let valorFinal = 0

        for (let i = 0; i < arrayNumeros.indexOf( '/' ); i++) {
            primerValor = primerValor + arrayNumeros[i]
        } 

        for (let i = arrayNumeros.indexOf( '/' ) + 1 ; i < arrayNumeros.length; i++) {
            segundoValor = segundoValor + arrayNumeros[i]
        }

        valorFinal = parseFloat(primerValor) / parseFloat(segundoValor)
        enPantalla. innerHTML = valorFinal

    }

} 
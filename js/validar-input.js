function validar(e){
    //Capturamos el codigo de la tecla persionada
    let CodigoTeclaPresionada = e.keyCode || e.which
    //Lo convertimos a cadena de texto y a minúsculas
    let teclado = String.fromCharCode(CodigoTeclaPresionada).toLowerCase();
    let abecedario = " abcdefghijklmnñopqrstuvwxyz" //Se debe agregar un espacio

    let codigoTeclasEspeciales = "8-37-38-46-164"
    // cod 8 : tecla espaciadora
    //cod 37 : tecla direccional izquierda
    //cod 38 : tecla direccional derecha
    // cod 46 : tecla suprimnir
    //cod 164 : letra ñ
    let teclado_especial = false
   
    //Verificamos si la tecla presionada es una tecla especial
    for(let i in codigoTeclasEspeciales){
       if(CodigoTeclaPresionada === codigoTeclasEspeciales[i]){
            teclado_especial = true
            break
       }
    }
    // Impedimos que se ingresen otros caracteres
    if(abecedario.indexOf(teclado) === -1 &&  teclado_especial === false){
        return false
    }

}


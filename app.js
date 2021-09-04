var selecionarCodigo = document.getElementById("selecao-entrada")
var campoEntrada = document.getElementById("campo-entrada")
var cesarNumero = document.getElementById("selecao-cifra")
var codificar = document.getElementById("codificando")
var decodificar = document.getElementById("decodificando")
var resultado = document.getElementById("resultado")
var btn = document.getElementById("submeter")
var texto = campoEntrada.value



// Evento ocorrido ao selecionar a Cifra de César

selecionarCodigo.addEventListener('change', function() {
    if (selecionarCodigo.value === "1") {
        document.getElementById("someDiv").style.display = 'block'
    } else {
        document.getElementById("someDiv").style.display = 'none'

    }
})

// codificando em cifra de césar

function cifraDeCesar(texto, adiciona) {
    var guardaMensagem = texto.split('')
    var msgCriptografada = []
    var cesarNumero = []

    for (var i = 0; i < guardaMensagem.length; i++) {
        if (guardaMensagem[i].charCodeAt() >= 65 && guardaMensagem[i].charCodeAt() <= 90) {
            var testando = ((guardaMensagem[i].charCodeAt()) - 65 + adiciona) % 26
            cesarNumero.push(testando + 65)
        } else if (guardaMensagem[i].charCodeAt() >= 97 && guardaMensagem[i].charCodeAt() <= 122) {
            var testando = ((guardaMensagem[i].charCodeAt()) - 97 + adiciona) % 26
            cesarNumero.push(testando + 97)
        } else {
            cesarNumero.push(guardaMensagem[i].charCodeAt())
        }
    }
    for (var j = 0; cesarNumero.length > j; j++) {
        msgCriptografada.push(String.fromCharCode(cesarNumero[j]))
    }
    return msgCriptografada.join('')

}

// decodificando em cifra de césar

function cesarDecifrado(texto, adiciona) {
    var guardaMensagem = texto.split('')
    var msgCriptografada = []
    var cesarNumero = []

    for (let i = 0; i < guardaMensagem.length; i++) {
        if (guardaMensagem[i].charCodeAt() >= 65 && guardaMensagem[i].charCodeAt() <= 90) {
            let testando = ((guardaMensagem[i].charCodeAt()) - 65 - adiciona) % 26
            cesarNumero.push((testando < 0 ? testando + 26 : testando) + 65)
        } else if (guardaMensagem[i].charCodeAt() >= 97 && guardaMensagem[i].charCodeAt() <= 122) {
            let testando = ((guardaMensagem[i].charCodeAt()) - 97 - adiciona) % 26
            cesarNumero.push((testando < 0 ? testando + 26 : testando) + 97)
        } else {
            cesarNumero.push(guardaMensagem[i].charCodeAt())
        }
    }
    for (var j = 0; cesarNumero.length > j; j++) {
        msgCriptografada.push(String.fromCharCode(cesarNumero[j]))
    }
    return msgCriptografada.join('')

}

// codificando em Base 64

function codifica64(texto) {
    var msgCode64 = btoa(texto)
    return msgCode64
}

// decodificando em Base 64

function decodifica64(texto) {
    var msgCode64 = atob(texto)
    return msgCode64
}

// evento do radio button 

btn.addEventListener('click', function() {

    if (cifraDeCesar.checked) {
        resultado.innerHTML = cifraDeCesar(campoEntrada.value, +cesarNumero.value)
    } else {
        resultado.innerHTML = cesarDecifrado(campoEntrada.value, +cesarNumero.value)
    }
})


//muda a mensagem do botão

codificar.addEventListener('click', function() {
    btn.textContent = "Faça seu código!"
})

decodificar.addEventListener('click', function() {
    btn.textContent = "Desfaça o código!"
})


//botão codificar e decodificar
btn.addEventListener('click', function() {



    if (codificar.checked) {

        if (selecionarCodigo.value == "1") {


            resultado.innerHTML = cifraDeCesar(campoEntrada.value, +cesarNumero.value)


        } else {
            resultado.innerHTML = codifica64(campoEntrada.value)
        }

    } else {
        if (selecionarCodigo.value == "1") {
            resultado.innerHTML = cesarDecifrado(campoEntrada.value, +cesarNumero.value)
        } else {
            resultado.innerHTML = decodifica64(campoEntrada.value)
        }
    }

})
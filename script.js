// Função para criptografar
function criptografar(texto, chave) {
    let resultado = '';
    for (let i = 0; i < texto.length; i++) {
        let caractere = texto[i];
        if (caractere.match(/[a-z]/i)) {
            // Determina o código ASCII base (A ou a)
            let base = "";
            if(caractere.charCodeAt(0) <= 91){
                base = 65;// 65 é A
            }
            else
            {
                base = 97; // 97 é a
            }
            resultado += String.fromCharCode(((caractere.charCodeAt(0) - base + chave) % 26) + base);
        } else {
            resultado += caractere;
        }
    }

    return resultado;
}
function cocodificar(texto) {
    let resultado = '';
    for (let i = 0; i < texto.length; i++) {
        let caractere = texto[i];
        if (caractere.charCodeAt(0) <= 91) {
            const base = "";
            if(base >= 65 && base <= 91){
            resultado += "Co";
            }
            else if(base >= 97 && base <= 123){
                resultado += "co"
            }
        } else {
            resultado += caractere;
        }
    }

    return resultado;
}

function descriptografar(texto, chave) {
    return criptografar(texto, -chave);
}


function criptografarTexto() {
    const texto = document.getElementById('Texto').value;
    const chave = parseInt(document.getElementById('Chave').value, 10);
    const textoCriptografado = criptografar(texto, chave);
    document.getElementById('labelResultado').innerText = "Texto Criptografado: \n" + textoCriptografado;
}
function descriptografarTexto() {
    const texto = document.getElementById('Texto').value;
    const chave = parseInt(document.getElementById('Chave').value, 10);
    const textoDescriptografado = descriptografar(texto, chave);
    document.getElementById('labelResultado').innerText = "Texto Descriptografado: \n" + textoDescriptografado;
}
function cocodificarTexto() {
    const texto = document.getElementById('Texto').value;
    const textoCocodificado = cocodificar(texto);
    document.getElementById('labelResultado').innerText = "Texto Cocodificado: \n" + textoCocodificado;
}
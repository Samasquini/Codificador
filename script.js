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
            // Aplica o deslocamento
            resultado += String.fromCharCode(((caractere.charCodeAt(0) - base + chave) % 26) + base);
        } else {
            // Se não for letra, mantém o caractere original
            resultado += caractere;
        }
    }

    return resultado;
}
function cocodificar(texto) {
    let resultado = '';
    for (let i = 0; i < texto.length; i++) {
        let caractere = texto[i];
        if (caractere.match(/[a-z]/i)) {
            const base = caractere.charCodeAt(0) < 91 ? 65 : 97;
            if(base >= 65 && base <= 91){
            resultado += "Co";
            }
            else if(base >= 97 && base <= 123){
                resultado += "co"
            }
        } else {
            // Se não for letra, mantém o caractere original
            resultado += caractere;
        }
    }

    return resultado;
}

// Função para descriptografar
function descriptografar(texto, chave) {
    // Para descriptografar, usamos o deslocamento negativo
    return criptografar(texto, -chave);
}


// Funções para manipular a interface
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
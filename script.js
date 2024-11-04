// Função para criptografar
function criptografar(texto, chave) {
    let result = '';
    for (let i = 0; i < texto.length; i++) {
        let char = texto[i];
        if (char.match(/[a-z]/i)) {
            // Determina o código ASCII base (A ou a)
            let base = "";
            if(char.charCodeAt(0) <= 91){
                base = 65;// 65 é A
            }
            else
            {
                base = 97; // 97 é a
            }
            // Aplica o deslocamento
            result += String.fromCharCode(((char.charCodeAt(0) - base + chave) % 26) + base);
        } else {
            // Se não for letra, mantém o caractere original
            result += char;
        }
    }

    return result;
}
function cocodificar(texto) {
    let result = '';
    for (let i = 0; i < texto.length; i++) {
        let char = texto[i];
        if (char.match(/[a-z]/i)) {
            const base = char.charCodeAt(0) < 91 ? 65 : 97;
            if(base >= 65 && base <= 91){
            result += "Co";
            }
            else if(base >= 97 && base <= 123){
                result += "co"
            }
        } else {
            // Se não for letra, mantém o caractere original
            result += char;
        }
    }

    return result;
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
    document.getElementById('resultLabel1').innerText = "Texto Criptografado: " + textoCriptografado;
}
function descriptografarTexto() {
    const texto = document.getElementById('Texto').value;
    const chave = parseInt(document.getElementById('Chave').value, 10);
    const textoDescriptografado = descriptografar(criptografar(texto,chave), chave);
    document.getElementById('resultLabel2').innerText = "Texto Descriptografado: " + textoDescriptografado;
}
function cocodificarTexto() {
    const texto = document.getElementById('Texto').value;
    const textoCocodificado = cocodificar(texto);
    document.getElementById('resultLabel3').innerText = "Texto Cocodificado: " + textoCocodificado;
}
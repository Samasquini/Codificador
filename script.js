// Função para criptografar
function criptografar(text, shift) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
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
            result += String.fromCharCode(((char.charCodeAt(0) - base + shift) % 26) + base);
        } else {
            // Se não for letra, mantém o caractere original
            result += char;
        }
    }

    return result;
}
function cocodificar(text) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
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
function descriptografar(text, shift) {
    // Para descriptografar, usamos o deslocamento negativo
    return criptografar(text, -shift);
}


// Funções para manipular a interface
function encryptText() {
    const inputText = document.getElementById('inputText').value;
    const shift = parseInt(document.getElementById('shift').value, 10);
    const encryptedText = criptografar(inputText, shift);
    document.getElementById('resultLabel1').innerText = "Texto Criptografado: " + encryptedText;
}
function decryptText() {
    const inputText = document.getElementById('inputText').value;
    const shift = parseInt(document.getElementById('shift').value, 10);
    const decryptedText = descriptografar(criptografar(inputText,shift), shift);
    document.getElementById('resultLabel2').innerText = "Texto Descriptografado: " + decryptedText;
}
function cocodificarText() {
    const inputText = document.getElementById('inputText').value;
    const cocodificadoText = cocodificar(inputText);
    document.getElementById('resultLabel3').innerText = "Texto Cocodificado: " + cocodificadoText;
}
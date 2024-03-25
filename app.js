// Função para validar o CPF
function validateCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, ''); // Remove caracteres não numéricos
    if (cpf == '') return false; // Retorna falso se o CPF estiver vazio

    // Elimina CPFs conhecidos por serem inválidos
    if (
        cpf.length != 11 ||
        cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999"
    ) {
        return false;
    }

    // Validação do primeiro dígito verificador
    var add = 0;
    for (var i = 0; i < 9; i++) {
        add += parseInt(cpf.charAt(i)) * (10 - i);
    }
    var rev = 11 - (add % 11);
    if (rev == 10 || rev == 11) rev = 0;
    if (rev != parseInt(cpf.charAt(9))) return false;

    // Validação do segundo dígito verificador
    add = 0;
    for (var i = 0; i < 10; i++) {
        add += parseInt(cpf.charAt(i)) * (11 - i);
    }
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11) rev = 0;
    if (rev != parseInt(cpf.charAt(10))) return false;

    return true; // CPF válido
}

// Função para exibir mensagem de validação
function displayValidationMessage(isValid) {
    var messageElement = document.getElementById("resultMessage");
    if (isValid) {
        messageElement.textContent = "CPF válido.";
        messageElement.style.color = "green";
    } else {
        messageElement.textContent = "CPF inválido.";
        messageElement.style.color = "red";
    }
}

// Função principal
function verifyCPF() {
    var cpfInput = document.getElementById("cpfInput").value;
    var isValid = validateCPF(cpfInput);
    displayValidationMessage(isValid);
}

// Adicionar evento de clique ao botão
document.getElementById("verifyButton").addEventListener("click", verifyCPF);

// para validar o form de contato
function validarFormulario() {
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("mensagem").value;

    if (nome === "" || email === "" || mensagem === "") {
        alert("Preencha todos os campos!");
        return false;
    }

    alert("Mensagem enviada com sucesso!");
    return true;
}
function toggleMenu() {
    document.getElementById("menu").classList.toggle("active");
}
//botão de modo escuro
function acionarInterruptor() {
    document.body.classList.toggle("modo-dark");
}

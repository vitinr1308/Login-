const usuariocorreto = "admin";
const senhacorreta = "123456";
 
function validar() {
    const usuario = document.getElementById("user").value;
    const senha = document.getElementById("passwd").value;
 
    if (usuario === usuariocorreto && senha === senhacorreta) {
        alert("Login realizado com sucesso!");
    } else {
        alert("Usuário ou senha incorretos!");
        document.getElementById("passwd").value = "";
    }
}
 
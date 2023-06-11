function cadastrar() {
  const users = JSON.parse(localStorage.getItem("users")) || [];

  let nome = document.getElementById("nome").value;
  let telefone = document.getElementById("telefone").value;
  let rua = document.getElementById("rua").value;
  let numero = document.getElementById("numero").value;
  let cep = document.getElementById("cep").value;
  let email = document.getElementById("email").value;
  let senha = document.getElementById("senha").value;

  let user = {
    nome: nome,
    telefone: telefone,
    rua: rua,
    numero: numero,
    cep: cep,
    email: email,
    senha: senha,
  };

  users.push(user);

  console.log(users);

  localStorage.setItem("users", JSON.stringify(users));
  alert("Cadastrado com Sucesso!");
  window.location.href = "login.html";
}

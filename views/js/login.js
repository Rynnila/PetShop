function login() {
  const users = JSON.parse(localStorage.getItem("users"));

  let email = document.getElementById("email").value;
  let senha = document.getElementById("senha").value;

  for (let i = 0; users.length > i; i++) {
    if (users[i] == null) {
      console.log("Verificando...");
    } else {
      if (email == users[i].email && senha == users[i].senha) {
        console.log("Conectado!");
        window.location.href = "home.html";
        break;
      }
    }
  }
}

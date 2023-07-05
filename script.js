document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
   
  
    // Aqui você pode adicionar a lógica para verificar o nome de usuário e senha
  
    // Exemplo simples de verificação de login
    if (username === "admin" && password === "123") {
      alert ("Login bem-sucedido!");  
     window.open("https://github.com/anabfernandess", "_blank"); // Abre o YouTube em uma nova guia ou janela
    } else {
      alert("Nome de usuário ou senha inválidos. Tente novamente.");
    }
  });
  
  
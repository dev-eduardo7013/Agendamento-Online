function submitForm(event) {
    event.preventDefault();
    
    // Obter os valores dos campos do formulário
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;
  
    // Simulação de envio dos dados (aqui você pode implementar a lógica de envio para o servidor)
    setTimeout(function() {
      // Limpar campos do formulário após o envio
      document.getElementById('form').reset();
  
      // Mostrar mensagem de sucesso
      var successMessage = document.getElementById('success-message');
      successMessage.classList.remove('hidden');
  
      // Ocultar mensagem de sucesso após 3 segundos
      setTimeout(function() {
        successMessage.classList.add('hidden');
      }, 3000);
  
    }, 1000); // Simula um tempo de envio (1 segundo)
  
  }
  
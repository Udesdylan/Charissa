function validateForm() {
    var naam = document.getElementById('naam').value;
    var email = document.getElementById('email').value;
  
    if (naam === '' || email === '') {
      alert('Vul alle velden in.');
      return false;
    }
  
    // Voeg hier extra validatie toe indien nodig
  
    alert('Formulier succesvol ingediend!');
    return true;
  }
  
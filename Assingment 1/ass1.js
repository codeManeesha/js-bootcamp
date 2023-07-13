function check(){
    let messageElement = document.getElementById("message");
    let ageInput = document.getElementById("age");
  
    var age = ageInput.value;
    if (age >18) {
        messageElement.textContent = "You are eligible to vote.";
      } else {
        messageElement.textContent = "You are not eligible to vote yet.";
      }
}
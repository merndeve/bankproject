document.getElementById('submit-button').addEventListener('click', function(){
    const userInputEmail = document.getElementById('user-email');
    const userEmail = userInputEmail.value;

    const userInputPassword = document.getElementById('user-password');
    const userPassword = userInputPassword.value; 

    if(userEmail == "admin@gmail.com" && userPassword == 12345){
        window.location.href = "banking.html";
    }
})
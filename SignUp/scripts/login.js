function check(){
    let storedName = localStorage.getItem('email');
    let storedPw = localStorage.getItem('pw');

    let userName = document.getElementById('userName');
    let userPw = document.getElementById('userPw');
    let userRemember = document.getElementById("rememberMe");

    if(userName.value == storedName && userPw.value == storedPw){
        alert('You are logged in.');
      
    }else{
        alert('Wrong credentials');
    }
};

function trans() {
    window.location.href="signup.html";
}

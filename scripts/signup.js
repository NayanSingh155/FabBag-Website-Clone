
function store(){
    let email = document.getElementById('email');
    let pw = document.getElementById('pw');
    
    if(email.value.length == 0){
        alert('Please fill in email');
    
    }else if(pw.value.length == 0){
        alert('Please fill in password');
    
    }else if(email.value.length == 0 && pw.value.length == 0){
        alert('Please fill  email and password');
    
    
    }else{
        localStorage.setItem('pw', pw.value);
        localStorage.setItem('email', email.value);
        alert('Register Successfully');
        
    }

    };

    function link() {
        window.location.href = "login.html";
    };
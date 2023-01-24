function validation(){
    var username = document.getElementById("uname").value;
    var password = document.getElementById("pass").value;
    if(username == " "){
        alert("Username must be entered");
        return false;
    }else if(password == " "){
        alert("Password must not be empty");
        return false;
    }
    else if (password.length > 8){
        alert("Password limit exceeded")
        return false
    }else if(password.length < 6){
        alert("Weak password")
        return false
    }else{
        alert("Logged in successfully");
        return true;
    }
    }




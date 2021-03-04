function handleSubmit(form) {    
    if (form.email.value == "") {
        
        alert(errormsg.error_email_blank);
        return false;

    }else if (form.password.value == "") {

        alert(errormsg.error_password_blank);
        return false;
        
    }else {

        form.action = "./dashboard.html";
        const email = md5(form.email.value); 
        const password = md5(form.password.value);

        // Test Credentials
        // test1@gmail.com password1
        // test2@gmail.com password2

        const login_arr = login_data.users

        if (login_arr[email] == password) {
            return true;
        }else {
            alert(errormsg.error_login);
            return false;
        }
    }
    
}

function hideFooter() {
    const hideDiv = document.getElementById('loginFooter');
    hideDiv.style.display = 'none';
}
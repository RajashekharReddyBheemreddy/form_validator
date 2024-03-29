const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('Password');

// Show input error message
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message
}

// show success outline
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success'; 
}

// check email is valid
function checkEmail(input){
    const res = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if(res.test(input.value.trim())){
        showSuccess(input);
        console.log(input.value)
    }else{
        showError(input, 'Email is not Valid')
    }
}

// check required feilds
function checkrequired(inputArr){
    inputArr.forEach(function(input){
        if(input.value.trim() === ''){
            showError(input, `${getFieldName(input)} is required`)
        }else{
            showSuccess(input)
        }
    });
}

// Get field name
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

// Check input length
function checkLength(input, min, max){
    if(input.value.length < min){
        showError(input, `${getFieldName(input)} must be atleast ${min} characters`)
    }
    else if(input.value.length > max){
        showError(input, `${getFieldName(input)} must be less than ${max} characters`)
    }
    else{
        showSuccess(input);
    }
}

// check for password match
function checkPasswordMatch(input1, input2){
    if(input1.value != input2.value){
        showError(input2, 'Password do not match')
    }
}

// Event listener
form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkrequired([username, email, password, password2]);
    checkEmail(email);
    checkPasswordMatch(password, password2);
    checkLength(username,3,15);
    checkrequired(password, 3, 15);

})

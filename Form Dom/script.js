var nameError = document.getElementById('name-error')
var phoneError = document.getElementById('phone-error')
var emailError = document.getElementById('email-error')
var messageError = document.getElementById('message-error')
var submitError = document.getElementById('submit-error')

// name
function validateName(){
    var name =document.getElementById('contact-name').value;

    if(name.length == 0){
        nameError.innerHTML = 'Name is required'
        return false
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Write your full name'
        return false
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
    return true
};
// phone
function validatePhone() {
    var phone = document.getElementById('contact-phone').value;
    var phoneError = document.getElementById('phone-error'); // Assuming 'phone-error' is the ID of the element where you want to display the error message

    if (phone.length == 0) {
        phoneError.innerHTML = 'Phone number should be 10 digits';
        return false;
    }
    if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = 'Number is required';
        return false;
    }

    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
};
//email
function validateEmail() {
    var email = document.getElementById('contact-email').value;

    if (email.length == 0) {
        emailError.innerHTML = 'Email is required';
        return false;
    }
    if (!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
        emailError.innerHTML = 'Currect email is required';
        return false;
    }

    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
};
// Message
function validateMessage() {
    var message = document.getElementById('contact-message').value;
    var required = 30;
    var remaining = required - message.length;

    if (remaining > 0) {
        messageError.innerHTML = remaining + ' more characters required';
        return false;
    }

    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
};
// submit
function validateForm(){
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage){
        submitError.style.display = 'block'
        submitError.innerHTML='Please cheack your details'
        setTimeout(function(){submitError.style.display = 'none';},3000)
        return false
    }
}
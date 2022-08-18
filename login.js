// step1:add click event handlerwith submit buttn
document.getElementById('btn-submit').addEventListener('click',function(){
    
    // step2:get the email address inside the email field
    // always remember to use .value to get text from an input field
    const emailField=document.getElementById('user-email');
    const email = emailField.value;
    // step3:get password
//    3.a.set id on html element
//    3.b.get the element
//    3.c.getthe value from the element
const passField=document.getElementById('user-password');

const password = passField.value;
//do not verify email paassword on the client side
// step4;verify password and email
if(email=='emonismail44@gmail.com' && password=='secret'){
    window.location.href='bank.html';
}
else{
   alert('password and email not matched');
}


} )
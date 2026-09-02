
// function login(){
//     let username = document.getElementById('username').value;
//     let password = document.getElementById('password').value;

//     if(username === 'admin' && password === 'Admin@21')
//     {
//         alert('You have logged in successfully \n\n Welcome to BiteBox..!!');
//     }
//     else if(username === 'admin' && password !== 'Admin@21')
//     {
//         alert('Sorry '+username+' password is incorrect. Please Try Again.');
//     }
//     else if(username !== 'admin' && password === 'Admin@21')
//     {
//         alert('Sorry but username is incorrect. Please Try Again.');
//     }
//     else {
//         alert('Invalid Username and Password is there. Try again Later.');
//     }
// }

function login(){
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    if(username === 'rushi' && password === '123456')
    {
        localStorage.setItem('isLoggedIn','true');
        localStorage.setItem('username',username);
        // Back to Home page 
        // window.location.href = "./index.html";
        // window.location.replace("index.html");
        alert('Welcome to BiteBox '+username+'..!!');
        window.location.assign("index.html");
    }
    else{
        message.innerText = 'Invalid Username or Password.'
    }
}
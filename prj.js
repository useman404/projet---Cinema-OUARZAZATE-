
function handleLogin() {
    const loginEmail = document.getElementById('loginEmail').value;
    const loginPassword = document.getElementById('loginPassword').value;


    console.log('Login Information:');
    console.log('Email:', loginEmail);
    console.log('Password:', loginPassword);


    document.getElementById('loginEmail').value = '';
    document.getElementById('loginPassword').value = '';
}


function handleSignup() {
    const signupName = document.getElementById('signupName').value;
    const signupEmail = document.getElementById('signupEmail').value;
    const signupPassword = document.getElementById('signupPassword').value;



    console.log('Sign Up Information:');
    console.log('Name:', signupName);
    console.log('Email:', signupEmail);
    console.log('Password:', signupPassword);



    document.getElementById('signupName').value = '';
    document.getElementById('signupEmail').value = '';
    document.getElementById('signupPassword').value = '';
}
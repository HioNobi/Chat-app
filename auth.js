//Authentication function
auth.onAuthStateChanged(user => {
    if(user) {
        setUpMessage(true);
    }else{
        setUpMessage(false);
    }
})


registerBtn.addEventListener("click", (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(registerEmail.value, registerPassword.value).then(cred => {
        alert("You have successfully signed up!")
        registerEmail.value = "";
        registerPassword = "";
    }).catch(function(error) {
        alert(error.message);
    });
})

loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(loginEmail.value, loginPassword.value).then(cred => {typing
        alert("You have successfully logined");
        loginEmail.value = "";
        loginPassword.value = "";
    }).catch(function(error) {
        alert(error.message);
    });
})

document.getElementById("logout-btn").addEventListener("click", (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
        alert("You have successfully signed out!")
    })
    .catch(function(error) {
        alert(error.message);
    });
})
//Authentication function
auth.onAuthStateChanged(user => {
    if(user) {
        setUpMessage(true);
    }else{
        setUpMessage(false);
    }
})

fbLoginBtn.addEventListener("click", (e) => {
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
    });
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
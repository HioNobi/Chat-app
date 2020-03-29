//Authentication function
auth.onAuthStateChanged(user => {
    if(user) {
        setUpMessage(true, user);
    }else{
        setUpMessage(false, user);
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
        alert(errorMessage);
    });
})

const signUp = () => {
    auth.createUserWithEmailAndPassword(registerEmail.value, registerPassword.value).then(cred => {
        return db.collection("users").doc(cred.user.uid).set({
            username: registerUserName.value
        })
    }).then(() => {
        alert("You have successfully signed up!")
        registerEmail.value = "";
        registerPassword = "";
    }).catch(function(error) {
        alert(error.message);
    });
}

const signIn = () => {
    auth.signInWithEmailAndPassword(loginEmail.value, loginPassword.value).then(cred => {
        alert("You have successfully logined");
        loginEmail.value = "";
        loginPassword.value = "";
    }).catch(function(error) {
        alert(error.message);
    });
}

registerBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if(registerCheck.checked == false){
        alert("Please agree with terms and licenses");
        return;
    }else if(registerEmail.value.toLowerCase() != registerEmail.value){
        alert("All letters must be in lowercase");
        return;
    }
    signUp();
})

loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    signIn();
})

window.addEventListener("keypress", (e)=>{
    if(e.keyCode == 13 && inputMessage.value != ""){
        updateToFireBase()
    }else if(e.keyCode == 13 && (registerEmail.value != "" && registerPassword.value != "")){
        if(registerCheck.checked == false){
            alert("Please agree with terms and licenses");
            return;
        }else if(registerEmail.value.toLowerCase() != registerEmail.value){
            alert("All letters must be in lowercase");
            return;
        }
        registerBtn.click();
    }else if(e.keyCode == 13 && (loginEmail.value != "" && loginPassword.value != "")){
        loginBtn.click();
    };
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

window.addEventListener('beforeunload', function (e) {
    e.preventDefault();
    auth.signOut();
});
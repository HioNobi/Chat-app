// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCgP7DuT88MMOpnfxnc8S7qz7QRgFu2HQI",
    authDomain: "learnfirebase-ffcc2.firebaseapp.com",
    databaseURL: "https://learnfirebase-ffcc2.firebaseio.com",
    projectId: "learnfirebase-ffcc2",
    storageBucket: "learnfirebase-ffcc2.appspot.com",
    messagingSenderId: "913781558865",
    appId: "1:913781558865:web:57332ee44625056b77b270"
};
firebase.initializeApp(firebaseConfig);
db = firebase.firestore();
const auth = firebase.auth();

//Define "some"(many) variables
let user = "";
let hostUser = document.getElementById("host-user");
let inputMessage = document.getElementById("input-message");
let sendButton = document.getElementById("send-button");
let textList = document.getElementById("text-list");
let bottomGroup = document.getElementById("text-area");
let sendingStatus = document.getElementById("sending-status");

let importImageBtn = document.getElementById("import-image-btn");
let userImportedImg = document.querySelector('#myImg'); 
let imgWrapper = document.getElementById("img-wrap");

let registerEmail = document.getElementById("registerEmail");
let registerPassword= document.getElementById("registerPassword");
let registerBtn = document.getElementById("register-btn");
let registerForm = document.getElementById("register-form");

let loginEmail = document.getElementById("loginEmail");
let loginPassword= document.getElementById("loginPassword");
let loginBtn = document.getElementById("login-btn");
let loginForm = document.getElementById("login-form");

let emailRE = "/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/"
let collection = 'chat-app';
let typing = false;
let chattingUser = document.createElement("h1");

//Import notification sound effect
const notificationSound = new Audio("sharp.mp3");
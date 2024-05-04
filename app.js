import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyBsAt53DPMmN4EEW4ooAfVQflL6Zzl_tEI",
  authDomain: "foodweb-4ca46.firebaseapp.com",
  projectId: "foodweb-4ca46",
  storageBucket: "foodweb-4ca46.appspot.com",
  messagingSenderId: "1071728417603",
  appId: "1:1071728417603:web:fa5a2b00a0f72f32062df6",
  measurementId: "G-5G4XJJNWKC"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


// sing satrt



const btn = document.querySelector('#sbtn');

if (btn) {
  let authUser = () => {
    const email = document.querySelector('#semail').value;
    const password = document.querySelector('#spass').value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);

        
        window.location.href = "liginadmin.html"; 
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
      });
  };

 
  btn.addEventListener('click', authUser);
}


const  lbtn = document.querySelector('#abtn')

//sing in end

// loggin admin satart 
if(lbtn){
  
  let signinadmin =()=>{
    const email = document.querySelector('#aemail').value
    const password = document.querySelector('#apass').value
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      
      const user = userCredential.user;
      console.log(user);
      window.location.href = "admin.html"; 
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error);
    });
  
  }
  lbtn.addEventListener('click', signinadmin)
}

// login admin end

// login user start

const ubtn =document.querySelector('#ubtn')



if(ubtn){
  let user = ()=>{
  
    const email = document.querySelector('#uemail').value
    const password = document.querySelector('#upass').value
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      
      const user = userCredential.user;
      console.log(user);
      window.location.href = "user.html"; 
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error);
    });
  } 
  ubtn.addEventListener('click', user)
}
// login user end


import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDNGOn1wlDlKXs3fDzRE-g3LgpWCkIBHTk",
    authDomain: "bssolucoes-4e987.firebaseapp.com",
    databaseURL: "https://bssolucoes-4e987.firebaseio.com",
    projectId: "bssolucoes-4e987",
    storageBucket: "bssolucoes-4e987.appspot.com",
    messagingSenderId: "358131179136",
    appId: "1:358131179136:web:895a754439af891a241065",
    measurementId: "G-Z0M1C48PVF"
  };
  // Initialize Firebase
  export default firebase.initializeApp(firebaseConfig);
  //firebase.analytics();
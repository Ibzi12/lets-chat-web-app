function addUser() {
    user_name=document.getElementById("user_name").value;

    localStorage.setItem("user_name", user_name);

     window.location="home_page";
}

const firebaseConfig = {
    apiKey: "AIzaSyCVfHED0srcNgp5MT2YKte0-ZLNqhTqSpM",
    authDomain: "classtest-4902e.firebaseapp.com",
    projectId: "classtest-4902e",
    storageBucket: "classtest-4902e.appspot.com",
    messagingSenderId: "126564935653",
    appId: "1:126564935653:web:5d992ba90e233d4a20710c"
  };


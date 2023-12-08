function addUser() {
    user_name=document.getElementById("user_name").value;

    localStorage.setItem("user_name", user_name);

     window.location="Let-chat-web-app_room.html";
}

var firebaseConfig = {
  apiKey: "AIzaSyCpZ7YIEDWmhDG05kZmd-iyPQ0PKw_HOg4",
  authDomain: "classtest-7e8d8.firebaseapp.com",
  databaseURL: "https://classtest-7e8d8-default-rtdb.firebaseio.com",
  projectId: "classtest-7e8d8",
  storageBucket: "classtest-7e8d8.appspot.com",
  messagingSenderId: "605841517622",
  appId: "1:605841517622:web:7a6c9e6df93047efc87c97",
  measurementId: "G-V1VRT0H00X"
};

// Initialize Firebase
firebaseConfig.initializeApp(firebaseConfig);

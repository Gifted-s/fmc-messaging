// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyCmpJa3zWf0NaV0mS34ZTcTN-uhVbVIoGE",
  authDomain: "fives-88983.firebaseapp.com",
  databaseURL: "https://fives-88983.firebaseio.com",
  projectId: "fives-88983",
  storageBucket: "fives-88983.appspot.com",
  messagingSenderId: "760700635565",
  appId: "1:760700635565:web:7862e577b0ae8c9e7bb924",
  measurementId: "G-PQZ5S7M6MX"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});

import firebase from 'firebase';

class Firebase {
  static init() {
    Firebase.app = firebase.initializeApp({
      apiKey: "AIzaSyA4o4d0J_YF2e8sOox8X1YSXf-CoSl3F6I",
      authDomain: "bob-hackathon.firebaseapp.com",
      databaseURL: "https://bob-hackathon.firebaseio.com",
      projectId: "bob-hackathon",
      storageBucket: "bob-hackathon.appspot.com",
      messagingSenderId: "644571097047"
    });
  }

  static instance() {
    if (!Firebase.app) {
      Firebase.init();
    }

    return Firebase.app;
  }

  static database() {
    return Firebase.instance().database();
  }
}

export default Firebase;

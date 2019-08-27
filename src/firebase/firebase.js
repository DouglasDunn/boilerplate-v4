import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyB33YwWT1lkta46-s8heWcV899rLhtkHDU",
  authDomain: "boilerplate-v4.firebaseapp.com",
  databaseURL: "https://boilerplate-v4.firebaseio.com",
  projectId: "boilerplate-v4",
  storageBucket: "",
  messagingSenderId: "659824322452",
  appId: "1:659824322452:web:d66f3991d4d8558d"
};

firebase.initializeApp(config);

const database = firebase.database();

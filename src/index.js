import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as firebase from 'firebase';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCu_VGOuC-e8_IQZMZWi-DA1k8Tm1pg9ac",
    authDomain: "reactcrud-6c810.firebaseapp.com",
    databaseURL: "https://reactcrud-6c810.firebaseio.com",
    projectId: "reactcrud-6c810",
    storageBucket: "reactcrud-6c810.appspot.com",
    messagingSenderId: "291470562305",
    appId: "1:291470562305:web:fd2de52bd4525b56c75c00"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

ReactDOM.render( 
<App / > ,
    document.getElementById('root')
);
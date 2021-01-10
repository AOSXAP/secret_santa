import './App.css';
import Form from "react-bootstrap/Form";
import firebase from "firebase/app";
import 'firebase/database';
import readDB from './components/readDB';
import React, { useState, useEffect } from 'react';
import { Email, Item, Span, A, renderEmail } from 'react-html-email'

import Home from './components/Home/Home.js';
import Users from './components/Users/Users.js';
import Navbar from './components/Navbar/Navbar.js';
import Formx from './components/Form.js';
import Loading from './components/Loading/Loading'
///import Email1 from'./components/email_design/email.jsx';
import Email_sent from './components/email_sent/email_sent';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

var firebaseConfig = {
  apiKey: "AIzaSyD00zhm8WPg0d-eW-3O-Ut5amxU_nkgq00",
  authDomain: "secret-santa-6951c.firebaseapp.com",
  databaseURL: "https://secret-santa-6951c-default-rtdb.firebaseio.com",
  projectId: "secret-santa-6951c",
  storageBucket: "secret-santa-6951c.appspot.com",
  messagingSenderId: "494994205749",
  appId: "1:494994205749:web:40f5d4e79a69721dc6957c",
  measurementId: "G-346DF42FP5"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}


/*

const userId = () => Math.floor(Math.random()*1000);

const xd = userId();

firebase.database().ref("users/" + xd).set(
    {
      username: "placeholder",
      email: "placeholder"
    },
    (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Succesful");
      }
    }
  );

*/


function App() {

  const OB  = () => {return('hey')}

  return (
    <Router>
      <div>
       <Navbar />

        <Switch>

          <Route path="/add">
            <Formx />
          </Route>

          <Route path="/users">
           <Users /> 
          </Route>

          <Route path="/email_sent">
            <Email_sent/>
          </Route>

          <Route path="/">
            <Home/>
          </Route>
          
        </Switch>
      </div>
    </Router>
  );

}

export default App;

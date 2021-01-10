import firebase from "firebase/app";
import "firebase/database";

const ajax = require('ajax');
const $ = require('jquery');

async function finduser(email) {
    var d;
    await firebase.database().ref('users/').once('value').then((snapshot) => {
        var x = snapshot.val();
        var arr = Object.values(x);
        arr.forEach((ob) => {
            if(ob.email === email) d = ob;
        })
       
    });
    if(d) {
        return d;
    } else return false;
    
}


const sendEmail = async (newarray) => {

    $.ajax({
        type: "POST",
        url: "http://localhost:8080/mailx",
        data: { data:  newarray }
    }).done(function (res) {
        console.log(res);
    });

}


export {finduser, sendEmail}
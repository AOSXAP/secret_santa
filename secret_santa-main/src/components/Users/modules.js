import firebase from "firebase/app";
import "firebase/database";

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

export {finduser}
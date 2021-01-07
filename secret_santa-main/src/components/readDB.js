import firebase from "firebase/app";
import 'firebase/database'

export default function readDb(){
    return firebase
    .database()
    .ref("/users/")
    .once("value")
}
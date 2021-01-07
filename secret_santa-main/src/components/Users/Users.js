import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import "./Users.css";

export default function Home(props) {
  const [el, setEl] = useState([]);

  function Add_user() {
    setEl([...el, "hey"]);
  }

  console.log(el);

  function Render() {
    return el.map((ob) => {
      return (
        <p>{ob}</p>
      )
    });
  }

  return (
    <div className="xyz">
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">{props.users.length}</th>
            <th scope="col">Mail</th>
            <th scope="col">Name</th>
            <Render />
          </tr>
        </thead>
      </table>
      <button onClick={Add_user}>Adauga</button>
    </div>
  );
}

/*
    <tbody>
      {props.users.map((user, count) => (
        <tr>
          <th scope="row">{++count}</th>
          <td>{user.email}</td>
          <td>{user.name}</td>
        </tr>
      ))
      }

    </tbody>
*/

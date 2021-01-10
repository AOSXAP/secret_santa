import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./Users.css";
import Footer from '../Home/footer.svg';
import firebase from "firebase/app";
import "firebase/database";

const {finduser} = require('./modules.js')



export default function Home() {
  var i = 1;


  function handleClick(){
    const div = document.createElement('Form.Group');

      div.className = 'formx';
      div.innerHTML = `
  <div class="full">

     <div class="half">
        <label for="exampleInputEmail1" class="form-label">Name of the participant ${i}</label>
        <input type="text" class="form-control" id="name${i}" aria-describedby="emailHelp" required>
    </div>


    <div class="half">
        <label for="exampleInputEmail1" class="form-label">Email of the participant ${i}</label>
        <input type="email" class="form-control" id="email${i}" aria-describedby="emailHelp" placeholder="user${i}" required>
    </div>
  </div>
    `;

    document.getElementById('content').appendChild(div);

    i++;

  }
  

  async function handlesubmit(e) {
    e.preventDefault();
    let array = [];
    let email = document.getElementById('emailimp').value;

    const user = await finduser(email);
    const emailx = user;
    
    console.log(emailx)


    for (var j = 1; j < i; j++) {
      const m = j;
      const name = document.querySelector(`#name${m}`).value;
      const email = document.querySelector(`#email${m}`).value;
      array.push({ name, email });
    }


    array.sort(() => Math.random() - 0.5);

    array.forEach((ob,index) => {
      const { name, email } = ob;
      firebase
        .database()
        .ref(`list/`+emailx.id )
        .child(`${++index}`)
        .set({
          name ,
          email
        });
    })

    let newarray = [];
    for(var k = 0; k<array.length; k++) {
     
      if(k != array.length-1) {
        newarray.push({"sender" : array[k].name,"receiver": array[k+1].name})
      } else {
        newarray.push({"sender" : array[k].name,"receiver": array[1].name})
      }
      
    }

    //send email w all

    console.log(newarray);

  }



  return (
    <>
      <div className="all">
        <Form className="formx" id="content" onSubmit="return ;">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address of the host</Form.Label>
            <Form.Control id="emailimp" type="email" placeholder="Enter email" required />
            <Form.Text className="text-muted">
              Input here your email address!
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              placeholder="ex: coffee shop, restaurant "
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Budget</Form.Label>
            <Form.Control
              type="text"
              id="budget"
              placeholder="ex: 10euro"
              required
            />
          </Form.Group>


        </Form>

        <Button className="addmore" onClick={handleClick} variant="primary">
          Add more
        </Button>

        <div className="alignx">
          <Button
            form="content"
            variant="primary"
            type="submit"
            className="btn-submit"
            onClick={handlesubmit}
          >
            Submit
          </Button>
        </div>
      </div>

      <div>
        <img src={Footer} alt="" className="footer" />
      </div>
    </>
  );
}



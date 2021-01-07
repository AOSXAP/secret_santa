import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import './Home.css';
import Footer from './footer.svg'

export default function Home()
{
    return (
      <div className="mmm">
        <div class="santa">
          <div class="circles"></div>
          <div class="snow"></div>
          <div class="hat">
            <div class="hat-end"></div>
          </div>
          <div class="face">
            <div class="eyes"></div>
            <div class="mouth"></div>
          </div>
          <div class="dirty-overflow">
            <div class="body"></div>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <h5 class="card-title">What is Secret Santa?</h5>
            <p class="card-text">
              Each year around Christmas time people all over the world exchange
              gifts. To keep things interesting though, you can randomly assign
              persons to each other to give a present to one another.
            </p>
            <a href="/add" class="btn xd">
              Create your list
            </a>
          </div>
        </div>

        <div>
          <img src={Footer} alt="picture not available" className="footer" />
        </div>
      </div>
    );
}


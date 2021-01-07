import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react'
import Santa from './loading_santa.svg';
import './loading.css';

export default function Loading()
{
    return(
    <>
     <img src={Santa} alt="picture not available" className="loading" />
     <p class="line-1 anim-typewriter">Loading ...</p>
    </>
  )
}

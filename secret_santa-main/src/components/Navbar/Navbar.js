import React from 'react';
import './Navbar.css'

export default function nav(){
    return(
    <div className="navx">
    <a href="/" className="logo">secretSanta</a>

    <div className="links">
        <a href="/">Home</a>
        <a href="/users">Users</a>
        <a href="/add">Add</a>
    </div>

    <a className="btn" href="/contact">Contact</a>
    </div>
    )
}
import React from "react"
import logo from "../assets/react-logo-small.png"
export default function Navbar(){

    return (
    <div className="nav">
        <img className="nav-logo" src ={logo}/>
        <h2 className="nav-title">ReactFacts</h2>
        <h3 className="nav-project">React Course - Project 1</h3>
    </div>
    )
}
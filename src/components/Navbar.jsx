import React from "react"
import airbnbLogo from "../assets/images/airbnb-logo.png"

export default function Navbar() {
    return (
        <nav>
            <img src={airbnbLogo} className="nav--logo" />
        </nav>
    )
}
import React from "react"
import Button from "./Reusable/Button"

function Navbar() {

    const navItemsRef = React.useRef(null)

    return (
        <nav className="flexRowEvenlyCenter" >
        <div className="navbar_open" onClick={e => {
            if (e.target.className.split(" ")[1] === "navbar_open_active") {
                e.target.className = "navbar_open"
                if(navItemsRef) {
                     navItemsRef.current.style.display = "none"
                }
            } else {
                e.target.classList.add("navbar_open_active")
                navItemsRef.current.style.display = "flex"
            }
            
        }} ></div>
	
        <span>
            InFin
        </span>
        <ul className="navbar_items" ref={navItemsRef} >
            <li>Memberships</li>
            <li>Investing</li>
            <li>About</li>
        </ul>

        <span className="flexRowCenterCenter navbar_btn_container" >
            <Button> Log In </Button>
            <Button styling="primary"> Sign Up </Button>
        </span>
    </nav>
    )
}

export default Navbar

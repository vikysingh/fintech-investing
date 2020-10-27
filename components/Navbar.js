import Button from "./Reusable/Button"

const Navbar = () => (
    <nav className="flexRowEvenlyCenter" >
        <span>
            InFin
        </span>
        <ul className="flexRowCenterCenter" >
            <li>Memberships</li>
            <li>Investing</li>
            <li>About</li>
        </ul>

        <span>
            <Button> Log In </Button>
            <Button styling="primary"> Sign Up </Button>
        </span>
    </nav>
)

export default Navbar
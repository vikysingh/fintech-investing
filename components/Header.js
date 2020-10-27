import FinanceImg from "../assets/finance.svg"
import Button from "./Reusable/Button"

const Header = () => (
    <header className="twoColGrid" >
        <div className="flexColumnStartCenter twoColGrid-leftcol" >
            <h1>Step into the future of finance</h1>
            <p>
                Elegance, simplicity, and artificial intelligence
                collide on the most intuitive and intelligent
                investing platform, ever.
            </p>
            <Button styling="primary" > Get Started </Button>
        </div>
        <div className="flexColumnStartCenter twoColGrid-rightcol" >
            <img alt="right col" src={FinanceImg} />
        </div>
    </header>
)

export default Header
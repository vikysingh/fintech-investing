//import Link from "next/link"
import FbIcon from "../assets/fb_icon.svg"
import LinkedinIcon from "../assets/linkedin_icon.svg"

const Footer = () => (
    <footer  >
        <div className="flexRowEvenlyCenter">
            <div>
                <h1>InFin</h1>
                <p>
                    Elegance, simplicity, and artificial
                    collide on the most intuitive and intelligent
                    investing platform, ever.
                </p>
            </div>
            <div>
                <h4> Get in touch </h4>
                <p>+ 123 456 789</p>
                <p>finance@support.com</p>
                <div>
			
			<a href="https://www.facebook.com">
				<img src={FbIcon} className="social_icon" alt="" />
			</a>
			<a href="https://www.facebook.com">
				<img src={LinkedinIcon} className="social_icon" alt="" />
			</a>
		</div>
            </div>
        </div>
        <p>
            All Rights Reserved &copy; InFin.
        </p>
    </footer>
)

export default Footer

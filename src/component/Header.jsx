import "./Header.css"
import more from "../assets/more.png"
import logo from "../assets/logo.png"


function Header(){
    return(
        <header>
            <nav>
                <img src={more} alt="" />
                <input type="text" placeholder="🔍 Search something here" />
                <ul>
                    <img src={logo} alt="" />
                </ul>
            </nav>
        </header>
    )
}

export default Header
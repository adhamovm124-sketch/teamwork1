import "./Footer.css"
import more from "../assets/more.png"


function Footer(){
    return(
        <footer>
            <div className="aa">
                <img src={more} alt="" />
                <p>Our vision is to provide convenience <br /> and help increase your sales business.</p>
            </div>
            <div className="con">
                <div className="ss">
                    <h1>About</h1>
                    <p>How it works</p>
                    <p>Featured</p>
                    <p>Partnership</p>
                    <p>Bussiness Relation</p>
                </div>
                <div className="ss">
                    <h1>Community</h1>
                    <p>Events</p>
                    <p>Blog</p>
                    <p>Podcast</p>
                    <p>Invite a friend</p>
                </div>
                <div className="ss">
                    <h1>Socials</h1>
                    <p>Discord</p>
                    <p>Instagram</p>
                    <p>Twitter</p>
                    <p>Facebook</p>
                </div>
            </div>
        </footer>
    )
}
export default Footer

import "./Section1.css"
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'

function Section1(){

    return(
        <>
        <div className="salom6">
        <div className="salom2">
            <div className="salom">
                <h1>The Best Platform <br /> for Car Rental</h1>
                <p>Ease of doing a car rental safely and <br /> reliably. Of course at a low price.</p>
                <button>Rental Car</button>
                <div>
                    <img src={img1} alt="" />
                </div>
            </div>
            <div className="salom1">
                <h1>Easy way to rent a <br /> car at a low price</h1>
                <p>Providing cheap car rental services <br /> and safe and comfortable facilities.</p>
                <button>Rental Car</button>
                <div>
                    <img src={img2} alt="" />
                </div>
            </div>
        </div>
        <div className="salom5">
            <div className="salom3">
                <div>
                    <h2>Pick - Up</h2>
                    <h3>Locations</h3>
                    <p>Select your city   </p>
                </div>
                <div className="salom4">
                   
                    <h3>Locations</h3>
                    <p>Select your city   </p>
                </div>
                <div className="salom4">
                   
                    <h3>Locations</h3>
                    <p>Select your city   </p>
                </div>
            </div>

             <div>
                <img src={img3} alt="" />
             </div>
             <div className="salom3">
                <div>
                    <h2>Pick - Up</h2>
                    <h3>Locations</h3>
                    <p>Select your city   </p>
                </div>
                <div className="salom4">
                   
                    <h3>Locations</h3>
                    <p>Select your city   </p>
                </div>
                <div className="salom4">
                   
                    <h3>Locations</h3>
                    <p>Select your city   </p>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default Section1
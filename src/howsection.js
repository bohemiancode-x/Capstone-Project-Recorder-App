import numberone from './numberone.svg'
import numbertwo from './numbertwo.svg'
import numberthree from './numberthree.svg'

const Howsection = () => {
    return (
        <div className="howitworks">
            <h2>How It Works..</h2>
            <div className="card-container">
                <div className="card">
                <img src={numberone} alt="" />
                <h3>Record.</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis assumenda quaerat tempore error unde ex, tenetur beatae dignissimos</p>
                </div>
                
                <div className="card">
                <img src={numbertwo} alt="" />
                <h3>Preview.</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis assumenda quaerat tempore error unde ex, tenetur beatae dignissimos</p>
                    </div>
                <div className="card">
                <img src={numberthree} alt="" />
                <h3>Download.</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis assumenda quaerat tempore error unde ex, tenetur beatae dignissimos</p>
                    </div>
            </div>    
        </div>
      );
}
 
export default Howsection;
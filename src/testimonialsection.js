import imageemily from './imageemily.jpg';
import imagejennie from './imagejennie.jpg';
import imagethomas from './imagethomas.jpg';

const Testimonialsection = () => {
    return ( 
        <div className="testimonial-section">
            <span></span>
            <h4>What others have to say..</h4>
            <h2>Testimonials</h2>
            <div className="testimonial-cards">
                    <div className="card">
                        <img src={imageemily} alt="" />
                        <h3>John Doe</h3>
                        <p>"I love this tool so much!"</p>
                        </div>
                    <div className="card">
                    <img src={imagejennie} alt="" />
                        <h3>Jane Doe</h3>
                        <p>"It's the best screen recorder app I've used this year!"</p>
                        </div>
                    <div className="card">
                    <img src={imagethomas} alt="" />
                        <h3>Joe Doe</h3>
                        <p>"I recommend this app to anyone!"</p>
                        </div>
                </div>
        </div>
     );
}
 
export default Testimonialsection;
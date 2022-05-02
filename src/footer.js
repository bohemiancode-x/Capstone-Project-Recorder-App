
const Footersection = () => {
    return (
        <section className="footer">
            <div className="social">
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-snapchat"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-facebook-f"></i></a>    
            </div>

            <ul className="list">
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                <a href="#">Services</a>
                </li>
                <li>
                <a href="#">About</a>
                </li>
                <li>
                <a href="#">Terms</a>
                </li>
                <li>
                <a href="#">Privacy Policy</a>    
                </li>    
            </ul>  
            <p className="copyright">
                Acerecord &#169;    
            </p>  
        </section>
      );
}
 
export default Footersection;
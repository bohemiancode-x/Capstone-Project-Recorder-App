import { useNavigate } from "react-router-dom";
import Footersection from "../footer";
import Herosection from "../herosection";
import Howsection from "../howsection";
import Navbar from "../navbar";
import Testimonialsection from "../testimonialsection";

const HomePage = () => {
    const navigate = useNavigate()

    return (
        
       <div className="home">
           <Navbar />
           <Herosection />
           <Howsection />
           <Testimonialsection />
           <Footersection />
        </div>
    );
}
 
export default HomePage;
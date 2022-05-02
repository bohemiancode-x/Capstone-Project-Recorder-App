import { useNavigate } from "react-router-dom";

const Herosection = () => {
const navigate = useNavigate()

    return (
        <main className="herosection">
            <div className="header">
                <h1>Record.</h1>
                <h1>Preview.</h1>
                <h1>Save.</h1>
            </div>
            <button onClick={() => navigate('/record')} id="cta">Get started!</button>
            <p>Acerecord combines the best screen recording experience with an obsessive focus on end-user experience.<br />Our platform enables users looking for the best screen recording quality to get the best result.</p>
        </main>
    );
}
 
export default Herosection;
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
    const navigate = useNavigate()

    return ( 
        <div className="lost">
            <h1>Sorry,</h1>
            <p>that page cannot be found.</p>
            <button onClick={() => navigate('/') }>Take me home.</button>    
        </div>
     );
}
 
export default NotFoundPage;
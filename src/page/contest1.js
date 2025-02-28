
import Dance from "./Dance.jpg";
import "./Contest.css";
import { useNavigate } from 'react-router-dom'; 
export const Contest1 = () => { 
    const navigate = useNavigate();
    return (
        <div class="contest">
            <div className="dance-container">
                <div className="dance-card">
                    <img src={Dance} alt="Dancer" className="dance-image" />
                    <div className="dance-content">
                        <h2>Dance Challenge</h2>
                        <p className="quote">"Let Your Feet Speak – Everyone's Stage, Equal for All!"</p>
                        <p className="description">
                            Welcome to the Dance Challenge! This competition celebrates the art of
                            movement, where every step tells a story. Whether it’s classical ballet,
                            contemporary, or street dance, let your creativity flow and show the world
                            your passion.
                        </p>
                        <p className="description">
                            Get ready to light up the stage, dazzle the audience, and make your mark
                            in the world of dance!
                        </p>
                        
                        <button className="register-btn" type="button" onClick={() => navigate("/register")}>Register Now </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Contest1;
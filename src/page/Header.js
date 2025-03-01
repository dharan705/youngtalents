
import { useNavigate } from 'react-router-dom'; 
import "./Header.css";
import LoopVideo from "../Loop1.mp4";
//import GifImage from "../page/bg.gif";

const Header = () => {
  const navigate = useNavigate();
  

  return (
    <div className="header-container">
      
      <video autoPlay loop muted playsInline className="responsive-video">
        <source src={LoopVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className="upcomingcontest-bg">
  <div className="upcomingcontest">
    <div className="content">
      <h2>Upcoming Contest</h2>
      <p className="description">
        Join our exciting contest and win amazing prizes!
      </p>
      <button className="learn-more" type="button" onClick={() => navigate("/about")}>Learn More</button>
    </div>
  </div>
</div>



      <div className="contest-section">
        <h2>Contest Categories</h2>
        <div className="contest-grid">
          <div className="contest-card">
            <h3>Dance Challenge</h3>
            <p>"Let Your Feet Speak - Everyone's Stage, Equal for All!"</p>
            <button className="view-details" type="button" onClick={() => navigate("/contest")}>View Details</button>
            
          </div>
          <div className="contest-card">
            <h3>Singing Contest</h3>
            <p>"Sing Your Heart Out - A Voice for Every Dream!"</p>
            <button className="view-details" type="button" onClick={() => navigate("/contest")}>View Details</button>
          </div>
          <div className="contest-card">
            <h3>Drawing Competition</h3>
            <p>"Every Line Tells a Story - Equal Canvas for All!"</p>
            <button className="view-details" type="button" onClick={() => navigate("/contest")}>View Details</button>
            
          </div>
          <div className="contest-card">
            <h3>Costume Parade</h3>
            <p>"Dress to Impress, Show Your Best - Equal for All!"</p>
            <button className="view-details" type="button" onClick={() => navigate("/contest")}>View Details</button>
          </div>
          <div className="contest-card">
            <h3>Storytelling</h3>
            <p>"Every Tale is Magical - Let Your Story Shine!"</p>
            <button className="view-details" type="button" onClick={() => navigate("/contest")}>View Details</button>
          </div>
          <div className="contest-card">
            <h3>Spelling Bee</h3>
            <p>"Spell Your Success - Equal Words for Every Child!"</p>
            <button className="view-details" type="button" onClick={() => navigate("/contest")}>View Details</button> 
                     </div>
          <div className="contest-card">
            <h3>Coloring Competition</h3>
            <p>"Color Your World - Creativity Knows No Boundaries!"</p>
            <button className="view-details" type="button" onClick={() => navigate("/contest")}>View Details</button>
          </div>
          <div className="contest-card">
            <h3>Handwriting</h3>
            <p>"Write Your Way to Success - Every Stroke Matters!"</p>
            <button className="view-details" type="button" onClick={() => navigate("/contest")}>View Details</button>
          </div>
          <div className="contest-card">
            <h3>Fastest Walking (9-15 months)</h3>
            <p>"Step by Step, Everyone Can Win!"</p>
            <button className="view-details" type="button" onClick={() => navigate("/contest")}>View Details</button>
          </div>
          <div className="contest-card">
            <h3>Crawling (5-9 months)</h3>
            <p>"Crawl, Explore, and Grow - Equal for Every Little One!"</p>
            <button className="view-details" type="button" onClick={() => navigate("/contest")}>View Details</button>
          </div>
          <div className="contest-card">
            <h3>Yoga Competition</h3>
            <p>"Stretch, Breathe, Achieve - Equal Flexibility for All!"</p>
            <button className="view-details" type="button" onClick={() => navigate("/contest")}>View Details</button>
          </div>
        </div>
      </div>
      <div className="containerbg">
  <div className="container">
    <div className="content1">
      <h2>Upcoming Dates & Important Info</h2>
      <p><strong>Registration Deadline:</strong> [Date]</p>
      <p><strong>Event Dates:</strong> [Date(s)]</p>
      <p><strong>Results Announcement:</strong> [Date]</p>
      <button className="register-btn" type="button" onClick={() => navigate("/register")}>
        Register Before It's Too Late!
      </button>
    </div>
  </div>
</div>


      <section className="highlights">
  <div className="highlightsbg">
    <h2>Highlights</h2>
    <p>Check out some moments from our past events!</p>
    <div className="image-gallery">
      <div className="image-box">Image 1</div>
      <div className="image-box">Image 2</div>
      <div className="image-box">Image 3</div>
    </div>
  </div>
</section>


      <footer className="footer">
      <div className="footer-links">
      <button className="social-btn" type="button" onClick={() => navigate("/about")}>about
      </button>
      <button className="social-btn" type="button" onClick={() => navigate("/register")}>register
      </button>
      <button className="social-btn" type="button" onClick={() => navigate("/event")}>event
      </button>
      <button className="social-btn" type="button" onClick={() => navigate("/contact")}>contact
      </button>
      </div>

      <div className="footer-social">
  <button className="social-btn">Facebook</button>
  
  <button className="social-btn">Instagram</button>
  <button className="social-btn">YouTube</button>
</div>

<div className="footer-bottom">
  © 2025 Your Organization. All Rights Reserved.
</div>

    </footer>

      </div>
      
      
  );
};

export default Header;
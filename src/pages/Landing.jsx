import { Link } from "react-router-dom";
import main from "../assets/images/interview.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components/Index";


const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job <span>tracking</span> App
          </h1>
          <p>
            Welcome to our job tracking app! If you're tired of keeping track of
            multiple job applications on different platforms or struggling to
            remember the details of each application, our app is here to help.
          </p>
          <Link to="/register" className="btn btn-hero">Login/Register</Link>
        </div>
        <img src={main} alt="landing-img" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;

import { Link } from "react-router-dom";
import img from "../assets/images/not-found.svg";
import Wrapper from "../assets/wrappers/ErrorPage";

const Error = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={img} alt="not-found-img" />
        <h3>Page Not Found :(</h3>
        <p>It seems the page you're looking for does not exist</p>
        <Link to="/">back home</Link>
      </div>
    </Wrapper>
  );
};
export default Error;

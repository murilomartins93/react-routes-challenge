import "./styles.css";
import homeIcon from "../../assets/home.png";
import { Link, useNavigate } from "react-router-dom";

export default function MainHeader() {
  return (
    <header className={"rr-header"}>
      <nav className={"rr-container rr-nav"}>
        <div className={"rr-navlinks"}>Links</div>
        <Link to={"/"}>
          <img src={homeIcon} alt="Home Icon" />
        </Link>
      </nav>
    </header>
  );
}

import "./styles.css";
import homeIcon from "../../assets/home.png";
import { Link } from "react-router-dom";
import PageLink from "../PageLink";

export default function MainHeader() {
  return (
    <header className={"rr-header"}>
      <nav className={"rr-container rr-nav"}>
        <div className={"rr-navlinks"}>
          <PageLink to={"/home"}>Início</PageLink>
          <PageLink to={"/about"}>Sobre nós</PageLink>
        </div>
        <Link to={"/"}>
          <img src={homeIcon} alt="Home Icon" />
        </Link>
      </nav>
    </header>
  );
}

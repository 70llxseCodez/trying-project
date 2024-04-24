import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <Link to="/">Logo</Link>
        </div>
        <ul className="header__links">
          <Link to={"/about"}>about</Link>
          <Link to={"/eduction"}>knowlange</Link>
          <Link to={"/anonymous-chat"}>anonyme chats</Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;

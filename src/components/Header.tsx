import { Link } from "react-router-dom";

const Header: React.FunctionComponent = () => {

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Link to="/">
            <img
              className="header__logo"
              src="img/favbooks-logo.svg"
              alt="Logo: Favbooks"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

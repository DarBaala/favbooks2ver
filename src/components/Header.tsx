import { useAppSelector } from "../redux/store";
import { Link } from "react-router-dom";

const Header: React.FunctionComponent = () => {
  const cartCount = useAppSelector((state) => state.cart.count);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to="/categories">
              <img
                className="header__category"
                src="../img/category-header.svg"
                alt="Icon: Category"
              />
            </Link>
            <Link to="/auth">
              <img
                className="header__user"
                src="../img/user-icon.svg"
                alt="Icon: User"
              />
            </Link>
          </div>
          <Link to="/">
            <img
              className="header__logo"
              src="../img/favbooks-logo.svg"
              alt="Logo: Favbooks"
            />
          </Link>
          <div className="header__right">
            <div className="header__cart">
              <Link to="/cart">
                <img src="../img/cart-header.svg" alt="Icon: Cart" />
                <p>{cartCount}</p>
              </Link>
            </div>
            <Link to="/favorites">
              <img
                src="../img/favorite-header.svg"
                alt="Icon: Heart"
                className="header__favorite"
              />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

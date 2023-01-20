import { Link } from "react-router-dom";
import { useAppSelector } from "../redux/store";
import { useLocation } from "react-router-dom";

const TapBar = () => {
  const cartCount = useAppSelector((state) => state.cart.count);

  let { pathname } = useLocation();

  return (
    <div className="tapbar">
      <div className="container">
        <div className="tapbar__menu">
          <Link to="/">
            <img
              className="tapbar__home-icon"
              src={pathname === "/" ? "img/home-active.svg" : "img/home.svg"}
              alt=""
            />
            <p style={pathname === "/" ? { color: "#C5A17C" } : {}}>Главная</p>
          </Link>
          <Link to="/categories">
            <img
              className="tapbar__category-icon"
              src={
                pathname === "/categories"
                  ? "img/category-header-active.svg"
                  : "img/category-header.svg"
              }
              alt=""
            />
            <p style={pathname === "/categories" ? { color: "#C5A17C" } : {}}>
              Каталог
            </p>
          </Link>
          <Link to="/cart">
            <img
              className="tapbar__cart-icon"
              src={
                pathname === "/cart"
                  ? "img/cart-header-active.svg"
                  : "img/cart-header.svg"
              }
              alt=""
            />
            <div>
              {cartCount > 0 ? (
                <p className="tapbar__cart-count">{cartCount}</p>
              ) : (
                ""
              )}
            </div>
            <p style={pathname === "/cart" ? { color: "#C5A17C" } : {}}>
              Корзина
            </p>
          </Link>
          <Link to="/favorites">
            <img
              className="tapbar__favorite-icon"
              src={
                pathname === "/favorites"
                  ? "img/favorite-header-active.svg"
                  : "img/favorite-header.svg"
              }
              alt=""
            />
            <p style={pathname === "/favorites" ? { color: "#C5A17C" } : {}}>
              Избранное
            </p>
          </Link>
          <Link to="/auth">
            <img
              className="tapbar__user-icon"
              src={
                pathname === "/auth"
                  ? "img/user-icon-active.svg"
                  : "img/user-icon.svg"
              }
              alt=""
            />
            <p style={pathname === "/auth" ? { color: "#C5A17C" } : {}}>
              Профиль
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TapBar;

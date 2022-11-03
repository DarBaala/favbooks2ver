const Header: React.FunctionComponent = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <img
              className="header__category"
              src="img/category-header.svg"
              alt="Icon: Category"
            />
            <img
              className="header__user"
              src="img/user-icon.svg"
              alt="Icon: User"
            />
          </div>
          <img
            className="header__logo"
            src="img/favbooks-logo.svg"
            alt="Logo: Favbooks"
          />
          <div className="header__right">
            <div className="header__cart">
              <img src="img/cart-header.svg" alt="Icon: Cart" />
              <p>1</p>
            </div>
            <img
              src="img/favorite-header.svg"
              alt="Icon: Heart"
              className="header__favorite"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

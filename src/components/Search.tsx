const Search: React.FC = () => {
  return (
    <div className="container">
      <div className="search">
        <div className="search__block">
          <img
            src="img/search-icon.svg"
            alt="Icon: Search"
            className="search__icon"
          />
          <input type="text" placeholder="Искать" className="search__input" />
          <img src="img/close-icon.svg" alt="" className="search__close" />
        </div>
        <img src="img/support.svg" alt="Icon: Help" className="search__help" />
      </div>
    </div>
  );
};

export default Search;

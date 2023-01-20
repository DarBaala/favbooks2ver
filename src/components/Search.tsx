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
      </div>
    </div>
  );
};

export default Search;

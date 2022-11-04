const categoriesData = [
  {
    title: "Ислам",
    imgUrl: "img/categories-img.svg",
  },
  {
    title: "Роман",
    imgUrl: "img/categories-img.svg",
  },
  {
    title: "Детектив",
    imgUrl: "img/categories-img.svg",
  },
  {
    title: "Открытки",
    imgUrl: "img/categories-img.svg",
  },
  {
    title: "Книги б/у",
    imgUrl: "img/categories-img.svg",
  },
  {
    title: "Фэнтези",
    imgUrl: "img/categories-img.svg",
  },
  {
    title: "Психология",
    imgUrl: "img/categories-img.svg",
  },
  {
    title: "Бизнес",
    imgUrl: "img/categories-img.svg",
  },
];

const Categories = () => {
  return (
    <div className="container">
      <div className="categories">
        <div className="categories__wrapper">
          {categoriesData.map((obj) => (
            <div key={obj.title} className="categories__items">
              <img src={obj.imgUrl} alt="Categories" />
              <p>{obj.title}</p>
            </div>
          ))}
        </div>
        <div className="categories__bottom">
          <div className="categories__popular">
            <button>Популярное</button>
            <img src="img/lightning.svg" alt="Icon: Popular" />
          </div>
          <div className="categories__all">
            <button>Все категории</button>
            <img src="img/category-icon.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;

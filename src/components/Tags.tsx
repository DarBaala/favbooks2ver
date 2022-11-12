import { Link } from "react-router-dom";

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

const Tags = () => {
  return (
    <div className="container">
      <div className="tags">
        <div className="tags__wrapper">
          {categoriesData.map((obj) => (
            <div key={obj.title} className="tags__items">
              <img src={obj.imgUrl} alt="tags" />
              <p>{obj.title}</p>
            </div>
          ))}
        </div>
        <div className="tags__bottom">
          <div className="tags__popular">
            <button>Популярное</button>
            <img src="img/lightning.svg" alt="Icon: Popular" />
          </div>
          <div className="tags__all">
            <Link to="/categories">
              <button>Все категории</button>
            </Link>
            <img src="img/category-icon.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tags;

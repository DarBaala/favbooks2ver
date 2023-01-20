import { Link } from "react-router-dom";

const categoriesData = [
  {
    title: "Ислам",
    imgUrl: "img/categories-islam.svg",
    link: "/categories/islam",
  },
  {
    title: "Роман",
    imgUrl: "img/categories-roman.svg",
    link: "/categories/roman",
  },
  {
    title: "Детектив",
    imgUrl: "img/categories-det.svg",
    link: "/categories/detective",
  },
  {
    title: "Открытки",
    imgUrl: "img/categories-card.svg",
    link: "/categories/card",
  },
  {
    title: "Медицина",
    imgUrl: "img/categories-medicine.svg",
    link: "/categories/medicine",
  },
  {
    title: "Фэнтези",
    imgUrl: "img/categories-fantasy.svg",
    link: "/categories/fantasy",
  },
  {
    title: "Психология",
    imgUrl: "img/categories-psychology.svg",
    link: "/categories/psychology",
  },
  {
    title: "Бизнес",
    imgUrl: "img/categories-business.svg",
    link: "/categories/business",
  },
];

const Tags = () => {
  return (
    <div className="container">
      <div className="tags">
        <div className="tags__wrapper">
          {categoriesData.map((obj) => (
            <Link key={obj.title} to={obj.link}>
              <div className="tags__items">
                <img src={obj.imgUrl} alt="tags" />
                <p>{obj.title}</p>
              </div>
            </Link>
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
              <img src="img/category.svg" alt="Icon: Сategories" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tags;

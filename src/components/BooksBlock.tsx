const BooksData = [
  {
    name: "Лучшая книга в мире",
    imgUrl: "img/book-photo.png",
    author: "Чарльз Луковский",
    price: "1200",
  },
  {
    name: "Лучшая книга не в мире",
    imgUrl: "img/book-photo.png",
    author: "Чарльз Луковский",
    price: "1200",
  },
  {
    name: "Лучшая книга в галактике",
    imgUrl: "img/book-photo.png",
    author: "Чарльз Луковский",
    price: "1200",
  },
  {
    name: "Лучшая книга Марса",
    imgUrl: "img/book-photo.png",
    author: "Чарльз Луковский",
    price: "1200",
  },
  {
    name: "Лучшая книга на Луне",
    imgUrl: "img/book-photo.png",
    author: "Чарльз Луковский",
    price: "1200",
  },
  {
    name: "Лучшая книга на Юпитере",
    imgUrl: "img/book-photo.png",
    author: "Чарльз Луковский",
    price: "1200",
  },
];

const BooksBlock = () => {
  return (
    <div className="container">
      <div className="books">
        <h2 className="books__title">Исламская литература</h2>
        <div className="books__wrapper">
          {BooksData.map((obj) => (
            <div key={obj.name} className="books__items">
              <img src={obj.imgUrl} alt="Book" className="books__media" />
              <div className="books__card">
                <p className="books__name">{obj.name}</p>
                <p className="books__author">{obj.author}</p>
                <div className="books__price">{obj.price} РУБ.</div>
                <div className="books__bottom">
                  <button className="books__buy">В корзину</button>
                  <button className="books__favorites">
                    <img src="img/favorites-nocheck.svg" alt="" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <h2 className="books__title">Психология</h2>
        <div className="books__wrapper">
          {BooksData.map((obj) => (
            <div key={obj.name} className="books__items">
              <img src={obj.imgUrl} alt="Book" className="books__media" />
              <div className="books__card">
                <p className="books__name">{obj.name}</p>
                <p className="books__author">{obj.author}</p>
                <div className="books__price">{obj.price} РУБ.</div>
                <div className="books__bottom">
                  <button className="books__buy">В корзину</button>
                  <button className="books__favorites">
                    <img src="img/favorites-nocheck.svg" alt="" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BooksBlock;

import { useEffect } from "react";
import { fetchProduct } from "../redux/slices/productSlice";
import {
  setFavorites,
  setFavoritesDelete,
} from "../redux/slices/favoritesSlice";
import { setCart, setCartDelete } from "../redux/slices/cartSlice";
import { ProductItem } from "../redux/slices/productSlice";
import { useAppDispatch, useAppSelector } from "../redux/store";

const BooksBlock: React.FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);
  const product = useAppSelector((state) => state.product.items);
  const favObj = useAppSelector((state) => state.favorites.items);
  const cartObj = useAppSelector((state) => state.cart.items);

  const handleFavorites = (obj: ProductItem) => {
    if (favObj.find((favObj) => favObj.id === obj.id)) {
      dispatch(setFavoritesDelete(obj));
    } else {
      dispatch(setFavorites(obj));
    }
  };

  const handleCart = (obj: ProductItem) => {
    if (cartObj.find((cartObj) => cartObj.id === obj.id)) {
      dispatch(setCartDelete(obj));
    } else {
      dispatch(setCart(obj));
    }
  };

  return (
    <div className="container">
      <div className="books">
        <h2 className="books__title">Исламская литература</h2>
        <div className="books__wrapper">
          {product.length < 1
            ? "Пусто"
            : product.map((obj) => (
                <div key={obj.name} className="books__items">
                  <img src={obj.imgUrl} alt="Book" className="books__media" />
                  <div className="books__card">
                    <p className="books__name">{obj.name}</p>
                    <p className="books__author">{obj.author}</p>
                    <div className="books__price">{obj.price} РУБ.</div>
                    <div className="books__bottom">
                      <button
                        onClick={() => handleCart(obj)}
                        className="books__buy"
                        style={
                          cartObj.find((cartObj) => cartObj.id === obj.id)
                            ? {
                                backgroundColor: "#4F9167",
                              }
                            : { backgroundColor: "#311813" }
                        }
                      >
                        {cartObj.find((cartObj) => cartObj.id === obj.id)
                          ? "Добавлено"
                          : "В корзину"}
                      </button>
                      <button
                        onClick={() => handleFavorites(obj)}
                        className="books__favorites"
                      >
                        <img
                          src={
                            favObj.find((favObj) => favObj.id === obj.id)
                              ? "img/favorites-check.svg"
                              : "img/favorites-nocheck.svg"
                          }
                          alt=""
                        />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
        </div>
        <h2 className="books__title">Психология</h2>
        <div className="books__wrapper">
          {product.length < 1
            ? "Пусто"
            : product.map((obj) => (
                <div key={obj.name} className="books__items">
                  <img src={obj.imgUrl} alt="Book" className="books__media" />
                  <div className="books__card">
                    <p className="books__name">{obj.name}</p>
                    <p className="books__author">{obj.author}</p>
                    <div className="books__price">{obj.price} РУБ.</div>
                    <div className="books__bottom">
                      <button className="books__buy">В корзину</button>
                      <button
                        onClick={() => handleFavorites(obj)}
                        className="books__favorites"
                      >
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

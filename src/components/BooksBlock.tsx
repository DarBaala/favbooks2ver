import { useEffect } from "react";
import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import { fetchProduct } from "../redux/slices/productSlice";
import { setFavorites, setDelete } from "../redux/slices/favoritesSlice";
import type { RootState, AppDispatch } from "../redux/store";
import { ProductItem } from "../redux/slices/productSlice";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;

const BooksBlock: React.FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);
  const product = useAppSelector((state) => state.product.items);
  const favObj = useAppSelector((state) => state.favorites.items);

  const handleFavorites = (obj: ProductItem) => {
    if (favObj.find((favObj) => favObj.id === obj.id)) {
      dispatch(setDelete(obj));
    } else {
      dispatch(setFavorites(obj));
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
                      <button className="books__buy">В корзину</button>
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

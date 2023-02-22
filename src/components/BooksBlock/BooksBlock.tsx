import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { CartItem } from "../../redux/slices/cartSlice";
import { fetchProduct } from "../../redux/slices/productSlice";
import { fetchTags } from "../../redux/slices/tagsSlice";
import {
  setFavorites,
  setFavoritesDelete,
} from "../../redux/slices/favoritesSlice";
import { fetchAddToCart } from "../../redux/slices/cartSlice";
import { ProductItem } from "../../redux/slices/productSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store";

import Skeleton from "./Skeleton";

const BooksBlock: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchTags());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  const product = useAppSelector((state) => state.product.items);
  const favObj = useAppSelector((state) => state.favorites.items);
  const cartItems = useAppSelector((state) => state.cart.cart);
  const status = useAppSelector((state) => state.product.status);

  const skeletons = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));

  const handleFavorites = (obj: ProductItem) => {
    if (favObj.find((favObj) => favObj._id === obj._id)) {
      dispatch(setFavoritesDelete(obj));
    } else {
      dispatch(setFavorites(obj));
    }
  };

  const truncate = (str: string) => {
    return str.length > 37 ? str.substring(0, 34) + "..." : str;
  };

  const handleCart = (obj: ProductItem) => {
    if (
      cartItems?.find((cartItems: CartItem) => cartItems.product_id === obj._id)
    ) {
      console.log("В корзинку");
      navigate("/cart");
      return;
    }
    const items = {
      quantity: 1,
      price: obj.price,
      product_id: obj._id,
      totalPrice: obj.price,
    };
    console.log("Сработало добавление в редакс", items);

    dispatch(fetchAddToCart(items));
  };

  return (
    <div className="container">
      <div className="books">
        <h2 className="books__headline">Популярное</h2>
        <div className="books__wrapper">
          {status === "loading"
            ? skeletons
            : product.map((obj) => (
                <div key={obj._id} className="books__items">
                  <img src={obj.imageUrl} alt="Book" className="books__media" />
                  <div className="books__card">
                    <div className="books__top">
                      <p className="books__title">{obj.title}</p>
                      <p className="books__author">
                        {truncate(obj.author.join(", "))}
                      </p>
                    </div>
                    <div className="books__price">{obj.price} РУБ.</div>
                    <div className="books__bottom">
                      <button
                        onClick={() => handleCart(obj)}
                        className="books__buy"
                        style={
                          cartItems?.find(
                            (cartItems: CartItem) =>
                              cartItems.product_id === obj._id
                          )
                            ? {
                                backgroundColor: "#a35330",
                              }
                            : { backgroundColor: "#C38D57" }
                        }
                      >
                        {cartItems?.find(
                          (cartItems: CartItem) =>
                            cartItems.product_id === obj._id
                        )
                          ? "Оформить"
                          : "В корзину"}
                      </button>
                      <button
                        onClick={() => handleFavorites(obj)}
                        className="books__favorites"
                      >
                        <img
                          src={
                            favObj.find((favObj) => favObj._id === obj._id)
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
        <h2 className="books__headline">Психология</h2>
        <div className="books__wrapper">
          {product.length < 1
            ? "Пусто"
            : product.map((obj) => (
                <div key={obj._id} className="books__items">
                  <img src={obj.imageUrl} alt="Book" className="books__media" />
                  <div className="books__card">
                    <div className="books__top">
                      <p className="books__title">{obj.title}</p>
                      <p className="books__author">{obj.author.join(", ")}</p>
                    </div>
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

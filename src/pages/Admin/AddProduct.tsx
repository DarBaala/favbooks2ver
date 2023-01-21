import { useState } from "react";

import Header from "../../components/Header";
import TapBar from "../../components/TapBar";

const AddProduct = () => {
  const [whatProduct, setWhatProduct] = useState("");
  const [binding, setBinding] = useState("");

  const handleForm = (value: string) => {
    if (whatProduct === "") {
      setWhatProduct(value);
    } else {
      let check = window.confirm(
        "Вы точно хотите поменять поле добавления товара? Все внесенные данные потеряются!"
      );
      if (check) {
        setWhatProduct(value);
      }
    }
  };

  return (
    <div>
      <Header />
      <div className="container">
        <div className="addproduct">
          <div className="addproduct__what-product">
            <p>Какой продукт Вы хотите добавить?</p>
            <div>
              <button
                style={
                  whatProduct === "book"
                    ? {
                        backgroundColor: "#311813",
                        filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.5))",
                      }
                    : { backgroundColor: "#c38d57" }
                }
                onClick={() => handleForm("book")}
              >
                Книгу
              </button>
              <button
                style={
                  whatProduct === "card"
                    ? {
                        backgroundColor: "#311813",
                        filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.5))",
                      }
                    : { backgroundColor: "#c38d57" }
                }
                onClick={() => handleForm("card")}
              >
                Открытку
              </button>
            </div>
          </div>
          {whatProduct === "book" && (
            <div className="addproduct__book">
              <form action="" className="addproduct__book-form">
                <p>Название товара</p>
                <input type="text" />
                <p>Автор (если их более одного — через запятую)</p>
                <input type="text" />
                <div className="addproduct__tags">
                  <p>Жанр книги</p>
                  <input type="text" />
                </div>
                <p>Цена</p>
                <input type="text" />
                <p>Количество страниц</p>
                <input type="text" />
                <p>Описание</p>
                <textarea></textarea>
                <p>Переплет</p>
                <div className="addproduct__binding">
                  <div
                    onClick={() => {
                      setBinding("Мягкий");
                    }}
                    className="addproduct__softcover"
                  >
                    <img
                      style={binding === "Мягкий" ? { filter: "none" } : {}}
                      src="/img/softcover.webp"
                      alt=""
                    />
                    <p>Мягкий</p>
                  </div>
                  <div
                    onClick={() => {
                      setBinding("Жесткий");
                    }}
                    className="addproduct__hardcover"
                  >
                    <img
                      style={binding === "Жесткий" ? { filter: "none" } : {}}
                      src="/img/hardcover.webp"
                      alt=""
                    />
                    <p>Твердый</p>
                  </div>
                </div>
                <p>Изображение</p>
                <input type="file" />
                <button>Добавить книгу</button>
              </form>
            </div>
          )}
          {whatProduct === "card" && <div className="addproduct__card"></div>}
        </div>
      </div>
      <TapBar />
    </div>
  );
};

export default AddProduct;

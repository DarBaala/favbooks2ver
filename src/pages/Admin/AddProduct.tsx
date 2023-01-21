import { useState } from "react";
import { useForm, Controller } from "react-hook-form";

import Select from "react-select";

import Header from "../../components/Header";
import TapBar from "../../components/TapBar";

const AddProduct = () => {
  const [whatProduct, setWhatProduct] = useState("");
  const [binding, setBinding] = useState("");

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      title: "",
      author: "",
      price: "",
      numberPages: "",
      description: "",
      binding: "",
      tags: [{}],
    },
    mode: "onChange",
  });

  const tagsArray: Array<string> = ["1sa,a", "saffdeqa", "eq1sa,a", "saffaeq"];

  const optionSchema = (arr: Array<string>) => {
    const optionArr: Array<object> = [];
    arr.forEach((item) => {
      const str = item.toString();
      let newStr: string = "";
      if (
        str[0] !== "1" ||
        "2" ||
        "3" ||
        "4" ||
        "5" ||
        "6" ||
        "7" ||
        "8" ||
        "9" ||
        "0"
      ) {
        newStr = str[0].toUpperCase() + str.slice(1);
      }
      const obj = {
        value: `${item}`,
        label: `${newStr}`,
      };
      optionArr.push(obj);
    });
    return optionArr;
  };

  let options: Array<object> = [{}];

  console.log(optionSchema(tagsArray));

  if (tagsArray) {
    options = optionSchema(tagsArray);
  }

  const colourStyles = {
    option: (styles: any, { isFocused }: any) => {
      return {
        ...styles,
        backgroundColor: isFocused ? "#311813" : "#f6f4f2",
        color: isFocused ? "#f6f4f2" : null,
      };
    },
    control: (baseStyles: any) => ({
      ...baseStyles,
      padding: "7px 6px 6px 6px",
      background: "#f6f4f2",
      border: "0 !important",
      boxShadow: "0 !important",
      "&:hover": {
        border: "0 !important",
        background: "#f6f4f2 !important",
      },
    }),
  };

  const handleForm = (value: string) => {
    if (whatProduct === "") {
      setWhatProduct(value);
    } else {
      if (value !== whatProduct) {
        let check = window.confirm(
          "Вы точно хотите поменять поле добавления товара? Все внесенные данные потеряются!"
        );
        if (check) {
          setWhatProduct(value);
        }
      }
    }
  };
  const onSubmit = (values: any) => {
    let arr: Array<string> = [];
    values.tags.forEach((item: string) => {
      arr = [...arr, item];
    });
    values.tags = arr;
    console.log(values);
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
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="addproduct__book-form"
              >
                <p>Название товара</p>
                <input
                  {...register("title", {
                    required: "Пожалуйста, напшиите название книги",
                  })}
                  type="text"
                />
                <p>Автор (если их более одного — через запятую)</p>
                <input
                  {...register("author", {
                    required: "Пожалуйста, автора",
                  })}
                  type="text"
                />
                <div className="addproduct__tags">
                  <p>Жанр книги</p>
                  <Controller
                    control={control}
                    defaultValue={options.map((c: any) => c.value)}
                    name="tags"
                    render={({ field: { onChange, value, ref } }) => (
                      <Select
                        placeholder="Жанры"
                        styles={colourStyles}
                        value={options.filter((c: any) =>
                          value.includes(c.value)
                        )}
                        onChange={(val) =>
                          onChange(val.map((c: any) => c.value))
                        }
                        options={options}
                        isMulti
                      />
                    )}
                  />
                </div>
                <p>Цена</p>
                <input
                  {...register("price", {
                    required: "Пожалуйста, напишите цену",
                  })}
                  type="number"
                />
                <p>Количество страниц</p>
                <input
                  {...register("numberPages", {
                    required: "Пожалуйста, заполните поле страниц",
                  })}
                  type="number"
                />
                <p>Описание</p>
                <textarea
                  {...register("description", {
                    required: "Пожалуйста, заполните поле описании",
                  })}
                ></textarea>
                <p>Переплет</p>
                <div
                  {...register("binding", {
                    required: "Пожалуйста, выберите переплет",
                  })}
                  className="addproduct__binding"
                >
                  <div>
                    {" "}
                    <div
                      onClick={() => {
                        setBinding("Мягкий");
                        setValue("binding", "Мягкий");
                      }}
                      className="addproduct__softcover"
                    >
                      <img
                        style={
                          binding === "Мягкий"
                            ? { border: "3px solid rgb(49, 24, 19, 1)" }
                            : {}
                        }
                        src="/img/softcover.webp"
                        alt=""
                      />
                      <p>Мягкий</p>
                    </div>
                    <div
                      onClick={() => {
                        setBinding("Твердый");
                        setValue("binding", "Твердый");
                      }}
                      className="addproduct__hardcover"
                    >
                      <img
                        style={
                          binding === "Твердый"
                            ? { border: "3px solid rgb(49, 24, 19, 1)" }
                            : {}
                        }
                        src="/img/hardcover.webp"
                        alt=""
                      />
                      <p>Твердый</p>
                    </div>
                  </div>
                  {errors.binding && (
                    <p
                      style={{
                        color: "red",
                        textShadow: "none",
                        textAlign: "left",
                        marginTop: "13px",
                      }}
                    >
                      {errors.binding.message}
                    </p>
                  )}
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

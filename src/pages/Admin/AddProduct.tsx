import { useState, useRef } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import axios from "../../axios";

import Select from "react-select";

import Header from "../../components/Header";
import TapBar from "../../components/TapBar";

interface addBookTypes {
  title: string;
  author: string | Array<string>;
  price: number | string;
  numberPages: number | string;
  description: string;
  binding: string;
  amount: number | string;
  tags: string | Array<string>;
  image: string;
}

const AddProduct = () => {
  const [whatProduct, setWhatProduct] = useState("");
  const [urlImage, setUrlImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const inputFilesRef = useRef<HTMLInputElement>(null);

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
      amount: "",
      tags: "",
      image: "",
    },
    mode: "onChange",
  });

  const tagsArray: Array<string> = [
    "психология",
    "ислам",
    "фэнтези",
    "детектив",
    "бизнес",
    "медицина",
    "роман",
    "саморазвитие",
    "исторический",
    "кораны",
  ];

  const optionSchema = (arr: Array<string>) => {
    const optionArr: Array<object> = [];
    arr.forEach((item) => {
      const str = item.toString();
      let newStr: string = str[0].toUpperCase() + str.slice(1);
      const obj = {
        value: `${item}`,
        label: `${newStr}`,
      };
      optionArr.push(obj);
    });
    return optionArr;
  };

  let options: Array<object> = [{}];

  if (tagsArray) {
    options = optionSchema(tagsArray);
  }

  console.log(options);

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

  const handleChangeFiles = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsLoading(true);

    try {
      if (!e.target.files) {
        return;
      }
      let formData = new FormData();
      const file = e.target.files[0];
      formData.append("image", file);
      console.log(file);
      // if (
      //   file.type !== "image/jpeg" ||
      //   "image/png" ||
      //   "image/webp" ||
      //   "image/gif" ||
      //   "image/avif" ||
      //   "image/tiff" ||
      //   "image/svg"
      // ) {
      //   alert("Неподходящий формат файла!");
      //   setIsLoading(false);
      //   return;
      // }
      const { data } = await axios.post("/upload/resized", formData);
      setUrlImage(data.url);
      console.log(data.url);
    } catch (error) {
      console.error(errors.image?.message);
    }
    setIsLoading(false);
  };

  const onSubmit: SubmitHandler<addBookTypes> = (values) => {
    let arrTags: Array<string> = [];
    let arrCapitalLetters: Array<string> = [];
    let arrAuthors: Array<string> = [];

    if (typeof values.author === "string") {
      arrAuthors = values.author.split(", ");
    }

    arrAuthors.forEach((item: string) => {
      arrCapitalLetters = [
        ...arrCapitalLetters,
        item[0].toUpperCase() + item.slice(1),
      ];
    });

    if (Array.isArray(values.tags)) {
      values.tags.forEach((item: string) => {
        arrTags = [...arrTags, item[0].toUpperCase() + item.slice(1)];
      });
    }

    values.amount = +values.amount;
    values.price = +values.price;
    values.numberPages = +values.numberPages;
    values.description = values.description.replace(/\n/g, "\n");
    values.author = arrCapitalLetters;
    values.tags = arrTags;
    values.image = urlImage;
    console.log(values);
  };

  return (
    <div>
      <Header />
      <div className="container">
        <div className="addproduct">
          <div className="addproduct__what-product">
            <p> Какой продукт Вы хотите добавить?</p>
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
                    required: "Пожалуйста, напишите название книги",
                  })}
                  type="text"
                />
                {errors.title && (
                  <p style={{ fontSize: "14px", color: "red" }}>
                    {errors.title.message}
                  </p>
                )}
                <p>Автор (если их более одного — через запятую)</p>
                <input
                  {...register("author", {
                    required: "Пожалуйста, заполните поле автора",
                  })}
                  type="text"
                />
                {errors.author && (
                  <p style={{ fontSize: "14px", color: "red" }}>
                    {errors.author.message}
                  </p>
                )}
                {options && (
                  <div className="addproduct__tags">
                    <p>Жанр книги</p>
                    <Controller
                      control={control}
                      name="tags"
                      render={({ field: { onChange, value, ref } }) => (
                        <Select
                          {...register("tags", {
                            required: "Пожалуйста, выберите хотя бы один жанр",
                          })}
                          placeholder="Жанры"
                          styles={colourStyles}
                          // defaultValue={options.filter((c: any) => c)}
                          onChange={(val) =>
                            onChange(val.map((c: any) => c.value))
                          }
                          options={options}
                          isMulti
                        />
                      )}
                    />
                    {errors.tags && (
                      <p style={{ fontSize: "14px", color: "red" }}>
                        {errors.tags.message}
                      </p>
                    )}
                  </div>
                )}
                <p>Цена</p>
                <input
                  {...register("price", {
                    required: "Пожалуйста, напишите цену",
                    pattern: {
                      value: /^(0|[1-9]\d*)(\.\d+)?$/,
                      message: "В поле цены можно вводить лишь числа",
                    },
                  })}
                  type="number"
                />
                {errors.price && (
                  <p style={{ fontSize: "14px", color: "red" }}>
                    {errors.price.message}
                  </p>
                )}
                <p>Количество страниц</p>
                <input
                  {...register("numberPages", {
                    pattern: {
                      value: /^(0|[1-9]\d*)(\.\d+)?$/,
                      message: "В поле страниц можно вводить лишь числа",
                    },
                  })}
                  type="number"
                />
                {errors.numberPages && (
                  <p style={{ fontSize: "14px", color: "red" }}>
                    {errors.numberPages.message}
                  </p>
                )}
                <p>Количество товара в наличии</p>
                <input
                  {...register("amount", {
                    pattern: {
                      value: /^(0|[1-9]\d*)(\.\d+)?$/,
                      message:
                        "В поле количество товара можно вводить лишь числа",
                    },
                  })}
                  type="number"
                />
                {errors.amount && (
                  <p style={{ fontSize: "14px", color: "red" }}>
                    {errors.amount.message}
                  </p>
                )}
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
                  {errors.binding && !binding && (
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
                <input
                  hidden
                  ref={inputFilesRef}
                  onChange={handleChangeFiles}
                  type="file"
                  onClick={(e: any) => {
                    e.target.value = null;
                  }}
                />
                <div>
                  <button
                    onClick={() => {
                      inputFilesRef.current?.click();
                    }}
                    className="addproduct__button-img"
                    type="button"
                  >
                    Загрузить
                  </button>
                  {isLoading && <p>Картинка загружается...</p>}
                  {urlImage && !isLoading && (
                    <button
                      style={{ marginLeft: "13px", backgroundColor: "#311813" }}
                      onClick={() => {
                        setUrlImage("");
                      }}
                      className="addproduct__button-img"
                      type="button"
                    >
                      Удалить
                    </button>
                  )}
                </div>
                {urlImage && (
                  <img
                    style={{ width: "100%", marginBottom: "20px" }}
                    src={urlImage}
                    alt=""
                  />
                )}
                <button className="addproduct__button">Добавить книгу</button>
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

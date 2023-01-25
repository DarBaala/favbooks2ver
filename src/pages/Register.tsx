import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { useRef } from "react";
import { Link, Navigate } from "react-router-dom";

import TapBar from "../components/TapBar";
import Header from "../components/Header";
import { fetchRegister } from "../redux/slices/authSlice";

type UserAuth = {
  fullName: string;
  email: string;
  password: string;
};

const Register = () => {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector((state) => Boolean(state.auth.data));
  console.log(isAuth);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      password_repeat: "",
    },
    mode: "onChange",
  });

  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit = async (values: UserAuth) => {
    values.email = values.email.toLocaleLowerCase();
    const data = await dispatch(fetchRegister(values));
    if (!data.payload) {
      return alert("Не удалось зарегистрироваться, проверьте данные!");
    }
    if ("token" in data.payload) {
      window.localStorage.setItem("token", data.payload.token);
    }
  };

  if (window.localStorage.getItem("token") && isAuth) {
    return <Navigate to="/profile" />;
  }

  return (
    <div className="register">
      <Header />
      <TapBar />
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)} className="register__form">
          <p className="register__title">Имя</p>
          <input
            {...register("fullName", {
              required: "Пожалуйста, укажите имя",
              minLength: {
                value: 3,
                message: "Имя должно состоять как минимум из 3 символов",
              },
            })}
            type="text"
            className="register__title"
          />
          {errors.fullName && (
            <p style={{ color: "red" }}>{errors.fullName.message}</p>
          )}
          <p className="register__title">E-mail</p>
          <input
            {...register("email", {
              required: "Пожалуйста, укажите почту",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Адрес электронной почты указан некорректно",
              },
            })}
            type="text"
            className="register__email"
          />
          {errors.email && (
            <p style={{ color: "red" }}>{errors.email.message}</p>
          )}
          <p className="register__title">Пароль</p>
          <input
            {...register("password", {
              required: "Пожалуйста, введите пароль",
              minLength: {
                value: 8,
                message: "Имя должно состоять как минимум из 8 символов",
              },
            })}
            type="password"
            className="register__password"
          />
          {errors.password && (
            <p style={{ color: "red" }}>{errors.password.message}</p>
          )}
          <p className="register__title">Повторите пароль</p>
          <input
            {...register("password_repeat", {
              validate: (value) =>
                value === password.current || "Пароли не совпадают!",
            })}
            name="password_repeat"
            type="password"
            className="register__password"
          />
          {errors.password_repeat && (
            <p style={{ color: "red" }}>{errors.password_repeat.message}</p>
          )}
          <button type="submit" className="register__sign-in">
            Зарегистрироваться
          </button>
          <Link to="/auth">
            <p className="login__register">У меня уже есть аккаунт</p>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;

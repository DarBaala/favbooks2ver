import { Link, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../redux/store";

import TapBar from "../components/TapBar";
import Header from "../components/Header";
import { fetchAuth } from "../redux/slices/authSlice";

type UserAuth = {
  email: string;
  password: string;
};

const Login = () => {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector((state) => Boolean(state.auth.data));
  console.log(isAuth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (values: UserAuth) => {
    values.email = values.email.toLocaleLowerCase();
    const data = await dispatch(fetchAuth(values));
    if (!data.payload) {
      return alert("Не удалось авторизоваться, проверьте данные!");
    }
    if ("token" in data.payload) {
      window.localStorage.setItem("token", data.payload.token);
      return <Navigate to="/profile" />;
    }
  };

  if (isAuth) {
    return <Navigate to="/profile" />;
  }

  return (
    <div className="login">
      <Header />
      <TapBar />
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)} className="login__form">
          <p className="login__title">E-mail</p>
          <input
            {...register("email", {
              required: "Пожалуйста, укажите почту",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Адрес электронной почты указан некорректно",
              },
            })}
            type="text"
            className="login__email"
          />
          {errors.email && (
            <p style={{ color: "red" }}>{errors.email.message}</p>
          )}
          <p className="login__title">Пароль</p>
          <input
            {...register("password", {
              required: "Пожалуйста, укажите пароль",
              minLength: {
                value: 8,
                message: "Пароль должен состоять как минимум из 8 символов",
              },
            })}
            type="password"
            className="login__password"
          />
          {errors.password && (
            <p style={{ color: "red" }}>{errors.password.message}</p>
          )}
          <button type="submit" className="login__sign-in">
            Войти
          </button>
          <Link to="/auth/register">
            <p className="login__register">Регистрация</p>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;

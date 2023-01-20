import TapBar from "../components/TapBar";

import { useForm } from "react-hook-form";
import Header from "../components/Header";

type FormValues = {
  firstName: string;
  password: string;
  email: string;
};

const Register = () => {
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit = (data: FormValues) => {};

  return (
    <div className="register">
      <Header />
      <TapBar />
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)} className="register__form">
          <p className="register__title">Имя</p>
          <input
            {...register("firstName")}
            type="text"
            className="register__title"
          />
          <p className="register__title">E-mail</p>
          <input
            {...register("email")}
            type="email"
            className="register__email"
          />
          <p className="register__title">Пароль</p>
          <input
            {...register("password")}
            type="password"
            className="register__password"
          />
          <p className="register__title">Повторите пароль</p>
          <input
            {...register("password")}
            type="password"
            className="register__password"
          />
          <button className="register__sign-in">Зарегистрироваться</button>
        </form>
      </div>
    </div>
  );
};

export default Register;

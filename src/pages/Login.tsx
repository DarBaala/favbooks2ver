import { Link } from "react-router-dom";

import Header from "../components/Header";

const Login = () => {
  return (
    <div className="login">
      <Header />
      <div className="container">
        <form action="" className="login__form">
          <p className="login__title">E-mail</p>
          <input type="email" className="login__email" />
          <p className="login__title">Пароль</p>
          <input type="password" className="login__password" />
          <button className="login__sign-in">Войти</button>
          <Link to="/auth/register">
            <p className="login__register">Регистрация</p>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;

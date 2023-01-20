import { Link } from "react-router-dom";

import TapBar from "../components/TapBar";

const Login = () => {
  return (
    <div className="login">
      <TapBar />
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

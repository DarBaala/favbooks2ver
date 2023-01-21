import { useAppSelector, useAppDispatch } from "../redux/store";
import { setLogout } from "../redux/slices/authSlice";
import { useNavigate, Link } from "react-router-dom";

import TapBar from "../components/TapBar";
import Header from "../components/Header";

const Profile = () => {
  const data = useAppSelector((state) => state.auth.data);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const signOut = () => {
    if (window.confirm("Вы действительно хотите выйтис аккаунта?")) {
      dispatch(setLogout());
      navigate("/");
    }
  };

  return (
    <div>
      <Header />
      <div className="container">
        <div className="profile__about">
          <img src="/img/profile-avatar.png" alt="Avatar" />
          <p>
            Привет, <span>{data?.fullName}</span>!
          </p>
        </div>
        <div className="profile__banners">
          <Link to={"/orders"}>
            <div>
              <p>Заказы</p>
            </div>
          </Link>
          <Link to={"/sale"}>
            <div>
              <p>Акции</p>
            </div>
          </Link>
          <Link to={"/support"}>
            <div>
              <p>Поддержка</p>
            </div>
          </Link>
        </div>
        {data?.admin && (
          <Link to={"/admin"}>
            <div className="profile__admin">
              <p>Админка</p>
            </div>
          </Link>
        )}
        <div className="profile__menu">
          <h3>Профиль</h3>
          <div className="profile__list">
            <Link to="/">
              <div className="profile__items">Доставка</div>
            </Link>
            <Link to="/cart">
              <div className="profile__items">Корзина</div>
            </Link>
            <Link to="/favorites">
              <div className="profile__items">Избранное</div>
            </Link>
            <Link to="/">
              <div className="profile__items">Купленные товары</div>
            </Link>
            <Link to="/">
              <div style={{ marginBottom: "20px" }} className="profile__items">
                Коды и сертификаты
              </div>
            </Link>
          </div>
          <h3>Настройки</h3>
          <div className="profile__list">
            <Link to="/">
              <div className="profile__items">Личная информация</div>
            </Link>
            <Link to="/">
              <div className="profile__items">Мой адрес</div>
            </Link>
            <div onClick={signOut} className="profile__items">
              <p>Выйти</p>
            </div>
          </div>
        </div>
      </div>
      <TapBar />
    </div>
  );
};

export default Profile;

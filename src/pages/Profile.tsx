import { useAppSelector, useAppDispatch } from "../redux/store";
import { setLogout } from "../redux/slices/authSlice";
import { useNavigate, Link } from "react-router-dom";

import TapBar from "../components/TapBar";
import Header from "../components/Header";

const Profile = () => {
  const data = useAppSelector((state) => state.auth.data);
  const dispatch = useAppDispatch();
  console.log(data);

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
          <div>
            <Link to={"/orders"}>
              <p>Заказы</p>
            </Link>
          </div>
          <div>
            <Link to={"/sale"}>
              <p>Акции</p>
            </Link>
          </div>
          <div>
            <Link to={"/support"}>
              <p>Поддержка</p>
            </Link>
          </div>
        </div>
        <div className="profile__menu">
          <h3>Профиль</h3>
          <div className="profile__list">
            <div className="profile__items">
              <Link to="/">Доставка</Link>
            </div>
            <div className="profile__items">
              <Link to="/">Купленные товары</Link>
            </div>
            <div className="profile__items">
              <Link to="/">Коды и сертификаты</Link>
            </div>
            <div className="profile__items">
              <Link to="/">Личная информация</Link>
            </div>

            <div className="profile__items">
              <Link to="/">Мой адрес</Link>
            </div>
            <div className="profile__items">
              <a onClick={signOut}>Выйти</a>
            </div>
          </div>
        </div>
      </div>
      <TapBar />
    </div>
  );
};

export default Profile;

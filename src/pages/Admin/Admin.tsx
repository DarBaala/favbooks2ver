import { Link } from "react-router-dom";
import TapBar from "../../components/TapBar";
import Header from "../../components/Header";

const Admin = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="admin">
          <div className="admin__help">
            <Link to="/admin/add_product">
              <div className="admin__banners">Добавить товар</div>
            </Link>
            <Link to="/">
              <div className="admin__banners">Заказы пользователей</div>
            </Link>
            <Link to="/">
              <div className="admin__banners">Редактор баннеров</div>
            </Link>
            <Link to="/">
              <div className="admin__banners">Статистика</div>
            </Link>
            <Link to="/">
              <div className="admin__banners">Обращения в поддержку</div>
            </Link>
          </div>
          <img
            style={{ display: "flex", margin: "auto" }}
            src="img/made-with-love.svg"
            alt=""
          />
        </div>
      </div>
      <TapBar />
    </>
  );
};

export default Admin;

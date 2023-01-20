import { useAppSelector, useAppDispatch } from "../redux/store";
import { setLogout } from "../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";

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
      <h1>Привет, {data?.fullName}!</h1>
      <button onClick={signOut}>Выйти с аккаунта</button>
      <TapBar />
    </div>
  );
};

export default Profile;

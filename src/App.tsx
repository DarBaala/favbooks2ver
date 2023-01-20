import { Routes, Route } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./redux/store";
import { fetchAuthMe } from "./redux/slices/authSlice";
import { useEffect } from "react";

import "./scss/app.scss";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Category from "./pages/Categories";
import Favorites from "./pages/Favorites";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";

const App = () => {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector((state) => Boolean(state.auth.data));

  useEffect(() => {
    dispatch(fetchAuthMe());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Login />} />
      <Route path="/auth/register" element={<Register />} />
      <Route path="/categories" element={<Category />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default App;

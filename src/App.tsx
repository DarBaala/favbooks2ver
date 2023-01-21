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
import Admin from "./pages/Admin/Admin";
import AddProduct from "./pages/Admin/AddProduct";
import NotFound from "./pages/NotFound";

const App = () => {
  const dispatch = useAppDispatch();
  const isAdmin = useAppSelector((state) => Boolean(state.auth.data?.admin));

  useEffect(() => {
    dispatch(fetchAuthMe());
  }, []);

  console.log(isAdmin);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Login />} />
      <Route path="/auth/register" element={<Register />} />
      <Route path="/categories" element={<Category />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/profile" element={<Profile />} />
      {isAdmin && <Route path="/admin" element={<Admin />} />}
      {isAdmin && <Route path="/admin/add_product" element={<AddProduct />} />}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;

import "./scss/app.scss";

import Header from "./components/Header";
import Search from "./components/Search";
import Banner from "./components/Banner";
import Categories from "./components/Categories";

const App = () => {
  return (
    <div>
      <Header />
      <Search />
      <Banner />
      <Categories />
    </div>
  );
};

export default App;

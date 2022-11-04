import Header from "../components/Header";
import Search from "../components/Search";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import BooksBlock from "../components/BooksBlock";

const Home = () => {
  return (
    <div>
      <Header />
      <Search />
      <Banner />
      <Categories />
      <BooksBlock />
    </div>
  );
};

export default Home;

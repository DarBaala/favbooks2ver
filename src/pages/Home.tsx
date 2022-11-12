import Header from "../components/Header";
import Search from "../components/Search";
import Banner from "../components/Banner";
import Tags from "../components/Tags";
import BooksBlock from "../components/BooksBlock";

const Home = () => {
  return (
    <div>
      <Header />
      <Search />
      <Banner />
      <Tags />
      <BooksBlock />
    </div>
  );
};

export default Home;

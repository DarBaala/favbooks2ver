import Search from "../components/Search";
import Banner from "../components/Banner";
import Tags from "../components/Tags";
import BooksBlock from "../components/BooksBlock/BooksBlock";
import TapBar from "../components/TapBar";
import Header from "../components/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <Search />
      <Banner />
      <Tags />
      <BooksBlock />
      <TapBar />
    </div>
  );
};

export default Home;

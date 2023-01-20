import Search from "../components/Search";
import Banner from "../components/Banner";
import Tags from "../components/Tags";
import BooksBlock from "../components/BooksBlock/BooksBlock";
import TapBar from "../components/TapBar";

const Home = () => {
  return (
    <div>
      <Search />
      <Banner />
      <Tags />
      <BooksBlock />
      <TapBar />
    </div>
  );
};

export default Home;

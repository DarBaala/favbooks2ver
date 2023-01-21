import Header from "../components/Header";
import TapBar from "../components/TapBar";

const NotFound = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <h3
          style={{
            padding: "30px 5px",
            textAlign: "center",
          }}
        >
          К сожалению, данная страница отсутствует :(
        </h3>
      </div>
      <TapBar />
    </div>
  );
};

export default NotFound;

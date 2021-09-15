import "./App.css";
import Card from "./component/Card";
import Navbar from "./component/Navbar";
import Data from "./Data"


function App() {
  return (
    <>
      <Navbar />
      <div id="container">
        {Data.map((cardList) => (
          <Card
            imgsrc={cardList.image}
            title={cardList.seriestitle}
            seriesName={cardList.webSeriesName}
            link={cardList.links}
          />
        ))}
      </div>
    </>
  );
}

export default App;

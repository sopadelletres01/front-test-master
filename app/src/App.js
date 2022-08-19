import logo from "./logo.svg";
import "./App.css";
import Header from "components/Header";
import ImageList from "components/ImageList";
import useFilterImages from "hooks/useFilterImages";

function App() {
  const { handleChange, filteredImages } = useFilterImages();

  return (
    <div className="container">
      <Header onChange={handleChange} />
      <ImageList images={filteredImages} />
    </div>
  );
}

export default App;

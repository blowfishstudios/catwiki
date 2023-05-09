import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import HomePage from "./components/HomePage/HomePage";
import Top10 from "./components/Top10/Top10";

function App() {
  // const [data, setData] = React.useState(null);

  // React.useEffect(() => {
  //   fetch("/api/v1/breeds")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data.message)
  //       console.log(data)
  //     });
  // }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/top-10" element={<Top10 />} />
        </Routes>
      </BrowserRouter>


      <Footer />
    </div>



  );
}

export default App;

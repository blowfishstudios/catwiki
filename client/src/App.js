import React from "react";
import "./App.css";
import LoadingPage from "./components/LoadingPage/LoadingPage";
import Footer from "./components/Footer/Footer";
function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <LoadingPage />

      <Footer />
    </div>

  );
}

export default App;

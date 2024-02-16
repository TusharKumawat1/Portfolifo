import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Skills from "./pages/Skills";

export default function App() {
  const [loading, setloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 3500);
  }, []);
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className="mainContainer">
          <Navbar />
          <Home />
        </div>
      )}
    </div>
  );
}

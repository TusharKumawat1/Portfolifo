import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import Home from "./pages/Home";

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
          <Home />
        </div>
      )}
    </div>
  );
}

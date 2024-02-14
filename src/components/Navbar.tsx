import { useEffect,  useState } from "react";
import Styles from "../styles/components/Navbar.module.css";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', moveCursor);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
    };
  }, []);
  return (
    <div className={Styles.container}>
       <Link to="/" >Home</Link>
      <Link to="/" >Skills</Link>
      <Link to="/" >Projects</Link>
      <Link to="/" >About me</Link>
      <Link to="/" >Contect</Link>
     <div className={Styles.cursor} style={{ left: `${position.x}px`, top: `${position.y}px` }} />
    </div>
  );
}

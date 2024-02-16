import { useEffect,  useState } from "react";
import Styles from "../styles/components/Navbar.module.css";
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
       <a href="#home" >Home</a>
      <a href="#skills" >Skills</a>
      <a href="#projects" >Projects</a>
      {/* <a href="#about" >About me</a> */}
      <a href="#reach" >Reach Out</a>
     <div className={Styles.cursor} style={{ left: `${position.x}px`, top: `${position.y}px` }} />
    </div>
  );
}

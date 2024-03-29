import { useContext, useEffect, useRef, useState } from "react";
import Styles from "../styles/pages/Home.module.css";
import { myImage1, myImage2, myImage3 } from "../assets";
import Skills from "./Skills";
import Footer from "../components/Footer";
import Projects from "./Projects";
import { Mycontext } from "../context/Mycontext";
export default function Home() {
  const { CursorRef } = useContext(Mycontext);
  const [time, settime] = useState("0:00");
  const date = new Date();
  const timeString = date.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  const firstImageRef = useRef<HTMLDivElement | null>(null);
  const secondImageRef = useRef<HTMLDivElement | null>(null);
  const thirdImageRef = useRef<HTMLDivElement | null>(null);
  const [rotateDeg, setrotateDeg] = useState(0);
  const [animateIntro, setAnimateIntro] = useState(false);
  const {containerRef}=useContext(Mycontext);
  const handleScroll = () => {
    if (containerRef.current) {
      const scrollPosition = containerRef.current.scrollTop;
      const newRotateDeg = Math.floor(scrollPosition / 50);
      if (newRotateDeg <= 11) {
        setrotateDeg(newRotateDeg);
        setAnimateIntro(true);
      }
      const firstImageRotate = newRotateDeg <= 11 ? rotateDeg - 15 : -3;
      const secondImageRotate = newRotateDeg <= 11 ? rotateDeg - 9 : -1;
      const thirdImageRotate = newRotateDeg <= 11 ? rotateDeg - 14 : 1;
      if (
        firstImageRef.current &&
        secondImageRef.current &&
        thirdImageRef.current
      ) {
        firstImageRef.current.style.transform = `rotate(${firstImageRotate}deg)`;
        secondImageRef.current.style.transform = `rotate(${secondImageRotate}deg)`;
        thirdImageRef.current.style.transform = `rotate(${thirdImageRotate}deg)`;
      }
    }
  };
  const handleMouseIn = (color: string) => {
    document.body.style.background = color;
  };
  const handleMouseOut = () => {
    document.body.style.background = "#fff";
  };
  useEffect(() => {
    settime(timeString);
  }, [timeString]);
  useEffect(() => {
    document.body.style.transition = ".5s ease";
  }, []);
  const { position, setPosition } = useContext(Mycontext);
  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", moveCursor);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);
  return (
    <div
      className={Styles.container}
      onScroll={handleScroll}
      ref={containerRef}
    >
      <a href="#reach" className={Styles.Reachout}>
        Reach Out
      </a>
      <div
        className={Styles.cursor}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
        ref={CursorRef}
      />
      <div className={Styles.heading} id="home">
        <span className={Styles.word1}>Versatile </span>
        <div className={Styles.wordContainer}>
          <span className={Styles.word2}>Fullstack </span>
          <span className={Styles.word3}>Developer</span>
        </div>
        <div className={Styles.subHeading}>
          <span>CURRENTLY AVAILABLE FOR FREELANCE WORLDWIDE</span>
          <span>MY LOCAL TIME {time}</span>
        </div>
        <i className="fa-solid fa-arrow-turn-down"></i>
      </div>
      <div className={Styles.section1}>
        <div
          className={`${Styles.text} ${animateIntro ? Styles.fadeInUp : ""}`}
        >
          <p>
            I am <span>Tushar Kumawat</span>, an imaginative and adaptable
            full-stack developer.
          </p>
        </div>
        <div className={Styles.images}>
          <div
            className={`${Styles.imageCard} ${Styles.firstImage}`}
            ref={firstImageRef}
            onMouseEnter={() => handleMouseIn("#FFF6E9")}
            onMouseLeave={handleMouseOut}
          >
            <img src={myImage3} alt="TusharImage1" />
          </div>
          <div
            className={`${Styles.imageCard} ${Styles.secondImage}`}
            ref={secondImageRef}
            onMouseEnter={() => handleMouseIn("#E3F4F4")}
            onMouseLeave={handleMouseOut}
          >
            <img className={Styles.image2} src={myImage2} alt="TusharImage1" />
          </div>
          <div
            className={`${Styles.imageCard} ${Styles.thirdImage}`}
            ref={thirdImageRef}
            onMouseEnter={() => handleMouseIn("#F1EAFF")}
            onMouseLeave={handleMouseOut}
          >
            <img src={myImage1} alt="TusharImage1" />
          </div>
        </div>
      </div>
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

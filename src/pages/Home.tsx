import React, { useEffect, useRef, useState } from "react";
import Styles from "../styles/pages/Home.module.css";
export default function Home() {
  const [time, settime] = useState("0:00");
  const date = new Date();
  const timeString = date.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  const firstImageRef = useRef<HTMLDivElement | null>(null)
  const secondImageRef = useRef<HTMLDivElement | null>(null)
  const thirdImageRef = useRef<HTMLDivElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [rotateDeg, setrotateDeg] = useState(0)
  const handleScroll = () => {
    if (containerRef.current) {
      const scrollPosition = containerRef.current.scrollTop;
      const newRotateDeg = Math.floor(scrollPosition / 50);
  
      if (newRotateDeg <= 11) {
        setrotateDeg(newRotateDeg);
      }
  
      const firstImageRotate = newRotateDeg <= 11 ? newRotateDeg - 15 : -3;
      const secondImageRotate = newRotateDeg <= 11 ? newRotateDeg - 9 : -1;
      const thirdImageRotate = newRotateDeg <= 11 ? newRotateDeg - 14 : 1;
      console.log("firstImageRotate :",firstImageRotate,"secondImageRotate : ",secondImageRotate,"thirdImageRotate : ",thirdImageRotate)
      if (firstImageRef.current && secondImageRef.current && thirdImageRef.current) {
        firstImageRef.current.style.transform = `rotate(${firstImageRotate}deg)`;
        secondImageRef.current.style.transform = `rotate(${secondImageRotate}deg)`;
        thirdImageRef.current.style.transform = `rotate(${thirdImageRotate}deg)`;
      }
    }
  };

  useEffect(() => {
    settime(timeString);
  }, [timeString]);
  return (
    <div className={Styles.container} onScroll={handleScroll} ref={containerRef}>
      <div className={Styles.heading}>
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
        <div className={Styles.text}>
          <p>
            I am <span>Tushar Kumawat</span>, an imaginative and adaptable
            full-stack developer.
          </p>
        </div>
        <div className={Styles.images}>
          <div className={`${Styles.imageCard} ${Styles.firstImage}` } ref={firstImageRef}></div>
          <div className={`${Styles.imageCard} ${Styles.secondImage}`} ref={secondImageRef}></div>
          <div className={`${Styles.imageCard} ${Styles.thirdImage}`} ref={thirdImageRef}></div>
        </div>
      </div>
    </div>
  );
}

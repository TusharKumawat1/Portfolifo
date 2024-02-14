import React, { useEffect, useState } from "react";
import Styles from "../styles/pages/Home.module.css";
export default function Home() {
  const [time, settime] = useState("0:00")
  const date = new Date();
  const timeString = date.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  useEffect(()=>{
    settime(timeString)
  },[timeString])
  return (
    <div className={Styles.container}>
      <div className={Styles.heading}>
        <span className={Styles.word1}>Versatile </span>
        <span className={Styles.word3}>Fullstack </span>
        <span className={Styles.word2}>Developer</span>
        <div className={Styles.subHeading}>
          <span>CURRENTLY AVAILABLE FOR FREELANCE WORLDWIDE</span>
          <span>MY LOCAL TIME {time}</span>
        </div>
        <i className="fa-solid fa-arrow-turn-down"></i>
      </div>
      <div>
        
      </div>
    </div>
  );
}

import { useEffect } from "react";
import Styles from "../styles/components/Footer.module.css";

export default function Footer() {
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const targetElement = entry.target as HTMLElement;
          targetElement.classList.add(Styles.fadeIn);
          targetElement.style.opacity = "1";
          observer.unobserve(targetElement);
        }
      });
    }, options);

    const container = document.querySelector(`.${Styles.container}`);

    if (container) {
      observer.observe(container);
    }

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <div className={Styles.container}>
      <p className={Styles.heading}>LET'S TALK ABOUT THE NEXT BIG THING</p>
      <div className={Styles.buttonContainer}>
        <a href="mailto:tusharkumawat9694@gmail.com" className={Styles.btn}>
          Write a Message <span className={Styles.fill}></span>{" "}
        </a>
        <button className={Styles.btn}>
          Discuss Project <span className={Styles.fill}></span>{" "}
        </button>
      </div>
      <div className={Styles.social}>
        <a
          className={Styles.links}
          href="https://www.linkedin.com/in/tushar-kumawat-260935280/"
          target="_blank"
        >
          <span>
            <p>Linkedin</p>
            <p className={Styles.username}>Tusharkumawat</p>
          </span>
          <i className="fa-brands fa-linkedin"></i>
          <p className={Styles.fill2}></p>
        </a>
        <a
          className={Styles.links}
          href="https://twitter.com/@tusharkumawat_"
          target="_blank"
        >
          {" "}
          <span>
            <p>X.com</p>
            <p className={Styles.username}>Tusharkumawat</p>
          </span>
          <i className="fa-brands fa-x-twitter"></i>
          <p className={Styles.fill2}></p>
        </a>
        <a
          className={Styles.links}
          href="https://www.instagram.com/tusharkumawat._/"
          target="_blank"
        >
          {" "}
          <span>
            <p>Instagram</p>
            <p className={Styles.username}>tusharkumawat._</p>
          </span>
          <i className="fa-brands fa-instagram"></i>
          <p className={Styles.fill2}></p>
        </a>
        <a
          className={Styles.links}
          href="https://github.com/TusharKumawat1"
          target="_blank"
        >
          {" "}
          <span>
            <p>Github</p>
            <p className={Styles.username}>tusharkumawat1</p>
          </span>
          <i className="fa-brands fa-github"></i>
          <p className={Styles.fill2}></p>
        </a>
      </div>
      <div className={Styles.outro} id="reach">
        <p>©2024 Tushar kumawat, All Rights Reserved </p>
        <p>@2024 Portfolio</p>
      </div>
    </div>
  );
}

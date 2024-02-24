import { useEffect, useRef } from "react";
import Styles from "../styles/pages/Skills.module.css";
export default function Skills() {
  const FrontendRef = useRef<HTMLDivElement | null>(null);
  const BackendRef = useRef<HTMLDivElement | null>(null);
  const ToolsRef = useRef<HTMLDivElement | null>(null);
  const mouseIn = (skill: string) => {
    if (skill === "frontend") {
      document.body.style.backgroundColor = "#FEF5ED";
      if (FrontendRef.current && BackendRef.current && ToolsRef.current) {
        FrontendRef.current.style.transform = `scale(1.2,1.2)`;
        BackendRef.current.style.filter = `grayscale(100%)`;
        ToolsRef.current.style.filter = `grayscale(100%)`;
        FrontendRef.current.style.opacity = "1";
        BackendRef.current.style.opacity = `.5`;
        ToolsRef.current.style.opacity = ".5";
      }
    }
    if (skill === "backend") {
      document.body.style.backgroundColor = "#F4EEFF";
      if (FrontendRef.current && BackendRef.current && ToolsRef.current) {
        BackendRef.current.style.transform = `scale(1.2,1.2)`;
        FrontendRef.current.style.filter = `grayscale(100%)`;
        ToolsRef.current.style.filter = `grayscale(100%)`;
        FrontendRef.current.style.opacity = ".5";
        BackendRef.current.style.opacity = `1`;
        ToolsRef.current.style.opacity = ".5";
      }
    }
    if (skill === "tools") {
      document.body.style.backgroundColor = "#E4D8DC";
      if (FrontendRef.current && BackendRef.current && ToolsRef.current) {
        ToolsRef.current.style.transform = `scale(1.2,1.2)`;
        FrontendRef.current.style.filter = `grayscale(100%)`;
        BackendRef.current.style.filter = `grayscale(100%)`;
        FrontendRef.current.style.opacity = ".5";
        BackendRef.current.style.opacity = `.5`;
        ToolsRef.current.style.opacity = "1";
      }
    }
  };
  const mouseOut = () => {
    document.body.style.backgroundColor = "#fff";
    if (FrontendRef.current && BackendRef.current && ToolsRef.current) {
      ToolsRef.current.style.transform = `scale(1,1)`;
      BackendRef.current.style.transform = `scale(1,1)`;
      FrontendRef.current.style.transform = `scale(1,1)`;
      FrontendRef.current.style.filter = `grayscale(0%)`;
      BackendRef.current.style.filter = `grayscale(0%)`;
      ToolsRef.current.style.filter = `grayscale(0%)`;
      FrontendRef.current.style.opacity = "1";
      BackendRef.current.style.opacity = `1`;
      ToolsRef.current.style.opacity = "1";
    }
  };
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

    const heading = document.querySelector(`.${Styles.heading}`);
    const subheading = document.querySelector(`.${Styles.subheading}`);
    const Myskills = document.querySelector(`.${Styles.Myskills}`);
    if (heading && subheading && Myskills) {
      observer.observe(heading);
      observer.observe(subheading);
      observer.observe(Myskills);
    }
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div id="skills" className={Styles.container}>
      <h1 className={Styles.heading}>
        Ski<span>ll</span>s
      </h1>
      <h1 className={Styles.subheading}>
        Diving Deep into the World of Technology: A Glimpse into My{" "}
        <span>Skills</span> and <span>Expertise</span>
      </h1>
      <div className={Styles.Myskills}>
        <div className={Styles.skills}>
          <div className={Styles.frontend} ref={FrontendRef}>
            <img src="https://skillicons.dev/icons?i=tailwind" alt="img1" />
            <img alt="im2" src="https://skillicons.dev/icons?i=bootstrap" />
            <img alt="im3" src="https://skillicons.dev/icons?i=scss" />
            <img alt="im4" src="https://skillicons.dev/icons?i=react" />
            <img alt="im5" src="https://skillicons.dev/icons?i=nextjs" />
            <img alt="im6" src="https://skillicons.dev/icons?i=typescript" />
            <img alt="im7" src="https://skillicons.dev/icons?i=javascript" />
            <img alt="img23" src="https://skillicons.dev/icons?i=css" />
            <img alt="img33" src="https://skillicons.dev/icons?i=html" />
          </div>
          <div className={Styles.backend} ref={BackendRef}>
            <img alt="img321" src="https://skillicons.dev/icons?i=nodejs" />
            <img alt="img12" src="https://skillicons.dev/icons?i=redis" />
            <img alt="img56" src="https://skillicons.dev/icons?i=mongodb" />
            <img alt="img86" src="https://skillicons.dev/icons?i=graphql" />
            <img alt="img97" src="https://skillicons.dev/icons?i=express" />
            <img alt="img64" src="https://skillicons.dev/icons?i=postgres" />
          </div>
          <div className={Styles.tools} ref={ToolsRef}>
            <img alt="img232" src="https://skillicons.dev/icons?i=git" />
            <img alt="imgg44" src="https://skillicons.dev/icons?i=github" />
            <img alt="img4fgh" src="https://skillicons.dev/icons?i=docker" />
            <img alt="img67g" src="https://skillicons.dev/icons?i=postman" />
            <img alt="img7gg" src="https://skillicons.dev/icons?i=vscode" />
          </div>
        </div>
        <div className={Styles.skillContainer}>
          <div
            className={Styles.skill}
            onMouseEnter={() => mouseIn("frontend")}
            onMouseLeave={mouseOut}
          >
            Frontend
          </div>
          <div
            className={Styles.skill}
            onMouseEnter={() => mouseIn("backend")}
            onMouseLeave={mouseOut}
          >
            Backend
          </div>
          <div
            className={Styles.skill}
            onMouseEnter={() => mouseIn("tools")}
            onMouseLeave={mouseOut}
          >
            Tools
          </div>
        </div>
      </div>
    </div>
  );
}

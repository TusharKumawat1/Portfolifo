import { useContext, useEffect, useRef, useState } from "react";
import Styles from "../styles/pages/Projects.module.css";
import PROJECTS from "../Utils/projects";
import { Mycontext } from "../context/Mycontext";
import cursorStyle from "../styles/pages/Home.module.css";
export default function Projects() {
  const { CursorRef, position } = useContext(Mycontext);
  const previewRefs = [
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
  ];

  const handleMouseIn = () => {
    if (CursorRef.current) {
      CursorRef.current.style.width = "100px";
      CursorRef.current.style.height = "100px";
      CursorRef.current.style.mixBlendMode = "difference";
      CursorRef.current.style.animation = "none";
      CursorRef.current.style.color = "black";
      CursorRef.current.style.backgroundColor = "white";
      CursorRef.current.style.fontSize = "20px";
    }
  };

  const handleMouseOut = (index: number) => {
    if (CursorRef.current) {
      CursorRef.current.style.animation = `${cursorStyle.stretch} 2s ease-out alternate infinite running`;
      CursorRef.current.style.width = "20px";
      CursorRef.current.style.height = "20px";
    }
    if (previewRefs[index] && previewRefs[index].current) {
      previewRefs[index]!.current!.style.opacity = "0";
      previewRefs[index]!.current!.style.display = "none";
    }
  };
  const mouseOnImage = (Bgcolor: String, index: number) => {
    if (CursorRef.current) {
      CursorRef.current.style.width = "20px";
      CursorRef.current.style.height = "20px";
      CursorRef.current.style.mixBlendMode = "";
      CursorRef.current.style.animation = "none";
      CursorRef.current.style.color = "white";
      CursorRef.current.style.backgroundColor = Bgcolor;
      CursorRef.current.style.fontSize = "20px";
    }
    if (previewRefs[index] && previewRefs[index].current) {
      previewRefs[index]!.current!.style.opacity = "1";
      previewRefs[index]!.current!.style.display = "flex";
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

    document.querySelectorAll(`.${Styles.project}`).forEach((project) => {
      observer.observe(project);
    });
     document.querySelectorAll(`.${Styles.heading}`).forEach((heading) => {
      if (heading) {
        observer.observe(heading);
      }
    });
   
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className={`${Styles.container } ${Styles.active}`}>
      <h1 className={Styles.heading}>
        Pro<span>ject</span>s
      </h1>
      {PROJECTS.map((item, index) => {
        const isSecondOrFourth = index === 1 || index === 3;
        return (
          <div
            className={`${Styles.project} ${
              isSecondOrFourth ? Styles.reverse : ""
            } `}
            key={index}

          >
            <div
              className={Styles.imageCover}
              onMouseEnter={() => mouseOnImage("#000", index)}
              onMouseLeave={() => handleMouseOut(index)}
            >
              <img
                src={item.coverImage}
                alt="instaclone"
                className={Styles.coverImg}
              />
              <div
                className={Styles.previewImages}
                style={
                  isSecondOrFourth
                    ? {
                        left: `${position.x / 30}%`,
                        top: `${position.y / 10}%`,
                      }
                    : {
                        left: `${position.x - 210}px`,
                        top: `${position.y - 250}px`,
                      }
                }
                ref={previewRefs[index]}
              >
                <img src={item.hoverImage} alt="previewImg" />
              </div>
            </div>
            <div
              className={Styles.about}
              onMouseEnter={handleMouseIn}
              onMouseLeave={() => handleMouseOut(index)}
            >
              <h2>{item.name}</h2>
              <p>{item.tech}</p>
              <div className={Styles.desc}>{item.desc}</div>
              <p className={Styles.btnContainer}>
                <a
                  href={item.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github <i className="fa-brands fa-github"></i>
                </a>
                <a
                  href={item.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo{" "}
                </a>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

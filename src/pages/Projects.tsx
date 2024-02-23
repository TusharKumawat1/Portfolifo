import React, { useContext, useRef } from "react";
import Styles from "../styles/pages/Projects.module.css";
import {
  chatappGif,
  chatCover,
  instaGif,
  instaProjectCover,
  noteCover,
  notesappGif,
  Portfolio3,
  portfolioGIF,
  weatherappGIF,
  weatherCover,
} from "../assets";
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
  return (
    <div className={Styles.container}>
      <h1 className={Styles.heading}>
        Pro<span>ject</span>s
      </h1>
      <div className={Styles.project}>
        <div
          className={Styles.imageCover}
          onMouseEnter={() => mouseOnImage("#000", 0)}
          onMouseLeave={() => handleMouseOut(0)}
        >
          <img
            src={instaProjectCover}
            alt="instaclone"
            className={Styles.coverImg}
          />
          <div
            className={Styles.previewImages}
            style={{
              left: `${position.x - 210}px`,
              top: `${position.y - 250}px`,
            }}
            ref={previewRefs[0]}
          >
            <img src={instaGif} alt="previewImg" />
          </div>
        </div>
        <div
          className={Styles.about}
          onMouseEnter={handleMouseIn}
          onMouseLeave={() => handleMouseOut(0)}
        >
          <h2>Instagram clone</h2>
          <p> MERN, RestApis, Crud operation, Graphql</p>
          <div className={Styles.desc}>
            I developed a fully-functional Instagram clone using the MERN
            (MongoDB, Express.js, React, Node.js) stack along with GraphQL. This
            project replicates Instagram's core features, including user
            authentication, image uploading, social interactions, and real-time
            updates. Leveraging the power of GraphQL, the application
            efficiently manages data queries and mutations, ensuring optimal
            performance and scalability. With a focus on clean code and modern
            design principles, this Instagram clone demonstrates my proficiency
            in full-stack web development and showcases my ability to create
            engaging and interactive web applications.
          </div>
          <p className={Styles.btnContainer}>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Github <i className="fa-brands fa-github"></i>
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Demo{" "}
            </a>
          </p>
        </div>
      </div>
      <div className={Styles.project}>
        <div
          className={Styles.about}
          onMouseEnter={handleMouseIn}
          onMouseLeave={() => handleMouseOut(1)}
        >
          <h2>My Portfolio</h2>
          <p> React, UI, Css,</p>
          <div className={Styles.desc}>
            I created my portfolio using React to showcase my projects and work.
            With a focus on clean design and user experience, my portfolio
            features a collection of projects that demonstrate my skills in
            front-end development, including React components, responsive
            design, and CSS animations. Each project is carefully crafted to
            highlight my ability to create dynamic and engaging web
            applications. Whether you're a recruiter, potential client, or
            fellow developer, my portfolio offers a glimpse into my expertise
            and passion for creating exceptional digital experiences. Explore my
            projects and discover the creativity and innovation behind each one.
          </div>
          <p className={Styles.btnContainer}>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Github <i className="fa-brands fa-github"></i>
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Demo{" "}
            </a>
          </p>
        </div>
        <div
          className={Styles.imageCover}
          onMouseEnter={() => mouseOnImage("#000", 1)}
          onMouseLeave={() => handleMouseOut(1)}
        >
          <img src={Portfolio3} alt="portfolio" className={Styles.coverImg} />
          <div
            className={Styles.previewImages}
            style={{
              left: `${position.x / 30}%`,
              top: `${position.y - 350}px`,
            }}
            ref={previewRefs[1]}
          >
            <img src={portfolioGIF} alt="previewImg" />
          </div>
        </div>
      </div>
      <div className={Styles.project}>
        <div
          className={Styles.imageCover}
          onMouseEnter={() => mouseOnImage("#000", 2)}
          onMouseLeave={() => handleMouseOut(2)}
        >
          <img src={chatCover} alt="instaclone" className={Styles.coverImg} />
          <div
            className={Styles.previewImages}
            style={{
              left: `${position.x - 210}px`,
              top: `${position.y - 250}px`,
            }}
            ref={previewRefs[2]}
          >
            <img src={chatappGif} alt="previewImg" />
          </div>
        </div>
        <div
          className={Styles.about}
          onMouseEnter={handleMouseIn}
          onMouseLeave={() => handleMouseOut(2)}
        >
          <h2>Chat app</h2>
          <p> Mern, Websocket, RestApis</p>
          <div className={Styles.desc}>
            I developed a fully-functional Instagram clone using the MERN
            (MongoDB, Express.js, React, Node.js) stack along with GraphQL. This
            project replicates Instagram's core features, including user
            authentication, image uploading, social interactions, and real-time
            updates. Leveraging the power of GraphQL, the application
            efficiently manages data queries and mutations, ensuring optimal
            performance and scalability. With a focus on clean code and modern
            design principles, this Instagram clone demonstrates my proficiency
            in full-stack web development and showcases my ability to create
            engaging and interactive web applications.
          </div>
          <p className={Styles.btnContainer}>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Github <i className="fa-brands fa-github"></i>
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Demo{" "}
            </a>
          </p>
        </div>
      </div>
      <div className={Styles.project}>
        <div
          className={Styles.about}
          onMouseEnter={handleMouseIn}
          onMouseLeave={() => handleMouseOut(2)}
        >
          <h2>Notes App</h2>
          <p> React, Express js, Node js, MongoDb, Crud Operation</p>
          <div className={Styles.desc}>
            I developed a fully-functional Instagram clone using the MERN
            (MongoDB, Express.js, React, Node.js) stack along with GraphQL. This
            project replicates Instagram's core features, including user
            authentication, image uploading, social interactions, and real-time
            updates. Leveraging the power of GraphQL, the application
            efficiently manages data queries and mutations, ensuring optimal
            performance and scalability. With a focus on clean code and modern
            design principles, this Instagram clone demonstrates my proficiency
            in full-stack web development and showcases my ability to create
            engaging and interactive web applications.
          </div>
          <p className={Styles.btnContainer}>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Github <i className="fa-brands fa-github"></i>
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Demo{" "}
            </a>
          </p>
        </div>
        <div
          className={Styles.imageCover}
          onMouseEnter={() => mouseOnImage("#000", 3)}
          onMouseLeave={() => handleMouseOut(3)}
        >
          <img src={noteCover} alt="instaclone" className={Styles.coverImg} />
          <div
            className={Styles.previewImages}
            style={{
              left: `${position.x / 40}%`,
              top: `${position.y - 350}px`,
            }}
            ref={previewRefs[3]}
          >
            <img src={notesappGif} alt="previewImg" />
          </div>
        </div>
      </div>
      <div className={Styles.project}>
        <div
          className={Styles.imageCover}
          onMouseEnter={() => mouseOnImage("#000", 4)}
          onMouseLeave={() => handleMouseOut(4)}
        >
          <img
            src={weatherCover}
            alt="instaclone"
            className={Styles.coverImg}
          />
          <div
            className={Styles.previewImages}
            style={{
              left: `${position.x - 210}px`,
              top: `${position.y - 250}px`,
            }}
            ref={previewRefs[4]}
          >
            <img src={weatherappGIF} alt="previewImg" />
          </div>
        </div>
        <div
          className={Styles.about}
          onMouseEnter={handleMouseIn}
          onMouseLeave={() => handleMouseOut(4)}
        >
          <h2>Weather app</h2>
          <p> React, Css, Api, Bootstrap </p>
          <div className={Styles.desc}>
            I developed a fully-functional Instagram clone using the MERN
            (MongoDB, Express.js, React, Node.js) stack along with GraphQL. This
            project replicates Instagram's core features, including user
            authentication, image uploading, social interactions, and real-time
            updates. Leveraging the power of GraphQL, the application
            efficiently manages data queries and mutations, ensuring optimal
            performance and scalability. With a focus on clean code and modern
            design principles, this Instagram clone demonstrates my proficiency
            in full-stack web development and showcases my ability to create
            engaging and interactive web applications.
          </div>
          <p className={Styles.btnContainer}>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Github <i className="fa-brands fa-github"></i>
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Demo{" "}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

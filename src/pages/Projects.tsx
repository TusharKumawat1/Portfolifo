import React from "react";
import Styles from "../styles/pages/Projects.module.css";
import { instaProjectCover } from "../assets";
export default function Projects() {
  return (
    <div className={Styles.container}>
      <h1> Projects </h1>
      <div className={Styles.project}>
        <div className={Styles.imageCover}>
          <img src={instaProjectCover} alt="instaclone" />
        </div>
        <div className={Styles.about}>
          <h2>Instagram clone</h2>
          <p> React, Express js, Node js, MongoDb, Graphql</p>
          <div className={Styles.desc} >
          I developed a fully-functional Instagram clone using the MERN (MongoDB, Express.js, React, Node.js) stack along with GraphQL. This project replicates Instagram's core features, including user authentication, image uploading, social interactions, and real-time updates. Leveraging the power of GraphQL, the application efficiently manages data queries and mutations, ensuring optimal performance and scalability. With a focus on clean code and modern design principles, this Instagram clone demonstrates my proficiency in full-stack web development and showcases my ability to create engaging and interactive web applications.
          </div>
          <p className={Styles.btnContainer}>
            <a href="http://" target="_blank" rel="noopener noreferrer">Github</a>
            <a href="http://" target="_blank" rel="noopener noreferrer">Demo</a>
          </p>
        </div>
      </div>
    </div>
  );
}

import { Portfolio3, chatCover, chatappGif, instaGif, instaProjectCover, newsgif, noteCover, notesappGif, portfolioGIF, weatherCover,  } from "../assets";

const PROJECTS=[
    {
        name:"Instagram Clone",
        tech:"MERN, UI, GRAPHQL, TS, REST APIs",
        desc:` I developed a fully-functional Instagram clone using the MERN
        (MongoDB, Express.js, React, Node.js) stack along with GraphQL. This
        project replicates Instagram's core features, including user
        authentication, image uploading, social interactions, and real-time
        updates. Leveraging the power of GraphQL, the application
        efficiently manages data queries and mutations, ensuring optimal
        performance and scalability. With a focus on clean code and modern
        design principles, this Instagram clone demonstrates my proficiency
        in full-stack web development and showcases my ability to create
        engaging and interactive web applications.`,
        coverImage:instaProjectCover,
        hoverImage:instaGif,
        links:{
            github:"https://github.com/TusharKumawat1/InstgramClone",
            demo:"https://instabytushar.netlify.app/"
        }
    },
    {
        name:"Portfolio",
        tech:"REACT, UI, CSS, TS, REST APIs",
        desc:`  I created my portfolio using React to showcase my projects and work.
        With a focus on clean design and user experience, my portfolio
        features a collection of projects that demonstrate my skills in
        front-end development, including React components, responsive
        design, and CSS animations. Each project is carefully crafted to
        highlight my ability to create dynamic and engaging web
        applications. Whether you're a recruiter, potential client, or
        fellow developer, my portfolio offers a glimpse into my expertise
        and passion for creating exceptional digital experiences. Explore my
        projects and discover the creativity and innovation behind each one.`,
        coverImage:Portfolio3,
        hoverImage:portfolioGIF,
        links:{
            github:"https://github.com/TusharKumawat1/Portfolifo",
            demo:"https://tusharkumawat.netlify.app/"
        }
    },
    {
        name:"Chat App",
        tech:"MERN, UI, WEBSOCKET, REST APIs",
        desc:` I developed a real-time chat application using the MERN stack, integrating WebSocket technology for instant messaging. The application features user authentication and authorization, allowing users to sign up, log in, and chat securely. MongoDB was used to store user information and chat messages, ensuring data persistence. Express.js handled the backend logic, providing RESTful APIs for user authentication and message handling. React.js was utilized for the frontend, offering a responsive and intuitive user interface. Socket.IO facilitated real-time communication between clients and the server, enabling instant message delivery and updates. Overall, the project showcased the power and versatility of the MERN stack for building modern web applications with real-time features.`,
        coverImage:chatCover,
        hoverImage:chatappGif,
        links:{
            github:"https://github.com/TusharKumawat1/CHAT-APP",
            demo:"https://breakingchat.vercel.app/"
        }
    },
    {
        name:"Notes App",
        tech:"MERN, CRUD OPERATION",
        desc:` I developed a comprehensive notes application using the MERN stack, offering users the ability to create, edit, and delete notes with ease. The application features a clean and intuitive user interface, making it simple to organize and manage notes efficiently. MongoDB was used to store note data, ensuring seamless data persistence and retrieval. Express.js handled the backend logic, providing RESTful APIs for CRUD operations on notes. React.js was utilized for the frontend, offering a responsive and interactive user experience. Users can create multiple notes, categorize them, and search for specific notes using keywords. Overall, the application provides a seamless and efficient way to manage and organize notes.`,
        coverImage:noteCover,
        hoverImage:notesappGif,
        links:{
            github:"https://github.com/TusharKumawat1/Notes-app",
            demo:"https://cloudkar.netlify.app/"
        }
    },
    {
        name:"News App",
        tech:"REACT, CSS, BOOTSTRAP, APIs",
        desc:` 
        I crafted a dynamic news application using React and Bootstrap, delivering the latest headlines and articles in a visually appealing and user-friendly manner. The app integrates with a news API to fetch and display news from various sources and categories, allowing users to stay informed on a wide range of topics. Bootstrap's grid system and components were utilized to create a responsive and well-organized layout, ensuring optimal viewing on different devices. Users can explore news articles, search for specific topics, and save articles for later reading. The app offers a seamless and enjoyable news browsing experience, highlighting the power of React and Bootstrap in web development.`,
        coverImage:weatherCover,
        hoverImage:newsgif,
        links:{
            github:"https://github.com/TusharKumawat1/Notes-app",
            demo:"https://cloudkar.netlify.app/"
        }
    },
]
export default PROJECTS;
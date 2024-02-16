import Styles from "../styles/components/Footer.module.css";

export default function Footer() {
  return (
    <div className={Styles.container}>
      <p>LET'S TALK ABOUT THE NEXT BIG THING</p>
      <div className={Styles.buttonContainer}>
        <button>Write a Message <span className={Styles.fill}></span> </button>
        <button>Discuss Project   <span className={Styles.fill}></span>  </button>
      </div>
    </div>
  );
}

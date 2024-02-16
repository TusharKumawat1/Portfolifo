import Styles from "../styles/components/Loader.module.css";
export default function Loader() {
  return (
    <div     className={Styles.container}>
      <span className={Styles.heading}>
        Portfolio designe <br /> @2024
      </span>
      <div className={Styles.slogan}>
        <span className={Styles.word1}>Tushar</span>
        <span className={Styles.word2}>exists </span>
        <span className={Styles.word3}>as</span>
        <span className={Styles.word4}>a..</span>
      </div>
      <div>
        <span className={Styles.loader}></span>
      </div>
      <div className={Styles.greenContainer}></div>
    </div>
  );
}

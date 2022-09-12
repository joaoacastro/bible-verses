import styles from "./Home.module.css";

function Home() {
  return (
    <>
      <h1 className={styles.title}>Welcome the Hole Bible online!</h1>
      <button className={styles.button}>
        Press to show your holy message.
      </button>
    </>
  );
}

export default Home;

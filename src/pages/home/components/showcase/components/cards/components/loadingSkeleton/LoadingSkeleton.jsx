// CSS
import styles from "./LoadingSkeleton.module.css";

function LoadingSkeleton() {
  return (
    <div className={styles.skeleton}>
      <div className={styles.card}>
        <div></div>
        <h3></h3>
      </div>
      <div className={styles.card}>
        <div></div>
        <h3></h3>
      </div>
      <div className={styles.card}>
        <div></div>
        <h3></h3>
      </div>
    </div>
  );
}

export default LoadingSkeleton;

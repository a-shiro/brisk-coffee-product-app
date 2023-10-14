// CSS
import styles from "./LoadingSkeleton.module.css";

function LoadingSkeleton() {
  return (
    <div className={styles.skeleton}>
      <div>
        <div className={styles.infoSkeleton}>
          <h4></h4>
          <p></p>
        </div>

        <div className={styles.cardSkeleton}></div>
      </div>

      <div>
        <div className={styles.infoSkeleton}>
          <h4></h4>
          <p></p>
        </div>

        <div className={styles.cardSkeleton}></div>
      </div>

      <div>
        <div className={styles.infoSkeleton}>
          <h4></h4>
          <p></p>
        </div>

        <div className={styles.cardSkeleton}></div>
      </div>
    </div>
  );
}

export default LoadingSkeleton;

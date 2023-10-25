// Hooks
import { useEffect } from "react";
// CSS
import styles from "./FadingOverlay.module.css";

function FadingOverlay() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return <div className={styles.overlay}></div>;
}

export default FadingOverlay;

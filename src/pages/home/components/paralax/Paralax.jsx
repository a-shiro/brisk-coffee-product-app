// CSS
import styles from "./Paralax.module.css";

function Paralax({ image }) {
  const imageUrl = `url(${image})`;

  const background = {
    backgroundImage: imageUrl,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#d8955e",
  };

  return <section className={styles.section} style={background}></section>;
}

export default Paralax;

// CSS
import styles from "./Map.module.css";

function Map() {
  return (
    <div className={styles.mapContainer}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423284.04410038335!2d-118.74137328084828!3d34.020608469112666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2z0JvQvtGBINCQ0L3QtNC20LXQu9C40YEsINCa0LDQu9C40YTQvtGA0L3QuNGPLCDQodGK0LXQtNC40L3QtdC90Lgg0YnQsNGC0Lg!5e0!3m2!1sus!2sus!4v1690873809592!5m2!1sus!2sus"
        title="map"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Map;

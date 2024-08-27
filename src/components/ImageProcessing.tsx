import ProgressBar from "./ProgressBar";
import styles from "./app.module.css";

const ImageProcesssing = ({ imageSrc, imageDimensions }: any) => {
  return (
    <div>
      <div
        className={styles.imagePreview}
        style={{
          backgroundImage: `url('${imageSrc}')`,
          width: imageDimensions.width,
          height: imageDimensions.height,
        }}
      >
        <div className={styles.loader}></div>
      </div>
      <ProgressBar />
      <div className={styles.waitingMessage}>
        <p>
          <strong>Info:</strong> removing background could take up to few
          minutes. Please don't be discouraged.
        </p>
      </div>
    </div>
  );
};

export default ImageProcesssing;

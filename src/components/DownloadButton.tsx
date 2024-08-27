import styles from "./app.module.css";

const DownloadButton = ({ processedImage }: any) => {
  return (
    <button className={styles.downloadButton}>
      <a href={processedImage} download={"img-without-bg"}>
        Download
      </a>
    </button>
  );
};

export default DownloadButton;

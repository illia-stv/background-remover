import DownloadButton from "./DownloadButton";
import UploadButton from "./UploadButton";
import styles from "./app.module.css";

const ProcessedImage = ({
  onDropHandle,
  onDragOverHandler,
  onDragOverLeaveHandler,
  onDragOverStyle,
  imageDimensions,
  processedImage,
  handleFileChange,
}: any) => {
  return (
    <div>
      <div
        className={styles.processedImage}
        id="drop_zone"
        onDrop={onDropHandle}
        onDragOver={onDragOverHandler}
        onDragLeave={onDragOverLeaveHandler}
        style={{
          boxShadow: onDragOverStyle,
        }}
      >
        <img
          src={processedImage}
          alt="Uploaded"
          style={{
            width: imageDimensions.width,
            height: imageDimensions.height,
          }}
          className={styles.uploadedImage}
        />
      </div>

      <div className={styles.buttonsGroup}>
        <DownloadButton processedImage={processedImage} />
        <UploadButton handleFileChange={handleFileChange} />
      </div>
    </div>
  );
};

export default ProcessedImage;

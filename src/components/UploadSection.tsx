import UploadButton from "./UploadButton";
import styles from "./app.module.css";

const UploadSection = ({
  onDropHandle,
  onDragOverHandler,
  onDragOverLeaveHandler,
  onDragOverStyle,
  handleFileChange,
}: any) => {
  return (
    <div
      id="drop_zone"
      onDrop={onDropHandle}
      onDragOver={onDragOverHandler}
      onDragLeave={onDragOverLeaveHandler}
      className={styles.dropZone}
      style={{
        boxShadow: onDragOverStyle,
      }}
    >
      <UploadButton handleFileChange={handleFileChange} />
      <p>or drop a file here</p>
    </div>
  );
};

export default UploadSection;

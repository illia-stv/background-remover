import styles from "./app.module.css";

const UploadButton = ({ handleFileChange }: any) => {
  return (
    <button className={styles.uploadButton}>
      <input
        type="file"
        onChange={handleFileChange}
        style={{ display: "none" }}
        id="file-input"
      />
      <label htmlFor="file-input">Upload&nbsp;Image</label>
    </button>
  );
};

export default UploadButton;

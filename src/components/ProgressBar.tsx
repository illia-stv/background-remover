import { useState, useEffect } from "react";
import styles from "./ProgressBar.module.css";

const messages = [
  "Fetching AI model🤖",
  "Image processing🛠",
  "Stay with us😅",
  "Almost there😅",
];

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const targetProgress = 100;
    const duration = 30000; // 10 seconds
    const incrementTime = duration / targetProgress;

    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= targetProgress) {
          clearInterval(interval);
          return targetProgress;
        }
        return prevProgress + 1;
      });

      if (progress / 25 > messageIndex + 1) {
        setMessageIndex(messageIndex + 1);
      }
    }, incrementTime);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress / 25 > messageIndex + 1) {
      setMessageIndex(messageIndex + 1);
    }
  }, [progress]);

  return (
    <>
      <div className={styles.progressContainer}>
        <div className={styles.progressBar} style={{ width: `${progress}%` }}>
          <span className={styles.progressText}>{progress}%</span>
        </div>
      </div>
      <div className={styles.messages}>
        <p>{messages[messageIndex]}</p>
      </div>
    </>
  );
};

export default ProgressBar;

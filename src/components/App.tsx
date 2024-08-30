"use client";
import { useEffect, useState } from "react";
import { removeBackground, preload } from "@imgly/background-removal";
import ImageComponent from "./ImageComponent";
import styles from "./app.module.css";
import UploadSection from "./UploadSection";
import ImageProcesssing from "./ImageProcessing";
import ProcessedImage from "./ProcessedImage";

export default function BackgroundRemover() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [onDragOverStyle, setOnDragOverStyle] = useState<string | undefined>();
  const [imageSrc, setImageSrc] = useState(null);
  const [imageDimensions, setImageDimensions] = useState({
    width: "100%",
    height: "100%",
  });
  const firstImageDemensions = getDimensions({
    width: 640,
    height: 964,
    maxWidth: 200,
    maxHeight: 200,
  });
  const secondImageDemensions = getDimensions({
    height: 427,
    width: 640,
    maxWidth: 200,
    maxHeight: 200,
  });
  const { width: viewportWidth, height: viewportHeight } =
    getWindowDimensions();

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setProcessedImage(null);

    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        setImageSrc(e.target.result);
      };

      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    preload();
  }, []);

  useEffect(() => {
    if (selectedFile) {
      // setLastProcessedFile(selectedFile);
      handleBackgroundRemoval();
    }
  }, [selectedFile]);

  const handleBackgroundRemoval = async () => {
    if (!selectedFile) return;

    try {
      const result = await removeBackground(selectedFile, {
        device: "gpu",
        output: {
          quality: 1,
        },
      });

      const url = URL.createObjectURL(result);
      setProcessedImage(url);
    } catch (error) {
      console.error("Background removal failed:", error);
    }
  };

  const onDropHandle = (event: any) => {
    setProcessedImage(null);

    event.preventDefault();

    const file = event.dataTransfer.files[0];

    setSelectedFile(file);
    setOnDragOverStyle("");

    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        setImageSrc(e.target.result); // This is the base64 or blob URL of the image
      };

      reader.readAsDataURL(file); // Read the file as a data URL
    }
  };

  const onDragOverHandler = (event: any) => {
    event.preventDefault();
    setOnDragOverStyle("0px 0px 24px 13px rgba(170, 170, 170, 1)");
  };

  const onDragOverLeaveHandler = (event: any) => {
    event.stopPropagation();
    event.preventDefault();
    setOnDragOverStyle("");
  };

  useEffect(() => {
    if (imageSrc) {
      const img = new Image();
      img.src = imageSrc;

      img.onload = function () {
        let width = img.naturalWidth;
        let height = img.naturalHeight;
        const maxWidth = viewportWidth > 550 ? 500 : viewportWidth - 50;
        const maxHeight = viewportHeight > 550 ? 500 : viewportHeight - 50;

        const { width: updatedWidth, height: updatedHeight } = getDimensions({
          width,
          height,
          maxWidth,
          maxHeight,
        });

        // Set the container's dimensions based on the image's natural dimensions
        setImageDimensions({
          width: `${updatedWidth}px`,
          height: `${updatedHeight}px`,
        });
      };
    }
  }, [imageSrc]);

  return (
    <div className={styles.container}>
      <ImageComponent
        src="/bordercollie-dog.png"
        className={styles.borderCollieImage}
        width={firstImageDemensions.width}
        height={firstImageDemensions.height}
        alt="image of a dog"
      />
      <ImageComponent
        src="/buldog-dog.png"
        className={styles.buldogImage}
        width={secondImageDemensions.width}
        height={secondImageDemensions.height}
        alt="image of a dog"
      />
      <div className={styles.content}>
        <h1 className={styles.title}>Remove Image Background</h1>
        <p className={styles.subtitle}>
          High resolution background remover for{" "}
          <span className={styles.highlight}>Free</span>
        </p>
        {!selectedFile && (
          <UploadSection
            onDropHandle={onDropHandle}
            onDragOverHandler={onDragOverHandler}
            onDragOverLeaveHandler={onDragOverLeaveHandler}
            onDragOverStyle={onDragOverStyle}
            handleFileChange={handleFileChange}
          />
        )}
        {imageSrc && !processedImage && (
          <ImageProcesssing
            imageSrc={imageSrc}
            imageDimensions={imageDimensions}
          />
        )}
        {processedImage && (
          <ProcessedImage
            onDropHandle={onDropHandle}
            onDragOverHandler={onDragOverHandler}
            onDragOverLeaveHandler={onDragOverLeaveHandler}
            onDragOverStyle={onDragOverStyle}
            imageDimensions={imageDimensions}
            processedImage={processedImage}
            handleFileChange={handleFileChange}
          />
        )}
      </div>
    </div>
  );
}

const getDimensions = ({ width, height, maxHeight, maxWidth }: any) => {
  if (width > maxWidth || height > maxHeight) {
    const widthRatio = maxWidth / width;
    const heightRatio = maxHeight / height;
    const ratio = Math.min(widthRatio, heightRatio);

    width = width * ratio;
    height = height * ratio;
  }

  return {
    width,
    height,
  };
};

const getWindowDimensions = () => {
  if (typeof window !== "object") {
    return {
      width: 1000,
      height: 1000,
    };
  }

  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};

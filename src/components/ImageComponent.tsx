import Image from "next/image";

const ImageComponent = (props: any) => {
  return (
    <div>
      <Image {...props} />
    </div>
  );
};

export default ImageComponent;

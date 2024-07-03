import Image from "next/image";

export default function BackgroundImage() {
  return (
    <Image
      className="-z-[1] object-cover"
      src={"/background-artwork.webp"}
      alt="background-image"
      fill
      priority
    />
  );
}

import Image from "next/image";

export default function SleepingLoading() {
  return (
    <div className="flex justify-center items-center gap-10">
      <Image
        className="object-contain"
        src={"/sleep-loading-animation.gif"}
        height={100}
        width={100}
        unoptimized
        alt="sleeping-animation"
      />
      <p className="mt-10 ml-5">Loading...</p>
      <Image
        className="object-contain"
        src={"/sleep-loading-animation.gif"}
        height={100}
        width={100}
        unoptimized
        alt="sleeping-animation"
      />
    </div>
  );
}

import Image from "next/image";

export default function AccountLoading() {
  return (
    <div className="flex justify-center items-center">
      <Image
        className="object-contain"
        src={"/login-teleport-animation.gif"}
        height={100}
        width={100}
        unoptimized
        alt="login-animation"
      />
      <p className="mt-10 ml-5">Logging In...</p>
      <Image
        className="object-contain"
        src={"/login-teleport-animation.gif"}
        height={100}
        width={100}
        unoptimized
        alt="login-animation"
      />
    </div>
  );
}

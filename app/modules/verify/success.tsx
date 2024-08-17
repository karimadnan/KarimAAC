import Link from "next/link";
import Image from "next/image";

export default function Success() {
  return (
    <>
      <Image
        src="/gobbler_love.png"
        height={112}
        width={112}
        alt="gobbler_love"
      />
      <p>
        Your account email has been
        <span className="text-green-500 font-bold">VERIFIED!</span>.
      </p>
    </>
  );
}

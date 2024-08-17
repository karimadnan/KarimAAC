import Image from "next/image";

interface Props {
  reason: string;
}

export default function Failed({ reason }: Props) {
  return (
    <>
      <Image
        src="/gobbler_sad.png"
        height={112}
        width={112}
        alt="gobbler_sad"
      />
      <p>
        We couldn't verify your email. Reason:{" "}
        <span className="text-red-500 font-bold">{reason}</span>
      </p>
    </>
  );
}

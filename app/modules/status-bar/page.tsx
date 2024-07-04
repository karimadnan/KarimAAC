import { Badge } from "@karimACC/app/ui/components/badge";
import { Button } from "@karimACC/app/ui/components/button";
import Paper from "@karimACC/app/ui/components/paper";
import Image from "next/image";
import Link from "next/link";

export default function StatusBar() {
  return (
    <Paper className="mt-5 w-full p-3">
      <div className="flex justify-between flex-col md:flex-row gap-3">
        <Button>Download Client</Button>

        <Badge variant="default">
          <Link href={"/whoisonline"}>Server Online: 137 players</Link>
        </Badge>
        <div className="flex justify-between w-[100px]">
          <Image
            className="object-contain"
            src="/youtube-logo.png"
            height={32}
            width={32}
            alt="youtube-icon"
          />
          <Image
            className="object-contain"
            src="/facebook-logo.png"
            height={32}
            width={32}
            alt="facebook-icon"
          />
        </div>
      </div>
    </Paper>
  );
}

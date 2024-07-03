import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@karimACC/app/ui/components/alert";
import { news } from "../landing/dummydata";
import Image from "next/image";

const newsTypeToIcon: any = {
  COM: "/news-community-icon.png",
  DEV: "/news-dev-icon.png",
};

export default function News() {
  return news.map((post) => (
    <div className="p-5">
      <Alert>
        <AlertTitle className="flex items-center">
          <Image
            className="mr-3"
            width={32}
            height={32}
            src={newsTypeToIcon[post.type]}
            alt="news-icon"
          />
          <span className="mr-3">
            {new Intl.DateTimeFormat("en-US").format(post.timestamp)}
          </span>
          <span>{post.title}</span>
        </AlertTitle>
        <AlertDescription>{post.content}</AlertDescription>
      </Alert>
    </div>
  ));
}

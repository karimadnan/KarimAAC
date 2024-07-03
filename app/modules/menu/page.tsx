import {
  ListItem,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@karimACC/app/ui/components/navigation-menu";
import Image from "next/image";

export default function Menu() {
  return (
    <div className="w-full bg-white rounded-lg p-3">
      <NavigationMenu className="w-full hidden lg:block">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <div className="flex">
                <Image
                  src={"/icon-news.gif"}
                  alt="icon-news"
                  height={32}
                  width={32}
                />
                <div className="ml-4 flex items-center">Latest News</div>
              </div>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="flex w-[500px] h-[300px]">
                <Image
                  className="object-contain"
                  src={"/newsreader.png"}
                  alt="newsreader"
                  height={200}
                  width={200}
                />
                <div className="p-5">
                  <div className="mb-2 mt-4 text-lg font-medium">
                    Summer update 2024
                  </div>
                  <p className="text-sm leading-tight text-muted-foreground">
                    Believe it or not, Sweet Dreams will take you to a magical
                    place in Tibia flowing with milk and honey. In this
                    dreamlike area called Candia, they throw a carnival so
                    marvellous, it will make your head spin and your sweet tooth
                    tingle with delight. The catch? The carnival only opens when
                    every Candian is back to their carefree, sugary selves. Do
                    you have what it takes to restore peace in paradise?
                  </p>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <div className="flex">
                <Image
                  src={"/icon-library.gif"}
                  alt="icon-library"
                  height={32}
                  width={32}
                />
                <div className="ml-4 flex items-center">Library</div>
              </div>
            </NavigationMenuTrigger>
            <NavigationMenuContent></NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <div className="flex">
                <Image
                  src={"/icon-community.gif"}
                  alt="icon-community"
                  height={32}
                  width={32}
                />
                <div className="ml-4 flex items-center">Community</div>
              </div>
            </NavigationMenuTrigger>
            <NavigationMenuContent></NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <div className="flex">
                <Image
                  src={"/icon-charactertrade.gif"}
                  alt="icon-charactertrade"
                  height={32}
                  width={32}
                />
                <div className="ml-4 flex items-center">Character Bazar</div>
              </div>
            </NavigationMenuTrigger>
            <NavigationMenuContent></NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <div className="flex">
                <Image
                  src={"/icon-account.gif"}
                  alt="icon-account"
                  height={32}
                  width={32}
                />
                <div className="ml-4 flex items-center">Account</div>
              </div>
            </NavigationMenuTrigger>
            <NavigationMenuContent></NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <div className="flex">
                <Image
                  src={"/icon-support.gif"}
                  alt="icon-support"
                  height={32}
                  width={32}
                />
                <div className="ml-4 flex items-center">Support</div>
              </div>
            </NavigationMenuTrigger>
            <NavigationMenuContent></NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

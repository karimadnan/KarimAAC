import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Menu from "./modules/menu/page";
import StatusBar from "./modules/status-bar/page";
import BackgroundImage from "./modules/background-image/page";
import Image from "next/image";
import LoginMenu from "./modules/login-menu/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BackgroundImage />
        <div className="flex flex-col justify-center items-center mt-60">
          <div className="xl:w-[80%] w-[90%] mt-10">
            <Menu />
            <StatusBar />
            <div className="flex mt-5 justify-between">
              <div className="bg-white max-w-max rounded-md w-[100%] md:w-[75%]">
                {children}
              </div>
              <div className="hidden md:block w-[24%]">
                <LoginMenu />
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

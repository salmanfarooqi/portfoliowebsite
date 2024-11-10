import Link from "next/link";
import { useRouter } from "next/router";
import React, { ReactNode } from "react";
import Image from "./Image";

interface SideBarArray {
  icon: ReactNode;
  title: string;
  id: string;
}

interface SideBarProps {
  data: SideBarArray[];
  mainClassName?: string;
  SideBarLogoClassName?: string;
}

const UserSideBar: React.FC<SideBarProps> = ({
  data,
  mainClassName,
  SideBarLogoClassName,
}) => {
  const router = useRouter();
  const handleItemClick = () => {};

  return (
    <div
      id="scroll-1"
      className={`h-screen text-custom-black sm:pr-2 flex flex-col bg-[#F2F3F7] ${mainClassName}`}
    >
      <div
        className={`w-full sticky flex flex-col items-center justify-center py-2 ${SideBarLogoClassName}`}
      >
        <Image
          height={0}
          width={0}
          alt=""
          className="aspect-square w-full rounded-full border-[3px] border-primary object-cover sm:w-[60%]"
          src={"https://media.licdn.com/dms/image/v2/D4D03AQGUkmYXAUd6gg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1696427839198?e=1736380800&v=beta&t=883ZziNsDmryZcznTaHWxOuchyvWv0dPjN6MFtYCJTY"}
        />

        <div className="py-2 text-center font-serif text-xs text-custom-black sm:text-sm md:text-base">
          <p>salman farooqi</p>
          <p>Full Stack Developer</p>
        </div>
      </div>
      <div
        id="scroll-1"
        className="custom-scrollbar flex flex-col items-center overflow-y-auto bg-[#F2F3F7] sm:items-start"
      >
        <div className="flex flex-col bg-[#F2F3F7]">
          <div>
            <div className="mt-3 flex w-full flex-col items-center gap-2 whitespace-nowrap px-4 text-xs text-black sm:items-start sm:px-4 sm:text-base md:mt-5 lg:gap-4 lg:text-base">
              {data.map((item) => {
                const isActive = router.pathname === `#${item.title.toLowerCase()}`;
                return (
                  <Link
                    key={item?.id}
                    href={`#${item.title.toLowerCase()}`}
                    title={item?.title}
                    onClick={handleItemClick}
                    className={`text-black flex items-center text-center px-3 lg:pl-3 lg:pr-16 py-1 rounded-lg gap-1 md:gap-3 hover:bg-green-400 w-full cursor-pointer ${
                      isActive ? "font-bold" : ""
                    }`}
                  >
                    <p
                      className={`w-[18px] sm:w-[15px] text-custom-black hover:text-white h-[18px] sm:h-[15px] ${
                        isActive ? "font-bold" : ""
                      }`}
                    >
                      {item?.icon}
                    </p>
                    <p
                      className={`text-base font-serif hidden text-custom-black hover:text-white sm:block ${
                        isActive ? "font-bold" : ""
                      }`}
                    >
                      {item?.title}
                    </p>
                  </Link>
                );
              })}
            </div>

            <div className="mt-10 flex px-4 pb-4 sm:w-full sm:border-t sm:px-5">
              <div
                onClick={() => {
                  const profileSettingUrl = router.pathname.includes("admin")
                    ? "/admin/feedback"
                    : "/employee/feedback";
                  router.push(profileSettingUrl);
                }}
                className="my-2 mt-4 flex cursor-pointer items-center gap-1 text-center text-[11px] text-white md:gap-3 md:text-xs"
              >
                <p className="hidden text-custom-black">
                  © Copyright ©2024 All rights reserved | This template is made
                  with by Colorlib Demo Images: Unsplash.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSideBar;

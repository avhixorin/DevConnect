import React from "react";
import { Compass, Heart, Home, MessagesSquare, PlusSquareIcon, Search } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { NavLink } from "react-router-dom";
const SideNavs = [
  {
    toLink: "/home",
    icon: <Home />,
    text: "Home",
  },
  {
    toLink: "/home/search",
    icon: <Search size={26} />,
    text: "Search",
  },
  {
    toLink: "/home/explore",
    icon: <Compass size={26} />,
    text: "Explore",
  },
  {
    toLink: "/home/messages",
    icon: <MessagesSquare size={26} />,
    text: "Messages",
  },
  {
    toLink: "/home/notifications",
    icon: <Heart size={26} />,
    text: "Notifications",
  },
  {
    toLink: "/home/create",
    icon: <PlusSquareIcon size={26} />,
    text: "Create",
  },
];
const LeftSideBar = () => {
  return (
    <div className=" p-4 flex flex-col gap-8 h-screen max-w-72 overflow-y-auto bg-transparent dark:bg-[#0A0A0A]">
      <div className="flex flex-col items-center space-y-2">
        <div className="relative">
          <Avatar className="h-20 w-20 border-2 border-white">
            <AvatarImage
              src="/placeholder.svg?height=80&width=80"
              alt="Bogdan Nikitin"
            />
            <AvatarFallback>BN</AvatarFallback>
          </Avatar>
          <div className="absolute -bottom-1 -right-1 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
            <span className="text-white">👋</span>
          </div>
        </div>
        <div className="text-center">
          <h2 className="text-lg font-bold text-gray-200">Bogdan Nikitin</h2>
          <p className="text-sm text-gray-500">@nikitinbogdan</p>
        </div>
      </div>

      <nav className="space-y-1 w-full">
        {SideNavs.map((navLink, i) => (
          <SideLink
            key={i}
            toLink={navLink.toLink}
            icon={navLink.icon}
            text={navLink.text}
          />
        ))}
      </nav>

      <div className="mt-auto">
        <div className="mt-8 rounded-xl border border-dashed border-gray-300 p-4">
          <div className="flex items-center justify-center">
            <div className="relative h-16 w-16">
              <div className="absolute h-16 w-16 rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 opacity-20"></div>
              <div className="absolute flex h-16 w-16 items-center justify-center">
                <span className="text-2xl">👋</span>
              </div>
            </div>
          </div>
          <p className="mt-2 text-center text-sm font-medium">
            Download the App
          </p>
        </div>
      </div>
    </div>
  );
};
const SideLink = ({
  toLink,
  icon,
  text,
}: {
  toLink: string;
  icon: React.ReactNode;
  text: string;
}) => {
  return (
    <NavLink
      to={toLink}
      className={({ isActive }) =>
        `${
          isActive
            ? "text-white bg-gray-800 p-3 rounded-lg font-bold"
            : "text-gray-300 hover:text-white hover:bg-gray-700 p-3 rounded-lg"
        } flex items-center gap-3 rounded-lg p-3`
      }
    >
      {icon}
      <span className="hidden md:block">{text}</span>
    </NavLink>
  );
};
export default LeftSideBar;

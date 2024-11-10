import {
  logo,
  search_icon,
  bell_icon,
  profile_img,
  caret_icon,
} from "@/assets/";
import { logout } from "@/config/Firebase.config";
import { useEffect, useRef } from "react";

const Navbar = () => {
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleNavbarScroll = () => {
      if (window.scrollY >= 80 && navRef.current) {
        navRef.current.classList.add("bg-[#141414]");
      } else if (navRef.current) {
        navRef.current.classList.remove("bg-[#141414]");
      }
    };
    window.addEventListener("scroll", handleNavbarScroll);

    return () => window.removeEventListener("scroll", handleNavbarScroll);
  }, []);

  return (
    <div
      className="w-full py-[20px] px-[6%] flex justify-between fixed text-sm text-[#e5e5e5] z-[1] max-md:px-[4%] max-md:py-5"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(0, 0, 0, 0.7) 10%, transparent)",
      }}
      ref={navRef}
    >
      <div className="flex items-center gap-12">
        <img
          src={logo}
          className="w-[90px] max-md:h-[25px] max-sm:h-[20px]"
          alt="Netflix_icon"
        />
        <ul className="flex list-none gap-5 max-md:hidden">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">TV Shows</li>
          <li className="cursor-pointer">Movies</li>
          <li className="cursor-pointer">New & Popular</li>
          <li className="cursor-pointer">My List</li>
          <li className="cursor-pointer">Browse by Languages</li>
        </ul>
      </div>

      <div className="flex gap-5 max-sm:gap-[10px] items-center">
        <img
          src={search_icon}
          alt="Search_icon"
          className="icons max-md:h-[25px] max-sm:h-[20px]"
        />
        <p>Children</p>
        <img
          src={bell_icon}
          alt="Bell_icon"
          className="icons max-md:h-[25px]"
        />

        <div className="flex relative group items-center gap-[10px] cursor-pointer">
          <img
            src={profile_img}
            alt="Profile_img"
            className="rounded w-[35px]  max-md:h-[25px] max-sm:h-[20px]"
          />
          <img src={caret_icon} alt="Caret_icon  max-md:h-[25px]" />

          <div className="absolute group-hover:block hidden top-full right-0 w-max bg-[#191919] px-[22px] py-[18px] rounded underline z-[1]">
            <p onClick={() => logout()} className="text-[13px] cursor-pointer">
              Sign Out of Netflix
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

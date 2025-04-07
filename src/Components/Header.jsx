import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import {
  IoIosArrowDown,
  IoIosArrowUp,
  IoIosNotifications,
} from "react-icons/io";
import { RiMessage2Fill } from "react-icons/ri";

const Header = () => {
  const [openProfile, setOpenProfile] = useState(false);

  const handleProfileToggle = () => {
    setOpenProfile((prev) => !prev);
  };
  return (
    <div className="flex items-center justify-between px-[2.5rem] h-[10vh] bg-white border-b-[1px] border-lightgray w-full">
      <div className="px-[5px] flex items-center gap-px h-[2rem] w-[15rem] border border-lightgray rounded-full">
        <BiSearch />
        <input
          type="text"
          name="searchbar"
          id="seaarchbar"
          placeholder="Search"
          className="w-full h-full outline-0"
        />
      </div>
      <div className="flex items-center gap-[10px]">
        <RiMessage2Fill className="text-[25px] text-darkgray hover:text-accent" />
        <IoIosNotifications className="text-[25px] text-darkgray hover:text-accent" />
        <div className="flex items-center gap-[5px]">
          <div>
            <CgProfile className="text-[25px]" />
          </div>
          <div className="leading-[15px] relative">
            <h3 className="font-bold text-darkgray">Ganiyu Mubarak</h3>
            <p className="text-[13px] text-darkgray">Director</p>
            <span
              className="absolute right-[-1.5rem] top-[3px] text-darkgray"
              onClick={handleProfileToggle}
            >
              {openProfile ? <IoIosArrowDown /> : <IoIosArrowUp />}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

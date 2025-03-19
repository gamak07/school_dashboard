import React from "react";
import { BiSearch } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { IoIosNotifications } from "react-icons/io";
import { RiMessage2Fill } from "react-icons/ri";

const Header = () => {
  return (
    <div className="flex items-center justify-between px-[2.5rem] h-[10vh] bg-background border-b-[1px] border-lightgray w-full">
      <div className="px-[5px] flex items-center gap-px h-[2rem] w-[15rem] border border-lightgray rounded-full">
        <BiSearch />
        <input
          type="text"
          name="searchbar"
          id="seaarchbar"
          placeholder="Search"
          className="w-full h-full"
        />
      </div>
      <div className="flex items-center gap-[4px]">
        <RiMessage2Fill className="text-[25px]" />
        <IoIosNotifications className="text-[25px]" />
        <div className="flex items-center gap-[5px]">
          <div>
            <CgProfile className="text-[25px]" />
          </div>
          <div className="leading-[15px]">
            <h3 className="font-bold">Ganiyu Mubarak</h3>
            <p>Director</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

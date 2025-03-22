import SidebarItem from "./SidebarItem"; // Import SidebarItem
import { sidebarData } from "../../sidebarData";

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-[1rem] h-screen w-[15%] py-[1rem] bg-background border-r-2 border-lightgray overflow-y-auto">
      <div className="w-[5rem] aspect-square flex self-center">
        <img src="/logo.webp" alt="logo" className="w-full h-full" />
      </div>
      <ul className="w-full">
        {sidebarData.map((item, index) => (
          <SidebarItem key={index} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

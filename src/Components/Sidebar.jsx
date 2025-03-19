import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const contents = [
    { name: "Dashboard", link: "/" },
    { name: "Admin", link: "/admin" },
    { name: "Teachers", link: "/teachers" },
    { name: "Students", link: "/students" },
    { name: "Library", link: "/library" },
    { name: "Class", link: "/class" },
    { name: "Parents", link: "/parents" },
    { name: "Finance", link: "/finance" },
    { name: "Notice", link: "/notice" },
    { name: "Exams & Results", link: "/exam&results" },
    { name: "Hostel", link: "/hostel" },
    { name: "Reviews", link: "/reviews" },
  ];

  return (
    <div className="flex flex-col gap-[1rem] h-screen w-[15%] py-[1rem] bg-text">
      <div className="w-[5rem] aspect-square flex self-center m-auto">
        <img src="/logo.webp" alt="logo" className="w-full h-full" />
      </div>
      <ul className="w-full">
        {contents.map((content, index) => (
          <li key={index} className="w-full">
            <NavLink
              to={content.link}
              className={({ isActive }) =>
                `w-full px-[1rem] py-[5px] block text-[15px] font-semibold ${
                  isActive
                    ? "bg-background text-text"
                    : " bg-text text-background"
                }`
              }
            >
              {content.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

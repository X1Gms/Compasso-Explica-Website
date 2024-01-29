import Links from "./links";
import { NavLink } from "react-router-dom";

const links: { name: string; link: string }[] = [
  {
    name: "Sobre Nós",
    link: "/about-us",
  },
  {
    name: "Educação",
    link: "/education",
  },
  {
    name: "Serviços",
    link: "/services",
  },
  {
    name: "Contactos",
    link: "/contacts",
  },
];

const Navbar = () => {
  return (
    <div className="min-h-[100px] w-full bg-red-600 flex justify-between">
      <NavLink to="/">
        <img src="/CompassoExplicaLogo.png" className="w-[165px]" />
      </NavLink>
      <div className="links max-w-[1200px] w-full flex bg-yellow-400 justify-around items-center">
        {links.map((item, index) => (
          <Links key={index} name={item.name} link={item.link} />
        ))}
      </div>
    </div>
  );
};
export default Navbar;

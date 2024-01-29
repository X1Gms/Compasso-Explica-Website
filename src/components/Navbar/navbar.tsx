import Links from "./links";
import { NavLink } from "react-router-dom";
import { useState } from "react";

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
  const [IsActive, SetActive] = useState(false);

  const Toggle = () => {
    SetActive(!IsActive);
  };

  return (
    <div className="min-h-[100px] w-full flex justify-between">
      <NavLink to="/">
        <img src="/CompassoExplicaLogo.png" className="logo" />
      </NavLink>
      <div className="links max-w-[1000px] w-full flex justify-around items-center">
        {links.map((item, index) => (
          <Links key={index} name={item.name} link={item.link} />
        ))}
      </div>
      <div
        className={`hamburguer ${IsActive ? "active" : ""}`}
        onClick={Toggle}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};
export default Navbar;

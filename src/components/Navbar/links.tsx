import { NavLink } from "react-router-dom";

const Links = (props: { name: string; link: string }) => (
  <div className="uppercase text-[20px]">
    <NavLink to={props.link}>{props.name}</NavLink>
  </div>
);
export default Links;

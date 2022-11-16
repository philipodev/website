import { FC } from "react";
import { NavItem } from "./NavItem";

export const Nav: FC<{}> = () => {
  return (
    <nav>
      <ul className="flex flex-col gap-2 items-end">
        <NavItem page="introduction">Introduction</NavItem>
        <NavItem page="experience">Work experience</NavItem>
        <NavItem page="techniques">Techniques</NavItem>
        <NavItem page="projects">Projects</NavItem>
        <NavItem page="contact">Contact</NavItem>
        {/* 
        <NavItem>Contact</NavItem> */}
      </ul>
    </nav>
  );
};

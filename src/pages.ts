import { Contact } from "./components/pages/Contact";
import { Experience } from "./components/pages/Experience";
import { Introduction } from "./components/pages/Introduction";
import { Projects } from "./components/pages/Projects";
import { Techniques } from "./components/pages/Techniques";

interface PagesMap {
  [key: string]: React.ComponentType;
}

const pages: PagesMap = {
  introduction: Introduction,
  experience: Experience,
  techniques: Techniques,
  projects: Projects,
  contact: Contact,
};

export type PageName = keyof PagesMap;

export default pages;

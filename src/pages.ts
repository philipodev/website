import { Experience } from "./components/pages/Experience";
import { Introduction } from "./components/pages/Introduction";
import { Techniques } from "./components/pages/Techniques";

interface PagesMap {
  [key: string]: React.ComponentType;
}

const pages: PagesMap = {
  introduction: Introduction,
  experience: Experience,
  techniques: Techniques,
};

export type PageName = keyof PagesMap;

export default pages;

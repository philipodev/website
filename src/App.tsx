import { FC, PropsWithChildren } from "react";
import { Nav } from "./components/Nav";
import { Pages } from "./components/Pages";

interface Props {}

export const App: FC<PropsWithChildren<Props>> = () => {
  return (
    <div>
      <div className="bg-primary bg-opacity-10 h-screen w-[calc((100%-1024px)/2+320px)] fixed top-0 left-0 bottom-0 bg-[url('/src/large.jpg')] bg-center bg-cover -z-[1] grayscale  opacity-10 hidden md:block"></div>
      <div className="mx-auto max-w-[1024px] relative">
        <main>
          <aside className="w-[320px] fixed pr-20 pt-[93px] hidden md:block">
            <header className="pb-12 w-full flex justify-end">
              <h1 className="text-8xl font-bold">CV</h1>
            </header>

            <Nav />
          </aside>
          <div className="md:pl-[320px]">
            <Pages />
          </div>
        </main>
      </div>
    </div>
  );
};

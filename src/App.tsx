import { FC, PropsWithChildren } from "react";
import { Nav } from "./components/Nav";
import { Pages } from "./components/Pages";

interface Props {}

export const App: FC<PropsWithChildren<Props>> = () => {
  return (
    <div>
      <div className="bg-primary bg-opacity-10 h-screen w-[calc((100%-1024px)/2+320px)] fixed top-0 left-0 bottom-0 bg-[url('/src/large.png')] bg-center bg-cover -z-[1] grayscale  opacity-10"></div>
      <div className="mx-auto max-w-[1024px] pt-[93px] relative">
        <main>
          <aside className="w-[320px] fixed pr-20">
            <header className="pb-12 w-full flex justify-end">
              <h1 className="text-8xl font-bold">CV</h1>
            </header>

            <Nav />
          </aside>
          <div className="pl-[320px]">
            <div className="flex justify-end pb-14">
              <h2 className="text-4xl lowercase w-[200px] text-right pt-[16px]">
                Philip Andersson
              </h2>
            </div>

            <Pages />
          </div>
        </main>
      </div>
    </div>
  );
};

import React, { FC, PropsWithChildren } from "react";
import pages, { PageName } from "../pages";
import { useNavStore } from "../store/nav";
import classNames from "classnames";

interface Props {}

export const Pages: FC<PropsWithChildren<Props>> = () => {
  const activePage = useNavStore((s) => s.page);

  return (
    <div className="flex-1 relative w-full pl-12 gap-12 flex flex-col">
      {Object.keys(pages).map((page) => (
        <Page key={page} page={page} active={activePage === page} />
      ))}
    </div>
  );
};

interface PageProps {
  page: PageName;
  active?: boolean;
}

const Page: FC<PageProps> = React.forwardRef<HTMLDivElement, PageProps>(
  ({ page }, ref) => {
    return (
      <section
        ref={ref}
        key={page}
        className={classNames("transition duration-700 w-full", {})}
      >
        {renderPage(page)}
      </section>
    );
  }
);

function renderPage(page: PageName) {
  const Page = pages[page];
  return <Page />;
}

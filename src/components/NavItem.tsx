import { FC, PropsWithChildren } from "react";
import { useNavStore } from "../store/nav";
import classNames from "classnames";

interface Props {
  page: string;
}

export const NavItem: FC<PropsWithChildren<Props>> = ({ children, page }) => {
  const setPage = useNavStore((s) => s.setPage);
  const activePage = useNavStore((s) => s.page);

  return (
    <li
      className={classNames("text-xl hover:scale-105 transition", {
        "text-primary": activePage === page,
      })}
    >
      <a
        href={"#" + page}
        onClick={(e) => {
          e.preventDefault();
          setPage(page);
        }}
      >
        {children}
      </a>
    </li>
  );
};

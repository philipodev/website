import { FC, PropsWithChildren } from "react";

interface Props {}

export const Timeline: FC<PropsWithChildren<Props>> = ({ children }) => {
  return (
    <ol className="ml-1 pl-3 relative border-l border-gray-200 dark:border-gray-900">
      {children}
    </ol>
  );
};

interface ItemProps {
  title: string;
  from: string;
  to: string;
}

export function TimelineItem({
  children,
  title,
  from,
  to,
}: PropsWithChildren<ItemProps>) {
  return (
    <li className="mb-10 ml-4">
      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-primary"></div>
      <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
        {from} &ndash; {to}
      </time>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
        {children}
      </p>
    </li>
  );
}

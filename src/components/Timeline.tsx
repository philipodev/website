import { FC, PropsWithChildren } from "react";

interface Props {}

export const Timeline: FC<PropsWithChildren<Props>> = ({ children }) => {
  return (
    <ol className="ml-1 pl-3 relative border-l border-gray-200 dark:border-gray-900 print:pl-0 print:border-none print:ml-0">
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
    <li className="mb-10 ml-4 print:mb-4 print:border-b print:border-gray-900 print:ml-0">
      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-primary print:hidden"></div>
      <time className="mb-1 print:mb-0 text-sm print:text-xs font-normal leading-none text-gray-400 dark:text-gray-500">
        {from} &ndash; {to}
      </time>
      <h3 className="text-lg print:text-md font-semibold text-gray-900 dark:text-white print:pb-2">
        {title}
      </h3>
      <p className="mb-4 print:mb-2 text-base font-normal text-gray-500 dark:text-gray-400 print:text-xs print:pb-4">
        {children}
      </p>
    </li>
  );
}

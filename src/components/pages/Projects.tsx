import { GithubLogo } from "../icons/Github";

export function Projects() {
  return (
    <>
      <h3>Projects</h3>

      <h4>Github repos</h4>
      <ul className="flex flex-col gap-4">
        <li className="flex gap-4 items-center">
          <GithubLogo />
          <div>
            <a href="https://github.com/philipodev/estates">
              philipodev/estates
            </a>
            <p className="text-gray-500 mb-0">
              a tiny (not global) state machine for react trees
            </p>
          </div>
        </li>
        <li className="flex gap-4 items-center">
          <GithubLogo />
          <div>
            <a href="https://github.com/philipodev/uncord">philipodev/uncord</a>
            <p className="text-gray-500 mb-0">
              Discord Bot Framework. Built in typescript
            </p>
          </div>
        </li>
      </ul>
    </>
  );
}

import { GithubLogo } from "../icons/Github";

export function Contact() {
  return (
    <>
      <h3>Contact me</h3>

      <ul className="flex flex-col gap-4 text-md">
        <li>
          <a
            href="https://github.com/philipodev"
            className="flex gap-2 items-center"
          >
            <GithubLogo className="w-12 h-12" />
            <span>@philipodev</span>
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/philipodev"
            className="flex gap-2 items-center"
          >
            <img src="/icons/twitter.svg" alt="Twitter" className="w-12 h-12" />
            <span>@philipodev</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/philip-andersson-b8a88977/"
            className="flex gap-2 items-center"
          >
            <img
              src="/icons/linkedin.svg"
              alt="LinkedIn"
              className="w-12 h-12"
            />
            <span>LinkedIn</span>
          </a>
        </li>
        <li>
          <a
            href="mailto:philipodev@gmail.com"
            className="flex gap-2 items-center"
          >
            <img src="/icons/gmail.svg" alt="Gmail" className="w-12 h-12" />
            <span>philipodev@gmail.com</span>
          </a>
        </li>
      </ul>
    </>
  );
}

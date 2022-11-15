import { NextjsLogo } from "../icons/Nextjs";

export function Techniques() {
  return (
    <>
      <h3>Techniques</h3>
      <p>
        I'm familiar with a wide range of techniques and tools. Here are some of
        the ones I use most often.
      </p>

      <h4 className="pt-4">Frontend</h4>
      <ul className="flex gap-4 mb-6">
        <Technique name="React" iconUrl={"/icons/react.svg"} />
        <Technique name="Redux" iconUrl={"/icons/redux.svg"} />
        <Technique name="JavaScript" iconUrl={"/icons/js.svg"} />
        <Technique name="TypeScript" iconUrl={"/icons/ts.svg"} />
        <Technique name="Next.js" icon={<NextjsLogo />} />
      </ul>

      <h4>Tooling</h4>
      <ul className="flex gap-4 mb-6">
        <Technique name="Webpack" iconUrl={"/icons/webpack.svg"} />
        <Technique name="Vite" iconUrl={"/icons/vitejs.svg"} />
      </ul>

      <h4>Backend</h4>
      <ul className="flex gap-4 mb-6">
        <Technique name="Node.js" iconUrl={"/icons/nodejs.svg"} />
        <Technique name="AWS" iconUrl={"/icons/aws.svg"} />
        <Technique name="Docker" iconUrl={"/icons/docker.svg"} />
      </ul>

      <h4>Databases</h4>
      <ul className="flex gap-4 mb-6">
        <Technique name="MongoDB" iconUrl={"/icons/mongodb.svg"} />
        <Technique name="MySQL" iconUrl={"/icons/mysql.svg"} />
      </ul>
    </>
  );
}

type TechniqueProps = {
  name: string;
  iconUrl?: string;
  icon?: React.ReactNode;
};

function Technique({ name, iconUrl, icon }: TechniqueProps) {
  return (
    <li className="flex flex-col items-center gap-2">
      {icon ? icon : <img src={iconUrl} alt={name} className="w-12 h-12" />}
      <span>{name}</span>
    </li>
  );
}

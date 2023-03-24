import {
  GrGraphQl as GraphQL,
  GrNode as NodeJS,
  GrReactjs as ReactJS,
} from "react-icons/gr";
import { SiJavascript as JS, SiTailwindcss as Tailwind } from "react-icons/si";
import {
  TbBrandNextjs as NextJS,
  TbBrandTypescript as TS,
} from "react-icons/tb";
import SitecoreLogo from "./logos/SitecoreLogo";

export default function Logos() {
  const logos = [
    { icon: JS, name: "JavaScript" },
    { icon: TS, name: "TypeScript" },
    { icon: NodeJS, name: "NodeJS" },
    { icon: NextJS, name: "NextJS" },
    { icon: ReactJS, name: "ReactJS" },
    { icon: GraphQL, name: "GraphQL" },
    { icon: Tailwind, name: "Tailwind" },
    { icon: SitecoreLogo, name: "Sitecore" },
  ];
  return (
    <div className="bg-gray-50 relative">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="flex justify-center text-indigo-900 font-mono font-semibold text-2xl sm:text-4xl p-4">
          Skilled with
        </h1>
        <div className="flex justify-center flex-wrap transition-color">
          {logos.map((logo) => (
            <div className="p-6 m-2 sm:m-4 w-36 sm:w-60 bg-gray-100 text-indigo-800  hover:text-purple-700 duration-300 rounded-lg drop-shadow-md hover:drop-shadow-lg cursor-default">
              {<logo.icon className="w-full h-12 mb-22 " />}
              <span className="font-mono flex justify-center text-lg">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

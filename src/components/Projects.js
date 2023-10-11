import React from "react";
import gifGuesserLogo from "../assets/emoji.png";
import saborLogo from "../assets/SABOR_Logo.webp";
import doeLogo from "../assets/DOE_Logo.png";
import healingPathsLogo from "../assets/Healing_Paths_Logo.png";
import { GrReactjs as ReactJS, GrGithub as Github } from "react-icons/gr";
import {
  SiJavascript as JS,
  SiTailwindcss as Tailwind,
  SiCsharp as CSharp,
  SiFirebase as Firebase,
} from "react-icons/si";
import { FiExternalLink as LinkIcon } from "react-icons/fi";
import SitecoreLogo from "./logos/SitecoreLogo";

const allProjects = [
  {
    name: "Gif Guesser",
    github: "https://github.com/MarkusWilliamsDev/Gif-Guesser",
    link: "https://gifguesser.com/",
    about:
      "A web game built with React utilizing the Giphy API. You will be given a gif generated from a random word. Your job is to guess what the word is from just the gif.",
    logo: gifGuesserLogo,
    techUsed: [ReactJS, Tailwind, Firebase],
  },
  {
    name: "San Antonio Board of Realtors (SABOR)",
    link: "https://sabor.com/PropertySearch",
    about: "",
    logo: saborLogo,
    techUsed: [JS, SitecoreLogo, CSharp],
  },
  {
    name: "Department of Energy Office of Science",
    link: "https://science.osti.gov/Funding-Opportunities/Award",
    about: "",
    logo: doeLogo,
    techUsed: [SitecoreLogo, CSharp],
  },
  {
    name: "Healing Paths",
    link: "https://tema.azurewebsites.net/",
    about: "",
    logo: healingPathsLogo,
    techUsed: [ReactJS, CSharp],
  },
];

export default function Projects() {
  return (
    <div id="projects" className="relative bg-gray-50">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <h1 className="text-indigo-900 text-center font-mono font-semibold text-2xl sm:text-4xl p-4">
            My Work
          </h1>

          <div className="space-y-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0">
            {allProjects.map((project, index) => (
              <div key={index}>
                <div className="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8">
                  <div className="h-0 aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-3">
                    <img
                      className="bg-white shadow-lg object-contain rounded-lg w-3/4 h-3/4 p-6 m-auto"
                      src={project.logo}
                      alt={`${project.name} logo`}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <div className="space-y-4">
                      <div className="text-lg leading-6 font-medium space-y-1">
                        <h2 className="text-2xl">{project.name}</h2>
                        <div className="flex items-center space-x-4">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noreferrer"
                              className="flex items-center w-1/2 justify-center bg-gray-200 space-x-2 rounded-lg shadow-sm p-2 text-center hover:outline outline-purple-800 text-slate-600 hover:text-purple-800 fill-slate-600 hover:fill-purple-800 hover:bg-gray-300 hover:shadow-md transition-all duration-200"
                            >
                              <Github />
                              <p className="font-mono">View code</p>
                            </a>
                          )}
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center w-1/2 justify-center bg-gray-200 space-x-2 rounded-lg shadow-sm p-2 text-center hover:outline outline-purple-800 text-slate-600 hover:text-purple-800 fill-slate-600 hover:fill-purple-800 hover:bg-gray-300 hover:shadow-md transition-all duration-200"
                          >
                            <p className="font-mono">Demo</p>
                            <LinkIcon />
                          </a>
                        </div>
                      </div>
                      <div className="text-lg">
                        <p className="text-gray-500">{project.about}</p>
                      </div>
                    </div>
                    {project.techUsed && (
                      <div className="flex items-center text-gray-600 mt-4 h-8">
                        <p className="pr-2 text-lg">Powered by</p>
                        {project.techUsed.map((TechLogo, index) => (
                          <div key={index} className="w-6 mx-1">
                            <TechLogo className="w-full h-full hover:text-purple-800 duration-300" />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

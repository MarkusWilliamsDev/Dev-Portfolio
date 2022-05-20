import React from "react";
import gifGuesserLogo from "../assets/gifGuesser.webp";
import adobe from "./logos/adobecreativecloud.svg";
import firebase from "./logos/firebase.svg";
import gatsby from "./logos/gatsby.svg";
import github from "./logos/github.svg";
import graphql from "./logos/graphql.svg";
import javascript from "./logos/javascript.svg";
import node from "./logos/nodedotjs.svg";
import python from "./logos/python.svg";
import react from "./logos/react.svg";
import tailwind from "./logos/tailwindcss.svg";
import { ExternalLinkIcon } from "@heroicons/react/solid";

export default function Projects() {
	const allProjects = [
		{
			name: "Gif Guesser",
			github: "https://github.com/MarkusWilliamsDev/Gif-Guesser",
			link: "https://gifguesser.com/",
			about:
				"A web game built with React utilizing the Giphy API. You will be given a gif generated from a random word. Your job is to guess what the word is from just the gif.",
			logo: gifGuesserLogo,
			techUsed: [
				{ name: "ReactJS", logo: react },
				{ name: "TailwindCSS", logo: tailwind },
				{ name: "Firebase", logo: firebase },
			],
		},
	];

	return (
		<div className="bg-gray-50 relative text-center">
			<h3 className="text-indio-900 font-mono font-semibold text-2xl sm:text-4xl p-4">
				My Work
			</h3>
			<div className="">
				{allProjects.map((project) => (
					<div>
						<div className="text-gray-900 font-mono font-semibold text-lg sm:text-2xl p-4">
							{project.name}
						</div>
						<img src={project.logo} className="-top-0" alt="" />

						<a href={project.github} target="_blank" rel="noreferrer">
							GitHub
						</a>
						<a href={project.link} target="_blank" rel="noreferrer">
							Try it out
						</a>
						<div>
							<h1>Tech Used</h1>
							<div>
								{project.techUsed.map((tech) => (
									<div>
										{tech.name}
										<img src={tech.logo} className="w-32" alt="" />
									</div>
								))}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

import React from "react";
import gifGuesserLogo from "../assets/emoji.png";
import react from "./logos/react.svg";
import tailwind from "./logos/tailwindcss.svg";
import firebase from "./logos/firebase.svg";
import github from "./logos/github.svg";
import externalLink from "./logos/externallink.svg";

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

export default function Projects() {
	return (
		<div className="relative bg-gray-50">
			<div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
				<div className="space-y-12">
					<h3 className="text-indigo-900 text-center font-mono font-semibold text-2xl sm:text-4xl p-4">
						My Work
					</h3>

					<div
						role="list"
						className="space-y-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0"
					>
						{allProjects.map((project) => (
							<div key={project.name}>
								<div className="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8">
									<div className="h-0 aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
										<img
											className="bg-white shadow-lg object-contain rounded-lg"
											src={project.logo}
											alt=""
										/>
									</div>
									<div className="sm:col-span-2">
										<div className="space-y-4">
											<div className="text-lg leading-6 font-medium space-y-1">
												<h3>{project.name}</h3>
												<div className="flex space-x-4">
													<a
														href={project.github}
														className="w-8 h-8"
														target="_blank"
														rel="noreferrer"
													>
														<img src={github} alt="" />
													</a>
													<a
														href={project.link}
														className="w-8 h-8"
														target="_blank"
														rel="noreferrer"
													>
														<img src={externalLink} alt="" />
													</a>
												</div>
											</div>
											<div className="text-lg">
												<p className="text-gray-500">{project.about}</p>
											</div>
										</div>
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

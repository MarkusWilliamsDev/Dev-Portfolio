import React from "react";
import ProfilePicture from "../assets/Profile_No_BG.png";
import ParticleBackground from "../ParticleBackground";

export default function Hero() {
	let name = "Markus Williams";
	let nameCharArray = name.split("");
	let keyWord = "detail";
	let keyWordCharArray = keyWord.split("");

	return (
		<div className="relative bg-gray-50/75 overflow-hidden ">
			<ParticleBackground />
			<div className="relative pt-6 pb-16 sm:pb-24">
				<main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
					<div className="text-center">
						<div className="flex justify-center h-32">
							<img src={ProfilePicture} alt="" />
						</div>
						{/* TODO: tidy up reused classes */}
						<h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl cursor-default">
							<span className="block xl:inline">Hi, my name is</span>{" "}
							<div className="flex justify-center">
								{nameCharArray.map((char, index) => {
									return (
										<span
											key={index}
											className="block text-indigo-600 hover:text-purple-700 duration-300 xl:inline"
										>
											{char}
										</span>
									);
								})}
							</div>
						</h1>
						<h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl w-2xl cursor-default">
							<span className="block xl:inline ml-4 mr-4">
								A developer with an eye for{" "}
								<div className="flex justify-center">
									{keyWordCharArray.map((char, index) => {
										return (
											<span
												key={index}
												className="block text-indigo-600 hover:text-purple-700 duration-300 xl:inline"
											>
												{char}
											</span>
										);
									})}
								</div>
							</span>
						</h1>
						<div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
							<div className="rounded-md shadow hover:drop-shadow-md duration-300">
								<a
									href="#projects"
									className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 hover:text-purple-800 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 duration-300"
								>
									View work
								</a>
							</div>
							<div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 hover:drop-shadow-md duration-300">
								<a
									href="#contact"
									className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md  text-white bg-indigo-600 hover:bg-purple-700 md:py-4 md:text-lg md:px-10 duration-300"
								>
									Get in touch
								</a>
							</div>
						</div>
						<div className="mt-16">
							<p className="text-gray-500 text-center">
								I am currently updating this portfolio in NextJS and will be
								adding new projects of things I find cool.
							</p>
							<p className="text-gray-500 text-center mb-10">
								If you would like to see the new portfolio, you can find it
								here:
							</p>
							<a
								href="https://next-portfolio-lovat-nine.vercel.app/"
								className="mt-16 px-4 py-1 border border-transparent text-base font-small rounded-md  text-white bg-indigo-600 hover:bg-purple-700 md:py-4 md:text-lg md:px-10 duration-300"
							>
								New Portfolio
							</a>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}


import React from "react";
import ProfilePicture from "../assets/Profile_Picture.PNG";

export default function Example() {
	return (
		<div className="relative bg-gray-50 overflow-hidden">
			<div className="relative pt-6 pb-16 sm:pb-24">
				<main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
					<div className="text-center">
						<div className="flex justify-center h-32">
							<img src={ProfilePicture} alt="" />
						</div>
						<h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
							<span className="block xl:inline">Hi, my name is</span>{" "}
							<span className="block text-indigo-600 xl:inline">
								Markus Williams
							</span>
						</h1>
						<h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl w-2xl">
							{/* TODO: Fix width */}
							<span className="block xl:inline">
								A developer with an eye for{" "}
								<span className="text-indigo-600">detail</span>
							</span>{" "}
						</h1>
						<div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
							<div className="rou  nded-md shadow">
								<a
									href="/"
									className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
								>
									Get in touch
								</a>
							</div>
							<div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
								<a
									href="/"
									className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
								>
									View work
								</a>
							</div>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}

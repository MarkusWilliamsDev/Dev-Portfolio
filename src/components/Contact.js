import React from "react";
import {
	GrLinkedin as Linkedin,
	GrMail as Mail,
	GrGithub as Github,
} from "react-icons/gr";

export default function Contact() {
	const contactLogos = [
		{
			icon: Linkedin,
			name: "LinkedIn",
			href: "https://www.linkedin.com/in/markus-williams-dev/",
		},
		{
			icon: Mail,
			name: "Email",
			href: "https://www.linkedin.com/in/markus-williams-dev/",
		},
		{
			icon: Github,
			name: "GitHub",
			href: "https://github.com/MarkusWilliamsDev",
		},
	];
	return (
		<div className="bg-gray-50 relative" id="contact">
			<div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
				<h3 className="flex justify-center relative text-gray-900 font-mono font-semibold text-2xl sm:text-4xl p-4">
					Contact Me
				</h3>
				<div className="flex justify-center space-x-8 h-32">
					{/* TODO: Make responsive */}
					{contactLogos.map((contactLogo) => (
						<a href={contactLogo.href} target="_blank" rel="noreferrer">
							<div className="p-6 m-2 sm:m-4 w-36 sm:w-60 bg-gray-100 rounded-lg drop-shadow-md hover:drop-shadow-lg">
								{
									<contactLogo.icon className="w-full h-12 mb-2 text-indigo-600" />
								}
							</div>
						</a>
					))}
				</div>
			</div>
		</div>
	);
}

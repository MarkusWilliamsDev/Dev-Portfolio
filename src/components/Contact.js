import React from "react";
import {
	GrLinkedin as Linkedin,
	GrMail as Mail,
	GrGithub as Github,
	GrChat as Text,
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
			href: "mailto:markuswilliamsdev@gmail.com",
		},
		{
			icon: Github,
			name: "GitHub",
			href: "https://github.com/MarkusWilliamsDev",
		},
		{
			icon: Text,
			name: "Text",
			href: "sms:+17034631373",
		},
	];

	const getMobileOS = () => {
		const ua = navigator.userAgent;
		if (/android/i.test(ua)) {
			return "Android";
		} else if (
			/iPad|iPhone|iPod/.test(ua) ||
			(navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)
		) {
			return "iOS";
		}
		return "";
	};

	return (
		<div className="flex bg-gray-50 relative" id="contact">
			<div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
				<h3 className="text-center text-indigo-900 font-mono font-semibold text-2xl sm:text-4xl p-4">
					Contact Me from your {getMobileOS()} device
				</h3>

				<div className="flex flex-wrap justify-center p-2">
					{/* TODO: Resize & animate cards */}
					{contactLogos.map((contactLogo) => (
						<a href={contactLogo.href} target="_blank" rel="noreferrer">
							<div className="p-6 mx-6 my-4 sm:m-4 w-36 sm:w-60 bg-gray-100 rounded-lg drop-shadow-md hover:drop-shadow-lg text-indigo-600 hover:text-indigo-800 transition-colors duration-200 ">
								{<contactLogo.icon className="w-full h-12 mb-2 fill-current" />}
								<p className="text-center font-medium">{contactLogo.name}</p>
							</div>
						</a>
					))}
				</div>
			</div>
		</div>
	);
}

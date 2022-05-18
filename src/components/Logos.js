import { FaPython as Python } from "react-icons/fa";
import {
	GrGraphQl as GraphQL,
	GrGatsbyjs as GatsbyJS,
	GrNode as NodeJS,
	GrReactjs as ReactJS,
} from "react-icons/gr";
import {
	SiAdobecreativecloud as CreativeCloud,
	SiJavascript as JS,
	SiTailwindcss as Tailwind,
} from "react-icons/si";

export default function Example() {
	const logos = [
		{ icon: JS, name: "JavaScript" },
		{ icon: NodeJS, name: "NodeJS" },
		{ icon: ReactJS, name: "ReactJS" },
		{ icon: GatsbyJS, name: "GatsbyJS" },
		{ icon: GraphQL, name: "GraphQL" },
		{ icon: Python, name: "Python" },
		{ icon: Tailwind, name: "Tailwind" },
		{ icon: CreativeCloud, name: "Adobe" },
	];
	return (
		<div className="bg-gray-50 relative">
			<div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
				<h3 className="flex justify-center text-indigo-900 font-mono font-semibold text-2xl sm:text-4xl p-4">
					Skilled with
				</h3>
				<div className="flex justify-center flex-wrap text-indigo-800 hover:text-indigo-900 transition-color duration-300">
					{logos.map((logo) => (
						<div className="p-6 m-2 sm:m-4 w-36 sm:w-60 bg-gray-100 rounded-lg drop-shadow-md hover:drop-shadow-lg cursor-default">
							{<logo.icon className="w-full h-12 mb-2 " />}
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

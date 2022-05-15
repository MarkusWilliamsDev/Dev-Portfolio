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
		{ icon: GraphQL, name: "GraphQL" },
		{ icon: Python, name: "Python" },
		{ icon: GatsbyJS, name: "GraphQL" },
		{ icon: NodeJS, name: "NodeJS" },
		{ icon: ReactJS, name: "ReactJS" },
		{ icon: JS, name: "JavaScript" },
		{ icon: CreativeCloud, name: "Adobe" },
		{ icon: Tailwind, name: "TailwindCSS" },
	];
	return (
		<div className="bg-gray-50">
			<div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
				<div className="flex justify-center text-gray-900 font-mono font-semibold text-2xl p-4">
					Skilled with
				</div>
				<div className="flex justify-center flex-wrap">
					{logos.map((logo) => (
						<div className="w-xl min-w-xl h-full p-4 m-2 border-2 bg-gray-100 border-transparent rounded-lg drop-shadow-md hover:drop-shadow-lg cursor-default">
							<span className="">{<logo.icon fill="rgb(79, 70, 229)" />}</span>
							<span className="font-mono text-gray-700 text-lg ">
								{logo.name}
							</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

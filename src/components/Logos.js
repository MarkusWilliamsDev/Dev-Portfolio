import { FaPython as Python } from "react-icons/fa";
import {
	GrGraphQl as GraphQL,
	GrGatsbyjs as GatsbyJS,
	GrNode as NodeJS,
	GrReactjs as ReactJS,
	GrJs as JS,
} from "react-icons/gr";
import { SiAdobecreativecloud as CreativeCloud } from "react-icons/si";

export default function Example() {
	const logos = [
		{ icon: GraphQL, name: "GraphQL" },
		{ icon: Python, name: "Python" },
		{ icon: GatsbyJS, name: "GraphQL" },
		{ icon: NodeJS, name: "NodeJS" },
		{ icon: ReactJS, name: "ReactJS" },
		{ icon: JS, name: "JavaScript" },
		{ icon: CreativeCloud, name: "Adobe Creative Cloud" },
	];
	return (
		<div className="bg-gray-50">
			<div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
				<div className="flex justify-center h-full w-full">
					{logos.map((logo) => (
						<div className="w-full h-full">
							<span className="h-full w-1/4">{<logo.icon />}</span>
							<span>{logo.name}</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

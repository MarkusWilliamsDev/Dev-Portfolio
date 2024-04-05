import React from "react";
import Hero from "./components/Hero";
import Logos from "./components/Logos";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
	return (
		<div>
			<Hero />
			<Logos className="bg-slate-300" />
			<Projects />
			<Contact />
		</div>
	);
}


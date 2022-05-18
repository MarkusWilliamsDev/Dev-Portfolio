import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticleBackground() {
	const particlesInit = async (main) => {
		await loadFull(main);
	};

	return (
		<Particles
			id="tsparticles"
			init={particlesInit}
			options={{
				fpsLimit: 30,
				pauseOnOutsideViewport: true,
				interactivity: {
					events: {
						onHover: {
							enable: true,
							mode: "repulse",
						},
						resize: true,
					},
					modes: {
						repulse: {
							distance: 200,
							duration: 0.4,
						},
					},
				},
				particles: {
					color: {
						value: "#000000",
					},
					links: {
						color: "#000000",
						distance: 150,
						enable: true,
						opacity: 0.25,
						width: 1,
					},
					collisions: {
						enable: true,
					},
					move: {
						direction: "none",
						enable: true,
						outModes: {
							default: "bounce",
						},
						random: false,
						speed: 0.8,
						straight: false,
					},
					number: {
						density: {
							enable: true,
							area: 800,
						},
						value: 50,
					},
					opacity: {
						value: 0.5,
					},
					shape: {
						type: "circle",
					},
					size: {
						value: { min: 1, max: 5 },
					},
				},
				detectRetina: true,
			}}
		/>
	);
}

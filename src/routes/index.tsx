import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { WorkExperience } from "@/components/WorkExperience";
import { Books } from "@/components/Books";

export const Route = createFileRoute("/")({ component: App });

function App() {
	return (
		<div className="min-h-screen bg-background">
			<Hero />
			<div id="experience">
				<WorkExperience />
			</div>
			<Books />
		</div>
	);
}

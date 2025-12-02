import { Mail, ArrowDown } from "lucide-react";
import { Github, Linkedin } from "lucide-react";
import { ThemeToggle } from "./ui/theme-toggle";

export function Hero() {
	const scrollToExperience = () => {
		const experienceSection = document.querySelector("#experience");
		experienceSection?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<section className="relative min-h-screen flex items-center justify-center px-4 py-20">
			{/* Theme toggle - fixed position */}
			<div className="fixed top-6 right-6 z-50">
				<ThemeToggle />
			</div>

			{/* Background gradient */}
			<div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />

			{/* Content */}
			<div className="relative max-w-4xl mx-auto text-center space-y-8">
				{/* Greeting */}
				<div className="space-y-2 animate-fade-in">
					<p className="text-primary font-medium text-lg">Hi, I'm</p>
					<h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-foreground">
						Noel Vega
					</h1>
				</div>

				{/* Title */}
				<div className="space-y-4 animate-fade-in-delay-1">
					<h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground/90">
						Software Engineer
					</h2>
					<p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
						Fullstack developer specializing in cloud infrastructure, DevOps
						automation, and building scalable web applications. Experienced in{" "}
						<span className="text-primary font-semibold">Legal Tech</span> with
						a proven track record of delivering high-impact solutions.
					</p>
				</div>

				{/* Key highlights */}
				<div className="flex flex-wrap justify-center gap-4 animate-fade-in-delay-2">
					<div className="px-4 py-2 bg-card border border-border rounded-lg">
						<span className="text-sm font-medium text-foreground">
							Azure & AWS
						</span>
					</div>
					<div className="px-4 py-2 bg-card border border-border rounded-lg">
						<span className="text-sm font-medium text-foreground">
							React & ASP.NET
						</span>
					</div>
					<div className="px-4 py-2 bg-card border border-border rounded-lg">
						<span className="text-sm font-medium text-foreground">
							DevOps & CI/CD
						</span>
					</div>
					<div className="px-4 py-2 bg-card border border-border rounded-lg">
						<span className="text-sm font-medium text-foreground">
							Terraform & Docker
						</span>
					</div>
				</div>

				{/* CTA Buttons */}
				<div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-delay-3">
					<a
						href="mailto:noelvegajr94@gmail.com"
						className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
					>
						<Mail className="w-5 h-5" />
						Get In Touch
					</a>
					<a
						href="https://github.com/noel-vega"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border text-foreground rounded-lg font-medium hover:bg-muted transition-all duration-300"
					>
						<Github className="w-5 h-5" />
						GitHub
					</a>
					<a
						href="https://linkedin.com/in/noelvegajr"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border text-foreground rounded-lg font-medium hover:bg-muted transition-all duration-300"
					>
						<Linkedin className="w-5 h-5" />
						LinkedIn
					</a>
				</div>

				{/* Scroll indicator */}
				<button
					type="button"
					onClick={scrollToExperience}
					className="absolute -bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
					aria-label="Scroll to experience section"
				>
					<ArrowDown className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors" />
				</button>
			</div>
		</section>
	);
}

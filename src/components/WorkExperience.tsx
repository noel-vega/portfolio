import { expieriences } from "@/data/expierences";
import {
	Briefcase,
	Calendar,
	Code2,
	Building2,
	ExternalLink,
} from "lucide-react";
import type { Expierience } from "@/types";

function formatDateRange(dateRange: Expierience["dateRange"]) {
	const formatDate = (date: Date | "Present") => {
		if (date === "Present") return "Present";
		return date.toLocaleDateString("en-US", {
			month: "short",
			year: "numeric",
		});
	};

	return `${formatDate(dateRange.from)} - ${formatDate(dateRange.to)}`;
}

function highlightSkills(text: string, techstack: string[]) {
	// Create a regex pattern that matches any of the tech stack items (case-insensitive)
	// Escape special regex characters in the tech stack items
	const escapedSkills = techstack.map((skill) =>
		skill.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
	);
	const pattern = new RegExp(`\\b(${escapedSkills.join("|")})\\b`, "gi");
	const parts: { text: string; isSkill: boolean }[] = [];
	let lastIndex = 0;

	text.replace(pattern, (match, _p1, offset) => {
		// Add text before the match
		if (offset > lastIndex) {
			parts.push({ text: text.slice(lastIndex, offset), isSkill: false });
		}
		// Add the matched skill
		parts.push({ text: match, isSkill: true });
		lastIndex = offset + match.length;
		return match;
	});

	// Add remaining text
	if (lastIndex < text.length) {
		parts.push({ text: text.slice(lastIndex), isSkill: false });
	}

	return parts.length > 0 ? parts : [{ text, isSkill: false }];
}

function ExperienceCard({ experience }: { experience: Expierience }) {
	return (
		<div className="relative pl-8 pb-12 last:pb-0 group">
			{/* Timeline line */}
			<div className="absolute left-[11px] top-0 bottom-0 w-0.5 bg-border group-last:hidden" />

			{/* Timeline dot */}
			<div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-primary border-4 border-background shadow-lg flex items-center justify-center">
				<div className="w-2 h-2 rounded-full bg-primary-foreground" />
			</div>

			{/* Content card */}
			<div className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
				{/* Header */}
				<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
					<div>
						<h3 className="text-xl font-bold text-foreground flex items-center gap-2">
							<Briefcase className="w-5 h-5 text-primary" />
							{experience.title}
						</h3>
						{experience.company.link ? (
							<a
								href={experience.company.link}
								target="_blank"
								rel="noopener noreferrer"
								className="text-lg font-semibold text-muted-foreground mt-1 inline-flex items-center gap-1.5 hover:text-primary transition-colors group"
							>
								{experience.company.name}
								<ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
							</a>
						) : (
							<p className="text-lg font-semibold text-muted-foreground mt-1">
								{experience.company.name}
							</p>
						)}
						<div className="flex items-center gap-1.5 mt-1">
							<Building2 className="w-3.5 h-3.5 text-muted-foreground/70" />
							<span className="text-sm text-muted-foreground/70">
								{experience.company.industry}
							</span>
						</div>
					</div>
					<div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted px-3 py-1.5 rounded-md whitespace-nowrap">
						<Calendar className="w-4 h-4" />
						{formatDateRange(experience.dateRange)}
					</div>
				</div>

				{/* Tech stack used in this role */}
				{experience.techstack.length > 0 && (
					<div className="mb-4 pb-4 border-b border-border">
						<div className="flex items-center gap-2 mb-2">
							<Code2 className="w-4 h-4 text-primary" />
							<span className="text-sm font-semibold text-muted-foreground">
								Tech Stack
							</span>
						</div>
						<div className="flex flex-wrap gap-2">
							{experience.techstack.map((tech) => (
								<span
									key={tech}
									className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20 hover:bg-primary/20 transition-colors"
								>
									{tech}
								</span>
							))}
						</div>
					</div>
				)}

				{/* Descriptions with highlighted skills */}
				<ul className="space-y-2.5">
					{experience.descriptions.map((desc, idx) => {
						const parts = highlightSkills(desc, experience.techstack);
						return (
							<li
								key={idx}
								className="text-foreground/90 leading-relaxed flex items-start gap-3"
							>
								<span className="text-primary mt-1.5 flex-shrink-0">▸</span>
								<span>
									{parts.map((part, partIdx) => (
										<span
											key={partIdx}
											className={
												part.isSkill
													? "font-semibold text-primary bg-primary/5 px-1 rounded"
													: ""
											}
										>
											{part.text}
										</span>
									))}
								</span>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}

export function WorkExperience() {
	return (
		<section className="max-w-4xl mx-auto px-4 py-16">
			{/* Section header */}
			<div className="mb-12 text-center">
				<h2 className="text-4xl font-bold text-foreground mb-3">
					Work Experience
				</h2>
				<p className="text-muted-foreground text-lg">
					My professional journey and key accomplishments
				</p>
			</div>

			{/* Timeline */}
			<div className="relative">
				{expieriences.map((exp, idx) => (
					<ExperienceCard key={idx} experience={exp} />
				))}
			</div>
		</section>
	);
}

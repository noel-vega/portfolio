import { books } from "@/data/books";
import type { Book } from "@/data/books";
import {
	BookOpen,
	Lightbulb,
	ChevronRight,
	CheckCircle2,
	BookMarked,
} from "lucide-react";
import { useState } from "react";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
} from "@/components/ui/sheet";

function BookListItem({ book, onClick }: { book: Book; onClick: () => void }) {
	return (
		<button
			type="button"
			onClick={onClick}
			className="w-full flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:bg-muted hover:border-primary/30 transition-all duration-200 group text-left relative"
		>
			{/* Book cover thumbnail */}
			<div className="w-16 h-20 bg-muted rounded overflow-hidden flex-shrink-0 border border-border">
				<img
					src={book.cover}
					alt={`${book.name} cover`}
					className="w-full h-full object-cover"
				/>
			</div>

			{/* Book info */}
			<div className="flex-1 min-w-0">
				<div className="flex items-center gap-2">
					<h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">
						{book.name}
					</h3>
					{book.complete ? (
						<span className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-semibold rounded-full whitespace-nowrap">
							Completed
						</span>
					) : (
						<span className="px-2 py-0.5 bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-semibold rounded-full whitespace-nowrap flex items-center gap-1">
							<BookMarked className="w-3 h-3" />
							Reading
						</span>
					)}
				</div>
				<p className="text-sm text-muted-foreground mt-1">
					by {book.authors.join(", ")}
				</p>
			</div>

			{/* Chevron */}
			<ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
		</button>
	);
}

export function Books() {
	const [selectedBook, setSelectedBook] = useState<Book | null>(null);
	const [isOpen, setIsOpen] = useState(false);

	const handleBookClick = (book: Book) => {
		setSelectedBook(book);
		setIsOpen(true);
	};

	return (
		<section className="max-w-4xl mx-auto px-4 py-16">
			{/* Section header */}
			<div className="mb-12 text-center">
				<div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
					<BookOpen className="w-6 h-6 text-primary" />
				</div>
				<h2 className="text-4xl font-bold text-foreground mb-3">Books</h2>
				<p className="text-muted-foreground text-lg max-w-2xl mx-auto">
					Technical books I've studied to deepen my expertise and stay current
					with industry best practices
				</p>
			</div>

			{/* Books list */}
			<div className="space-y-3">
				{books.map((book, idx) => (
					<BookListItem
						key={idx}
						book={book}
						onClick={() => handleBookClick(book)}
					/>
				))}
			</div>

			{/* Book details sheet */}
			<Sheet open={isOpen} onOpenChange={setIsOpen}>
				<SheetContent className="overflow-y-auto sm:max-w-xl">
					{selectedBook && (
						<>
							<SheetHeader>
								<div className="mb-6">
									<div className="w-40 h-52 bg-muted rounded overflow-hidden border border-border mx-auto mb-6 shadow-lg">
										<img
											src={selectedBook.cover}
											alt={`${selectedBook.name} cover`}
											className="w-full h-full object-cover"
										/>
									</div>
									{selectedBook.complete ? (
										<div className="flex items-center justify-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg border border-primary/20 mx-auto w-fit">
											<CheckCircle2 className="w-4 h-4" />
											<span className="text-sm font-semibold">Completed</span>
										</div>
									) : (
										<div className="flex items-center justify-center gap-2 px-4 py-2 bg-amber-500/10 text-amber-600 dark:text-amber-400 rounded-lg border border-amber-500/20 mx-auto w-fit">
											<BookMarked className="w-4 h-4" />
											<span className="text-sm font-semibold">
												Currently Reading
											</span>
										</div>
									)}
								</div>
								<SheetTitle className="text-2xl text-left">
									{selectedBook.name}
								</SheetTitle>
								<SheetDescription className="text-base text-left">
									by {selectedBook.authors.join(", ")}
								</SheetDescription>
							</SheetHeader>

							{/* Key learnings */}
							{selectedBook.learned.length > 0 && (
								<div className="mt-8 space-y-4">
									<div className="flex items-center gap-2">
										<Lightbulb className="w-5 h-5 text-primary" />
										<h3 className="text-lg font-semibold text-foreground">
											Key Learnings
										</h3>
									</div>
									<ul className="space-y-4 pl-2">
										{selectedBook.learned.map((learning, idx) => (
											<li
												key={idx}
												className="text-foreground/90 leading-relaxed flex items-start gap-3 p-3 bg-muted/50 rounded-lg"
											>
												<span className="text-primary mt-1 flex-shrink-0">
													▸
												</span>
												<span>{learning}</span>
											</li>
										))}
									</ul>
								</div>
							)}
						</>
					)}
				</SheetContent>
			</Sheet>
		</section>
	);
}


export type Book = {
  name: string;
  author: string;
  learned: string[];
  cover: string
}

export const books: Book[] = [
  {
    name: "Docker Deep Dive - 4th Edition",
    author: "Nigel Poulton",
    cover: "/docker-deep-dive-4th-edition.jpeg",
    learned: [
      "Understand the fundamentals of container technology and Docker architecture.",
      "Learn to install, configure, and effectively use Docker in real-world scenarios.",
      "Build and manage Docker images and containers for diverse applications.",
      "Deploy and scale multi-container apps with Docker Compose and orchestration tools."
    ]
  }
]

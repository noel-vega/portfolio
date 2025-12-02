
export type Book = {
  name: string;
  authors: string[];
  learned: string[];
  cover: string
  complete: boolean
}

export const books: Book[] = [
  {
    complete: true,
    name: "Docker Deep Dive - 4th Edition",
    authors: ["Nigel Poulton"],
    cover: "/docker-deep-dive-4th-edition.jpeg",
    learned: [
      "Understand the fundamentals of container technology and Docker architecture.",
      "Learn to install, configure, and effectively use Docker in real-world scenarios.",
      "Build and manage Docker images and containers for diverse applications.",
      "Deploy and scale multi-container apps with Docker Compose and orchestration tools."
    ]
  }
  , {
    complete: false,
    name: "Docker In Practice - 2nd Edition",
    authors: ["Ian Miell", "Aidan Sayers"],
    cover: "/Docker-In-Practice-2nd-edition.jpeg",
    learned: []
  }
  , {
    complete: false,
    name: "Network Programming with Go",
    authors: ["Adam Woodbeck"],
    cover: "/network-programming-with-go.jpeg",
    learned: []
  },
]

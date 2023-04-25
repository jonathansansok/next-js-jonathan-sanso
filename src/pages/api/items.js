// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    {
      id: 0,
      title: "Figurita octocat chica",
      price: 100,
      image: "http://localhost:3000/img/hat.webp",
      description: "Lorem ipsum dolor sit amet, consectetur adip"
    },
    {
      id: 1,
      title: "Figurita octocat chica",
      price: 90,
      image: "http://localhost:3000/img/octocat.webp",
      description: "Lorem r sit amet, consectetur adip"
    },
    {
      id: 2,
      title: "Figurita octocat chica",
      price: 160,
      image: "http://localhost:3000/img/octocat.webp",
      description: "Loet, consectetur adip"
    },
    {
      id: 3,
      title: "Figurita octocat chica",
      price: 250,
      image: "http://localhost:3000/img/octocat.webp",
      description: "Loretetur adip"
    },
    {
      id: 4,
      title: "Figurita octocat chica",
      price: 500,
      image: "http://localhost:3000/img/octocat.webp",
      description: "Lorem Lorem Lorem Lorem  ipsum dolor sit amet, consectetur adip"
    },
    
  ])
}

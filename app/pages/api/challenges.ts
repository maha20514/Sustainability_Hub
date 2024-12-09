import type { NextApiRequest, NextApiResponse } from "next";
import { Challenge } from "../../interfaces/Challenge";

const challenges: Challenge[] = [
  {
    id: "1",
    title: "Reduce Plastic Use",
    description: "Avoid using plastic bags for a week.",
    progress: 0,
    badge: "🌱",
  },
  {
    id: "2",
    title: "Plant a Tree",
    description: "Plant a tree in your neighborhood.",
    progress: 0,
    badge: "🌳",
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Challenge[]>
) {
  if (req.method === "GET") {
    res.status(200).json(challenges);
  } else {
    res.status(405).json([]);
  }
}

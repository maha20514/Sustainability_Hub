// components/ChallengesList.tsx
"use client"

import { FC } from "react";
import ChallengeCard from "./ChallengeCard";

const challenges = [
  {
    title: "Plastic Waste Reduction",
    description:
      "Take part in reducing plastic waste by using eco-friendly alternatives and recycling.",
    imageUrl: "/images/gary-chan-YzSZN3qvHeo-unsplash.jpg",
  },
  {
    title: "Tree Planting Initiative",
    description:
      "Join the movement to plant trees in urban areas to help combat deforestation.",
    imageUrl: "/images/rainier-ridao-Gj6w4IasZY0-unsplash.jpg",
  },
  {
    title: "Energy Conservation Challenge",
    description:
      "Reduce energy consumption at home by adopting green practices like switching to LED lights.",
    imageUrl: "/images/mariana-proenca-GXiHwHkIdVs-unsplash.jpg",
  },
];

const ChallengesList: FC = () => {
  return (
    <div className="challengesList">
      {challenges.map((challenge, index) => (
        <ChallengeCard
          key={index}
          title={challenge.title}
          description={challenge.description}
          imageUrl={challenge.imageUrl}
        />
      ))}
    </div>
  );
};

export default ChallengesList;

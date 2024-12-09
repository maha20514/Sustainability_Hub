/* eslint-disable @next/next/no-img-element */
// components/ChallengeCard.tsx
"use client"
import { FC } from "react";
import styles from "../styles/challenges.module.css";

interface ChallengeCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const ChallengeCard: FC<ChallengeCardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className={styles.challengeCard}>
      <img className={styles.challengeImage} src={imageUrl} alt={title} />
      <div className={styles.challengeContent}>
        <h2 className={styles.challengeTitle}>{title}</h2>
        <p className={styles.challengeDescription}>{description}</p>
      </div>
    </div>
  );
};

export default ChallengeCard;

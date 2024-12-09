// components/ChallengeForm.tsx
"use client"

import { FC, useState } from "react";
import styles from "../styles/challenges.module.css";

const ChallengeForm: FC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Challenge Submitted:", { title, description });
  };

  return (
    <div className={styles.formContainer}>
      <h2>Submit Your Own Challenge</h2>
      <form onSubmit={handleSubmit} className={styles.challengeForm}>
        <input
          type="text"
          placeholder="Challenge Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className={styles.inputField}
        />
        <textarea
          placeholder="Challenge Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className={styles.inputField}
        />
        <button type="submit" className={styles.submitButton}>
          Submit Challenge
        </button>
      </form>
    </div>
  );
};

export default ChallengeForm;

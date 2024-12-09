// pages/challenges.tsx

import ChallengeForm from "@/app/components/ChallengeForm";
import ChallengesList from "@/app/components/ChallengesList";


const ChallengesPage = () => {
  return (
    <div>
      <h1 className="pageTitle">Sustainability Challenges</h1>
      <ChallengesList />
      <ChallengeForm />
    </div>
  );
};

export default ChallengesPage;

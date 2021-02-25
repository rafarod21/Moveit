import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/CompleteChallenges.module.css';

const CompleteChallenges: React.FC = () => {
  const { challengesCompleted } = useContext(ChallengesContext);

  return (
      <div className={styles.completeChallengesContainer}>
          <span>Desafios completos</span>
          <span>{challengesCompleted}</span>
      </div>
  );
}

export default CompleteChallenges;
import styles from '../styles/components/Profile.module.css';

const Profile: React.FC = () => {
  return (
      <div className={styles.profileContainer}>
          <img src="https://github.com/rafarod21.png" alt="Rafael Rodrigues" />
          <div>
              <strong>Rafael Rodrigues</strong>
              <p>
                <img src="icons/level.svg" alt="Level"/>
                Level 1
              </p>
          </div>
      </div>
  );
}

export default Profile;
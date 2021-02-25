import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css'

export function Profile() {
    const { level } = useContext(ChallengesContext)

    return (
        <div className={styles.profileContainer} >
            <img src="https://avatars.githubusercontent.com/u/58611772?s=460&u=b663a051348ca2eeca19731e0f4ed89f1a6cd192&v=4" alt="Gutemberg Arrais"/>
            <div>
                <strong>Gutemberg Arrais</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                   Level {level}
                </p>
            </div>
        </div>
    );
}
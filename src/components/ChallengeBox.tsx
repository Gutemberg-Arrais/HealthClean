import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {
    const {activeChallenge, resetChallenge, completeChallenge} = useContext(ChallengesContext)
    const { resetCountdown } = useContext(CountdownContext)

    function handleChallengeSucceeded() {
        completeChallenge()
        resetCountdown()

    }

    function handleChallengeFailed() {
        resetChallenge()
        resetCountdown()
    }

    return (
        <div className={styles.challengeBoxContainer} >
            { activeChallenge ? (
                <div className={styles.challengeActive}> 
                    <header>Ganhe {activeChallenge.amount}</header>

                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`}alt="body"/>
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>
                    <footer>
                        <button type="button" onClick={handleChallengeFailed} className={styles.challengeFailButton} >Falhei</button>
                        <button type="button" onClick={handleChallengeSucceeded} className={styles.challengeSucceededButton} >Completei</button>
                    </footer>
                </div>
            ) : (
                <div className={styles.challengeNotActive} >
                    <strong> Finalize um ciclo para receber desafios </strong>
                    <p> <img src="icons/level-up.svg" alt="Leveu Up"/> Avance de level completando desafios </p>
                </div>
            )
                
            }
        </div>
    ); 
}
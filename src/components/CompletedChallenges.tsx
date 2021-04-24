import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/CompletedChallenges.module.css'

export default function CompletedChallenges(){

    const { challengesCompleted } = useContext(ChallengesContext)

    
    return(
        <div className={styles.completedChallengesContainer}>
            <span><b>Desafios Completos</b></span>
            <span>{challengesCompleted}</span>
        </div>
    )
}
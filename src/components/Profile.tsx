import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/Profile.module.css'

export default function Profile() {

    const { level } = useContext(ChallengesContext)
 
    return(
        <div className={styles.profileContainer}>

            <img src="icons/índice.jpeg" alt="Erick Batista"/>
            <div>
                <strong>Erick Batista</strong>
                <p>
                    <span>Level {level}</span>
                    <img src="icons/level1.svg" alt="level"/> 
                </p>
            </div>
        </div>
    )
}
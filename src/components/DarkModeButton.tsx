import { useState } from 'react'
import styles from '../styles/components/DarkModeButton.module.css'

export default function DarkModeButton() {

    const [darkActive, setDarkActive] = useState(false)

    function useDarkMode(){
        setDarkActive(true)
        if(darkActive === true){
            {styles.global2}
        }
    }

    return(
        <div className={styles.darkContainer}>

                

                    <div>
                        <button type="button"
                        onClick={useDarkMode}>
                        Dark Mode
                        </button>
                    </div>
            
        </div>
    )
}
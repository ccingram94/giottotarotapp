import { QuestionContext } from '../QuestionContext'
import React, { useContext } from 'react'
import styles from '../styles/Question.module.css'

export default function QuestionDisplay() {
    const { question, setQuestion } = useContext(QuestionContext)
        return (
            <div className={styles.container}>
                <h2>Your Question: </h2>
                <p>{ question }</p>
            </div>
        )
    }

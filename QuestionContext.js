
import React, { Component, createContext, useContext, useState } from 'react'

const QuestionContext = createContext();

const QuestionContextProvider = ({ children }) => {
    const [question, setQuestion] = useState('');
    return (
        <QuestionContext.Provider value={{ question, setQuestion }} >
            { children }
        </QuestionContext.Provider>
    )
}

export { QuestionContext, QuestionContextProvider}

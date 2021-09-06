import '../styles/globals.css'
import { Provider } from 'next-auth/client'
import { createContext, useContext, useState } from 'react'
import { QuestionContextProvider } from '../QuestionContext'


function MyApp({ Component, pageProps }) {
  const [question, setQuestion] = useState('');
  return(
    <QuestionContextProvider>
      <Provider session={pageProps.session}>
          <Component {...pageProps} />
      </Provider>
    </QuestionContextProvider>
  ) 
}

export default MyApp

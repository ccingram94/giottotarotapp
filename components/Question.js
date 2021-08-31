import router from 'next/router'
import Link from 'next/link'
import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles({
    basic: {
      padding: '20px',
      margin: '10px',
      backgroundColor: 'black',
      color: 'white',
    },
    flexdisplay: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      width: '50vw',
      margin: '2vh',
    },
    textfield: {
      width: '50vw',
    },
  })

export default function Question() {
    const [ question, setQuestion ] = useState('');
    const classes = useStyles();

    const handleSubmit = (e) => {
        e.preventDefault();
        router.push('/reading');
    }

    return (
        <div className={classes.flexdisplay}>
            <form onSubmit={handleSubmit}>
                <TextField className={classes.textfield} value={question} onChange={(e) => setQuestion(e.target.value)}></TextField>
            </form>
        </div>
    )
}
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
                <h2>enter your question below:</h2>
                <TextField className={classes.textfield} value={question} onChange={(e) => setQuestion(e.target.value)}></TextField>
                <br />
                <Button className={classes.basic} onClick={handleSubmit}>reveal my fate</Button>
            </form>
        </div>
    )
}
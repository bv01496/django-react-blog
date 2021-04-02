import React from 'react'
import {Backdrop,CircularProgress} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

const Loader = () => {
  const classes = useStyles();

  return (
    <>
      <Backdrop className={classes.backdrop} open>
            {console.log('llllll')}
            <CircularProgress color="inherit" />
          </Backdrop>
    </>
  )
}

export default Loader

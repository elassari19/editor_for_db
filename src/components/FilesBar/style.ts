import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    file: {
      width: '100%',
      height: '3rem',
      padding: '1rem 2rem',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      '&button:hover': {
        background: 'red',
      },
    },
    title: {
      padding: '1rem',
    },
    badge: {
      padding: ' .1rem .5rem',
      margin: ' .5rem',
      borderRadius: '.8rem',
      background: '#538c9a',
    },
  })
)

export default useStyles

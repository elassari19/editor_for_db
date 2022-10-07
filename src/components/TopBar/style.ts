import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    select: {
      outline: 'none',
      background: '#0000',
      fontSize: '1rem',
      border: 'none',
      color: 'white',
      padding: '.4rem',
      margin: '.5rem',
    },
    outline: {
      border: '1px solid #fff3',
      borderRadius: '.5rem',
      height: '2.8rem',
      overflow: 'hidden',
    },
    nowebKitAperrance: {
      width: '3rem',
      height: '2.9rem',
      background: '0000',
      WebkitAppearance: 'none',
      outline: 'none',
      color: 'white',
      fontSize: '1.4rem',
      textAlign: 'center',
      borderLeft: '1px solid #fff2',
    },
    button: {
      height: '3rem',
    },
  })
)

export default useStyles

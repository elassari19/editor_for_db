import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    select: {
      outline: 'none',
      background: '#0000',
      fontSize: '1rem',
      border: 'none',
      color: 'white',
      padding: '.4rem .6rem',
      margin: '.5rem',
    },
    option: {
      bottom: '0',
    },
  })
)

export default useStyles

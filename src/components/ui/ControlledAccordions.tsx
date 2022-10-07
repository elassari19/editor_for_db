/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/ban-types */
import { Box, Button, List, ListItem, ListItemIcon, ListItemText, Slide, Theme, Typography } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/styles'
import React from 'react'
import { AiOutlineEye } from 'react-icons/ai'
import { IoIosArrowDown } from 'react-icons/io'
import { useFocusPage } from '../../hooks'

interface IProps {
  value: string
  setValue: (str: string) => void
  data: string[]
  title: string
}

const useStyles = makeStyles((theme: Theme) => createStyles({}))

const ControlledAccordions = ({ value, setValue, data, title }: IProps) => {
  const classes = useStyles()
  const [file, setFile] = useFocusPage('')

  return (
    <Box overflow="scroll">
      <List dense component="div" role="list">
        <Button onClick={() => setValue(value == title ? '' : title)}>
          <IoIosArrowDown size="1.5rem" style={{ margin: '0 .5rem' }} />
          <Typography variant="subtitle2" color="initial">
            {title}
          </Typography>
        </Button>
        {value == title &&
          data.map((item: string, idx: number) => (
            <ListItem key={item} role="listitem" button onClick={() => setFile(String(idx))}>
              <ListItemIcon>
                <AiOutlineEye size="1.5rem" color={idx == Number(file) ? 'white' : 'gray'} />
              </ListItemIcon>
              <ListItemText primary={item} color={Number(file) == idx ? 'white' : 'gray'} />
            </ListItem>
          ))}
      </List>
    </Box>
  )
}

export default ControlledAccordions

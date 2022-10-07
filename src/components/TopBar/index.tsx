/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react-hooks/rules-of-hooks */
import { Box, Button } from '@material-ui/core'
import React from 'react'
import { FiGitCommit } from 'react-icons/fi'

import { useFocusPage, useSelectChange } from '../../hooks'
import { DropDown } from '../'
import useStyles from './style'

const index = () => {
  const classes = useStyles()

  const [projectName, handleChange] = useSelectChange()
  const [mode, handleChangedMode] = useSelectChange()
  const [position, handelPosition] = useFocusPage('bott')

  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      height="4.5rem"
      pl="1rem"
      py=".6rem"
      width="96vw"
    >
      <Box display={'flex'} flexDirection="row">
        <DropDown
          onChange={handleChange}
          projectName={projectName}
          item={['Project name', 'Project 1', 'Project 2', 'Project 3']}
        />
        <Box display="flex" flexDirection="row" className={classes.outline}>
          <DropDown onChange={handleChangedMode} projectName={mode} item={['Development', 'Production']} />
          <Box>
            <DropDown
              onChange={handleChangedMode}
              projectName={mode}
              item={['- -']}
              className={classes.nowebKitAperrance}
            />
          </Box>
        </Box>
        <Box ml=".6rem">
          <Button variant="contained" color="primary" className={classes.button}>
            <FiGitCommit /> <span> Commit (2 files)</span>
          </Button>
        </Box>
      </Box>

      <Box display="flex" flexDirection="row" justifyContent="around">
        <Button onClick={() => handelPosition('left')} color={position == 'left' ? 'default' : 'secondary'}>
          left
        </Button>
        <Button onClick={() => handelPosition('midl')} color={position == 'midl' ? 'default' : 'secondary'}>
          medi
        </Button>
        <Button onClick={() => handelPosition('bott')} color={position == 'bott' ? 'default' : 'secondary'}>
          bott
        </Button>
      </Box>
    </Box>
  )
}

export default index

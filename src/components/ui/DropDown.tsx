/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Box, FormControl, InputLabel, MenuItem } from '@material-ui/core'
import classNames from 'classnames'
import React, { ComponentPropsWithoutRef } from 'react'

import useStyles from './style'

interface IProps extends ComponentPropsWithoutRef<'select'> {
  projectName: string
  item: string[]
}

const DropMenu = ({ projectName, item, ...rest }: IProps) => {
  const classes = useStyles()

  return (
    <Box>
      <select value={projectName} className={classNames(classes.select)} placeholder="Project name" {...rest}>
        {item.map((value: string) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
    </Box>
  )
}

export default DropMenu

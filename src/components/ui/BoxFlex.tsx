import { Box, BoxProps } from '@material-ui/core'
import React, { ReactNode } from 'react'

interface IProps extends BoxProps {
  children: ReactNode
  row?: boolean
}

const BoxFlex = ({ children, row, ...rest }: IProps) => {
  return (
    <Box display="flex" flexDirection={row ? 'row' : 'column'} {...rest}>
      {children}
    </Box>
  )
}

export default BoxFlex

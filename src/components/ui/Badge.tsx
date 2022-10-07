import { Box, BoxProps } from '@material-ui/core'
import React from 'react'

interface IProps extends BoxProps {
  label: string
}

const Badge = ({ label, ...rest }: IProps) => {
  return (
    <Box {...rest} padding=".2rem .6rem" borderRadius=".8rem" marginRight=".6rem">
      {label}
    </Box>
  )
}

export default Badge

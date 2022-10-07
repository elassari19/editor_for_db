/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { BoxProps, Typography } from '@material-ui/core'
import React from 'react'
import { IconType } from 'react-icons'

import BoxFlex from './BoxFlex'

interface IProps extends BoxProps {
  Icon?: IconType
  EndIcon?: IconType
  label?: string
  color?: 'textPrimary' | 'textSecondary'
}

export default function DisabledTabs({ Icon, EndIcon, label, color, ...rest }: IProps) {
  return (
    <BoxFlex row mx=".5rem" padding={'.4rem 0 0'} style={{ cursor: 'pointer' }} {...rest}>
      {Icon && <Icon style={{ margin: '0 .5rem' }} size="1.5rem" color={color == 'textPrimary' ? 'white' : 'gray'} />}
      <Typography style={{ fontWeight: 'bolder', fontSize: '1rem' }} variant="subtitle1" color={color}>
        {label}
      </Typography>
      {EndIcon && (
        <EndIcon style={{ margin: '0 .5rem' }} size="1.5rem" color={color == 'textPrimary' ? 'white' : 'gray'} />
      )}
    </BoxFlex>
  )
}

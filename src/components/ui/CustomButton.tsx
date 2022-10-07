/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Box, BoxProps, Button, Typography } from '@material-ui/core'
import React from 'react'
import { IconType } from 'react-icons'

import Badge from './Badge'
import BoxFlex from './BoxFlex'

interface IProps extends BoxProps {
  Icon?: IconType
  EndIcon?: IconType
  label?: string
  color?: 'textPrimary' | 'textSecondary'
  badge?: string
  badgeColor?: string
  alert?: string
  font?: string
}

const CustomButton = ({ Icon, EndIcon, label, color, badge, badgeColor, alert, font, ...rest }: IProps) => {
  return (
    <BoxFlex
      row
      textAlign="center"
      justifyContent="space-between"
      alignItems="center"
      onClick={() => console.log(label)}
      style={{ cursor: 'pointer' }}
      padding=".5rem .1rem"
      margin=".4rem 0 0"
      {...rest}
    >
      <BoxFlex row mx=".5rem" alignItems="center">
        {Icon && <Icon style={{ margin: '0 .5rem' }} size="1.5rem" color={color == 'textPrimary' ? 'white' : 'gray'} />}
        {badge && <Badge label={badge} bgcolor={badgeColor} />}
        <Typography style={{ fontWeight: 'bolder', fontSize: font }} variant="subtitle1" color={color}>
          {label}
        </Typography>
      </BoxFlex>

      <BoxFlex row alignItems="center">
        {alert && (
          <Box bgcolor="gray" padding=".1rem .5rem" borderRadius=".3rem">
            {alert}
          </Box>
        )}
        {EndIcon && (
          <EndIcon style={{ margin: '0 .5rem' }} size="1.5rem" color={color == 'textPrimary' ? 'white' : 'gray'} />
        )}
      </BoxFlex>
    </BoxFlex>
  )
}

export default CustomButton

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react-hooks/rules-of-hooks */
import { Avatar, Box, Divider, IconButton } from '@material-ui/core'
import { AcUnit, Tune } from '@material-ui/icons'
import React from 'react'

import { listOfIcons } from './constants'
import { IProps } from './types'

const index = ({ handelFocus, focusPage }: IProps) => {
  return (
    <div>
      {/* top icons */}
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
        width="fit-content"
        height="100vh"
        py="1rem"
      >
        <Box display="flex" flexDirection="column" alignItems="center">
          <AcUnit fontSize="large" color="inherit" />

          {/* maping left bar icons */}
          {listOfIcons.map((item: { name: string; Icon?: any }, idx: number) => {
            const { name, Icon } = item
            return name == 'divider' ? (
              <Divider key={idx} variant="middle" light />
            ) : (
              <IconButton
                key={name}
                onClick={() => handelFocus(name)}
                color={focusPage == name ? 'inherit' : 'secondary'}
              >
                <Icon />
              </IconButton>
            )
          })}
        </Box>

        {/* bottom icons */}
        <Box>
          <IconButton onClick={() => handelFocus('Setting')} color={focusPage == 'Setting' ? 'primary' : 'secondary'}>
            <Tune />
          </IconButton>
          <Avatar sizes="small" alt="Remy Sharp" src="" />{' '}
        </Box>
      </Box>
    </div>
  )
}

export default index

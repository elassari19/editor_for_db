/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Box, Button, Typography } from '@material-ui/core'
import React from 'react'
import { IconType } from 'react-icons'
import { IoIosArrowForward } from 'react-icons/io'

import { MapRecursion } from '../../helper'
import { useIsVisible } from '../../hooks'
import typeOfFile from './constant'
import useStyles from './style'

interface IProps {
  focusTab: string
}

type IFile = {
  type: string
  badge?: string
  folder?: IconType
  name: string
  files?: {
    type: string
    badge?: string
    name: string
  }[]
}

const index = ({ focusTab }: IProps) => {
  const classes = useStyles()
  const [folderOneIsVisible, setFolderOneIsVisible] = useIsVisible()

  return (
    <Box height="100%">
      {/* tab title */}
      <Typography variant="h4" className={classes.title}>
        {focusTab}
      </Typography>

      {/* render files */}
      <Box display="flex" flexDirection="column">
        {typeOfFile.map((item: any) => (
          <Box
            key={item.name}
            borderLeft="1px solid #717e8a"
            onClick={() => (item.type == 'folder' ? setFolderOneIsVisible(!folderOneIsVisible) : console.log('isFile'))}
          >
            <Button className={classes.file}>
              {item.badge && <span className={classes.badge}>{item.badge}</span>}
              {item.folder && (
                <Box padding=".2rem .5rem">
                  {' '}
                  <IoIosArrowForward size="1.2rem" color="#717e8a" />{' '}
                  <span>
                    <item.folder size="1.5rem" color="#717e8a" />
                  </span>
                </Box>
              )}
              <span> {item.title}</span>
            </Button>
          </Box>
        ))}
        <MapRecursion
          value={typeOfFile}
          classes={classes}
          folderOneIsVisible={folderOneIsVisible}
          setFolderOneIsVisible={setFolderOneIsVisible}
        />
      </Box>
    </Box>
  )
}

export default index

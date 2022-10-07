/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Box, Button } from '@material-ui/core'
import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'

interface IValue {
  value: { type: string; badge?: string; title?: string; files?: { type: string; badge?: string; title: string }[] }[]
  classes?: any
  setFolderOneIsVisible?: (value: boolean) => void
  folderOneIsVisible?: boolean
}

const MapRecursion = ({ value, classes, setFolderOneIsVisible, folderOneIsVisible }: IValue) => {
  return (
    <Box display="flex" flexDirection="column">
      {value.map((item: any) => {
        console.log(item.type)
        // item.files ? (
        //   item?.files.map((fileItem: any) => (
        //     <Button key={fileItem.name} className={classes.file}>
        //       <span className={classes.badge}>{fileItem.badge}</span> <span>{fileItem.title}</span>
        //     </Button>
        //   ))
        // ) : (
        //   <Box
        //     key={item.name}
        //     borderLeft="1px solid #717e8a"
        //     onClick={() => (item.type == 'folder' ? setFolderOneIsVisible(!folderOneIsVisible) : console.log('isFile'))}
        //   >
        //     <Button className={classes.file}>
        //       {item.badge && <span className={classes.badge}>{item.badge}</span>}
        //       {item.folder && (
        //         <Box padding=".2rem .5rem">
        //           {' '}
        //           <IoIosArrowForward size="1.2rem" color="#717e8a" />{' '}
        //           <span>
        //             <item.folder size="1.5rem" color="#717e8a" />
        //           </span>
        //         </Box>
        //       )}
        //       <span> {item.title}</span>
        //     </Button>
        //   </Box>
        // )

        item.type == 'file' ? (
          <Box
            key={item.title}
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
        ) : (
          <Box
            key={item.title}
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
            <Box paddingLeft="1rem">
              {item?.files?.map((fileItem: any) => {
                console.log(fileItem)
              })}
            </Box>
          </Box>
        )
      })}
    </Box>
  )
}

export default MapRecursion

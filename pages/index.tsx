import { Box, Grid } from '@material-ui/core'
import React from 'react'

import { BoxFlex, ContentArea, FilesBar, LeftBar, TopBar } from '../src/components'
import { useFocusPage } from '../src/hooks'

export const HomePage: React.FC = () => {
  const [focusTab, handelFocusTab] = useFocusPage('Files')

  return (
    <BoxFlex row>
      <LeftBar handelFocus={handelFocusTab} focusPage={focusTab} />
      <Box bgcolor="#23303c">
        <TopBar />

        <BoxFlex row>
          <BoxFlex flex={2}>
            <BoxFlex bgcolor="#3d4b56" height="100vh">
              <FilesBar focusTab={focusTab} />
            </BoxFlex>
          </BoxFlex>

          <BoxFlex flex={8}>
            <ContentArea />
          </BoxFlex>
        </BoxFlex>
      </Box>
    </BoxFlex>
  )
}

export default HomePage

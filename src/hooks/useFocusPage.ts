/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react'
import { IHandelFocus, IUseFocusPage } from './type'

const useFocusPage = (focus: string): IUseFocusPage => {
  const [focusPage, setFocusPage] = useState<string>(focus)

  const handelFocusPage: IHandelFocus = (page: string) => {
    setFocusPage(page)
  }

  return [focusPage, handelFocusPage]
}

export default useFocusPage

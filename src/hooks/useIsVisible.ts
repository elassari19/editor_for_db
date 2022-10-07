/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react'

import { IUseIsVisible } from './type'

const useIsVisible = (): IUseIsVisible => {
  const [projectName, setProjectName] = useState<boolean>(false)
  const handleChange = (value: boolean) => {
    setProjectName(value)
  }

  return [projectName, handleChange]
}

export default useIsVisible

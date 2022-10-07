/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import { IUseHandleChange } from "./type";

const useSelectChange = (): IUseHandleChange => {
  const [projectName, setProjectName] = useState<string>("");
  const handleChange = (event: React.ChangeEvent<{ value: string }>) => {
    setProjectName(event.target.value as string);
  };

  return [projectName, handleChange];
};

export default useSelectChange;

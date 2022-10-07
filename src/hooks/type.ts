export type IHandelFocus = (page: string) => void
export type IUseFocusPage = [string, (page: string) => void]
export type IhandleChange = (event: React.ChangeEvent<{ value: string }>) => void
export type IUseHandleChange = [string, (event: React.ChangeEvent<{ value: string }>) => void]
export type IUseIsVisible = [boolean, (page: boolean) => void]

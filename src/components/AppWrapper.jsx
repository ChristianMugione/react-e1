import { StyledAppWrapper } from "../styles/AppWrapperStyles"

export const AppWrapper = ({children}) => {
  return (
    <StyledAppWrapper>
      {children}
    </StyledAppWrapper>
  )
}
import { DivStyled } from "./styled"

const BackgroundComponent = ({children}) => {
  return (
    <DivStyled>
      {children}
    </DivStyled>
  );
}

export default BackgroundComponent;

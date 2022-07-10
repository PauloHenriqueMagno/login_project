import { Box, withStyles } from "@material-ui/core";

export const DivStyled = withStyles({
  root: {
    background: 'linear-gradient(110deg, #8A2CB6, #5031B8)',
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
})(Box)
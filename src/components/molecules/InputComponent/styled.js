import { styled } from "@material-ui/core";

export const InputStyled = styled('input')({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  color: '#525357',
  fontSize: '1.4rem',
  border: 'none',
  borderBottom: '1px solid #525357',
  padding: '5px 15px 10px',
  cursor: 'pointer',
  boxSizing: 'border-box',

  '&:focus': {
    outline: 'none'
  },  
});

export const PasswordButtonStyled = styled('button')({
  border: 'none',
  width: 'min-content',
  background: 'none',
  color: '#525357',
  cursor: 'pointer',
  borderBottom: '1px solid #525357',
});

export const DivRowStyled = styled('div')({
  display: 'flex',
  flexDirection: 'row',
});

export const DivStyled = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  width: '80%',
});
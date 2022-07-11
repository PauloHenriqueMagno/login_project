import { styled } from "@material-ui/core";

export const DivStyled = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  marginRight: '10px',
  gap: '20px',
})

export const ImgStyled = styled('img')({
  width: '13%',
  height: 'auto',
})

export const HOneStyled = styled('h1')({
  color: '#383838',
  fontWeight: '500',
  fontSize: '2.5rem'
})
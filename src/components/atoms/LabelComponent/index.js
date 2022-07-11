import { styled } from '@material-ui/core';

const LabelComponent = styled('label')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  height: 'max-content',
  width: 'max-content',
  margin: '0 0 0 15px',
  color: '#525357',
  fontSize: '1.4rem',
  gap: '3px',
  position: 'absolute',
  cursor: 'pointer',

  '&.hidden': {
    display: 'none'
  }
});

export default LabelComponent;

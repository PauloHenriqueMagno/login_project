import { withStyles, Box } from '@material-ui/core';

const WhiteBoxComponent = withStyles({
  root: {
    background: '#FFFFFF',
    width: '90%',
    height: 'max-content',
    borderRadius: '15px',
    padding: '70px 2px 40px',
    maxWidth: '550px',
    gap: '15px'
  }
})(Box);

export default WhiteBoxComponent;

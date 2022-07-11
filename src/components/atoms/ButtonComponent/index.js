import { Button, withStyles } from "@material-ui/core";

const ButtonComponent = withStyles({
  root: {
    background: '#8A2CB6',
    boxSizing: 'border-box',
    width: '60%',
    padding: '10px',
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 700,
    fontSize: '1.2rem',
    textTransform: 'capitalize',
    borderRadius: '30px',
    margin: 'auto',

    '&:hover': {
      filter: 'brightness(80%)',
      background: '#8A2CB6',
    },

    '&:active': {
      filter: 'brightness(120%)',
    },

    '&.outlined': {
      background: '#FFFFFF',
      border: '1px solid #8A2CB6',
      color: '#8A2CB6',

      '&:hover': {
        filter: 'brightness(80%)',
        background: '#FFFFFF',
      },
      
      '&:active': {
        filter: 'brightness(120%)',
      },  
    },
  },
})(Button);

export default ButtonComponent;

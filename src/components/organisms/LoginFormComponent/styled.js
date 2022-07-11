import { styled } from '@material-ui/core';

import { Link } from 'react-router-dom';

export const DivButtonsStyled = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    margin: '30px 0 0 0',
    gap: '15px',
});

export const RedirectStyled = styled(Link)({
    border: 'none',
    background: 'none',
    color: '#8A2CB6',
    textDecorationColor: '#8A2CB6',
    textDecorationLine: '1px',
    textDecorationStyle: 'solid',
    margin: 'auto',
});

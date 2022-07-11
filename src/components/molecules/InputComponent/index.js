import { useEffect, useState } from 'react';

import { VisibilityOffOutlined, VisibilityOutlined  } from '@material-ui/icons';

import { LabelComponent } from '../../atoms';

import {
  InputStyled,
  DivStyled,
  PasswordButtonStyled,
  DivRowStyled
} from './styled';

const InputComponent = ({
  icon,
  label,
  setState = (value) => {},
  state = '',
  type = 'text',
  error,
  register
}) => {
  const [hideLabel, setHideLabel] = useState(false);
  const [currentValue, setCurrentValue] = useState('');
  const [hidePassword, setHidePassword] = useState(true);

  const setOnChange = (value) => {
    setCurrentValue(value);
    setState(value);
  };

  useEffect(()=> {
    if (!!state || !!currentValue){
      setHideLabel(true)
    }
  }, [state, currentValue])

  return (
    <DivStyled >
      <LabelComponent
        className={hideLabel? 'hidden': ''}
        htmlFor={label}
      >
        {icon}{label}
      </LabelComponent>

      <DivRowStyled>
        <InputStyled
          id={label}
          onFocus={() => setHideLabel(true)}
          defaultValue={state}
          onBlurCapture={() => setHideLabel(currentValue.length !== 0)}
          onChangeCapture={(e) => setOnChange(e.currentTarget.value)}
          type={hidePassword? type: 'text'}
          {...register}
        />

        {type === 'password' && (
          <PasswordButtonStyled
            type='button'
            onClick={() => setHidePassword(e => !e)}
          >
            {
              hidePassword? (
                <VisibilityOutlined fontSize='large' />
                ):(
                <VisibilityOffOutlined fontSize='large' /> 
              )
            }
          </PasswordButtonStyled>
        )}
      </DivRowStyled>
      {error}
    </DivStyled>
  )
}

export default InputComponent;

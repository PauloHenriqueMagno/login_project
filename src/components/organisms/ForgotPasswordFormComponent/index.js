import { EmailOutlined } from '@material-ui/icons';

import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { useLoginContext } from '../../../providers/Login';

import {
  WhiteBoxComponent,
  FormComponent,
  TextComponent,
  ButtonComponent
} from '../../atoms';

import {
  LogoComponent,
  InputComponent
} from '../../molecules';

import { 
  DivButtonsStyled,
  TextPurpleStyled
} from './styled';

const ForgotPasswordFormComponent = () => {
  const { email, setEmail } = useLoginContext();

  const navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup.string().email('Insira um e-mail valido').required('E-mail é obrigatório')
  })
  
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitFunction = (data) => {
    toast.success('Enviado com sucesso!')
  }

  return (
    <WhiteBoxComponent>
      <FormComponent onSubmit={handleSubmit(submitFunction)}>
        <LogoComponent />

        <TextPurpleStyled>
          Recuperar senha
        </TextPurpleStyled>

        <TextComponent>
          Informe seu e-mail e enviaremos um código <br />
          de confirmalção para redefinir sua senha
        </TextComponent>

        <InputComponent
          label='E-mail'
          icon={<EmailOutlined fontSize='medium' />}
          register={register('email')}
          state={email}
          setState={setEmail}
          error={errors.email?.message}
        />

        <DivButtonsStyled>
          <ButtonComponent
            type='submit'
          >
            Enviar
          </ButtonComponent>

          <ButtonComponent
            className='outlined'
            type='button'
            onClick={() => navigate('/')}
          >
            Voltar
          </ButtonComponent>
        </DivButtonsStyled>
      </FormComponent>
    </WhiteBoxComponent>
  )
}

export default ForgotPasswordFormComponent;

import {
  LockOpenOutlined,
  EmailOutlined,
} from '@material-ui/icons';

import { toast } from 'react-toastify';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { useLoginContext } from '../../../providers/Login';

import {
  TextComponent,
  WhiteBoxComponent,
  ButtonComponent,
  FormComponent
} from '../../atoms';

import {
  LogoComponent,
  InputComponent
} from '../../molecules';

import {
  DivButtonsStyled,
  RedirectStyled,
} from './styled';

const LoginFormComponent = () => {
  const { email, setEmail } = useLoginContext();

  const schema = yup.object().shape({
    email: yup.string().email('Insira um e-mail valido').required('E-mail é obrigatório'),
    password: yup.string().required('Insira sua senha'),
  })
  
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitFunction = (data) => {
    toast.success('Autenticado com sucesso!');
  }

  return (
    <WhiteBoxComponent>
      <FormComponent onSubmit={handleSubmit(submitFunction)}>
        <LogoComponent />
        <TextComponent>Preencha os campos e efetue o login</TextComponent>
        <InputComponent
          label='E-mail'
          icon={<EmailOutlined fontSize='medium' />}
          register={register('email')}
          state={email}
          setState={setEmail}
          error={errors.email?.message}
        />

        <InputComponent
          icon={<LockOpenOutlined fontSize='medium' />}
          label='Senha'
          register={register('password')}
          error={errors.password?.message}
          type='password'
        />
        
        <DivButtonsStyled>
          <ButtonComponent
            type='submit'
          >
            Entrar
          </ButtonComponent>

          <RedirectStyled to="/forgot-password">
            Esqueci minha senha
          </RedirectStyled>
        </DivButtonsStyled>
      </FormComponent>
    </WhiteBoxComponent>
  );
}

export default LoginFormComponent;

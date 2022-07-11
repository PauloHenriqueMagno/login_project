import LogoIcon from '../../../assets/images/balao.png'
import { DivStyled, HOneStyled, ImgStyled } from './styled';

const LogoComponent = () => {
  return (
    <DivStyled>
      <ImgStyled src={LogoIcon} alt='Logo' />
      <HOneStyled>iManage</HOneStyled>
    </DivStyled>
  );
}

export default LogoComponent;

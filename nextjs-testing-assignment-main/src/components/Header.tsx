import Image from 'next/image';
import { StyledHeader } from './LayoutComponents';

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Image src="/assets/logo.svg" width={200} height={35} alt="Prague Labs logo" />
    </StyledHeader>
  );
}

export default Header;
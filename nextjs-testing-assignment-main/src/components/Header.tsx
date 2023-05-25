import Image from 'next/image';
import { StyledHeader } from './LayoutComponents';

export default function Header() {
  return (
    <StyledHeader>
      <Image src="/assets/logo.svg" width={200} height={35} alt="Prague Labs logo" />
    </StyledHeader>
  );
}

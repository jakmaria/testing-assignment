import Image from 'next/image';
import styled from 'styled-components';

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Image src="/assets/logo.svg" width={200} height={35} alt="Prague Labs logo" />
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  padding: 20px 6% 20px 6%;
  @media (max-width: 400px) {
    display: flex;
    justify-content: center;
  }
`;

export default Header;

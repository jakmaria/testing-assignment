import { ChangeEvent, useState } from 'react';
import Image from 'next/image';
import { InstantBookToggleProps } from '../../interfaces';
import styled from 'styled-components';

const InstantBookToggle: React.FC<InstantBookToggleProps> = ({
  isInstantBookable,
  setIsInstantBookable,
}) => {
  const [selectedOption, setSelectedOption] = useState<boolean>(isInstantBookable);

  const handleSelectedOption = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value === 'Ano';
    setSelectedOption(value);
    setIsInstantBookable(value);
  };

  return (
    <StyledInstantBookToggle>
      <div className="heading">
        <h1>Okamžitá rezervace</h1>
        <Image src="/assets/blesk.svg" width={20} height={20} alt="lightning" />
      </div>
      <DropdownToggle value={selectedOption ? 'Ano' : 'Ne'} onChange={handleSelectedOption}>
        <option value="Ano">Ano</option>
        <option value="Ne">Ne</option>
      </DropdownToggle>
    </StyledInstantBookToggle>
  );
};

const StyledInstantBookToggle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 15%;
  height: 85px;
  padding-top: 20px;
  padding-bottom: 20px;

  @media (max-width: 400px) {
    padding: 1% 4% 30% 4%;
    width: 55%;
  }

  .heading {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1%;
    width: 100%;

    @media (max-width: 400px) {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 8%;
    }
  }

  h1 {
    font-size: 1rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    color: #9c8c8c;
    opacity: 1;
    font-family: 'Roboto', sans-serif;
    font-weight: normal;
  }

  h1 img {
    width: 1rem;
    height: 1rem;
    margin-right: 4px;
  }

  h2 {
    margin-top: 8px;
    font-family: 'Roboto', sans-serif;
    font-weight: normal;
  }
`;

const DropdownToggle = styled.select`
  padding: 13px;
  border: 2px solid #edeae3;
  border-radius: 8px;
  background-color: white;
  color: #1f2244;
  font-size: 1rem;
  cursor: pointer;
  height: 48px;
  width: 100%;
  appearance: none;
  background-image: url('/assets/arrow.svg');
  background-repeat: no-repeat;
  background-position: right 8px center;
  background-size: 24px;
`;

export default InstantBookToggle;

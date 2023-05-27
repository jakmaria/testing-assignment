import { ChangeEvent, useState } from 'react';
import { DropdownToggle, StyledInstantBookToggle } from './LayoutComponents';
import Image from 'next/image';
import { InstantBookToggleProps } from '../../interfaces';

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

export default InstantBookToggle;

import { ChangeEvent, useState } from 'react';
import { DropdownToggle, StyledInstantBookToggle } from './LayoutComponents';
import Image from 'next/image';

export default function InstantBookToggle() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Ano');

  const handleSelectedOption = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
    setIsOpen(false);
  };

  return (
    <StyledInstantBookToggle>
      <div className="heading">
        <h1>Okamžitá rezervace</h1>
        <Image src="/assets/blesk.png" width={16} height={16} alt="lightning" />
      </div>
      <DropdownToggle value={selectedOption} onChange={handleSelectedOption}>
        <option value="Ano">Ano</option>
        <option value="Ne">Ne</option>
      </DropdownToggle>
    </StyledInstantBookToggle>
  );
}
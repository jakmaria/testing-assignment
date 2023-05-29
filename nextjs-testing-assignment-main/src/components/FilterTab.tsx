import styled from 'styled-components';
import { FilterTabProps } from '../../interfaces';
import InstantBookToggle from './InstantBookToggle';
import PriceSlider from './PriceSlider';
import VanTypes from './VanTypes';

const FilterTab: React.FC<FilterTabProps> = ({
  priceRange,
  setPriceRange,
  selectedTypes,
  setSelectedTypes,
  isInstantBookable,
  setIsInstantBookable,
}) => {
  return (
    <StyledFilterTab>
      <PriceSlider priceRange={priceRange} setPriceRange={setPriceRange} />
      <VanTypes selectedTypes={selectedTypes} setSelectedTypes={setSelectedTypes} />
      <InstantBookToggle
        isInstantBookable={isInstantBookable}
        setIsInstantBookable={setIsInstantBookable}
      />
    </StyledFilterTab>
  );
};

const StyledFilterTab = styled.div`
  display: flex;
  gap: 1rem;
  border-top: 2px solid #edeae3;
  border-bottom: 2px solid #edeae3;
  padding: 0px 6% 0px 6%;

  @media (max-width: 400px) {
    display: flex;
    flex-direction: column;
    padding: 1% 1% 1% 1%;
    justify-content: center;
  }
`;

export default FilterTab;

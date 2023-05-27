import { FilterTabProps } from '../../interfaces';
import InstantBookToggle from './InstantBookToggle';
import { StyledFilterTab } from './LayoutComponents';
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

export default FilterTab;

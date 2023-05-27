import InstantBookToggle from './InstantBookToggle';
import { StyledFilterTab } from './LayoutComponents';
import PriceSlider from './PriceSlider';
import VanTypes from './VanTypes';

export default function FilterTab() {
  return (
    <StyledFilterTab>
      <PriceSlider />
      <VanTypes />
      <InstantBookToggle />
    </StyledFilterTab>
  );
}

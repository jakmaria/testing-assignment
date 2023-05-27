import { useState, useEffect } from 'react';
import { PriceRangeContainer, StyledPriceSlider, ValueSpan, ValuesDiv } from './LayoutComponents';
import Slider from 'react-slider';
import { PriceSliderProps } from '../../interfaces';

const MIN = 1200;
const MAX = 10000;
const PriceSlider: React.FC<PriceSliderProps> = ({ priceRange, setPriceRange }) => {
  const [values, setValues] = useState([MIN, MAX]);

  useEffect(() => {
    setValues(priceRange);
  }, [priceRange]);

  return (
    <StyledPriceSlider>
      <PriceRangeContainer>
        <h1>Cena za den</h1>
        <Slider
          className="slider"
          onChange={(values) => {
            setValues(values as [number, number]);
            setPriceRange(values as [number, number]);
          }}
          value={values}
          min={MIN}
          max={MAX}
          step={100}
        />
        <ValuesDiv>
          <ValueSpan>
            <span>{values[0]}</span>
            <span className="currency">Kč</span>
          </ValueSpan>
          <ValueSpan>
            <span>{values[1]}</span>
            <span className="currency">Kč</span>
          </ValueSpan>
        </ValuesDiv>
      </PriceRangeContainer>
    </StyledPriceSlider>
  );
};
export default PriceSlider;

import { useState, useEffect } from 'react';
import { PriceRangeContainer, StyledPriceSlider, ValueSpan, ValuesDiv } from './LayoutComponents';
import Slider from 'react-slider';

const MIN = 1200;
const MAX = 10000;

export default function PriceSlider() {
  const [values, setValues] = useState([MIN, MAX]);
  console.log('values', values);

  useEffect(() => {
    console.log(values);
  }, [values]);

  return (
    <StyledPriceSlider>
      <PriceRangeContainer>
        <h1>Cena za den</h1>
        <Slider
          className="slider"
          onChange={setValues}
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
}

import { useState, useEffect } from 'react';
import Slider from 'react-slider';
import { PriceSliderProps } from '../../interfaces';
import styled from 'styled-components';

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

const StyledPriceSlider = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 2px solid #edeae3;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-right: 10px;
  width: 27%;

  @media (max-width: 400px) {
    padding: 1% 2% 1% 4%;
    width:95%;
    border-right: none;
  }

  h1 {
    font-size: 16px;
    color: var(--dark-grey);
    text-align: left;
    letter-spacing: 0px;
    color: #9c8c8c;
    opacity: 1;
    margin-bottom: 30px;
    font-family: 'Roboto', sans-serif;
    font-weight: normal;
  }

  .slider {
    width: 100%;
    height: 4px;
    background-color: #edeae3;
    border-radius: 2px;
    margin-bottom:32px;
  }

  .slider .thumb{
    width: 24px;
    height:24px;
    cursor: grab;
    background:#119383; 
    border-radius: 50%;
    border: 2px solid #119383:
  }
  .slider .thumb-0, .thumb-1{
    top:-10px;
  }

  .slider .track-1{
    height: 4px;
    background:#119383; 
  }
`;

const ValuesDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ValueSpan = styled.span`
  border: 2px solid #edeae3;
  border-radius: 8px;
  padding: 0.5rem;
  width: 48%;
  display: flex;
  justify-content: space-between;

  .currency {
    color: #9c8c8c;
  }
`;

const PriceRangeContainer = styled.div``;

export default PriceSlider;

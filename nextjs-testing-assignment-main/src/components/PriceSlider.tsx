import { useState } from 'react';
import { StyledPriceSlider } from './LayoutComponents';

export default function PriceSlider() {
  const [minValue, setMinValue] = useState('');
  const [maxValue, setMaxValue] = useState('');

  const handleMinValueChange = (event) => {
    setMinValue(event.target.value);
  };

  const handleMaxValueChange = (event) => {
    setMaxValue(event.target.value);
  };


  return (
    <StyledPriceSlider>
      <h1>Cena za den</h1>
      <p>slideeeer</p>
      <div className="priceInputs">
        <div>
          <span>Min</span>
          <input onChange={(e) => setMinValue(e.target.value)} type="number" value={minValue} />
        </div>
        <div>
          <span>Max</span>
          <input onChange={(e) => setMaxValue(e.target.value)} type="number" value={maxValue} />
        </div>
      </div>
      {/* Slider */}
      <div className="mb-4">
        <div className='slider relative h-1 rounded-md bg-gray-300'>

        </div>
        <div className="range-input relative">
          <input
            type="range"
            value={minValue}
            className="range-min absolute w-full -top-1 h-1 bg-transparent appearance-none pointer-events-none"
          />
          <input
            type="range"
            value={maxValue}
            className="range-max absolute w-full -top-1 h-1 bg-transparent appearance-none pointer-events-none"
          />
        </div>
      </div>
      <ul>
        <li>Lowest price</li>
        <li>Highest price</li>
      </ul>
    </StyledPriceSlider>
  );
}

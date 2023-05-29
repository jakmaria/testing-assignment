import { useState } from 'react';
import VanTile from './VanTile';
import { IData } from '../../interfaces';
import styled from 'styled-components';

const VanList: React.FC<{
  data: IData;
  priceRange: [number, number];
  selectedTypes: string[];
  isInstantBookable: boolean;
}> = ({ data, priceRange, selectedTypes, isInstantBookable }) => {
  const [displayCount, setDisplayCount] = useState(6);

  const filteredData = data.items.filter((item) => {
    const isWithinPriceRange = item.price >= priceRange[0] && item.price <= priceRange[1];
    const isSelectedType = selectedTypes.length === 0 || selectedTypes.includes(item.vehicleType);
    const isBookable = !isInstantBookable || (isInstantBookable && item.instantBookable);

    return isWithinPriceRange && isSelectedType && isBookable;
  });

  const handleLoadMore = () => {
    setDisplayCount(displayCount + 6);
  };

  return (
    <VanListWrapper>
      <StyledVanList>
        {filteredData.slice(0, displayCount).map((van) => (
          <VanTile key={van.id} van={van} />
        ))}
      </StyledVanList>
      {filteredData.length > displayCount && <button onClick={handleLoadMore}>Načíst další</button>}
    </VanListWrapper>
  );
};

const StyledVanList = styled.div`
  padding: 2.5% 6% 15% 6%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2%;
  padding-bottom: 5%;

  @media (max-width: 400px) {
    display: flex;
    flex-direction: column;
    padding: 7% 5% 11% 5%;
    gap: 1.7rem;
  }
`;

const VanListWrapper = styled.div`
  display: flex;
  flex-direction: column;

  button {
    bottom: 10px;
    justify-self: center;
    align-self: center;
    border-radius: 8px;
    border: #119383;
    background-color: #119383;
    color: white;
    margin-top: auto;
    margin-bottom: 2%;
    min-height: 3rem;
    width: 14vw;
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 900;
    line-height: 1rem;

    @media (max-width: 400px) {
      width: 40%;
      margin-bottom: 10%;
    }
  }
  button:hover {
    cursor: pointer;
  }
`;

export default VanList;

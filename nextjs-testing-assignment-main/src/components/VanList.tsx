import { FC, useState } from 'react';
import { StyledVanList, VanListWrapper } from './LayoutComponents';
import VanTile from './VanTile';
import { IData, IProps } from '../../interfaces';

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

export default VanList;

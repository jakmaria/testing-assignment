import Image from 'next/image';
import { StyledVanTile, VanFeatures, VanInfo } from './LayoutComponents';
import { IVanTileProps } from '../../interfaces';
import { useState } from 'react';

const VanTile: React.FC<IVanTileProps> = ({ van }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(1);
  //Most of the pictures didnt get displayed at index 0, so I went for the safer option

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % van.pictures.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((currentImageIndex - 1 + van.pictures.length) % van.pictures.length);
  };

  const currentImage =
    van.pictures.length > 0 ? van.pictures[currentImageIndex] : '/assets/van.png';

  const getCzechVehicleType = (vehicleType: string) => {
    switch (van.vehicleType) {
      case 'Intergrated':
        return 'Integrál';
      case 'BuiltIn':
        return 'Vestavba';
      case 'Alcove':
        return 'Přívěs';
      default:
        return vehicleType;
    }
  };

  return (
    <StyledVanTile>
      <div className="image-carousel">
        <button className="prev" onClick={prevImage}></button>
        <Image src={currentImage} width={450} height={230} alt="Van image" />
        <button className="next" onClick={nextImage}></button>
      </div>
      <VanInfo>
        <h2>{getCzechVehicleType(van.vehicleType)}</h2>
        <h3>{van.name}</h3>
        <VanFeatures>
          <h4 className='location'>{van.location}</h4>
          <div className="equipment">
            <Image src="/assets/Icon-seats.svg" width={20} height={20} alt="lightning" />
            <p>{van.passengersCapacity}</p>

            <Image src="/assets/Icon-Bed.svg" width={20} height={20} alt="lightning" />
            <p>{van.sleepCapacity}</p>

            {van.toilet && (
              <Image src="/assets/Icon-Toilet.svg" width={20} height={20} alt="Toilet" />
            )}
            {van.shower && (
              <Image src="/assets/Icon-Shower.svg" width={20} height={20} alt="Shower" />
            )}
          </div>
        </VanFeatures>
        <div className="price">
          <span className="priceFrom">Cena od</span>
          <div>
            <span>{van.price} Kč/den</span>
            {van.instantBookable && (
              <Image id="instant" src="/assets/blesk.svg" width={20} height={20} alt="lightning" />
            )}
          </div>
        </div>
      </VanInfo>
    </StyledVanTile>
  );
};

export default VanTile;

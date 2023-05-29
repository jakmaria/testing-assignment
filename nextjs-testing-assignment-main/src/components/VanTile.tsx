import Image from 'next/image';
import { IVanTileProps } from '../../interfaces';
import { useState } from 'react';
import styled from 'styled-components';

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
          <h4 className="location">{van.location}</h4>
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

const StyledVanTile = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #edeae3;
  border-radius: 8px;

  .image-carousel img {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    object-fit: cover;
    width: 100%;
  }

  .image-carousel {
    position: relative;

    button {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      z-index: 1;
      background-color: rgba(255, 255, 255, 0.15);
      border: none;
      width: 25px;
      height: 15px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background-color 0.3s ease;
      box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);

      &:hover {
        background-color: rgba(255, 255, 255, 0.5);
      }

      &:before {
        content: '';
        display: block;
        width: 0;
        height: 0;
        border-top: 7px solid transparent;
        border-bottom: 7px solid transparent;
      }

      &.next {
        right: 7px;

        &:before {
          border-left: 7px solid black;
        }
      }

      &.prev {
        left: 7px;

        &:before {
          border-right: 7px solid black;
        }
      }
    }
  }
`;

const VanInfo = styled.div`
  padding: 1% 4% 4% 4%;

  h2 {
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 0.8rem;
    text-transform: uppercase;
    color: #ff5e55;
    letter-spacing: px;
    line-height: 0.8rem;
  }
  h3 {
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 1.5rem;
    margin: 0 0 2% 0;
  }

  .price {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;

    .priceFrom {
      color: #9c8c8c;
      align-self: end;
    }
    div {
      display: flex;
      align-items: center;
    }
  }
`;

const VanFeatures = styled.div`
  border-top: 2px solid #edeae3;
  border-bottom: 2px solid #edeae3;
  display: flex;
  flex-direction: column;

  .equipment {
    display: flex;
    justify-content: flex-start;
    gap: 2%;
    padding: 0.3rem;
    padding-top: 0;
    margin-top: 0;
  }

  .location {
    font-family: 'Roboto', sans-serif;
    font-weight: normal;
    color: #1f2244;
    margin: 0;
    padding: 2% 0% 0% 0%;
  }
`;

export default VanTile;

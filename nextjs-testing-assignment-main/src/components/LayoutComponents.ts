import styled from 'styled-components';

export const StyledPriceSlider = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 2px solid #edeae3;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-right: 10px;
  width: 27%;

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

export const PriceRangeContainer = styled.div``;

export const ValuesDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ValueSpan = styled.span`
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

export const StyledVanTypes = styled.div`
  border-right: 2px solid #edeae3;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-right: 15px;
  width: 57%;

  h1 {
    font-size: 1rem;
    color: #1f2244;
    text-align: left;
    letter-spacing: 0px;
    color: #9c8c8c;
    opacity: 1;
    margin-bottom: 16px;
    font-family: 'Roboto', sans-serif;
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 2%;
  }

  li {
    width: 25%;
    min-height: 40%;
    border: 2px solid #edeae3;
    border-radius: 8px;
    padding: 8px 15px 0px 10px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
  }

  li:hover {
    border-color: #119383;
  }

  li.selected {
    border-color: #119383;
  }

  h3 {
    color: #1f2244;
    font-size: 1rem;
    margin-top: 0;
    margin-bottom: 4px;
    font-family: 'Roboto', sans-serif;
    font-weight: normal;
  }

  h4 {
    color: #9c8c8c;
    font-size: 0.8rem;
    margin-top: 4px;
    font-family: 'Roboto', sans-serif;
    font-weight: normal;
  }
`;

export const StyledFilterTab = styled.div`
  display: flex;
  gap: 1rem;
  border-top: 2px solid #edeae3;
  border-bottom: 2px solid #edeae3;
  padding: 0px 6% 0px 6%;
`;

export const StyledInstantBookToggle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 15%;
  height: 85px;
  padding-top: 20px;
  padding-bottom: 20px;

  .heading {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1%;
    width: 100%;
  }

  h1 {
    font-size: 1rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    color: #9c8c8c;
    opacity: 1;
    font-family: 'Roboto', sans-serif;
    font-weight: normal;
  }

  h1 img {
    width: 1rem;
    height: 1rem;
    margin-right: 4px;
  }

  h2 {
    margin-top: 8px;
    font-family: 'Roboto', sans-serif;
    font-weight: normal;
  }
`;

export const DropdownToggle = styled.select`
  padding: 13px;
  border: 2px solid #edeae3;
  border-radius: 8px;
  background-color: white;
  color: #1f2244;
  font-size: 1rem;
  cursor: pointer;
  height: 48px;
  width: 100%;
  appearance: none;
  background-image: url('/assets/arrow.svg');
  background-repeat: no-repeat;
  background-position: right 8px center;
  background-size: 24px;
`;

export const StyledHeader = styled.div`
  padding: 20px 6% 20px 6%;
`;

export const StyledVanTile = styled.div`
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

export const VanInfo = styled.div`
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

export const VanFeatures = styled.div`
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

export const StyledVanList = styled.div`
  padding: 35px 6% 20px 6%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2%;
  padding-bottom: 40px;
`;

export const VanListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  button {
    position: static;
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
  }
  button:hover {
    cursor: pointer;
  }
`;

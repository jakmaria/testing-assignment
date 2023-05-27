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
  width: 60%;

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
    height: 88px;
    border: 2px solid #edeae3;
    border-radius: 8px;
    padding: 8px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    padding-right: 25px;
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
  padding: 0px 100px 0px 100px;
  height: 55vh;
`;

export const StyledInstantBookToggle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 13%;
  height: 85px;
  padding-top: 20px;
  padding-bottom: 20px;

  .heading {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 4%;
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
  padding: 20px 100px 20px 100px;
`;

export const StyledVanList = styled.div`
  padding: 35px 100px 20px 100px;
`;

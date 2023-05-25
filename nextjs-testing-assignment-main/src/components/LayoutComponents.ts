import styled from 'styled-components';

export const StyledPriceSlider = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 16px;
    color: var(--dark-grey);
    text-align: left;
    letter-spacing: 0px;
    color: #9c8c8c;
    opacity: 1;
    margin-bottom: 16px;
    font-family: 'Roboto', sans-serif;
    font-weight: normal;
  }

  .priceInputs {
    display: flex;
    justify-content: space-between;
    justify-items: center;
    margin-top: 6px;
    margin-bottom: 6px;
  }
  div input {
    width: 156px;
    height: 48px;
    border: 2px solid #edeae3;
  }

  div .range-input{
    position:relative;
  }
`;

export const StyledVanTypes = styled.div`
  h1 {
    font-size: 16px;
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
    gap: 16px;
  }

  li {
    width: 156px;
    height: 88px;
    border: 2px solid #edeae3;
    border-radius: 8px;
    padding: 8px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  li:hover {
    border-color: #119383;
  }

  li.selected {
    border-color: #119383;
  }

  h3 {
    color: #1f2244;
    font-size: 16px;
    margin-top: 0;
    margin-bottom: 4px;
    font-family: 'Roboto', sans-serif;
    font-weight: normal;
  }

  h4 {
    color: #9c8c8c;
    font-size: 12px;
    margin-top: 4px;
    font-family: 'Roboto', sans-serif;
    font-weight: normal;
  }
`;

export const StyledFilterTab = styled.div`
  display: flex;
  gap: 16px;
  border-top: 2px solid #edeae3;
  border-bottom: 2px solid #edeae3;
  padding: 20px 100px 20px 100px;
`;

export const StyledInstantBookToggle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 176px;
  height: 85px;

  .heading {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  h1 {
    font-size: 16px;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    color: #9c8c8c;
    opacity: 1;
    font-family: 'Roboto', sans-serif;
    font-weight: normal;
  }

  h1 img {
    width: 16px;
    height: 16px;
    margin-right: 4px;
  }

  h2 {
    margin-top: 8px;
    font-family: 'Roboto', sans-serif;
    font-weight: normal;
  }
`;

export const DropdownToggle = styled.select`
  padding: 8px;
  border: 2px solid #edeae3;
  border-radius: 8px;
  background-color: white;
  color: #1f2244;
  font-size: 16px;
  cursor: pointer;
  height: 48px;
  width: 176px;
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

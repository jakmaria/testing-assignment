import styled from 'styled-components';
import { VanTypesProps } from '../../interfaces';
import { useEffect, useState } from 'react';

const VanTypes: React.FC<VanTypesProps> = ({ selectedTypes, setSelectedTypes }) => {
  const [selected, setSelected] = useState<string[]>([]);

  const handleClick = (value: string) => {
    let translatedValue = value;

    switch (value) {
      case 'Integrál':
        translatedValue = 'Intergrated';
        break;
      case 'Vestavba':
        translatedValue = 'BuiltIn';
        break;
      case 'Přívěs':
        translatedValue = 'Alcove';
        break;
      default:
        break;
    }

    if (selected.includes(translatedValue)) {
      setSelected(selected.filter((item) => item !== translatedValue));
    } else {
      setSelected([...selected, translatedValue]);
    }
  };

  useEffect(() => {
    setSelectedTypes(selected);
  }, [selected, setSelectedTypes]);

  return (
    <StyledVanTypes>
      <h1>Typ karavanu</h1>
      <ul>
        <li
          className={selected.includes('Campervan') ? 'selected' : ''}
          onClick={() => handleClick('Campervan')}
        >
          <h3>Campervan</h3>
          <h4>Obytka s rozměry osobáku, se kterou dojedete všude.</h4>
        </li>
        <li
          className={selected.includes('Intergrated') ? 'selected' : ''}
          onClick={() => handleClick('Integrál')}
        >
          <h3>Integrál</h3>
          <h4>Král mezi karavany. Luxus na kolech.</h4>
        </li>
        <li
          className={selected.includes('BuiltIn') ? 'selected' : ''}
          onClick={() => handleClick('Vestavba')}
        >
          <h3>Vestavba</h3>
          <h4>Celý byt geniálně poskládaný do dodávky.</h4>
        </li>
        <li
          className={selected.includes('Alcove') ? 'selected' : ''}
          onClick={() => handleClick('Přívěs')}
        >
          <h3>Přívěs</h3>
          <h4>Tažný karavan za vaše auto. Od kapkovitých až po rodinné.</h4>
        </li>
      </ul>
    </StyledVanTypes>
  );
};


const StyledVanTypes = styled.div`
  border-right: 2px solid #edeae3;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-right: 15px;
  width: 57%;

  @media (max-width: 400px) {
    padding: 1% 7% 1% 4%;
    width: 100%;
    border-right: none;
    border-top: 2px solid #edeae3;
    border-bottom: 2px solid #edeae3;
  }

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

    @media (max-width: 400px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      gap: 5%;
      padding-bottom: 4%;
    }
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

    @media (max-width: 400px) {
      padding: 6% 6% 1% 6%;
      width: 100%;
      margin-bottom: 4%;
    }
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

export default VanTypes;

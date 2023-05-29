import { VanTypesProps } from '../../interfaces';
import { StyledVanTypes } from './LayoutComponents';
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

export default VanTypes;

import { StyledVanTypes } from './LayoutComponents';
import { useState } from 'react';

export default function VanTypes() {
  const [selected, setSelected] = useState<string[]>([]);

  const handleClick = (value: string) => {
    if (selected.includes(value)) {
      setSelected(selected.filter((item) => item !== value));
    } else {
      setSelected([...selected, value]);
    }
  };

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
          className={selected.includes('Integrál') ? 'selected' : ''}
          onClick={() => handleClick('Integrál')}
        >
          <h3>Integrál</h3>
          <h4>Král mezi karavany. Luxus na kolech.</h4>
        </li>
        <li
          className={selected.includes('Vestavba') ? 'selected' : ''}
          onClick={() => handleClick('Vestavba')}
        >
          <h3>Vestavba</h3>
          <h4>Celý byt geniálně poskládaný do dodávky.</h4>
        </li>
        <li
          className={selected.includes('Přívěs') ? 'selected' : ''}
          onClick={() => handleClick('Přívěs')}
        >
          <h3>Přívěs</h3>
          <h4>Tažný karavan za vaše auto. Od kapkovitých až po rodinné.</h4>
        </li>
      </ul>
    </StyledVanTypes>
  );
}

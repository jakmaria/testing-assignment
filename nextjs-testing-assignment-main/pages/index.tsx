import styled from 'styled-components';
import Header from '../src/components/Header';
import FilterTab from '../src/components/FilterTab';
import VanList from '../src/components/VanList';
import { IData, IProps } from '../interfaces';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Home: React.FC<IProps> = () => {
  const [data, setData] = useState<IData | null>(null);
  const [priceRange, setPriceRange] = useState<[number, number]>([1200, 10000]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [isInstantBookable, setIsInstantBookable] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3000/api/data');
      const data: IData = await response.json();

      data.items = data.items.map((item) => {
        return { ...item, id: uuidv4() };
      });

      setData(data);
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <PageWrapper>
      <Header></Header>
      <FilterTab
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        selectedTypes={selectedTypes}
        setSelectedTypes={setSelectedTypes}
        isInstantBookable={isInstantBookable}
        setIsInstantBookable={setIsInstantBookable}
      />
      <VanList
        data={data}
        priceRange={priceRange}
        selectedTypes={selectedTypes}
        isInstantBookable={isInstantBookable}
      />
    </PageWrapper>
  );
};

const PageWrapper = styled.div``;

export default Home;

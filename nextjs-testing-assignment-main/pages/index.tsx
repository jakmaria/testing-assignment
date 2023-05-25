import styled from 'styled-components';
import Header from '../src/components/Header';
import FilterTab from '../src/components/FilterTab';
import VanList from '../src/components/VanList';

const Home = () => {
  return (
    <PageWrapper>
      <Header></Header>
      <FilterTab />
      <VanList/>
    </PageWrapper>
  );
};

const PageWrapper = styled.div``;

export default Home;

import { StyledVanList } from './LayoutComponents';
import VanTile from './VanTile';

export default function VanList() {
  return (
    <StyledVanList>
      <h1>here we will map through the vans and render VanTiles</h1>
      <VanTile />
    </StyledVanList>
  );
}

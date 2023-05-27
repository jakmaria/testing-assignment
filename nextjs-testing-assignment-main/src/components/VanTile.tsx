import Image from 'next/image';
import { StyledVanTile, VanFeatures, VanInfo } from './LayoutComponents';

export default function VanTile() {
  return (
    <StyledVanTile>
      <Image src="/assets/van.png" width={390} height={190} alt="lightning" />
      <VanInfo>
        <h2>Van Type</h2>
        <h3>Van Name</h3>
        <VanFeatures>
          <h4> Where from</h4>
          <div className="equipment">
           <span><Image src="/assets/Icon-seats.svg" width={20} height={20} alt="lightning" />6</span> 
           <span><Image src="/assets/Icon-Bed.svg" width={20} height={20} alt="lightning" />4</span> 
           <span> <Image src="/assets/Icon-Toilet.svg" width={20} height={20} alt="lightning" /></span>
           <span><Image src="/assets/Icon-Shower.svg" width={20} height={20} alt="lightning" /></span> 
          </div>
        </VanFeatures>
        <div className="price">
          <span>Cena od</span>
          <div>
            <span>2750 Kč/den</span>
            <Image src="/assets/blesk.svg" width={20} height={20} alt="lightning" />
          </div>
        </div>
      </VanInfo>
    </StyledVanTile>
  );
}

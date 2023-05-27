export interface IVan {
  id: string;
  location: string;
  instantBookable: boolean;
  name: string;
  passengersCapacity: number;
  sleepCapacity: number;
  price: number;
  toilet: boolean;
  shower: boolean;
  vehicleType: string;
  pictures: string[];
}

export interface IData {
  items: IVan[];
}

export interface IProps {
  data: IData;
}

export interface IVanTileProps {
  van: IVan;
}

export interface FilterTabProps {
  priceRange: [number, number];
  setPriceRange: React.Dispatch<React.SetStateAction<[number, number]>>;
  selectedTypes: string[];
  setSelectedTypes: React.Dispatch<React.SetStateAction<string[]>>;
  isInstantBookable: boolean;
  setIsInstantBookable: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface PriceSliderProps {
  priceRange: [number, number];
  setPriceRange: React.Dispatch<React.SetStateAction<[number, number]>>;
}

export interface VanTypesProps {
  selectedTypes: string[];
  setSelectedTypes: React.Dispatch<React.SetStateAction<string[]>>;
}

export interface InstantBookToggleProps {
  isInstantBookable: boolean;
  setIsInstantBookable: React.Dispatch<React.SetStateAction<boolean>>;
}

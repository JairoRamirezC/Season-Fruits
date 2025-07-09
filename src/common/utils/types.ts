export type FilterStore = {
  totalCards: number;
  filterType: string;
  isAscending: boolean;
  allFruits: FruitData[];
  fruits: FruitData[];
  fruitsStateOriginal: FruitData[];
  fruitsOrder: FruitData[];
  favoriteFruits: number[];
  setFilterType: (value: string) => void;
  setSearchTerm: (value: string) => void;
  toggleOrder: (order:boolean) => void;
  showMoreButton: () => void;
  toggleFavorite: (fruitId:number) => void;
  isFavoriteFunction: (fruitId: number) => boolean
};

export interface FruitData {
  id: number;
  name: string;
  imageUrl: string;
  family: string;
  order: string;
  genus: string;
  nutritions: Nutritions;
  isFavorite: boolean;
}

export interface Nutritions {
  calories: number;
  fat: number;
  sugar: number;
  carbohydrates: number;
  protein: number;
}

export interface CardsProps {
  data: FruitData;
}

declare global {
  interface Array<T> {
    toSorted(compareFn?: (a: T, b: T) => number): T[];
  }
}
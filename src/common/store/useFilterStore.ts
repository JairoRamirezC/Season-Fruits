import { create } from "zustand";
import ApiFruitsAxios from "../utils/ApiFruitsAxios";
import type { FruitData } from "../utils/types";

type FilterStore = {
  totalCards: number;
  filterType: string;
  searchTerm: string;
  isAscending: boolean;
  allFruits: FruitData[];
  fruits: FruitData[];
  fruitsOrder: FruitData[];
  // getFruitsFromAPI: () => Promise<void>;
  setFilterType: (value: string) => void;
  setSearchTerm: (value: string) => void;
  toggleOrder: () => void;
  showMoreButton: () => void;
}

export const useFilterStore = create<FilterStore>((set) => {
  const getFruitsFromAPI = async() => {
    try {
      const {data} = await ApiFruitsAxios.getAllFruits();
      if (data){
        set({allFruits: data});
        showCardsControlled();
      } 
    } catch (error) {
      console.log('Error getting fruits from API ', error);
    }
  }
  getFruitsFromAPI();

  const showCardsControlled = () => {
    set(state => {
      const cardsByOrder = state.allFruits.slice(0, state.totalCards);

      return {
        fruits: cardsByOrder
      }
    });
  }
  
  return {
    totalCards: 8,
    filterType: '',
    searchTerm: '',
    isAscending: true,
    allFruits: [],
    fruits: [],
    fruitsOrder: [],
    
    setFilterType: (value:string) => {
      set(state => {
        if(!value){
          return {fruitsOrder: []}
        }

        let fruitsFilter;
        if(value === 'family'){
          fruitsFilter = state.fruits?.toSorted((a, b) => a.family.toLowerCase().localeCompare(b.family.toLowerCase()));
        }
        if(value === 'order') {
          fruitsFilter = [...state.fruits]?.sort((a, b) => a.order.localeCompare(b.order));
        }
        if(value === 'genus'){
          fruitsFilter = [...state.fruits]?.sort((a, b) => a.genus.localeCompare(b.genus));
        }
        return {fruitsOrder: fruitsFilter};
      });
    },
    setSearchTerm: (value) => set({ searchTerm: value }),
    toggleOrder: () => set((state) => ({ isAscending: !state.isAscending })),
    showMoreButton: () => {
      set(state => {
        console.log('after >>> ', state.totalCards);
        const newValueToShow = state.totalCards += 4;
        console.log('newValueToShow >>> ', newValueToShow);
        return{
          fruits: state.allFruits.slice(0, newValueToShow),
          totalCards: newValueToShow
        };
      });
    }
  }
});

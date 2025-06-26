import { create } from "zustand";
import ApiFruitsAxios from "../utils/ApiFruitsAxios";
import type { FilterStore, FruitData } from "../utils/types";
import { getFruitImageLoader } from "../utils/FruitImageLoader";
import notavailable from "../../assets/fruits/images/notavailable.avif";


export const useFilterStore = create<FilterStore>((set) => {
  const getFruitsFromAPI = async () => {
    try {
      const { data } = await ApiFruitsAxios.getAllFruits();
      if (data) {
        const fruitsWithImages = data.map((fruit: FruitData) => ({
          ...fruit,
          imageUrl: getFruitImageLoader(fruit.name)
            ? getFruitImageLoader(fruit.name)
            : notavailable,
        }));
        set({ allFruits: fruitsWithImages });
        showCardsControlled();
      }
    } catch (error) {
      console.log("Error getting fruits from API ", error);
    }
  };
  getFruitsFromAPI();

  const showCardsControlled = () => {
    set((state) => {
      const cardsByOrder = state.allFruits.slice(0, state.totalCards);
      return {
        fruits: cardsByOrder,
      };
    });
  };

  return {
    totalCards: 8,
    filterType: "",
    // searchTerm: '',
    isAscending: true,
    allFruits: [],
    fruits: [],
    fruitsOrder: [],

    setFilterType: (value: string) => {
      set((state) => {
        if (!value) {
          return { fruitsOrder: [], filterType: "", fruits: state.allFruits.slice(0, state.totalCards)};
        }

        const baseData = state.allFruits.slice(0, state.totalCards);
        let fruitsFilter = [...baseData];
        if (value === "family") {
          fruitsFilter = state.fruits?.toSorted((a, b) => a.family.toLowerCase().localeCompare(b.family.toLowerCase()));
        }
        if (value === "order") {
          fruitsFilter = [...state.fruits]?.sort((a, b) =>
            a.order.toLowerCase().localeCompare(b.order.toLowerCase())
          );
        }
        if (value === "genus") {
          fruitsFilter = [...state.fruits]?.sort((a, b) =>
            a.genus.toLowerCase().localeCompare(b.genus.toLowerCase())
          );
        }

        return {
          fruitsOrder: fruitsFilter,
          filterType: value,
          fruits: baseData
        };
      });
    },

    setSearchTerm: (value) => {
      set((state) => {
        if(!value.trim().toLowerCase()){
          if (state.filterType){
            let filteredData = state.allFruits.slice(0, state.totalCards);
            if (state.filterType === "family") {
              filteredData = filteredData.sort((a, b) =>
                a.family.toLowerCase().localeCompare(b.family.toLowerCase())
              );
            } else if (state.filterType === "order") {
              filteredData = filteredData.sort((a, b) =>
                a.order.toLowerCase().localeCompare(b.order.toLowerCase())
              );
            } else if (state.filterType === "genus") {
              filteredData = filteredData.sort((a, b) =>
                a.genus.toLowerCase().localeCompare(b.genus.toLowerCase())
              );
            }
            return {
              fruitsOrder: filteredData
            }
          }

          const fruitDataSlice = state.allFruits.slice(0, state.totalCards);
          return {
            fruits: fruitDataSlice
          }
        }

        if (state.filterType) {
          const getDataBySearchTerm = [...state.fruitsOrder]?.filter((fruit) => fruit?.name?.toLowerCase().includes(value.toLowerCase()));
          return {
            fruitsOrder: getDataBySearchTerm,
          };
        }
        const getDataBySearchTerm = [...state.fruits]?.filter(fruit => fruit?.name?.toLowerCase().includes(value.toLowerCase()));
        return {
          fruits: getDataBySearchTerm,
        };
      });
    },

    toggleOrder: (order:boolean) => set((state) => { 
      let fruitsFilter;
      const totalFruits = state.allFruits.slice(0, state.totalCards);
      if(order){
        fruitsFilter = totalFruits?.toSorted((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
        return{
          // fruits: fruitsFilter,
          fruitsOrder: fruitsFilter,
          filterType: ''
        }
      }
      
      fruitsFilter = totalFruits?.toSorted((a, b) => b.name.toLowerCase().localeCompare(a.name.toLowerCase()));

      return {
        fruits: fruitsFilter,
        // fruitsOrder: fruitsFilter,
        filterType: ''
      }
    }),
    
    showMoreButton: () => {
      set((state) => {
        const newIndex = (state.totalCards += 4);
        if(state.filterType){
          const newValueToShow = state.allFruits.slice(0, newIndex);
          let fruitsFilter = [...newValueToShow];
          if (state.filterType === "family") {
            fruitsFilter = fruitsFilter?.toSorted((a, b) => a.family.toLowerCase().localeCompare(b.family.toLowerCase()));
          }
          if (state.filterType === "order") {
            fruitsFilter = fruitsFilter?.sort((a, b) =>
              a.order.toLowerCase().localeCompare(b.order.toLowerCase())
            );
          }
          if (state.filterType === "genus") {
            fruitsFilter = fruitsFilter?.sort((a, b) =>
              a.genus.toLowerCase().localeCompare(b.genus.toLowerCase())
            );
          }

          return {
            totalCards: newIndex,
            fruitsOrder: fruitsFilter
          }
        }

        const newValueToShow = state.allFruits.slice(0, newIndex);
        return {
          totalCards: newIndex,
          fruits: newValueToShow
        };
      });
    },
  };
});

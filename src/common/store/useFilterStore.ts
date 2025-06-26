import { create } from "zustand";
import ApiFruitsAxios from "../utils/ApiFruitsAxios";
import type { FilterStore, FruitData } from "../utils/types";
import { getFruitImageLoader } from "../utils/FruitImageLoader";
import notavailable from "../../assets/fruits/images/notavailable.avif";


export const useFilterStore = create<FilterStore>((set, get) => {
  const getFruitsFromAPI = async () => {
    try {
      const { data } = await ApiFruitsAxios.getAllFruits();
      if (data) {
        const fruitsWithImages = data.map((fruit: FruitData) => ({
          ...fruit,
          isFavorite: false,
          imageUrl: getFruitImageLoader(fruit.name)
            ? getFruitImageLoader(fruit.name)
            : notavailable,
        }));
        set({ 
          allFruits: fruitsWithImages
        });
        showCardsControlled();
      }
    } catch (error) {
      console.log("Error getting fruits from API ", error);
    }
  };
  getFruitsFromAPI();

  const loadFavorites = ():number[] => {
    const favoriteListLocalStorage = localStorage.getItem('favoriteList');
    return favoriteListLocalStorage ? JSON.parse(favoriteListLocalStorage) : [];
  }

  const showCardsControlled = () => {
    set((state) => {
      const isFavoriteLoaded = loadFavorites();
      const favoriteFilled = state.allFruits.map(fruit => (
        isFavoriteLoaded.includes(fruit.id) 
        ? {...fruit, isFavorite: true} 
        : fruit
      ));

      const originalOrder = state.originalOrderFruits.length > 0
        ? state.originalOrderFruits
        : favoriteFilled;
      
        // const cardsByOrder = favoriteFilled.slice(0, state.totalCards);
      const cardsByOrder = originalOrder.slice(0, state.totalCards);
      return {
        fruits: cardsByOrder,
        favoriteFruits: isFavoriteLoaded,
        originalOrderFruits: cardsByOrder
      };
    });
  };

  return {
    totalCards: 8,
    filterType: "",
    isAscending: true,
    allFruits: [],
    originalOrderFruits: [],
    fruits: [],
    fruitsOrder: [],
    favoriteFruits: [],

    setFilterType: (value: string) => {
      set((state) => {
        const baseData = state.allFruits.slice(0, state.totalCards);
        if (!value) {
          return { 
            fruitsOrder: [], 
            filterType: "",
            fruits: state.originalOrderFruits.length > 0 
              ? state.originalOrderFruits.slice(0, state.totalCards)
              : baseData
          };
        }

        let fruitsFilter = [...baseData];
        if (value === "family") {
          fruitsFilter = state.fruits?.toSorted((a, b) => a.family.toLowerCase().localeCompare(b.family.toLowerCase()));
        }
        if (value === "order") {
          fruitsFilter = [...state.fruits]?.sort((a, b) => a.order.toLowerCase().localeCompare(b.order.toLowerCase()));
        }
        if (value === "genus") {
          fruitsFilter = [...state.fruits]?.sort((a, b) => a.genus.toLowerCase().localeCompare(b.genus.toLowerCase()));
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
        const searchTerm = value?.trim().toLowerCase();
        const baseData = state.allFruits.slice(0, state.totalCards);

        if(!searchTerm){
          if (state.filterType){
            let filteredData = [...baseData];
            if (state.filterType === "family") {
              filteredData = filteredData.toSorted((a, b) => a.family.toLowerCase().localeCompare(b.family.toLowerCase()));
            } else if (state.filterType === "order") {
              filteredData = filteredData.sort((a, b) => a.order.toLowerCase().localeCompare(b.order.toLowerCase()));
            } else if (state.filterType === "genus") {
              filteredData = filteredData.sort((a, b) => a.genus.toLowerCase().localeCompare(b.genus.toLowerCase()));
            }

            return {
              fruitsOrder: filteredData
            }
          }

          // const fruitDataSlice = state.allFruits.slice(0, state.totalCards);
          return {
            fruits: state.originalOrderFruits.length > 0
              ? state.originalOrderFruits.slice(0, state.totalCards)
              : baseData
          }
        }

        if (state.filterType) {
          const getDataBySearchTerm = [...state.fruitsOrder]?.filter((fruit) => fruit?.name?.toLowerCase().includes(value.toLowerCase()));
          return {
            fruitsOrder: getDataBySearchTerm,
          };
        }
        
        const getDataBySearchTerm = baseData?.filter(fruit => fruit?.name?.toLowerCase().includes(value.toLowerCase()));
        return {
          fruits: getDataBySearchTerm,
        };
      });
    },

    toggleOrder: (order:boolean) => set((state) => {
      const baseData = state.filterType 
        ? [...state.fruitsOrder] 
        : state.originalOrderFruits.length > 0 ? [...state.originalOrderFruits] : [...state.fruits];
      const fruitsSorted = baseData?.toSorted((a, b) => 
        order 
        ? a.name.toLowerCase().localeCompare(b.name.toLowerCase()) 
        : b.name.toLowerCase().localeCompare(a.name.toLowerCase()));

      return {
        isAscending: order,
        ...(state.filterType ? {fruitsOrder: fruitsSorted} : {fruits: fruitsSorted})
      }
    }),
    
    showMoreButton: () => {
      set((state) => {
        const newIndex = state.totalCards += 4;
        const newData = state.allFruits.slice(0, newIndex);
        let newValueToShow = [...newData];

        if(state.filterType){
          if (state.filterType === "family") {
            newValueToShow?.toSorted((a, b) => a.family.toLowerCase().localeCompare(b.family.toLowerCase()));
          }
          if (state.filterType === "order") {
            newValueToShow?.sort((a, b) => a.order.toLowerCase().localeCompare(b.order.toLowerCase()));
          }
          if (state.filterType === "genus") {
            newValueToShow?.sort((a, b) => a.genus.toLowerCase().localeCompare(b.genus.toLowerCase()));
          }

          return {
            totalCards: newIndex,
            fruitsOrder: newValueToShow,
            // fruits: newData
          }
        }

        newValueToShow.sort((a, b) => state.isAscending 
          ? a.name.toLowerCase().localeCompare(b.name.toLowerCase())
          : b.name.toLowerCase().localeCompare(a.name.toLowerCase()));

        return {
          totalCards: newIndex,
          fruits: newValueToShow
        };
      });
    },

    toggleFavorite: (fruitId:number) => {
      set((state) => {
        const isFavorited = state.favoriteFruits.includes(fruitId);
        const favoriteUpdated = isFavorited 
          ? state.favoriteFruits.filter(favorite => favorite !== fruitId)
          : [...state.favoriteFruits, fruitId];
        
        localStorage.setItem('favoriteList', JSON.stringify(favoriteUpdated));
        return {
          favoriteFruits: favoriteUpdated
        }
      });
    },

    isFavoriteFunction: (fruitId:number):boolean => {
      return get().favoriteFruits.includes(fruitId);
    }
  };
});

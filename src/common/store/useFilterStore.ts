import { create } from "zustand";
import ApiFruitsAxios from "../utils/ApiFruitsAxios";
import type { FilterStore, FruitData } from "../utils/types";
import { getFruitImageLoader } from "../utils/FruitImageLoader";
import notavailable from "../../assets/fruits/images/notavailable.avif";


const loadFavorites = ():number[] => {
  const favoriteListLocalStorage = localStorage.getItem('favoriteList');
  return favoriteListLocalStorage ? JSON.parse(favoriteListLocalStorage) : [];
}

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

  const showCardsControlled = () => {
    set((state) => {
      const isFavoriteLoaded = loadFavorites();
      const fruitWithFavorite = state.allFruits.map(fruit => (
        isFavoriteLoaded.includes(fruit.id) 
        ? {...fruit, isFavorite: true} 
        : fruit
      ));
      
      const cardsByOrder = fruitWithFavorite.slice(0, state.totalCards);
      return {
        fruits: cardsByOrder,
        fruitsStateOriginal: cardsByOrder,
        allFruits: fruitWithFavorite,
        favoriteFruits: isFavoriteLoaded
      };
    });
  };

  return {
    totalCards: 8,
    filterType: "",
    isAscending: true,
    originalOrderFruits: [],
    allFruits: [], // array total con el campo favoritos ajustado
    fruits: [], // array cambiado por los filtros
    fruitsStateOriginal: [], // array principal
    fruitsOrder: [],
    favoriteFruits: [],

    setFilterType: (value: string) => {
      set((state) => {
        let fruitsFilter;
        if (!value) {
          return { 
            filterType: '',
            fruits: state.fruitsStateOriginal
          };
        }

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
          filterType: value,
          fruits: fruitsFilter
        };
      });
    },

    setSearchTerm: (value: string) => {
      set((state) => {
        const searchTerm = value?.trim().toLowerCase();

        if(!searchTerm){
          return {
            fruits: state.fruitsStateOriginal
          }
        }
        
        const getDataBySearchTerm = state.fruits?.filter(fruit => fruit?.name?.toLowerCase().includes(searchTerm?.toLowerCase()));
        return {
          fruits: getDataBySearchTerm,
        };
      });
    },

    toggleOrder: (order: boolean) => set((state) => {
      const fruitsSorted = state.fruits?.toSorted((a, b) => 
        order 
        ? a.name.toLowerCase().localeCompare(b.name.toLowerCase()) 
        : b.name.toLowerCase().localeCompare(a.name.toLowerCase()));

      return {
        fruits: fruitsSorted
      }
    }),
    
    showMoreButton: () => {
      set((state) => {
        const newIndex = state.totalCards += 4;
        const newData = state.allFruits.slice(0, newIndex);

        return {
          totalCards: newIndex,
          fruits: newData,
          fruitsStateOriginal: newData
        };
      });
    },

    toggleFavorite: (fruitId:number) => {
      set((state) => {
        const cardUpdated = state.fruits.map(fruit => {
          if(fruit.id === fruitId){
            return {
              ...fruit,
              isFavorite: !fruit.isFavorite
            }
          }
          return fruit;
        });
        const isFavorited = state.favoriteFruits.includes(fruitId);
        const favoriteUpdated = isFavorited 
          ? state.favoriteFruits.filter(favorite => favorite !== fruitId)
          : [...state.favoriteFruits, fruitId];
        
        localStorage.setItem('favoriteList', JSON.stringify(favoriteUpdated));
        return {
          fruits: cardUpdated,
          favoriteFruits: favoriteUpdated
        }
      });
    },

    isFavoriteFunction: (fruitId:number):boolean => {
      return get().favoriteFruits.includes(fruitId);
    }
  };
});

import { Cards } from "./cards/Cards";
import { useFilterStore } from "../../common/store/useFilterStore";
import type { FruitData } from "../../common/utils/types";
import { SkeletonCard } from "../skeleton/SkeletonCard";
import { useShallow } from "zustand/shallow";

export const FruitCards = () => {
  const fruits = useFilterStore(useShallow(state => state.fruits));
  const showMoreButton = useFilterStore(state => state.showMoreButton);
  

  return (
    <div>
      <div className="fruit-cards-section">
        {
          fruits.length > 0 ?
          fruits?.map((fruit:FruitData) => (
            <div key={fruit.id}>
              <Cards data={fruit} />
            </div>
          ))
          :
            <SkeletonCard />
        }
      </div>
      <button onClick={showMoreButton} className='fruit-cards-btn-more'>SEE MORE</button>
    </div>
  );
};

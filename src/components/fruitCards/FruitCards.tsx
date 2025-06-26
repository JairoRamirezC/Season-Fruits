import { Cards } from "./cards/Cards";
import { useFilterStore } from "../../common/store/useFilterStore";
import type { FruitData } from "../../common/utils/types";

export const FruitCards = () => {
  const { fruits, fruitsOrder, showMoreButton } = useFilterStore();
  const fruitsToRender = fruitsOrder.length === 0 ? fruits : fruitsOrder;

  return (
    <div>
      <div className="fruit-cards-section">
        {
          fruitsToRender ?
          fruitsToRender?.map((fruit:FruitData) => (
            <div key={fruit.id}>
              <Cards data={fruit} />
            </div>
          ))
          :
          <p>Cargando Skeleton...</p>
        }
      </div>
      <button onClick={showMoreButton} className='fruit-cards-btn-more'>SEE MORE</button>
    </div>
  );
};

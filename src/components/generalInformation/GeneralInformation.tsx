import { useEffect, useState } from "react";
import { useFilterStore } from "../../common/store/useFilterStore";
import { formatValue } from "../../common/utils/helpers/Helpers";

export const GeneralInformation = () => {
  const { fruits } = useFilterStore();
  const [getTotalCalories, setGetTotalCalories] = useState<number>(0);
  const [getTotalFats, setGetTotalFats] = useState<number>(0);
  const [getTotalSugar, setGetTotalSugar] = useState<number>(0);
  const [getTotalCarbohydrates, setGetTotalCarbohydrates] = useState<number>(0);
  const [getTotalProteins, setGetTotalProteins] = useState<number>(0);

  useEffect(() => {
    setGetTotalCalories(fruits.reduce((acum, fruit) => acum + fruit.nutritions.calories, 0));
    setGetTotalFats(fruits.reduce((acum, fruit) => acum + fruit.nutritions.fat, 0));
    setGetTotalSugar(fruits.reduce((acum, fruit) => acum + fruit.nutritions.sugar, 0));
    setGetTotalCarbohydrates(fruits.reduce((acum, fruit) => acum + fruit.nutritions.carbohydrates, 0));
    setGetTotalProteins(fruits.reduce((acum, fruit) => acum + fruit.nutritions.protein, 0));
  }, [fruits]);

  return (
    <div className='general-information-section'>
      <h2>General information</h2>
      <div className='general-information-section__products-found'>
        <p>No. Of Products Found:</p>
        <p>{fruits.length}</p>
      </div>
      <p>Nutritional properties of products found</p>
      <div className='general-information-section__total-section'>
        <div className='general-information-section__total-section--info'>
          <p>Total calories</p>
          <p>{formatValue(getTotalCalories)}</p>
        </div>
        <div className='general-information-section__total-section--info'>
          <p>Total fats</p>
          <p>{formatValue(getTotalFats)}</p>
        </div>
        <div className='general-information-section__total-section--info'>
          <p>Total sugar</p>
          <p>{formatValue(getTotalSugar)}</p>
        </div>
        <div className='general-information-section__total-section--info'>
          <p>Total carbohydrates</p>
          <p>{formatValue(getTotalCarbohydrates)}</p>
        </div>
        <div className='general-information-section__total-section--info'>
          <p>Total proteins</p>
          <p>{formatValue(getTotalProteins)}</p>
        </div>
      </div>
    </div>
  )
}

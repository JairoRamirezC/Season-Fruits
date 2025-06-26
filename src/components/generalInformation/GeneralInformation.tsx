import { useEffect, useState } from "react";
import { useFilterStore } from "../../common/store/useFilterStore";

const formatValue = (number: number) => {
  return Number(number.toFixed(2));
}

export const GeneralInformation = () => {
  const { filterType, fruits, fruitsOrder } = useFilterStore();
  const fruitsToRender = !filterType ? fruits : fruitsOrder;
  const [getTotalCalories, setGetTotalCalories] = useState(0);
  const [getTotalFats, setGetTotalFats] = useState(0);
  const [getTotalSugar, setGetTotalSugar] = useState(0);
  const [getTotalCarbohydrates, setGetTotalCarbohydrates] = useState(0);
  const [getTotalProteins, setGetTotalProteins] = useState(0);

  useEffect(() => {
    setGetTotalCalories(fruitsToRender.reduce((acum, fruit) => acum + fruit.nutritions.calories, 0));
    setGetTotalFats(fruitsToRender.reduce((acum, fruit) => acum + fruit.nutritions.fat, 0));
    setGetTotalSugar(fruitsToRender.reduce((acum, fruit) => acum + fruit.nutritions.sugar, 0));
    setGetTotalCarbohydrates(fruitsToRender.reduce((acum, fruit) => acum + fruit.nutritions.carbohydrates, 0));
    setGetTotalProteins(fruitsToRender.reduce((acum, fruit) => acum + fruit.nutritions.protein, 0));
  }, [fruitsToRender]);

  return (
    <div className='general-information-section'>
      <h2>General information</h2>
      <div className='general-information-section__products-found'>
        <p>No. Of Products Found:</p>
        <p>{fruitsToRender.length}</p>
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

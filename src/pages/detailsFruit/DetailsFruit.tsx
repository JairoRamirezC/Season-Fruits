import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ArrowBack from "../../assets/fruits/icon/ArrowBack.svg";
import { useFilterStore } from "../../common/store/useFilterStore";
import { formatValue } from "../../common/utils/helpers/Helpers";

export const DetailsFruit = () => {
  const { id } = useParams<{id:string}>();
  const navigate = useNavigate();
  const { allFruits, isFavoriteFunction } = useFilterStore();
  const isFavorite = id ? isFavoriteFunction(Number(id)) : false;
  const fruitSelected = allFruits?.find(fruit => fruit.id.toString() === id);

  useEffect(() => {
    if (!fruitSelected) navigate('/')
  }, [fruitSelected, navigate]);


  return (
    <div className="fruit-page-detail-container">
      <Link to={"/"} className="fruit-page-detail-container--iconBack">
        <img src={ArrowBack} alt="Volver" />
      </Link>
      <div className="fruit-page-detail">
        <div className="fruit-page-detail__left">
          <img src={fruitSelected?.imageUrl} alt={`image-${fruitSelected?.name}`} />
        </div>
        <div className="fruit-page-detail__right">
          <div>
            <h1 className="fruit-page-detail__right--title">{fruitSelected?.name}</h1>
            <p className="fruit-page-detail__right--category">
              <span className="fruit-page-detail--span">
                {isFavorite ? '💛 This fruit is one of your favorites' : ''}
              </span>
            </p>
          </div>
          <div className="fruit-page-detail__right__category">
            <div className="fruit-page-detail__right__category--section">
              <div className="category-item">
                <p className="label">Family:</p>
                <p className="value">{fruitSelected?.family}</p>
              </div>
              <div className="category-item">
                <p className="label">Order:</p>
                <p className="value">{fruitSelected?.order}</p>
              </div>
              <div className="category-item">
                <p className="label">Genus:</p>
                <p className="value">{fruitSelected?.genus}</p>
              </div>
            </div>
          </div>
          <h3 className="fruit-page-detail__right--title-section">Nutritions</h3>
          <div className='fruit-page-detail__right__nutritions'>
            <div className="fruit-page-detail__right__nutritions__list">
              <p className="fruit-page-detail__right__nutritions__list--title">
                Calories
              </p>
              <p>{formatValue(Number(fruitSelected?.nutritions?.calories))}</p>
            </div>
            <div className="fruit-page-detail__right__nutritions__list">
              <p className="fruit-page-detail__right__nutritions__list--title">
                Fat
              </p>
              <p>{formatValue(Number(fruitSelected?.nutritions?.fat))}</p>
            </div>
            <div className="fruit-page-detail__right__nutritions__list">
              <p className="fruit-page-detail__right__nutritions__list--title">
                Sugar
              </p>
              <p>{formatValue(Number(fruitSelected?.nutritions?.sugar))}</p>
            </div>
            <div className="fruit-page-detail__right__nutritions__list">
              <p className="fruit-page-detail__right__nutritions__list--title">
                Carbohydrates
              </p>
              <p>{formatValue(Number(fruitSelected?.nutritions?.carbohydrates))}</p>
            </div>
            <div className="fruit-page-detail__right__nutritions__list">
              <p className="fruit-page-detail__right__nutritions__list--title">
                Protein
              </p>
              <p>{formatValue(Number(fruitSelected?.nutritions?.protein))}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

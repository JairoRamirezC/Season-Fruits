import { useState } from 'react';
// import Lychee from '../../../assets/fruits/images/Lychee.avif';
import type { CardsProps } from '../../../common/utils/types';

export const Cards = ({data}: CardsProps) => {
  const [liked, setLiked] = useState<boolean>(false);
  const {name, imageUrl, family, order, genus, nutritions} = data;

  const handleClickLike = () => {
    setLiked(!liked);
  };
  

  return (
    <div className='card-info-section'>
      {/* <img src={Lychee} alt='img-fruit' /> */}
      <img src={imageUrl} alt={`img-fruit-${name}`} />
      <div className='card-info-section__body-card'>
        <p>{name}</p>
        <div className='card-info-section__body-card__category'>
          <div className='category-item'>
            <p className='label'>Family:</p>
            {/* <p className='value'>Rosaceae</p> */}
            <p className='value'>{family}</p>
          </div>
          <div className='category-item'>
            <p className='label'>Order:</p>
            {/* <p className='value'>Rosales</p> */}
            <p className='value'>{order}</p>
          </div>
          <div className='category-item'>
            <p className='label'>Genus:</p>
            {/* <p className='value'>Malus</p> */}
            <p className='value'>{genus}</p>
          </div>
        </div>
        <p>Nutritions</p>
        <div className='card-info-section__body-card__nutritions'>
          <p className='card-info-section__body-card__nutritions--title'>
            Calories
          </p>
          {/* <p>52</p> */}
          <p>{nutritions?.calories}</p>
        </div>
        <div className='card-info-section__body-card__nutritions'>
          <p className='card-info-section__body-card__nutritions--title'>Fat</p>
          {/* <p>0.4</p> */}
          <p>{nutritions?.fat}</p>
        </div>
        <div className='card-info-section__body-card__nutritions'>
          <p className='card-info-section__body-card__nutritions--title'>
            Sugar
          </p>
          {/* <p>10.3</p> */}
          <p>{nutritions?.sugar}</p>
        </div>
        <div className='card-info-section__body-card__nutritions'>
          <p className='card-info-section__body-card__nutritions--title'>
            Carbohydrates
          </p>
          {/* <p>11.4.3</p> */}
          <p>{nutritions?.carbohydrates}</p>
        </div>
        <div className='card-info-section__body-card__nutritions'>
          <p className='card-info-section__body-card__nutritions--title'>
            Protein
          </p>
          {/* <p>0.4</p> */}
          <p>{nutritions?.protein}</p>
        </div>
      </div>
      <button
        onClick={handleClickLike}
        className={`likeButton ${liked ? 'liked' : ''}`}
        aria-label={liked ? 'Quitar me gusta' : 'Dar me gusta'}
      >
        <span className='heartContainer'>
          <svg className='heart' viewBox='0 0 24 24'>
            <path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z' />
          </svg>
        </span>
      </button>
    </div>
  );
};

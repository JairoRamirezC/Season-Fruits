import React from 'react';
import type { CardsProps } from '../../../common/utils/types';
import { useFilterStore } from '../../../common/store/useFilterStore';
import { useNavigate } from 'react-router-dom';

export const Cards = React.memo(({data}: CardsProps) => {
  const {id, name, imageUrl, family, order, genus, nutritions, isFavorite} = data;
  const { toggleFavorite } = useFilterStore();
  const navigate = useNavigate();

  const handleClickLike = () => {
    toggleFavorite(id);
  };

  return (
    <div className='card-info-container'>
      <div className='card-info-section' onClick={() => navigate(`/fruit/${id}`)}>
        <img src={imageUrl} alt={`img-fruit-${name}`} />
        <div className='card-info-section__body-card'>
          <p>{name}</p>
          <div className='card-info-section__body-card__category'>
            <div className='category-item'>
              <p className='label'>Family:</p>
              <p className='value'>{family}</p>
            </div>
            <div className='category-item'>
              <p className='label'>Order:</p>
              <p className='value'>{order}</p>
            </div>
            <div className='category-item'>
              <p className='label'>Genus:</p>
              <p className='value'>{genus}</p>
            </div>
          </div>
          <p>Nutritions</p>
          <div className='card-info-section__body-card__nutritions'>
            <p className='card-info-section__body-card__nutritions--title'>
              Calories
            </p>
            <p>{nutritions?.calories}</p>
          </div>
          <div className='card-info-section__body-card__nutritions'>
            <p className='card-info-section__body-card__nutritions--title'>Fat</p>
            <p>{nutritions?.fat}</p>
          </div>
          <div className='card-info-section__body-card__nutritions'>
            <p className='card-info-section__body-card__nutritions--title'>
              Sugar
            </p>
            <p>{nutritions?.sugar}</p>
          </div>
          <div className='card-info-section__body-card__nutritions'>
            <p className='card-info-section__body-card__nutritions--title'>
              Carbohydrates
            </p>
            <p>{nutritions?.carbohydrates}</p>
          </div>
          <div className='card-info-section__body-card__nutritions'>
            <p className='card-info-section__body-card__nutritions--title'>
              Protein
            </p>
            <p>{nutritions?.protein}</p>
          </div>
        </div>
      </div>
      <button
        className={`likeButton ${isFavorite ? 'liked' : ''}`}
        aria-label={isFavorite ? 'Quitar me gusta' : 'Dar me gusta'}
        onClick={handleClickLike}
      >
        <span className='heartContainer'>
          <svg className='heart' viewBox='0 0 24 24'>
            <path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z' />
          </svg>
        </span>
      </button>
    </div>
  );
});

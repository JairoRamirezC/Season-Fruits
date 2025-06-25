import { useState } from 'react';
import type { ChangeEvent, JSX } from 'react';
import searchIcon from '../../assets/fruits/icon/search-icon.png';
import { useFilterStore } from '../../common/store/useFilterStore';

export const FiltersSection = (): JSX.Element => {
  const [selectValue, setSelectValue] = useState<string>('');
  const [inputValue, setInputValue] = useState<string>('');
  const [isAscending, setIsAscending] = useState<boolean>(true);
  const { setFilterType } = useFilterStore();

  const handleFilterChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event?.target;
    setSelectValue(value);
    setFilterType(value);
  }

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event?.target;
    setInputValue(value);
  }

  const handleOrderClick = () => {
    setIsAscending(prev => !prev);
    // Aquí podrías disparar una ordenación, por ejemplo:
    // ordenarDatos(isAscending ? 'desc' : 'asc')
  }

  return (
    <section className='filters-section'>
      <div className='filters-section__custom-select'>
        <select
          className='filters-section__custom-select--select'
          value={selectValue}
          onChange={handleFilterChange}
        >
          <option value=''>Filter by:</option>
          <option value='family'>Family</option>
          <option value='order'>Order</option>
          <option value='genus'>Genus</option>
        </select>
      </div>
      <div className='filters-section__search-wrapper'>
        <input
          type='text'
          placeholder='Search'
          value={inputValue}
          onChange={handleSearchChange}
        />
        <img src={searchIcon} className='filters-section__search-wrapper--search-icon' alt='icon-search' />
      </div>
      <button 
        className='filters-section--btn-order-by' 
        onClick={handleOrderClick}
      >
        {isAscending ? 'Order A - Z' : 'Order Z - A'}
      </button>
    </section>
  )
}

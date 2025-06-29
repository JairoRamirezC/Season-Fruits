import { useState } from 'react';
import type { ChangeEvent, JSX } from 'react';
import searchIcon from '../../assets/fruits/icon/search-icon.png';
import { useFilterStore } from '../../common/store/useFilterStore';

export const FiltersSection = (): JSX.Element => {
  const [isAscending, setIsAscending] = useState<boolean>(true);
  const { filterType, setFilterType, setSearchTerm, toggleOrder } = useFilterStore();

  const handleFilterChange = (event: ChangeEvent<HTMLSelectElement>) => {
    // const { value } = event?.target;
    // setSelectValue(filterType ? value : '');
    setFilterType(event?.target?.value);
  }

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event?.target;
    const validateInput = /^[a-zA-Z\s]*$/;
    if(validateInput.test(value)) setSearchTerm(value);
  }

  const handleOrderClick = () => {
    setIsAscending(prev => !prev);
    toggleOrder(isAscending);
  }

  return (
    <section className='filters-section'>
      <div className='filters-section__custom-select'>
        <select
          className='filters-section__custom-select--select'
          value={filterType}
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

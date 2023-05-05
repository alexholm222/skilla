import { useState } from 'react';
import ClosePopup from '../../../utils/ClosePopup';
import { CSSTransition } from 'react-transition-group';
import Filters from '../../../utils/Filters';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../../store/reducerFilter';

function FilterEmployer({employers, type, calls}) {
  const [filterName, setFilterName] = useState({id: 0, name: 'Все сотрудники'});
  const [popupOpen, setPopupOpen] = useState(false);
  const dispatch = useDispatch();
  
  function openPopup() {
    if(!popupOpen) {
      setPopupOpen(true);
    } else {
      setPopupOpen(false);
    }   
  };

  function choiceFilterEmployer(e) {
    const filter = e.target.closest('.filter__item');
    setFilterName({id: Number(filter.id), name: filter.textContent});
    setPopupOpen(false);
    if (Number(filter.id === 0)) {
        
      return dispatch(setFilter(calls));
    } else {
      return dispatch(setFilter(Filters([...calls], 'person_id', Number(filter.id))))
      
    }
  }

  ClosePopup(type, setPopupOpen);

  return (
    <li className={`filter ${type}`}>
      <div onClick={openPopup} className='filter__container'>
        <p className='filter__text'>{filterName.name}</p>
        <div className={`arrow filter__arrow ${popupOpen ? 'arrow_active' : ''}`}>
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.8" d="M1.41 0.590088L6 5.17009L10.59 0.590088L12 2.00009L6 8.00009L0 2.00009L1.41 0.590088Z" fill="#ADBFDF"/>
          </svg>
        </div>
      </div>
      <CSSTransition in={popupOpen} classNames='alertP' timeout={100} unmountOnExit>
        <div className='filter__popup'>
          <ul className='filter__list'>
              <li id='0' onMouseDown={choiceFilterEmployer} className={`filter__item ${filterName.id === 0 ? 'filter__item_active' : ''}`}>Все сотрудники</li>
            {employers.map((item) => {
              return (
              <li id={item.id} key={item.id} onMouseDown={choiceFilterEmployer} className={`filter__item ${filterName.id === item.id ? 'filter__item_active' : ''}`}>{`${item.name} ${item.surname.slice(0, 1)}. (id ${item.id})`}</li>
              )}
             )
            } 
          </ul>
        </div>
      </CSSTransition>
  </li>
  )
};

export default FilterEmployer;
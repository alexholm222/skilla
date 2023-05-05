import './EmployeesList.css';
import derectorImg from '../../images/director.png';
import { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import avatarEmployer from '../../images/employe.png'
function EmployeesList() {
  const [openList, setopenList] =useState(false);
 
  useEffect(() => {
    const listItem = document.querySelectorAll('.employees__item');
    listItem.forEach(item => {
      item.addEventListener('mouseenter', () => {
        item.querySelector('.button__exit_post').classList.add('button_active');
      });

      item.addEventListener('mouseleave', () => {
        item.querySelector('.button__exit_post').classList.remove('button_active');
      })
    })
  });

  function openPopup() {
    if(!openList) {
      setopenList(true);
    } else {
      setopenList(false);
    }   
  };

  document.addEventListener("mousedown", (e) => {
    const target = e.target;
    if (!target.closest('.employees') && !target.closest('.employees__popup')) {
      setopenList(false);
    }
  });
  return(
    <>
    <div className="employees">
      <div onClick={openPopup} className="employees__container">
        <img src={derectorImg} alt="работник" className="employees__img"></img>
        <div className={`arrow ${openList ? "arrow_active" : ""}`}>
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.8" d="M1.41 0.590088L6 5.17009L10.59 0.590088L12 2.00009L6 8.00009L0 2.00009L1.41 0.590088Z" fill="#ADBFDF"/>
          </svg>
        </div>
      </div> 
      <CSSTransition in={openList} classNames='alertP' timeout={100} unmountOnExit>
      <div className="employees__popup">
        <div className="employees__container employees__container_info">
          <div className="employees__info">
            <p className='employees__text employees__text_name'>Упоров Кирилл</p>
            <p className='employees__text'>Директор<span className='employees__point'></span>Санкт-Петербург</p>
            <a href="tel:88003331721" id="tel" className='employees__tel'>
              <div className='employees__icon_tel'>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.36 1.33333C2.4 1.92667 2.5 2.50667 2.66 3.06L1.86 3.86C1.58667 3.06 1.41333 2.21333 1.35333 1.33333H2.36ZM8.93333 9.34667C9.5 9.50667 10.08 9.60667 10.6667 9.64667V10.64C9.78667 10.58 8.94 10.4067 8.13333 10.14L8.93333 9.34667ZM3 0H0.666667C0.3 0 0 0.3 0 0.666667C0 6.92667 5.07333 12 11.3333 12C11.7 12 12 11.7 12 11.3333V9.00667C12 8.64 11.7 8.34 11.3333 8.34C10.5067 8.34 9.7 8.20667 8.95333 7.96C8.88667 7.93333 8.81333 7.92667 8.74667 7.92667C8.57333 7.92667 8.40667 7.99333 8.27333 8.12L6.80667 9.58667C4.92 8.62 3.37333 7.08 2.41333 5.19333L3.88 3.72667C4.06667 3.54 4.12 3.28 4.04667 3.04667C3.8 2.3 3.66667 1.5 3.66667 0.666667C3.66667 0.3 3.36667 0 3 0Z" fill="#ADBFDF"/>
                </svg>
              </div>
              <p className='employees__text employees__text_tel'>8 (800) 333-17-21</p>
            </a>
            <a href="mailto: hi@skilla.ru" id="tel" className='employees__email'>
              <div className='employees__icon_email'>
                <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.3334 0.666656H1.66671C0.933374 0.666656 0.340041 1.26666 0.340041 1.99999L0.333374 9.99999C0.333374 10.7333 0.933374 11.3333 1.66671 11.3333H12.3334C13.0667 11.3333 13.6667 10.7333 13.6667 9.99999V1.99999C13.6667 1.26666 13.0667 0.666656 12.3334 0.666656ZM12.3334 9.99999H1.66671V3.33332L7.00004 6.66666L12.3334 3.33332V9.99999ZM7.00004 5.33332L1.66671 1.99999H12.3334L7.00004 5.33332Z" fill="#ADBFDF"/>
                </svg>
              </div>
              <p className='employees__text employees__text_email'>hi@skilla.ru</p>
            </a>
          </div>
          <button type="button" className="button__exit">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 5L12.59 6.41L14.17 8H6V10H14.17L12.59 11.58L14 13L18 9L14 5ZM2 2H9V0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H9V16H2V2Z" fill="#ADBFDF"/>
            </svg>
          </button>
        </div>
        <div className='employees__post'>
          <p className='employees__text employees__text_post'>Операторы</p>
          <ul className='employees__list'>
            <li  className='employees__item'>
              <div className='employees__container_list'>
                <img  alt='работник' src={avatarEmployer} className='employees__avatar'></img>
                <p className='employees__text employees__text_list'>Мирон Батонов</p>
              </div>
              <button type="button" className="button__exit button__exit_post">
                <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 4L7.6 5.4L10.2 8H0V10H10.2L7.6 12.6L9 14L14 9L9 4ZM18 16H10V18H18C19.1 18 20 17.1 20 16V2C20 0.9 19.1 0 18 0H10V2H18V16Z" fill="#0024CB"/>
                </svg>
              </button>
            </li>
            <li className='employees__item'>
              <div className='employees__container_list'>
                <img  alt='работник' src={avatarEmployer} className='employees__avatar'></img>
                <p className='employees__text employees__text_list'>Алексей Ильин</p>
              </div>
              <button type="button" className="button__exit button__exit_post">
                <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 4L7.6 5.4L10.2 8H0V10H10.2L7.6 12.6L9 14L14 9L9 4ZM18 16H10V18H18C19.1 18 20 17.1 20 16V2C20 0.9 19.1 0 18 0H10V2H18V16Z" fill="#0024CB"/>
                </svg>
              </button>
            </li>
            <li className='employees__item'>
              <div className='employees__container_list'>
                <img  alt='работник' src={avatarEmployer} className='employees__avatar'></img>
                <p className='employees__text employees__text_list'>Милана Константинопольская</p>
              </div>
              <button type="button" className="button__exit button__exit_post">
                <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 4L7.6 5.4L10.2 8H0V10H10.2L7.6 12.6L9 14L14 9L9 4ZM18 16H10V18H18C19.1 18 20 17.1 20 16V2C20 0.9 19.1 0 18 0H10V2H18V16Z" fill="#0024CB"/>
                </svg>
              </button>
            </li>
          </ul>
          <p className='employees__text employees__text_post'>Логисты</p>
          <ul className='employees__list'>
            <li  className='employees__item'>
              <div className='employees__container_list'>
                <img  alt='работник' src={avatarEmployer} className='employees__avatar'></img>
                <p className='employees__text employees__text_list'>Александра Сизых</p>
              </div>
              <button type="button" className="button__exit button__exit_post">
                <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 4L7.6 5.4L10.2 8H0V10H10.2L7.6 12.6L9 14L14 9L9 4ZM18 16H10V18H18C19.1 18 20 17.1 20 16V2C20 0.9 19.1 0 18 0H10V2H18V16Z" fill="#0024CB"/>
                </svg>
              </button>
            </li>
            <li className='employees__item'>
              <div className='employees__container_list'>
                <img  alt='работник' src={avatarEmployer} className='employees__avatar'></img>
                <p className='employees__text employees__text_list'>Илья Алексеев</p>
              </div>
              <button type="button" className="button__exit button__exit_post">
                <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 4L7.6 5.4L10.2 8H0V10H10.2L7.6 12.6L9 14L14 9L9 4ZM18 16H10V18H18C19.1 18 20 17.1 20 16V2C20 0.9 19.1 0 18 0H10V2H18V16Z" fill="#0024CB"/>
                </svg>
              </button>
            </li>
            <li className='employees__item'>
              <div className='employees__container_list'>
                <img  alt='работник' src={avatarEmployer} className='employees__avatar'></img>
                <p className='employees__text employees__text_list'>Владимир Петров</p>
              </div>
              <button type="button" className="button__exit button__exit_post">
                <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 4L7.6 5.4L10.2 8H0V10H10.2L7.6 12.6L9 14L14 9L9 4ZM18 16H10V18H18C19.1 18 20 17.1 20 16V2C20 0.9 19.1 0 18 0H10V2H18V16Z" fill="#0024CB"/>
                </svg>
              </button>
            </li>
          </ul>
          <p className='employees__text employees__text_post'>Бухгалтеры</p>
          <ul className='employees__list'>
            <li  className='employees__item'>
              <div className='employees__container_list'>
                <img  alt='работник' src={avatarEmployer} className='employees__avatar'></img>
                <p className='employees__text employees__text_list'>Полина Калинина</p>
              </div>
              <button type="button" className="button__exit button__exit_post">
                <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 4L7.6 5.4L10.2 8H0V10H10.2L7.6 12.6L9 14L14 9L9 4ZM18 16H10V18H18C19.1 18 20 17.1 20 16V2C20 0.9 19.1 0 18 0H10V2H18V16Z" fill="#0024CB"/>
                </svg>
              </button>
            </li>
            <li className='employees__item'>
              <div className='employees__container_list'>
                <img  alt='работник' src={avatarEmployer} className='employees__avatar'></img>
                <p className='employees__text employees__text_list'>Наталья Натальева</p>
              </div>
              <button type="button" className="button__exit button__exit_post">
                <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 4L7.6 5.4L10.2 8H0V10H10.2L7.6 12.6L9 14L14 9L9 4ZM18 16H10V18H18C19.1 18 20 17.1 20 16V2C20 0.9 19.1 0 18 0H10V2H18V16Z" fill="#0024CB"/>
                </svg>
              </button>
            </li>
            <li className='employees__item'>
              <div className='employees__container_list'>
                <img  alt='работник' src={avatarEmployer} className='employees__avatar'></img>
                <p className='employees__text employees__text_list'>Константин Константинопольский</p>
              </div>
              <button type="button" className="button__exit button__exit_post">
                <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 4L7.6 5.4L10.2 8H0V10H10.2L7.6 12.6L9 14L14 9L9 4ZM18 16H10V18H18C19.1 18 20 17.1 20 16V2C20 0.9 19.1 0 18 0H10V2H18V16Z" fill="#0024CB"/>
                </svg>
              </button>
            </li>
          </ul>
        </div>
     </div>
    </CSSTransition> 
    </div>
    
   </>
  )
};

export default EmployeesList;
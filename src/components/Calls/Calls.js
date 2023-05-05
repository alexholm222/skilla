import { useEffect, useState } from "react";
import "./Calls.css";
import CallsList from "../CallsList/CallsList";
import Calendar from "../Calendar/Calendar";
import SearchForm from "../SearchForm/SearchForm";
import Filter from "../Filters/Filter/Filter";
import FilterEmployer from "../Filters/FiterEmployer/FilterEmployer";
import setDateToday from "../../utils/SetDateToday";
import { setSearch } from "../../store/reduserSearch";
import { useDispatch } from 'react-redux';
import { fetchCalls } from "../../store/reduserCalls";
import { useSelector } from "react-redux";
import Preloader from "../Preloader/Preloader";


function Calls() {
  const [balance, setballance] = useState(272);
  const [callList, setCallList] = useState([]);
  const dates = setDateToday();
  const [isDates, setIsDates] = useState(dates);
  const [callDates, setCallDates] = useState([]);
  const [resFilters, setResFilters] = useState(true);
  const [sortTimeStatus, setSortTimeStatus] = useState('');
  const [sortDurationStatus, setSortDurationStatus] = useState('');
  const dispatch = useDispatch();
  const calls = useSelector(state => state.callsReduser.calls);
  const callsFilter = useSelector(state => state.filterReduser.calls);
  
  //установка списка звонков в зависимости от того активированы фильтры или нет
  useEffect(() => {
    setCallList(callsFilter);
    setSortTimeStatus('');
    setSortDurationStatus('');
  },[calls, callsFilter, isDates]);
  
  //запись диапазона дат в стейт, для последующего использование в воркере apiCardsWorker (файл сallSaga)
  useEffect(() => {
    dispatch(setSearch(isDates));
    dispatch(fetchCalls());
  },[isDates]);

  //массив оригинальных значений дат звонков
  useEffect(() => {
    const callsDates = callsFilter.reduce((acc,elem)=>acc.add(elem.date_notime), new Set());
    setCallDates(Array.from(callsDates));
  },[callsFilter]);

  function resetFilters() {
    setResFilters(true)
  }
  //функция сортировки по времени звонка
  function sortByTime() {
    setSortDurationStatus('');
    if(sortTimeStatus === '') {
      const sort = [...callsFilter].sort((a, b) => a.date > b.date ? 1 : -1);
      setCallList(sort);
      setSortTimeStatus('up');
    } else if (sortTimeStatus === 'up') {
      const sort = [...callsFilter].sort((a, b) => a.date < b.date ? 1 : -1);
      setCallList(sort);
      setSortTimeStatus('down');
    } else {
      setCallList(callsFilter);
      setSortTimeStatus('');
    }
  };
  //функция сортировки по продолжительности звонка
  function sortByDuration() {
    setSortTimeStatus('');
    if(sortDurationStatus === '') {
      const sort = [...callsFilter].sort((a, b) => a.time > b.time ? 1 : -1);
      setCallList(sort);
      setSortDurationStatus('up');
    } else if (sortDurationStatus === 'up') {
      const sort = [...callsFilter].sort((a, b) => a.time < b.time ? 1 : -1);
      setCallList(sort);
      setSortDurationStatus('down');
    } else {
      setCallList(callsFilter);
      setSortDurationStatus('');
    }
  }

  return (
    <section className="calls">
      <div className="calls__container">
        <div className="calls__balance">
          <p className="balance__text">Баланс: <span className="balance__amount">{`${balance} ₽`}</span></p>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M12 0C5.376 0 0 5.376 0 12C0 18.624 5.376 24 12 24C18.624 24 24 18.624 24 12C24 5.376 18.624 0 12 0ZM18 13.2H13.2V18H10.8V13.2H6V10.8H10.8V6H13.2V10.8H18V13.2Z" fill="#002CFB"/>
            </svg>
        </div>
        <Calendar setIsDates={setIsDates}/>
      </div>  
      <div className="calls__container calls__container_filter">
        <SearchForm/>
        <ul className="calls__filters">
          <div onClick={resetFilters} style={{display: `${resFilters ? 'none' : 'flex'}`}} className="calls__reset">
            <p className='filter__text'>Сбросить фильтры</p>
            <div className="calls__button_reset">
              <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.75 0.88125L7.86875 0L4.375 3.49375L0.88125 0L0 0.88125L3.49375 4.375L0 7.86875L0.88125 8.75L4.375 5.25625L7.86875 8.75L8.75 7.86875L5.25625 4.375L8.75 0.88125Z" fill="#ADBFDF"/>
              </svg>
            </div>
          </div>
          <Filter resFilters={resFilters} setResFilters={setResFilters} calls={calls} type = {'filter__call'} filterList = {['Все типы', 'Входящие', 'Исходящие']}/>
        </ul>
      </div>
      <div className="calls__box">
        <div className="calls__contents">
          <ul className="text__block text__block_1">
            <li className="calls__text">Тип</li>
            <li onClick={sortByTime}  className="calls__text calls__text_time">Время<span style={{display: `${sortTimeStatus === '' ? 'none' : 'flex'}`}} className={`calls__arrow ${sortTimeStatus === 'up' ? 'calls__arrow_up' : ''}`}></span></li>
            <li className="calls__text">Сотрудник</li>
            <li className="calls__text">Звонок</li>
          </ul>  
          <ul className="text__block text__block_2">
            <li className="calls__text calls__text_2">Источник</li>
            <li className="calls__text calls__text_2">Оценка</li>
          </ul>
          <p onClick={sortByDuration} className="calls__text calls__text_duration">Длительность<span style={{display: `${sortDurationStatus === '' ? 'none' : 'flex'}`}} className={`calls__arrow ${sortDurationStatus === 'up' ? 'calls__arrow_up' : ''}`}></span></p>
        </div>
        <div className="calls__items">
          {callDates.map((date) => {
            return <CallsList key={date} date={date} callList={callList}/>
          })}
        </div>
      </div>
    </section>
  )
};
export default Calls;
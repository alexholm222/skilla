import { useState } from "react";
import "./CompaniesList.css";
import { companies } from "../../utils/Constants";
import ClosePopup from '../../utils/ClosePopup';
import { CSSTransition } from 'react-transition-group';

function CompaniesList() {
  const [company, setCompany] = useState(companies[0]); 
  const [companiesList, setCompaniesList] = useState(companies);
  const [openList, setopenList] =useState(false);
  
  function choiceCompany(e) {
   const company = e.target.closest('.companies__item');
   setCompany(company.textContent);
   setopenList(false);
  }

  function openPopup() {
    if(!openList) {
      setopenList(true);
    } else {
      setopenList(false);
    }   
  }

  ClosePopup('companies', setopenList);

  return (
    <>
      <div  className="companies">
        <div onClick={openPopup} className="companies__container">
          <p className="companies__text">{company}</p>
          <div className={`arrow arrow_companies ${openList ? "arrow_active" : ""}`}>
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.8" d="M1.41 0.590088L6 5.17009L10.59 0.590088L12 2.00009L6 8.00009L0 2.00009L1.41 0.590088Z" fill="#ADBFDF"/>
            </svg>
          </div> 
        </div>
        <CSSTransition in={openList} classNames='alertP' timeout={100} unmountOnExit>
          <div className="companies__popup">
            <ul className="companies__list">
              {companiesList.map((companyItem) => {
                return (
                <li key={companiesList.indexOf(companyItem)} onClick={choiceCompany} className='companies__item'>
                  <p className={`companies__text companies__text_popup ${companyItem === company ? 'companies__item_active' : ''}`}>{companyItem}</p>
                </li>
             )}
              )
              }   
            </ul>
          </div>
        </CSSTransition>
      </div>
    </>
  )
};

export default CompaniesList;
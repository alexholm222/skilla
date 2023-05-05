function setDateToday(changeDay = 2) {
    const date = new Date();
    const date2 = new Date(date - (changeDay*1000*60*60*24))
    const year = date.getFullYear();
    const yearA = date2.getFullYear();
    const month = date.getMonth();
    const monthA = date2.getMonth();
    const day = date.getDate();
    const dayA = date2.getDate();
    
    let fMonth;
    switch (month){
      case 0: fMonth = "01"; break;
      case 1: fMonth="02"; break;
      case 2: fMonth="03"; break;
      case 3: fMonth="04"; break;
      case 4: fMonth="05"; break;
      case 5: fMonth="06"; break;
      case 6: fMonth="07"; break;
      case 7: fMonth="08"; break;
      case 8: fMonth="09"; break;
      case 9: fMonth="10"; break;
      case 10: fMonth="11"; break;
      case 11: fMonth="12"; break;
      default:
  }

  let fMonthA;
    switch (monthA){
      case 0: fMonthA = "01"; break;
      case 1: fMonthA="02"; break;
      case 2: fMonthA="03"; break;
      case 3: fMonthA="04"; break;
      case 4: fMonthA="05"; break;
      case 5: fMonthA="06"; break;
      case 6: fMonthA="07"; break;
      case 7: fMonthA="08"; break;
      case 8: fMonthA="09"; break;
      case 9: fMonthA="10"; break;
      case 10: fMonthA="11"; break;
      case 11: fMonthA="12"; break;
      default:
  }
    const secondDate = `${year}-${fMonth }-${day < 10 ? `0${day}` : `${day}`}`;
    const firstDate = `${yearA}-${fMonthA}-${dayA < 10 ? `0${dayA}` : `${dayA}`}`;
    return {firstDate, secondDate};
  };
  
  export default setDateToday;
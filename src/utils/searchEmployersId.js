
export default function searchEmployersId(array) {
    const employersId =  array.reduce((acc,elem)=>acc.add(elem.person_id), new Set());
    const employers =  Array.from(employersId).map(elem => {
      const call = array.find(el => el.person_id === elem);
      const employer = {id: call.person_id, name: call.person_name, surname: call.person_surname}
      return employer
    });
    return employers
}
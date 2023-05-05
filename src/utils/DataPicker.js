import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';

const calendar = document.querySelector('.calendar__icon_select')
new AirDatepicker('#calendar', {
    range: true,
    multipleDatesSeparator: ' - '
})
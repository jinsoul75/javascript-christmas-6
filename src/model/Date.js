import DateValidtor from '../validator/DateValidator.js';

class Date {
  #date;

  constructor(date) {
    DateValidtor.validateDate(date);
  }

  
}

export default Date;

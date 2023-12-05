import { DATE } from '../constant/constants.js';
import ERROR from '../constant/error.js';
import CustomError from '../util/CustomError.js';

const DateValidator = {
  validateDate(date) {
    this.isNumber(date);
    this.isInRage(date);
  },

  isNumber(date) {
    if (Number.isNaN(Number(date))) {
      throw new CustomError(ERROR.inValidDate);
    }
  },

  isInRage(date) {
    if (date < DATE.min || date > DATE.max) {
      throw new CustomError(ERROR.inValidDate);
    }
  },
};

export default DateValidator;

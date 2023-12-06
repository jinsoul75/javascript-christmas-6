import { DATE } from '../constant/constants.js';
import ERROR from '../constant/error.js';
import CustomError from '../util/CustomError.js';

const DateValidator = {
  validateDate(date) {
    this.isEmpty(date);
    this.isNumber(date);
    this.isInRage(date);
  },

  isEmpty(date) {
    if (date.length === 0) {
      throw new CustomError(ERROR.inValidDate);
    }
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

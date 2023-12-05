import { ORDER_QUANTITY } from '../constant/constants.js';
import ERROR from '../constant/error.js';
import { MENU } from '../constant/menu.js';
import CustomError from '../util/CustomError.js';

const MenuValidator = {
  validateMenu(item, quantity) {
    this.validteItem(item);
    this.validateQuantity(quantity);
  },

  validteItem(item) {
    this.checkValidMenu(item);
  },

  validateQuantity(quantity) {
    this.checkHasNotInRange(quantity);
  },

  checkValidMenu(item) {
    const menuList = Object.keys(MENU);

    const combineMenu = new Set([...item, ...menuList]);

    if (menuList.length !== combineMenu.size) {
      throw new CustomError(ERROR.inValidMenu);
    }
  },

  checkHasNotInRange(quantity) {
    quantity.forEach(number => {
      if (this.isNotInRage(number)) {
        throw new CustomError(ERROR.inValidMenu);
      }
    });
  },

  isNotInRage: number =>
    number < ORDER_QUANTITY.min || number > ORDER_QUANTITY.max,
};

export default MenuValidator;

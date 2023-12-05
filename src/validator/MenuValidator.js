import { ORDER_QUANTITY } from '../constant/constants.js';
import ERROR from '../constant/error.js';
import { MENU } from '../constant/menu.js';
import CustomError from '../util/CustomError.js';

const MenuValidator = {
  validateMenu(item, quantity) {
    this.checkValidMenu(item);
    this.checkHasNotNumber(quantity);
    this.checkOnlyDrink(item);
    this.checkHasNotInRange(quantity);
    this.checkTotalQuantity(quantity);
  },

  checkValidMenu(item) {
    const menuList = Object.keys(MENU);

    const combineMenu = new Set([...item, ...menuList]);

    if (menuList.length !== combineMenu.size) {
      throw new CustomError(ERROR.inValidMenu);
    }
  },

  checkOnlyDrink(item) {
    const isOnlyDrink = menu => MENU[menu].category === ERROR.notOnlyCategory;

    if (item.every(isOnlyDrink)) {
      throw new CustomError(ERROR.onlyDrink);
    }
  },

  checkHasNotNumber(quantity) {
    quantity.forEach(number => {
      if (this.isNotNumber(number)) {
        throw new CustomError(ERROR.inValidMenu);
      }
    });
  },

  checkHasNotInRange(quantity) {
    quantity.forEach(number => {
      if (this.isNotInRage(number)) {
        throw new CustomError(ERROR.inValidMenu);
      }
    });
  },

  checkTotalQuantity(quantity) {
    const totalQuantity = quantity.reduce((sum, number) => sum + number);
    if (totalQuantity > ORDER_QUANTITY.max) {
      throw new CustomError(ERROR.overQuantity);
    }
  },

  isNotInRage: number =>
    number < ORDER_QUANTITY.min || number > ORDER_QUANTITY.max,

  isNotNumber: number => Number.isNaN(number),
};

export default MenuValidator;

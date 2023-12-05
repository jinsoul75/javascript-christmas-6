import ERROR from '../constant/error.js';
import { MENU } from '../constant/menu.js';
import CustomError from '../util/CustomError.js';

const MenuValidator = {
  validateMenu(item, quantity) {
    this.validteItem(item);
    this.validateQuantity(quantity);
  },

  validteItem(item) {
    const menuList = Object.keys(MENU);

    const combineMenu = new Set([...item, ...menuList]);

    if (menuList.length !== combineMenu.size) {
      throw new CustomError(ERROR.inValidMenu);
    }
  },

  validateQuantity(quantity) {
    console.log(quantity);
  },
};

export default MenuValidator;

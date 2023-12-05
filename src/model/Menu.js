import MenuValidator from '../validator/MenuValidator.js';
import { MENU } from '../constant/menu.js';

class Menu {
  #menu;

  #item;

  #quantity;

  constructor(menu) {
    this.#menu = menu;

    const mapMenu = new Map(menu);
    this.#item = [...mapMenu.keys()];
    this.#quantity = [...mapMenu.values()];

    MenuValidator.validateMenu(this.#item, this.#quantity);
  }

  getMenu() {
    return [...this.#menu];
  }

  getItem() {
    return [...this.#item];
  }

  getQuantity() {
    return [...this.#quantity];
  }

  getTotalOrderAmount() {
    const totalOrderAmount = this.#menu.reduce(
      (acc, cur) => acc + MENU[cur[0]].price * cur[1],
      0,
    );
    return totalOrderAmount;
  }
}

export default Menu;

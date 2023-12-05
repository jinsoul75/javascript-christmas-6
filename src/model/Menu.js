import MenuValidator from '../validator/MenuValidator.js';

class Menu {
  #item;

  #quantity;

  constructor(menu) {
    const mapMenu = new Map(menu);
    this.#item = [...mapMenu.keys()];
    this.#quantity = [...mapMenu.values()];
    MenuValidator.validateMenu(this.#item, this.#quantity);
  }

  getItem() {
    return [...this.#item];
  }

  getQuantitu() {
    return [...this.#quantity];
  }
}

export default Menu;

import MenuValidator from '../validator/MenuValidator.js';

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

  getQuantitu() {
    return [...this.#quantity];
  }
}

export default Menu;

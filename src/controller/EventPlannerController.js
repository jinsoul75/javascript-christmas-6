import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import Date from '../model/Date.js';
import Menu from '../model/Menu.js';

class EventPlannerController {
  constructor() {
    OutputView.printWelcome();
  }

  async startPlan() {
    const date = await this.retryHandler(() => this.#getDate());
    const menu = await this.retryHandler(() => this.#getMenu());
  }

  async retryHandler(callback) {
    try {
      return await callback();
    } catch (error) {
      OutputView.printError(error.message);
      return this.retryHandler(callback);
    }
  }

  async #getDate() {
    const date = await InputView.readDate();

    return new Date(date);
  }

  async #getMenu() {
    const menu = await InputView.readMenu();

    const formattedMenu = this.formatMenu(menu);

    return new Menu(formattedMenu);
  }

  formatMenu(menu) {
    const formattedMenu = menu.split(',').map(item => {
      const [name, quantity] = item.split('-');
      return [name.replace(/\s/g, ''), Number(quantity.replace(/\s/g, ''))];
    });

    return formattedMenu;
  }
}

export default EventPlannerController;

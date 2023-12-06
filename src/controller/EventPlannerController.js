import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import Day from '../model/Day.js';
import Menu from '../model/Menu.js';
import Event from '../model/Event.js';

class EventPlannerController {
  #date;

  #menu;

  #event;

  constructor() {
    this.#event = new Event();
  }

  async startPlan() {
    OutputView.printWelcome();

    const date = await this.retryHandler(() => this.#getDate());
    const menu = await this.retryHandler(() => this.#getMenu());

    this.#printPreview(date, menu);

    // this.#event(this.#date, this.#menu);
  }

  #printPreview(date, menu) {
    OutputView.printEventHeader(date);
    OutputView.printOrderMenu(menu);
    OutputView.printTotalOrderAmount(this.#menu.getTotalOrderAmount());
  }

  // #getBenefit({ date, menu }) {
  //   OutputView.printGiftMenu(menu.getTotalOrderAmount());
  //   OutputView.printDateEvent(menu.getTotalOrderAmount(), this.#event.getBenefit());
  //   OutputView.printTotalBenefitAmount(this.#event.getTotalBenefitAmount());
  //   OutputView.printExpectAmount(this.#event.getExpectAmount());
  //   OutputView.printBadge(this.#event.getBadge(this.#event.getTotalBenefitAmount()));
  // }

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

    this.#date = new Day(date);

    return date;
  }

  async #getMenu() {
    const menu = await InputView.readMenu();

    const formattedMenu = this.#formatMenu(menu);

    this.#menu = new Menu(formattedMenu);

    return formattedMenu;
  }

  #formatMenu(menu) {
    const formattedMenu = menu.split(',').map(item => {
      const [name, quantity] = item.split('-');
      return [name.replace(/\s/g, ''), Number(quantity.replace(/\s/g, ''))];
    });

    return formattedMenu;
  }
}

export default EventPlannerController;

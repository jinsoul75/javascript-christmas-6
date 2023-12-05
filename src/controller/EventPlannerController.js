import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import Day from '../model/Day.js';
import Menu from '../model/Menu.js';
import Event from '../model/Event.js';
import { BADGE } from '../constant/constants.js';
import { MESSAGE } from '../constant/message.js';

class EventPlannerController {
  #date;

  #event;

  constructor() {
    OutputView.printWelcome();
  }

  async startPlan() {
    const date = await this.retryHandler(() => this.#getDate());
    const menu = await this.retryHandler(() => this.#getMenu());

    this.#getBenefit(date, menu);
  }

  #getBenefit(date, menu) {
    OutputView.printEventHeader(date);
    OutputView.printOrderMenu(menu.getMenu());
    OutputView.printTotalOrderAmount(menu.getTotalOrderAmount());
    OutputView.printGiftMenu(menu.getTotalOrderAmount());
    OutputView.printDateEvent(menu.getTotalOrderAmount(), this.#getEvent(menu));
    OutputView.printTotalBenefitAmount(this.#event.getTotalBenefitAmount());
    OutputView.printExpectAmount(this.#event.getExpectAmount());
    OutputView.printBadge(this.#getBadge(this.#event.getTotalBenefitAmount()));
  }

  #getEvent(menu) {
    this.#event = new Event(this.#date, menu);

    return this.#event.getBenefit();
  }

  #getBadge(benefitAmount) {
    if (benefitAmount < BADGE.star.price) {
      return MESSAGE.nothing;
    }
    if (benefitAmount < BADGE.tree.price) {
      return BADGE.star.name;
    }
    if (benefitAmount < BADGE.santa.price) {
      return BADGE.tree.name;
    }
    return BADGE.santa.name;
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

    this.#date = new Day(date);

    return date;
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

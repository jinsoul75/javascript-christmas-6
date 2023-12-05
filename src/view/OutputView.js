import { Console } from '@woowacourse/mission-utils';
import { HEADER, LIST, MESSAGE } from '../constant/message.js';

const OutputView = {
  printError(message) {
    Console.print(message);
  },

  printWelcome() {
    Console.print(MESSAGE.welcome);
  },

  printEventHeader(date) {
    Console.print(MESSAGE.eventHeader(date));
  },

  printOrderMenu(menu) {
    Console.print(HEADER.orderMenu);
    menu.forEach(item => Console.print(LIST.menu(item[0], item[1])));
  },
  printTotalOrderAmount(totalOrderAmount) {
    Console.print(HEADER.totalOrderAmount);
    Console.print(LIST.totalOrderAmount(totalOrderAmount));
  },
  printGiftMenu(totalOrderAmount) {
    Console.print(HEADER.giftMenu);
    Console.print(LIST.giftMenu(totalOrderAmount));
  },
  printDateEvent(totalOrderAmount, events) {
    Console.print(HEADER.benefit);
    events.forEach(event => Console.print(LIST.event(totalOrderAmount, event)));
  },
};

export default OutputView;

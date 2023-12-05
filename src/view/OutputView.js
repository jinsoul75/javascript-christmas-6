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
};

export default OutputView;

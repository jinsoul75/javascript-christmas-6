import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../constant/message.js';

const OutputView = {
  printError(message) {
    Console.print(message);
  },
  printWelcome() {
    Console.print(MESSAGE.welcome);
  },
  printMenu() {
    Console.print('<주문 메뉴>');
    // ...
  },
  // ...
};

export default OutputView;

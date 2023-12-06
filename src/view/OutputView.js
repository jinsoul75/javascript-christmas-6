import { Console } from '@woowacourse/mission-utils';
import { HEADER, LIST, MESSAGE } from '../constant/message.js';
import { AMOUNT } from '../constant/constants.js';

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

  printGiftMenu(giftQuantity) {
    Console.print(HEADER.giftMenu);
    Console.print(LIST.giftMenu(giftQuantity));
  },

  printDateEvent(totalOrderAmount, events) {
    Console.print(HEADER.benefit);
    if (totalOrderAmount < AMOUNT.minEventAmount || events.length === 0) {
      Console.print(MESSAGE.nothing);
      return;
    }
    events.forEach(([name, amount]) => Console.print(LIST.event([name, amount])));
  },

  printTotalBenefitAmount(amount) {
    Console.print(HEADER.totalBenefitAmount);
    Console.print(LIST.totalBenefit(amount));
  },

  printExpectAmount(amount) {
    Console.print(HEADER.expectedAmount);
    Console.print(LIST.expectAmount(amount));
  },

  printBadge(badge) {
    Console.print(HEADER.badge);
    Console.print(badge);
  },
};

export default OutputView;

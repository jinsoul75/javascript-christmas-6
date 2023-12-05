import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../constant/message.js';
import DateValidator from '../validator/DateValidator.js';

const InputView = {
  async readDate() {
    const date = await Console.readLineAsync(MESSAGE.askDate);

    DateValidator.validateDate(date);

    return date;
  },
  
  async readMenu() {
    const menu = await Console.readLineAsync(MESSAGE.askMenu);

    return menu;
  },
};

export default InputView;

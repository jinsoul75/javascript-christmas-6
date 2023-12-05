import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../constant/message.js';
import DateValidator from '../validator/DateValidator.js';

const InputView = {
  async readDate() {
    const date = await Console.readLineAsync(MESSAGE.askDate);

    DateValidator.validateDate(date);
    
    return date;
  },
};

export default InputView;

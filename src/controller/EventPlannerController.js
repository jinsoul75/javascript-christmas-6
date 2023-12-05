import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';

class EventPlannerController {
  constructor() {
    OutputView.printWelcome();
  }

  async startPlan() {
    const date = await this.retryHandler(() => InputView.readDate());
  }

  async retryHandler(callback) {
    try {
      return await callback();
    } catch (error) {
      OutputView.printError(error.message);
      return this.retryHandler(callback);
    }
  }
}

export default EventPlannerController;

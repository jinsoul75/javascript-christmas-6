import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';

class EventPlannerController {
  constructor() {
    OutputView.printWelcome();
  }

  async startPlan() {
    const date = await InputView.readDate();
  }
}

export default EventPlannerController;

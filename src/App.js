import EventPlannerController from './controller/EventPlannerController.js';

class App {
  constructor() {
    this.eventPlannerController = new EventPlannerController();
  }

  async run() {
    await this.eventPlannerController.startPlan();
  }
}

export default App;

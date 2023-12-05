import { AMOUNT, EVENT } from '../constant/constants.js';

class Event {
  #date;

  #menu;

  #event;

  constructor(date, menu) {
    this.#date = date;
    this.#menu = menu;
  }

  getBenefit() {
    this.#event = [];
    
    if (this.#date.isBeforeChristmas()) {
      this.#event.push(this.#getChristmasEvent());
    }

    if (!this.#date.isWeekend() && this.#menu.getDessertQuantity()) {
      this.#event.push(this.#getWeekdayEvent());
    }

    if (this.#date.isWeekend() && this.#menu.getMainQuantity()) {
      this.#event.push(this.#getWeekendEvent());
    }

    if (this.#date.isSpecialDay()) {
      this.#event.push(this.#getSpecialEvent());
    }

    if (this.#menu.getTotalOrderAmount() >= AMOUNT.minGiftAmount) {
      this.#event.push([EVENT.gift, AMOUNT.giftEvent]);
    }

    return [...this.#event];
  }

  #getChristmasEvent() {
    const dDay = this.#date.countdDay();

    const discountAmount =
      AMOUNT.standarddDayEvent + AMOUNT.dDayEventDiscountUnit * dDay;

    return [EVENT.christmasdDay, discountAmount];
  }

  #getWeekdayEvent() {
    const discountAmount = AMOUNT.dayDiscount * this.#menu.getDessertQuantity();

    return [EVENT.weekday, discountAmount];
  }

  #getWeekendEvent() {
    const discountAmount = AMOUNT.dayDiscount * this.#menu.getMainQuantity();

    return [EVENT.weekend, discountAmount];
  }

  #getSpecialEvent() {
    const discountAmount = AMOUNT.specialDiscount;

    return [EVENT.special, discountAmount];
  }

  getTotalBenefitAmount() {
    const totalBenefitAmount = this.#event.reduce(
      (sumAmount, event) => sumAmount + event[1],
      0,
    );

    return totalBenefitAmount;
  }

  getExpectAmount() {
    if (this.#menu.getTotalOrderAmount() >= AMOUNT.minGiftAmount) {
      return this.getTotalBenefitAmount() - AMOUNT.giftEvent;
    }

    return this.getTotalBenefitAmount();
  }
}

export default Event;

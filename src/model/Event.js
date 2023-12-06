import { AMOUNT, EVENT, BADGE } from '../constant/constants.js';
import { MESSAGE } from '../constant/message.js';
import { CATEGORY } from '../constant/menu.js';

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

    // TODO: 분리하기
    if (this.#menu.getTotalOrderAmount() >= AMOUNT.minGiftAmount) {
      this.#event.push([EVENT.gift, AMOUNT.giftEvent]);
    }

    return [...this.#event];
  }

  #getChristmasEvent() {
    const dDay = this.#date.countdDay();

    const discountAmount = AMOUNT.standarddDayEvent + AMOUNT.dDayEventDiscountUnit * dDay;

    return [EVENT.christmasdDay, discountAmount];
  }

  #getWeekdayEvent() {
    const discountAmount = AMOUNT.dayDiscount * this.#menu.getCategoryQuantity(CATEGORY.dessert);

    return [EVENT.weekday, discountAmount];
  }

  #getWeekendEvent() {
    const discountAmount = AMOUNT.dayDiscount * this.#menu.getCategoryQuantity(CATEGORY.main);

    return [EVENT.weekend, discountAmount];
  }

  #getSpecialEvent() {
    const discountAmount = AMOUNT.specialDiscount;

    return [EVENT.special, discountAmount];
  }

  // TODO: 할인금액 , 혜택금액 분리하기
  getTotalBenefitAmount() {
    const totalBenefitAmount = this.#event.reduce((sumAmount, event) => sumAmount + event[1], 0);

    return totalBenefitAmount;
  }

  getExpectAmount() {
    if (this.#menu.getTotalOrderAmount() >= AMOUNT.minGiftAmount) {
      return this.getTotalBenefitAmount() - AMOUNT.giftEvent;
    }

    return this.getTotalBenefitAmount();
  }

  getBadge(benefitAmount) {
    if (benefitAmount < BADGE.star.price) {
      return MESSAGE.nothing;
    }
    if (benefitAmount < BADGE.tree.price) {
      return BADGE.star.name;
    }
    if (benefitAmount < BADGE.santa.price) {
      return BADGE.tree.name;
    }
    return BADGE.santa.name;
  }
}

export default Event;

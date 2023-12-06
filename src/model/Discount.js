import { EVENT, AMOUNT } from '../constant/constants.js';
import { CATEGORY } from '../constant/menu.js';

class Discount {
  #discount;

  constructor() {
    this.#discount = [];
  }

  apply(date, menu) {
    if (date.isBeforeChristmas()) {
      this.#discount.push(this.#getChristmasDiscount(date));
    }
    if (!date.isWeekend() && menu.getQuantityByCategory(CATEGORY.dessert)) {
      this.#discount.push(this.#getWeekdayDiscount(menu));
    }
    if (date.isWeekend() && menu.getQuantityByCategory(CATEGORY.main)) {
      this.#discount.push(this.#getWeekendDiscount(menu));
    }
    if (date.isSpecialDay()) {
      this.#discount.push(this.#getSpecialDiscount());
    }
  }

  #getChristmasDiscount(date) {
    const dDay = date.countdDay();

    const discountAmount = AMOUNT.standarddDayEvent + AMOUNT.dDayEventDiscountUnit * dDay;

    return [EVENT.christmasdDay, discountAmount];
  }

  #getWeekdayDiscount(menu) {
    const discountAmount = AMOUNT.dayDiscount * menu.getQuantityByCategory(CATEGORY.dessert);

    return [EVENT.weekday, discountAmount];
  }

  #getWeekendDiscount(menu) {
    const discountAmount = AMOUNT.dayDiscount * menu.getQuantityByCategory(CATEGORY.main);

    return [EVENT.weekend, discountAmount];
  }

  #getSpecialDiscount() {
    const discountAmount = AMOUNT.specialDiscount;

    return [EVENT.special, discountAmount];
  }

  getAppliedDiscount() {
    return [...this.#discount];
  }

  getTotalDiscountAmount() {
    const discount = this.#discount.map(discountList => discountList[1]);

    const totalDiscountAmount = discount.reduce((sumAmount, amount) => sumAmount + amount, 0);

    return totalDiscountAmount;
  }
}

export default Discount;

import { BADGE } from '../constant/constants.js';
import { MESSAGE } from '../constant/message.js';

import Gift from './Gift.js';
import Discount from './Discount.js';

class Event {
  #gift;

  #discount;

  constructor() {
    this.#gift = new Gift();
    this.#discount = new Discount();
  }

  applyEvent(date, menu) {
    this.#gift.apply(menu);
    this.#discount.apply(date, menu);
  }

  getTotalBenefitAmount() {
    const totalBenefitAmount = this.#discount.getTotalDiscountAmount() + this.#gift.getAmount();

    return totalBenefitAmount;
  }

  getExpectAmount(totalOrderAmount) {
    return totalOrderAmount - this.#discount.getTotalDiscountAmount();
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

  getGift() {
    return this.#gift.getCount();
  }

  getEvent() {
    return [...this.#discount.getAppliedDiscount(), ...this.#gift.getGift()];
  }
}

export default Event;

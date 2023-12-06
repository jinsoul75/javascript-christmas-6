import { EVENT, GIFT } from '../constant/constants.js';

class Gift {
  #count = 0;

  #amount = 0;

  #gift = [];

  apply(menu) {
    if (menu.getTotalOrderAmount()) {
      this.#count += GIFT.quantity;
      this.#amount += GIFT.price;
    }
  }

  getGift() {
    if (this.#amount > 0) {
      this.#gift.push([EVENT.gift, GIFT.price]);
    }

    return this.#gift;
  }

  getCount() {
    return this.#count;
  }

  getAmount() {
    return this.#amount;
  }
}

export default Gift;

// gift 객체 내에서 가격이랑 개수 모두 관리 => 나중에 다 필요한거니까 ... 재사용성 고려..

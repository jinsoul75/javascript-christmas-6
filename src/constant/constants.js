export const DATE = {
  min: 1,
  max: 31,
  christmas: 25,
  getFullDate: day => `2023-12-${day}`,
  weekend: [5, 6],
  specialDay: [3, 10, 17, 24, 25, 31],
};

export const ORDER_QUANTITY = {
  min: 1,
  max: 20,
};

export const AMOUNT = {
  minEventAmount: 10000,
  minGiftAmount: 120000,
  standarddDayEvent: 1000,
  dDayEventDiscountUnit: 100,
  dayDiscount: 2023,
  specialDiscount: 1000,
  giftEvent: 25000,
};

export const GIFT = {
  item: '샴페인',
  quantity: '1',
};

export const EVENT = {
  christmasdDay: '크리스마스 디데이 할인',
  weekday: '평일 할인',
  weekend: '주말 할인',
  special: '특별 할인',
  gift: '증정 이벤트',
};

export const BADGE = {
  star: { price: 5000, name: '별' },
  tree: { price: 10000, name: '트리' },
  santa: { price: 20000, name: '산타' },
};

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
  dDayEventUnit: 100,
};

export const GIFT = {
  item: '샴페인',
  quantity: '1',
};

export const EVENT = {
  christmasdDay: '크리스마스 디데이 할인',
  weekDay: '평일 할인',
  weekend: '주말 할인',
  special: '특별 할인',
  gift: '증정 이벤트',
};

export const EVENT_NAME = [
  'christmasdDay',
  'weekDay',
  'weekend',
  'special',
  'gift',
];

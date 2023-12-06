import { ORDER_QUANTITY } from './constants.js';

const ERROR = {
  header: '[ERROR]',
  inValidDate: '유효하지 않은 날짜입니다. 다시 입력해 주세요.',
  inValidMenu: '유효하지 않은 주문입니다. 다시 입력해 주세요.',
  overQuantity: `메뉴의 개수는 ${ORDER_QUANTITY.max}개를 초과할 수 없습니다. 다시 입력해 주세요.`,
  onlyDrink: '음료만 주문할 수 없습니다. 다시 입력해 주세요.',
  notOnlyCategory: 'drink',
};

export default ERROR;

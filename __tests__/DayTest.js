import Day from '../src/model/Day';

describe('날짜 클래스 테스트', () => {
  test('isBeforeChristmas 메소드 테스트', () => {
    // given
    const date = 26;

    //when
    const day = new Day(date);

    // then
    expect(day.isBeforeChristmas()).toBe(false);
  });

  test('countdDay 메소드 테스트', () => {
    const date = 1;

    const day = new Day(date);

    expect(day.countdDay()).toBe(0);
  });
  test('isWeekend 메소드 테스트', () => {
    const date = 2;

    const day = new Day(date);

    expect(day.isWeekend()).toBe(true);
  });
});

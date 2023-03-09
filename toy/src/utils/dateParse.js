import { faker } from "@faker-js/faker";

export const DateGap = (nowDate, postDate) => {
  if (nowDate - postDate === 0) return '4시간 이내..';
  if (nowDate - postDate === 1) return '1일전';
  if (nowDate - postDate === 2) return '2일전';
  if (nowDate - postDate === 3) return '3일전';
  return false;
};

export const today = faker.date.between('2023-01-01T00:00:00.000Z', '2023-01-31T00:00:00.000Z');

export const days = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];

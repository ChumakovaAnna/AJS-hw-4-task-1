import getNumber from './basic';

console.log('worked');

try {
  console.log(getNumber({}));
} catch (e) {
  console.log(e);
  console.log('Введите корректное значение');
}

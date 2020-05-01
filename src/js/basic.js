export default function getNumber(str) {
  if (str === '') {
    throw new Error('String is empty');
  }

  const newNumber = Number(str);

  if (Number.isNaN(newNumber)) {
    throw new Error('String is not number');
  }

  return newNumber;
}

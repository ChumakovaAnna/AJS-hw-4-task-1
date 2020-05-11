export default function getNumber(str) {
  if (str === "") {
    throw new Error("String is empty");
  }

  const newNumber = Number.parseInt(str, 10);

  if (Number.isNaN(newNumber)) {
    throw new Error("String is not number");
  }

  return newNumber;
}

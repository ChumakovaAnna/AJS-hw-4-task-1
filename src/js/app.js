import getNumber from "./getNumber";

console.log("worked");

try {
  console.log(getNumber("0x12"));
} catch (e) {
  console.log(e);
  console.log("Введите корректное значение");
}

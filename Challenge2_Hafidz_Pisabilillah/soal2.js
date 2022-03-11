function checkTypeNumber(givenNumber) {
  if (givenNumber == null) {
    givenNumber = "Error : Bro where is the parameter?";
  } else if (typeof givenNumber == "number") {
    if (givenNumber % 2 == 0) {
      givenNumber = "GENAP";
    } else {
      givenNumber = "GANJIL";
    }
  } else {
    givenNumber = "Error : Invalid Data Type";
  }

  return givenNumber;
}
console.log(checkTypeNumber(10));
console.log(checkTypeNumber(3));
console.log(checkTypeNumber("3"));
console.log(checkTypeNumber({}));
console.log(checkTypeNumber([]));
console.log(checkTypeNumber());

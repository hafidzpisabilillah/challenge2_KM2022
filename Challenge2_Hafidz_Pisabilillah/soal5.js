function getSplitName(personName) {
  const name = personName.split(" ");
  const lengthName = name.length;

  switch (lengthName) {
    case 1:
      return {
        firstName: name[0],
        middleName: null,
        lastName: null,
      };
    case 2:
      return {
        firstName: name[0],
        middleName: null,
        lastName: name[1],
      };
    case 3:
      return {
        firstName: name[0],
        middleName: name[1],
        lastName: name[2],
      };
    default:
      return "Error : This function is only for 3 characters name";
  }
}
console.log(getSplitName("Aldi Daniela Pranata"));
console.log(getSplitName("Dwi Kuncoro"));
console.log(getSplitName("Aurora"));
console.log(getSplitName("Aurora Aureliya Sukma Darma"));
// console.log(getSplitName(0));

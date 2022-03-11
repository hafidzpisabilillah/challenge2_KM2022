function isValidPassword(givenPassword) {
  /* -- Pemberian regex untuk penggunaan minimal 1 huruf kecil: (?=.*[a-z])
       --
    */
  let re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

  let soal4;
  if (givenPassword == null) {
    return "ERROR: Where is the password?";
  } else if (typeof givenPassword == "string") {
    if (givenPassword.match(re)) {
      soal4 = "true";
    } else {
      soal4 = "false";
    }
    return soal4;
  } else {
    return "ERROR: Invalid data type (password must be string)";
  }
}

console.log(isValidPassword("Meong2021"));
console.log(isValidPassword("meong2021"));
console.log(isValidPassword("@eong"));
console.log(isValidPassword("Meong2"));
console.log(isValidPassword(0));
console.log(isValidPassword());

function checkEmail(email) {
  if (!email) return "Error : Need one parameter";
  if (typeof email != "string") return "Error : invalid data type";
  return email.match(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/) ? "Valid" : "Invalid"; //Regex
}
console.log(checkEmail("apranata@binar.co.id")); // OUTPUT yang keluar => "VALID"
console.log(checkEmail("apranata@binar.com")); // OUTPUT yang keluar => "VALID"
console.log(checkEmail("apranata@binar")); // OUTPUT yang keluar => "INVALID"
console.log(checkEmail(/apranata/)); // OUTPUT yang keluar => Error atau data INVALID
console.log(checkEmail(3322)); // EXPECTED OUTPUT => Error atau data INVALID
console.log(checkEmail()); // OUTPUT => ERROR: email tidak diketahui?

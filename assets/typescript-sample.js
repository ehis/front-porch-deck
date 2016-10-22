var User = (function () {
  function User(firstName, middleInitial, lastName) {
    this.firstName = firstName;
    this.middleInitial = middleInitial;
    this.lastName = lastName;
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
  return User;
} ());
var user = new User('bob', 'michael', 'dylan');
console.log(user.fullName);
console.log(user.firstName);

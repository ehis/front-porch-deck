class User {
  fullName: string;
  constructor(public firstName,
    public middleInitial,
    public lastName) {
    this.fullName = `${firstName} ${middleInitial} ${lastName}`;
  }
}

const user = new User('bob', 'michael', 'dylan')
console.log(user.fullName);
console.log(user.firstName);

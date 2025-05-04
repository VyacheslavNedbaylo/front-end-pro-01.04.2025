const user = {
  name: "Олексій",
  age: 35,
  location: "Одеса",
  email: "olex35@gmail.com",

  displayInfo: function () {
    console.log(`Ім'я: ${this.name}`);
    console.log(`Вік: ${this.age}`);
    console.log(`Місце проживання: ${this.location}`);
    console.log(`Email: ${this.email}`);
  },
};

user.displayInfo();

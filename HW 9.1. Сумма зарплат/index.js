const company = {
  sales: [
    { name: "John", salary: 1000 },
    { name: "Alice", salary: 600 },
  ],
  development: {
    web: {
      frontend: {
        angular: [{ name: "Anna", salary: 900 }],
        react: [
          { name: "Gnat", salary: 1500 },
          { name: "Slava", salary: 4500 },
        ],
      },
      backend: [
        { name: "Andy", salary: 500 },
        { name: "Mia", salary: 1500 },
      ],
    },
    internals: [{ name: "Jack", salary: 1300 }],
  },
};
function sumSalaries(department) {
  if (Array.isArray(department)) {
    return department.reduce((sum, person) => sum + person.salary, 0);
  } else {
    let sum = 0;
    for (let subdep of Object.values(department)) {
      sum += sumSalaries(subdep);
    }
    return sum;
  }
}
console.log(sumSalaries(company));

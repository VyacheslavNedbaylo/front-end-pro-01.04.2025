let exchangeRate = 26; 

for (let dollars = 10; dollars <= 100; dollars += 10) {
  let gryvna = dollars * exchangeRate;
  console.log(`${dollars} доларів = ${gryvna} гривень`);
}
let isPrime = false;
let number = 30;

while (isPrime === false) {


  //console.log (x, y);
  //isPrime = false;
  number += 1;
  isPrime = true;
  if (number === 1) {
    isPrime = true;
  } else {
    for (let index = 2; index < number; index++) {
      if (number % index === 0){
        isPrime = false;
      }
    }
  }
}
if (isPrime === true){
  console.log(number);
}

let isPrime = false;
let number = 0;
let items = [];


for (let x = 0; x < 10; x++){
  items[x] = [];
  for (let y = 0; y < 10; y++){
    isPrime = false;
    while (isPrime === false) {


      //console.log (x, y, number);
      isPrime = true;
      number += 1;

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
      items[x][y] = number;
    }
  }

}

console.log(items);
//console.log(items[7][7]);

// 1
function sum() {
  let sumVar = 0;
  return function(number) {
    sumVar += number;
    return sumVar;
  }
}
const addition = sum();

console.log(`Сума перший запуск: ${addition(8)}`);
console.log(`Сума другий запуск: ${addition(10)}`);

// 2
const arr = [1, 4, 'text', ['text', 1, 4], {key:"value"}, 8, true, '5'];
function avgOnlyNumberFromArr(arr) {
  let sum = 0;
  let numberElements = 0;
  arr.forEach(element => {
    if(typeof element === 'number') {
      sum += element;
      numberElements++;
    }
  });
  return Math.round(sum / numberElements);
}
console.log(`Середнє арифметичне тільки чисел з масиву: ${avgOnlyNumberFromArr(arr)}`);

// 3
const x = Number(prompt('введіть будь ласка перше число'));
const znak = prompt('введіть будь ласка знак дії напр.: + - * / % ^');
const y = Number(prompt('введіть будь ласка друге число'));

function doMath(x, znak, y) {
  let result;
  switch(znak) {
    case('+'):
      result = x + y;
      break;
    case('-'):
      result = x - y;
      break;
    case('*'):
      result = x * y;
      break;
    case('/'):
      result = x / y;
      break;
    case('%'):
      result = x % y;
      break;
    case('^'):
      for(let i = 0; i < y; i++) {
        result *= x;
      }
      break;
  }
  return result;
}

alert(`Ваш результат: ${doMath(x, znak, y)}`);

// 4
function twoDimentionalArrCreator() {
  let twoDimentionalArr = [];
  const mainArrLength = Number(prompt('задайте довжину основного масиву'));
  
  for(let i = 0; i < mainArrLength; i++) {
    const innerArrLength = Number(prompt(`задайте довжину масиву (${i + 1})`));
    let innerArr = [];
    for(let j = 0; j < innerArrLength; j++) {
      innerArr.push(prompt(`задайте значення елементу (${j + 1})`));
    }
    twoDimentionalArr.push(innerArr);
  }

  alert('Ваш масив буде виведено у консоль');
  console.log(twoDimentionalArr);
}
twoDimentionalArrCreator();

// 5
function deleteLetters(word, arrayOfLetters) {
  let wordArr = word.split('');
  for(let i in arrayOfLetters) {
    wordArr = wordArr.filter(item => item != arrayOfLetters[i]);
  }
  return wordArr.join('');
}

console.log('Видалення елементів з масиву: ' + deleteLetters('hello world', ['l', 'd']));
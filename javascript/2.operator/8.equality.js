// 동등 비교 관계 연산자 (Equality operators)
// == 값이 같음
// != 값이 다름
// === 값과 타입이 둘 다 같음
// !== 값과 타입이 다름 
console.log(2 == 2);
console.log(2 != 2);
console.log(2 != 3);
console.log(2 == 3);
console.log(2 == '2'); // true
console.log(2 === '2'); // false

console.clear();

const obj1 = {
  name: 'js',
};

const obj2 = {
  name : 'js',
}

console.log(obj1 == obj2); // false 
console.log(obj1 === obj2); // false 
console.log(obj1.name == obj2.name); // true
console.log(obj1.name === obj2.name); // true

let obj3 = obj2; // 동일한 메모리 주소를 가졌기 때문에
console.log(obj3 == obj2);
console.log(obj3 === obj2);
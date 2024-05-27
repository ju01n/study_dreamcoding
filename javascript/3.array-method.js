// 배열의 함수들
// 배열 자체를 변경하는지, 새로운 배열을 반환하는지
const fruits = ['🍌', '🍎', '🍋'];

// 특정한 오브젝트가 배열인지 체크
console.log(Array.isArray(fruits)); // true
console.log(Array.isArray({})); // false

// 특정한 아이템의 위치를 찾을때
console.log(fruits.indexOf('🍎'));

// 배열안에 특정한 아이템이 있는지 체크
console.log(fruits.includes('🍎'));

// 추가 - 제일 뒤에
let length = fruits.push('🍑'); // 배열 자체를 수정(업데이트)
console.log(fruits);
console.log(length);

// 추가 - 제일 앞에
length = fruits.unshift('🍓'); // 배열 자체를 수정(업데이트)
console.log(fruits);
console.log(length);

// 제거 - 제일 뒤에
let lastItem = fruits.pop(); // 배열 자체를 수정(업데이트)
console.log(fruits);
console.log(length);

// 제거 - 제일 앞에
lastItem = fruits.shift(); // 배열 자체를 수정(업데이트)
console.log(fruits);

// 중간에 추가 또는 삭제
const deleted = fruits.splice(1, 1); // 배열 자체를 수정(업데이트)
console.log(fruits);
console.log(deleted);
fruits.splice(1, 1, '🍉', '🍍'); // 배열에서 첫번째에서부터 1개 삭제하고, 뒤에 아이템들을 추가하기
console.log(fruits); // 배열 자체를 수정(업데이트)

// 잘라진 새로운 배열을 만듦
let newArr = fruits.slice(0, 2);
console.log(newArr);
console.log(fruits);
newArr = fruits.slice(-1); // 뒤에서 하나 자름 
console.log(newArr);

// 여려개의 배열을 붙여줌
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2); // arr1의 배열을 가지고와서 arr2와 붙임
console.log(arr1);
console.log(arr2);
console.log(arr3);

// 순서를 거꾸로
const arr4 = arr3.reverse();
console.log(arr4);

// 중첩 배열을 하나의 배열로 쫙 펴기
let arr = [
  [1, 2, 3],
  [4, [5, 6]]
];
console.log(arr);
console.log(arr.flat()); // 1단계까지만 중첩된 것을 풀어줌
console.log(arr.flat(2)); // 2단계까지 중첩된 것을 풀어줌
arr = arr.flat(3);

// 특정한 값으로 배열을 채우기
arr.fill(0); // 배열 자체를 수정
console.log(arr); // 0으로 채워짐

arr.fill('s', 1, 3);
console.log(arr);

arr.fill('a', 1);
console.log(arr);

// 배열을 문자열로 합하기
let text = arr.join();
console.log(text);
text = arr.join(' | ')
console.log(text);

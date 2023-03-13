#   Array

  ### ans-1
  ```
let arr=["wecode"]
console.log(arr)
```

 ### ans-2
 ```
let arr=["rashid","wecode",23443,34,"academy"]
console.log(arr[1],arr[4] )
```


 ### ans-3
```
    let arr=[1,2,3,4,5,6,7,8,9,10,];

for(let a=0;a<arr.length;a++){
    console.log(arr[a])
}
```
### ans-4
```
let arr=[1,2,3,4,5,6,7,8,9,10]

for(let a=arr.length-1;a>=0;a--){
    console.log(arr[a])
}
```

1. Find max number from array

let arr = [1, 2, 3, 4, 5];

let max = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (max < arr[i]) {
    max = arr[i];
  }
}
console.log(max);

2. find min number from array

let arr = [7, 4, 3, 5, 7];
let min = arr[0];

for (let a = arr.length; a > 0; a--) {
  if (min > arr[a]) {
    min = arr[a];
  }
}
console.log(min);

3. Find total duplicate count of a number

let arr = [2, 4, 6, 4, 5, 6];
let num = 4;
let count = 0;

for (let a = 0; a < arr.length; a++) {
  if (num === arr[a]) {
    count++;
  }
}

console.log(count);

8. find odd element of the array

let arr=[1,23,45,5,4,35,6,10]

for(let a=0;a<arr.length;a++){
    if(arr[a]%2===1){
        console.log(arr[a])
    }

}

ans-9 find even numbers in array

let arr = [3, 4, 57, 27, 87, 2];

for (let a = 0; a < arr.length; a++) {
  if (arr[a] % 2 === 0) {
    console.log(arr[a]);
  }
}

Count Even numbers
let arr = [10, 2, 3, 10, 5, 2, 10, 3, 4, 56, 10, 2, 19, 21, 23];
let count = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    count++;
  }
}
console.log(count);

ans-1

let arr=[2,3,5,63,65,32,22]

let odd=0

for(let i=0;i<arr.length;i++){
    if(arr[i]%2===1 ){
        odd++;
    }

}

console.log(odd)


ans-2

let arr=[2,3,5,63,65,32,22]

let even=0

for(let i=0;i<arr.length;i++){
    if(arr[i]%2===0 ){
        even++;
    }

}
console.log(even)

ans-5

let multi = 1;
let arr = [1, 2, 3, 4];
for (i = 0; i < arr.length; i++) {
  multi = multi * arr[i];
}
console.log(multi);

ans-4

let arr=[19,11,31,]
let num=0

for(let a=0;a<arr.length;a++){
    if(arr[a]%2===1){
        num++
    }

}
console.log(num)

 array methor

let arr = [];
1st tarika. Direct index pr value dalni ho to
arr[0] = 10;
arr[1] = 100;
arr[2] = 900;
2nd way. push function
arr.push(77);
arr.push(88);
console.log(arr);
Value override
arr[1] = 500;
console.log(arr);
arr.pop();
arr.pop();
console.log(arr);
arr.unshift(111);
arr.unshift(222);
console.log(arr);
arr.shift();
console.log(arr);
console.log(arr.toString());
arr.push(1);
arr.push(2);
console.log(arr);
console.log(arr.join("*"));
let newArr = [6, 7, 8];
let arr2 = [10, 13, 15];
console.log(newArr.concat(arr, arr2));
console.log(arr.reverse());
console.log(arr.at(-2));
console.log(arr.find(2))

end

  Array mathars

let arr = [];

arr[0] = 2;
arr[1] = 4;
arr[2] = 6;

console.log(arr);

push

arr.push(10);

console.log(arr);

pop

arr.pop();

console.log(arr);

unshift

arr.unshift(0);

console.log(arr);

 shift

arr.shift();

console.log(arr);

toString
console.log(arr.toString());

join
console.log(arr.join("*"));

 concat

let arr2 = [5, 10, 15];

console.log(arr.concat(arr2));

reverse

console.log(arr2.reverse())

 at

console.log(arr2.at(-1))

   end

  Array question

Ek array bnana hai

1. Array ka starting se 2nd element and back se 2nd element equal hai kya.

2. Array me 3 new numbers push krne hai
   1 number unshift krna hai
   2 shift krne hai
   2 pop krne hai
Aur fir result check krna hai

3. Array ko reverse krke use ** se join krna hai

4. Write a program to reverse the array using for loop

5. Write a program to sort the given array using for loop

6. Move all the negative elements to one side of the array using for loop

7. Find the Union and Intersection of the two sorted arrays

ans-2

let arr=[]

arr.push(2)
arr.push(4)
arr.push(6)
arr.unshift(1)
arr.shift()
arr.pop()

console.log(arr)

ans-3

let arrNumber=[2,4,6,8,10,12]

arrNumber.reverse()

console.log(arrNumber.join("**"))

ans-4

let arrNumber = [2, 4, 6, 8, 10];

for (let index = arrNumber.length - 1; index >= 0; index--) {
  console.log(arrNumber[index]);
}

ans-7

let arrNumber = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

for (let i = 0; i < arrNumber.length; i++)
  if (i % 2 === 0) {
    console.log(arrNumber[i]);
  }

 Array function question

1. Function ko 1 number pass krna hai. jo number pass kia hai us number ki table print krni hai. for example 5
5*1=5
5*2=10

2. Function ko 2 numbers pass krne hai. Numbers ko multiply krna hai

3. Function ko array bnana hai and array ke sare numbers ko print krna hai

4. Function bnana hai. Function me ek value leni hai. agar value true hai to Yes print kro otherwise No print kro

5. Function bnana hai. Function ko 2 numbers pass krne hai min and max. for example 10 and 20 to tume 10 se leke 20 tak print krvana hai

6. function bnana hai. Function ko 1 number pass krna hai. 0 se leke us number tak jitne b Odd numbers hai vo print krne hai.

7. function bnana hai. Function ko 1 number pass krna hai. 0 se leke us number tak jitne b Even numbers hai vo print krne hai.

8. Ek function bnana hai. Is function ko 2 number pas krne hai. phla number ek number hoga aur dusra number maximum number hoga. fir hume phle number ke multiples max number tak print krne hai.

for example: 5, 100
5 10 15 20 25...... 100

Q.1
function printTable(num) {
    for (let i = 1; i <= 10; i++) {
      console.log(`${num}*${i}=${num * i}`);
    }
  }
  printTable(5);

  Q.2

  function mul(a, b) {
    console.log(a * b);
  }
  mul(10, 20);

  Q.3

  function printArray(arr) {
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i]);
    }
}

printArray([1, 2, 3, 4, 5, 6, 7]);

Q.4
function checkValue(val) {
  if (val) {
    console.log("Yes");
  } else {
    console.log("NO");
  }
}

checkValue(0);
checkValue(20);
checkValue(true);

Q.5

function printInRange(num1, num2) {
  for (let i = num1; i <= num2; i++) {
    console.log(i);
  }
}

printInRange(100, 133);

Q.6
function printOddNumbers(num) {
  for (let i = 0; i <= num; i++) {
    if (i % 2 === 1) {
      console.log(i);
    }
  }
}

printOddNumbers(15);

Q.7
function printEvenNumbers(num) {
  for (let i = 0; i <= num; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

printEvenNumbers(15);

Q.8
function printMultiples(mul, upperLimit) {
  for (let i = 1; i <= upperLimit; i++) {
    if (i % mul === 0) {
      console.log(i);
    }
  }
}

printMultiples(5, 50);

  Array function return

1. function oddEven(num) yadi number odd hai to Odd word return kro otherwise Even word return kro
2. function max(arr) max number find krke return krna hai
3. function min(arr) min number find krke return krna hai
4. function minAndMax(arr) min and max number find krke dono ko plus krke return krna hai
5. function minAndMaxArr(arr) ek new array bnana hai usme 0 index pr to min number store krna hai and 1 index pr maximum number ko store krvake array ko return krna hai
6. function reverseString(str) function ko ek string pass krni hai. is string ko reverse krke return krna hai
for example: My name is Wecode
output: Wecode is name My
7. function maskMobile(mobileNumber, start, end, char, total)
maskMobile(9581894461, yes, false, '*', 5)
output: ***94461
maskMobile(9581894461, false, yes, '*', 5)
output: 95818***
maskMobile(9581894461, false, false, '*', 5)
output: 9581894461
8. Replace all words in a string

function replaceString(str, word, newWord)

replaceString("Hello my name is Wecode and is hello test", "is", "are")
output: Hello my name are Wecode and are hello test

                1. function oddEven(num) yadi number odd hai to Odd word return kro otherwise Even word return kro
function oddEven(num) {
    if (num % 2 === 0) {
      return "Even";
    } else {
      return "Odd";
    }
  }

  console.log(oddEven(11));
  console.log(oddEven(12));

2. function max(arr) max number find krke return krna hai
function max(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (max < arr[i]) {
        max = arr[i];
      }
    }
    return max;
  }
  console.log(max([1, 32, 43, 21, 87, 56, 22]));
  console.log(max([1, 322, 43, 21, 87, 56, 22]));

3. function min(arr) min number find krke return krna hai
function min(arr) {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (min > arr[i]) {
        min = arr[i];
      }
    }
    return min;
  }
  console.log(min([1, 32, 43, 21, 87, 56, 22]));
  console.log(min([10, 322, 43, 21, 87, 56, 22]));

3. function maxMin(arr) min and max number find krke return krna hai
function maxMin(arr) {
    let min = arr[0];
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (min > arr[i]) {
        min = arr[i];
      }
      if (max < arr[i]) {
        max = arr[i];
      }
    }
    console.log("max", max, "min", min);
  }
  maxMin([1, 32, 43, 21, 87, 56, 22]);
  maxMin([10, 322, 43, 21, 87, 56, 22]);

/4. function minAndMax(arr) min and max number find krke dono ko plus krke return krna hai
function maxMin(arr) {
  let min = arr[0];
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max + min;
}
console.log(maxMin([1, 32, 43, 21, 87, 56, 22]));
console.log(maxMin([10, 322, 43, 21, 87, 56, 22]));

5. function minAndMaxArr(arr) ek new array bnana hai usme 0 index pr to min number store krna hai and 1 index pr maximum number ko store krvake array ko return krna hai
function maxMin(arr) {
    let min = arr[0];
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (min > arr[i]) {
        min = arr[i];
      }
      if (max < arr[i]) {
        max = arr[i];
      }
    }
    return [min, max];
  }
  console.log(maxMin([1, 32, 43, 21, 87, 56, 22]));
  console.log(maxMin([10, 322, 43, 21, 87, 56, 22]));


 6. function reverseString(str) function ko ek string pass krni hai. is string ko reverse krke return krna hai 
for example: My name is Wecode 
output: Wecode is name My 
 
function reverseString(str) {
    let arr = str.split(" ");
    1st tarika
    console.log(arr.reverse().join(" "));

    2nd Tarika
    let newStr = "";
    for (let i = arr.length - 1; i >= 0; i--) {
      newStr = newStr + arr[i] + " ";
    }
    console.log(newStr.trim());
  }
  reverseString("My name is wecode academy");

* 7. function maskMobile(mobileNumber, start, end, char, total)
maskMobile(9581894461, yes, false, '*', 5)
output: ***94461
maskMobile(9581894461, false, yes, '*', 5)
output: 95818***
maskMobile(9581894461, false, false, '*', 5)
output: 9581894461
 */
function maskMobile(mobileNumber, start, end, char, total) {
  let str;
  if (start) {
    str = mobileNumber.toString().slice(5);
    str = str.padStart(str.length + total, char);
  } else if (end) {
    str = mobileNumber.toString().slice(0, 5);
    str = str.padEnd(str.length + total, char);
  } else {
    str = mobileNumber.toString();
  }
  return str;
}
console.log(maskMobile(9581894461, false, true, "*", 5));
console.log(maskMobile(9581894461, true, false, "-", 10));
console.log(maskMobile(9581894461, false, false, "*", 5));

* 8. Replace all words in a string
function replaceString(str, word, newWord)
replaceString("Hello my name is Wecode and is hello test", "is", "are")
output: Hello my name are Wecode and are hello test
 */

function replaceString(str, word, newWord) {
  let arr = str.split(" ");
  let newStr = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === word) {
      newStr = newStr + newWord + " ";
    } else {
      newStr = newStr + arr[i] + " ";
    }
  }
  return newStr;
}
console.log(
  replaceString("Hello my name is Wecode and is hello test", "is", "are")

Array functions

sort
push
pop
unshift
shift
toString
join
concat
splice
slice
sort
reverse
forEach
at
map
filter
reduce
find
findIndex
some
every
flat
flatMap

sort
slice
splice
forEach
map
filter
reduce
find
findIndex
some
every
flat
flatMap

   slice

ans-1

let arr = [1, 2, 3, 4, 5, 9,];

console.log(arr.slice(2,5));

  filter

ans-2

let arr = [1, 20, 3, 40, 5, 9, 8, 7, 10, 3, 4];
let ans = arr.filter(teseven);
function testeven(num) {
  return num % 2 === 0;
}
console.log(ans);

ans-3

let arr = [2, 5, 7, 4, 3];
ans = arr.filter(oddnumber);

function oddnumber(num) {
  return num % 2 === 1;
}

console.log(ans);

 some

ans-4

let array=[2]

ans=array.some(evennumber)

function evennumber(num){
    return num%2===0
}

console.log(ans)

ans-5

let array=[5]

array=array.some(oddnumber)
function oddnumber(num){
    return num%2===1
}
console.log(array)

every
// ans-5
              let array=[4,6,8,10,12]

              array=array.every(evennumber)

              function evennumber(num){
                return num%2===0
              }
              console.log(array)

ans-6

let array=[5,9,15]
array=array.every(oddnumber)

function oddnumber(num){
    return num%2===1
}
console.log(array)

  map

ans-7

let array=[3,5,4]

array=array.map(multi)
function multi(num){
    return num*4
}

console.log(array)

ans-8

let array=[4,10,5,8]

array=array.map(number)

function number(num)
{
    return num+2
}

console.log(array)

ans-9

let array=[1324,655,676878,45,3435]
array=array.map(number)

function number(num){
    return num%2
}
console.log(array)

flat

  ans-10

let array=[2,5,[3,6,2],2,8]

console.log(array .flat())   by default depth 1 hogi

ans-11

let array=[4,4,452,[3,[3,4,6],5,]]

console.log(array.flat(2))

  sort

ans-12

let array=["rashid","nasir","jameel","sharukh"]

console.log(array.sort())

ans-13

let array=[3,456,346565,878,79856,546547,567,434,122,222]
console.log(array.sort())

ans-14

let arr = [1, 113, 111, 2, 11, 22, 3, 21, 33, 1111111];
function test(val1, val2) {
  return val2 - val1; //Descening order
}
function test2(val1, val2) {
  return val1 - val2; //Ascending order
}

console.log(arr.sort(test));
console.log(arr.sort(test2));

ans-15

let arr=[2,46]

arr=arr.sort(number)

function number(num,num2){
    return num2-num
}

console.log(arr)

let array="My naMe is weCoDe academy";

My Name Is Wecode Academy
array=array.reduce(test,1)

function test(value,index){
return value+index
}

console,log(array)

const arr = [1, 2, 3, 4, 5,];
let ans = arr.reduce(test, 0);

function test(prvValue, curValue) {
  if (curValue % 2 === 0) {
    return prvValue + curValue;
  } else {
    return prvValue;
  }
}

console.log(ans);

let str = ["my name are wecode academy"];

let ans = str.reduce(test);

function test(total, value) {
  if (total % 2 === 1) return total;
}
console.log(str);



let array=[3,4,7,3]

ans=array.filter(evennum)
function evennum(num){
    return num%2===0
}
ans2=array.every(evennum)
function evennum(num)
{
return num>10
}

console.log(ans)
console.log(ans2)


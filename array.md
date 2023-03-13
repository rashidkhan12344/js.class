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

 ### 5. Find max number from array

let arr = [1, 2, 3, 4, 5];

let max = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (max < arr[i]) {
    max = arr[i];
  }
}
console.log(max);

 ### 6. find min number from array
```
let arr = [7, 4, 3, 5, 7];
let min = arr[0];

for (let a = arr.length; a > 0; a--) {
  if (min > arr[a]) {
    min = arr[a];
  }
}
console.log(min);
```
### 7. Find total duplicate count of a number
```
let arr = [2, 4, 6, 4, 5, 6];
let num = 4;
let count = 0;

for (let a = 0; a < arr.length; a++) {
  if (num === arr[a]) {
    count++;
  }
}

console.log(count);
```
 ### 8. find odd element of the array
```
let arr=[1,23,45,5,4,35,6,10]

for(let a=0;a<arr.length;a++){
    if(arr[a]%2===1){
        console.log(arr[a])
    }

}
```

 ### 9. find even numbers in array
```
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
```



 ### 10. find multi number in araay
```
let multi = 1;
let arr = [1, 2, 3, 4];
for (i = 0; i < arr.length; i++) {
  multi = multi * arr[i];
}
console.log(multi);
```



## 11. Function ko 1 number pass krna hai. jo number pass kia hai us number ki table print krni hai. for example 5
## 5*1=5
## 5*2=10

```
function printTable(num) {
    for (let i = 1; i <= 10; i++) {
      console.log(`${num}*${i}=${num * i}`);
    }
  }
  printTable(5);
```

## 12. Function ko 2 numbers pass krne hai. Numbers ko multiply krna hai

```

  function mul(a, b) {
    console.log(a * b);
  }
  mul(10, 20);
```
### 13. Function ko array bnana hai and array ke sare numbers ko print krna hai

```
  function printArray(arr) {
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i]);
    }
}
printArray([1, 2, 3, 4, 5, 6, 7]);

```
## 14. Function bnana hai. Function me ek value leni hai. agar value true hai to Yes print kro otherwise No print kro

```
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

```
### 15. Function bnana hai. Function ko 2 numbers pass krne hai min and max. for example 10 and 20 to tume 10 se leke 20 tak print krvana hai
```function printInRange(num1, num2) {
  for (let i = num1; i <= num2; i++) {
    console.log(i);
  }
}

printInRange(100, 133);

```

## 16. function bnana hai. Function ko 1 number pass krna hai. 0 se leke us number tak jitne b Odd numbers hai vo print krne hai.
```
function printOddNumbers(num) {
  for (let i = 0; i <= num; i++) {
    if (i % 2 === 1) {
      console.log(i);
    }
  }
}

printOddNumbers(15);
```

### 17. function bnana hai. Function ko 1 number pass krna hai. 0 se leke us number tak jitne b Even numbers hai vo print krne hai.
```
function printEvenNumbers(num) {
  for (let i = 0; i <= num; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

printEvenNumbers(15);
```
## 18. Ek function bnana hai. Is function ko 2 number pas krne hai. phla number ek number hoga aur dusra number maximum number hoga. fir hume phle number ke multiples max number tak print krne hai.

## for example: 5, 100
## 5 10 15 20 25...... 100
```
function printMultiples(mul, upperLimit) {
  for (let i = 1; i <= upperLimit; i++) {
    if (i % mul === 0) {
      console.log(i);
    }
  }
}

printMultiples(5, 50);
```



 

  ## Array function methars
```
let arr = [];

arr[0] = 2;
arr[1] = 4;
arr[2] = 6;

console.log(arr);
```

### push
```
arr.push(10);

console.log(arr);
```
### pop
```
arr.pop();

console.log(arr);
```
### unshift
```
arr.unshift(0);

console.log(arr);
```
 ### shift
```
arr.shift();

console.log(arr);
```
### tostring
```
toString
console.log(arr.toString());
```
###  join
```
console.log(arr.join("*"));
```

 ### concat
```
let arr2 = [5, 10, 15];

console.log(arr.concat(arr2));
```
###  reverse
```
console.log(arr2.reverse())
```
 ###  at
```
console.log(arr2.at(-1))
```


  ### slice

```

let arr = [1, 2, 3, 4, 5, 9,];

console.log(arr.slice(2,5));
```

  ### filter

```
let arr = [1, 20, 3, 40, 5, 9, 8, 7, 10, 3, 4];
let ans = arr.filter(teseven);
function testeven(num) {
  return num % 2 === 0;
}
console.log(ans);
```


 ### some



```

let array=[5]

array=array.some(oddnumber)
function oddnumber(num){
    return num%2===1
}
console.log(array)
```

 ### every

          
```

let array=[5,9,15]
array=array.every(oddnumber)

function oddnumber(num){
    return num%2===1
}
console.log(array)
```
  ### map

```

let array=[3,5,4]

array=array.map(multi)
function multi(num){
    return num*4
}

console.log(array)
```


### flat

  ```

let array=[2,5,[3,6,2],2,8]

console.log(array .flat())   by default depth 1 hogi

```
```
let array=[4,4,452,[3,[3,4,6],5,]]

console.log(array.flat(2))
```
  ### sort

```

let array=["rashid","nasir","jameel","sharukh"]

console.log(array.sort())
```


ans-14

```

let arr=[2,46]

arr=arr.sort(number)

function number(num,num2){
    return num2-num
}

console.log(arr)
```

   ###  reduce

```

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
```


### flatmap


```
   let arr = [1, 2, 3, 4, 5];
let ans = arr.flatMap(test);
function test(value) {
  return [value * 2, value * 3];
}
console.log(ans);
```

```
second question in reduce
let arr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
let ans = arr.flatMap(test);
function test(value) {
  return value;
}
console.log(ans);
```

 

 


  

  
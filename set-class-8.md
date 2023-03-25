
   # set object js
```
let set=new Set()

set.add(2)
set.add(4)
set.delete(4)

console.log(set)
```
```
let arr = [2, 3, 4, 5, 6, 2, 3, 4, 5, 6];

let set = new Set(arr);

set.add(9);
set.add(10);
console.log(set);
set.delete(2);
console.log(set);
```
```
function test(value) {
  console.log(value * 2);
}
set.forEach(test);
```
```
for (let value of set) {
  console.log(value);
}
```
    
## Set Exercise

### 1. Create an empty set called mySet.
```
let myset=new Set()
console.log(myset)
```
### 2. Add the values 1, 2, and 3 to mySet.
```
let myset=new Set()
myset.add(1)
myset.add(2)
myset.add(3)
console.log(myset)
```
### 3. Check if mySet contains the value 2.
```
let myset = new Set();
myset.add(2);
console.log(myset.has(2));
```
### 4. Remove the value 3 from mySet.
```
let myset = new Set();
myset.add(2);
myset.add(3);
myset.add(4);

myset.delete(3);

console.log(myset);
```
### 5. Find the size of mySet.
```
let mySet = new Set();

mySet.add(2);
mySet.add(3);
mySet.add(4);
mySet.add(5);
mySet.add(6);

console.log(mySet.size);
```


### 6. Find the intersection of mySet and otherSet.
```
let set = new Set([1, 2, 3, 6]);
let otherSet = new Set([2, 3, 4, 5]);
let newArray = [];
for (let value of set) {
  if (otherSet.has(value)) {
    newArray.push(value);
  }
}
console.log(newArray);
```

### 7. Find the union of mySet and otherSet.


```
let set = new Set([1, 2, 3, 6]);
let otherSet = new Set([2, 3, 4, 5]);
// Duplicate
let newArray = [...set, ...otherSet];
console.log(newArray);
Unique
let uniqueSet = new Set([...set, ...otherSet]);
console.log(uniqueSet);

```
   


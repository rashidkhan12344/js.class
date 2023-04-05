# Destructuring Arrays

  ## normal destructuring Array

### ans.1
```
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let [,a,,,,,,b,c]=arr;

console.log(a,b,c)
```

## Destructuring of nested array

### q. 1
```
let arr = [10, 20, [1, 2], 33,3];

let [,,,a]=arr;
console.log(a)
```

### q.2
```
let arr = [10, 20, [1, 2], 33];
let [, , [, a]] = arr;
console.log(a); //2
```

### q-3
```
let arr = [10, 20, [1, 2, [4, 5], 6, 7], 33];
let [, a, [, b, [, c], , d]] = arr;
console.log(a, b, c, d); // 20 2 5 7
```
## Return two values from function

### q.1
```
function test() {
  return 10, 20, 30, 40;
}
console.log(test()); //40
```
### q.2
```
function test() {
  return [10, 20, 30, 40];
}
console.log(test()[1]);
```
## Setting default values
### q.1
```
let arr = [10, 20];
let [, a = 100, d = 500] = arr;
console.log(a, d);
```
### q.2
```
let arr=[2,]
let [,a=10,b=20]=arr
console.log(a,b)
```
## Destructuring Objects

### q.1
```
let obj = {
  name: "academy",
  city: "hindaun",
  age: 21,
};

let { city } = obj;
console.log(city);
```
## Nested Object

### q.1
```
let obj = {
  name: "Wecode",
  age: 21,
  address: {
    pincode: 302012,
    city: "Jaipur",
    state: "Rajasthan",
    customerDetails: {
      customerName: "Abhinav",
      mobile: 934545345,
    },
  },
};
let {
  age: myAge = 100,
  name,
  address: {
    pincode,
    customerDetails: { mobile ,customerName},
  },
} = obj;
console.log(myAge, name, pincode, mobile,customerName);
```
## Destructuring function Object
```
let obj = {
  name: "Wecode",
  age: 21,
  pincode: 302012,
  city: "Jaipur",
  state: "Rajasthan",
};
function test({ name, age }) {
  console.log(name, age);
}
test(obj);
```
# The Spread Operator
```
note
Normal Copy : Khi b change kroge to dono me change hoge
Shallow Copy : Top level object ki properties me change kroge to change ni hoga lekin object ke ander object hai aur usme change krenge to dono me change hoga
Deep Copy : Isme dono objects me se kisi me b chagne kro to dono me change ni hoga
```
## normal copy
```
let arr = [1, 2, 3, 4, 5];
let arr2 = arr;
console.log(arr, arr2);
arr2.push(100);
console.log(arr, arr2);
```
## sallow copy
```
let arr = [2, 4, 6];

let arr2 = [...arr];
arr2.push(10);
arr2.push(12);
arr.push(14);
console.log(arr, arr2);
```
## Join 2 Arrays
```
let arr = [1, 3, 5];
let arr2 = [2, 4, 6];

let arr3 = [...arr, ...arr2];

console.log(arr3);
```
## String to Array
```
let str = "Wecode Academy";
let arr = [...str]; //string to char array
console.log(arr);
```
## Passing arguments in function
### q.1
```
let arr=[3,4,5,6]

function test([,,a,b]){
    console.log(a,b)
}

test(arr)
```
## using spread operator

### q.1
```
let arr = [1, 2, 3, 4, 5];
function test(a, b, c, d) {
  console.log(a, b, c, d);
}
test(...arr);
```
### q.2
```
let arr = [1, 2, 3, 4, 5];
let [a, b, ...c] = arr;
console.log(a, b, c);
```
### q.3
```
let obj = {
  name: "Wecode",
  age: 21,
  address: "Jaipur",
  mobile: 93454534543,
};
let { name, address, ...other } = obj;
console.log(name, address, other);
```
### q.4
```
function test(...a) {
  console.log(a);
}

test(2, 3, 4);
```




# Short Circuiting

## Use of ||

```
let a = 0 || false || 0;
console.log(a);
```
```
let a = false || true || -1;
console.log(a);
```
```
let a = 10 && 20 && 0 && -2;
console.log(a);
```

```
let a = 10 && 2 || 10 && 0;

console.log(a);
```

```
a = 200;
 a = a || 100
console.log(a);
```




## use of ??

```
let a = undefined ?? 10; //null/undefined
console.log(a);
```

```
let a = 0;
a ??= 20; 
console.log(a);
```


## use of && 
```
function test() {
  console.log("Hello");
}

0 && test();
10 && test();
```

```
a = 1000;
 a = a && 90;
console.log(a);
```

# Enhanced Object literals


## Function in object
```
let age = 20;
let address = "Jaipur";
let obj = {
  name: "wecode",
  age,
  address,
};
console.log(obj);
```
```
let obj = {
  age: 21,
  address: "Jaipur",
  sum(a, b) {
    console.log(a + b);
  },
};
obj.sum(10, 20);

```
```
let num = 100;
let obj = {
  ["age" + 4]: 21,
  ["address" + num]: "Jaipur",
  [10 + 20]: 100,
};
console.log(obj);
```



# Optional Chaining
```
let obj = {
    name: "wecode",
    address: {},
  };
  console.log(obj.address.pincode); //undefined
```
```
  let obj = {
    name: "wecode",
  };
  console.log(obj.address.pincode); //error

```
```
  let obj = {
    name: "wecode",
    address: {
      pincode: 302012,
      myAddress: {
        colony: "Narayanpuri",
      },
    },
  };
  console.log(obj?.address?.otherAddress?.colony);

  output:undefined
```
```
  let obj = {
    name: "wecode",
    address: {
      pincode: 302012,
      myAddress: {
        colony: "Narayanpuri",
      },
    },
  };

  if(obj?.address?.pincode){
    console.log("yes")
  }
  else{
    console.log("no")
  }
```

# practice question

## 1
```
function test(...num) {
    let newNum = 0;
    for (let i = 0; i < num.length; i++) {
      newNum += num[i];
    }
    return newNum;
  }
  console.log(test(1, 2, 3, 4, 5));
```
## 2
```
let arr=[1,2]

let arr2=[a=100,3,4]

let arr3=[5,6,c=1000]

 let  newarr=[...arr2,...arr,...arr3]

 console.log(newarr)
```
## 3
```
let obj1={
    name:"wecode",
    age:21

}

let obj2={
    state:"rajsthan",
    age:22

}

let obj3={
    city:"jaipur",
    age:23,
}

let obj={...obj1,...obj2,...obj3}

 console.log(obj)

 output: age:23
```
## 4
```
function printAge(age) {
    age && console.log("My age is " + age);
  }

  printAge(10);
```
## 5
```
function test(fName, lName) {
    return fName || lName || "Unknown";
  }
  console.log(test(null, "khan"));
```

## 6
```
function fn1(a, b) {
    if (a && b) {
      fn2();
    } else {
      console.log("No");
    }
  }
  function fn2() {
    console.log("Function two....");
  }
  fn1(10, null);
```
# 1. JavaScript engine kya hai. Most famous JavaScript engine ki list btao.

```
JavaScript Engine ek computer program hota hai jo JavaScript code ko samajhne aur execute karne ke liye banaya jata hai.
JavaScript engine ka kaam hota hai ki jab browser me koi webpage load hoti hai jisme JavaScript code likha gaya ho to vo engine us code ko padhta hai aur use machine language me convert karta hai jo ki computer samajh sakte hai. Is process ko "compilation" kehte hai.

most famous js engine
V8 (Google Chrome, Node.js, Deno)
SpiderMonkey (Firefox)
JavaScriptCore (Safari)
Chakra (Microsoft Edge)
Carakan (Opera)

Google Chrome ka V8 JavaScript engine bahut popular hai. Ye engine Node.js, Electron aur nw.js jaise tools ke saath bhi istemaal kiya ja sakta hai. Ye engine JavaScript code ko optimized tarike se compile karta hai, jisse ki code ki speed improve ho aur execution time kam ho.
```

# 2. this keyword ka use btao. This keyword ke different uses hai unhe explain kro with example

```
'this' keyword JavaScript me ek special keyword hai jo current object ko refer karta hai jispe ye call kiya ja raha hai. Ye keyword function ke bahar kisi bhi object ke sath attach nahi hota hai.

Jab bhi hum kisi object ke sath method ko call karte hai to 'this' keyword us object ko refer karta hai. 'this' keyword ki value dynamically bind hoti hai. Agar function ka context change ho jata hai to 'this' keyword ki value bhi change ho jati hai.

Jab hum object me method ka use karte hain to 'this' keyword us object ko refer karta hai. Iske alawa, function ko call karte waqt 'this' keyword global object ko refer karta hai.
```

### this keyword emample

```
let person = {
firstName: "rashid",
lastName : "khan",
fullName : function() {
return this.firstName + " " + this.lastName;
}
}

console.log(person.fullName()); // output: rashid khan
```

# 3. Difference between Json and XML

```
JSON ek plain text format h jbki XML ek markup language h

or JSON data ka aakar XML data ke aakar se km hota h JSON data ek lagutam format h jo data ko chote rup me likhta h

JSON data ko parse krna XML data ko parse krne se aasan hota h JSON data simple format me hota h joki Parsing ko simple banata h
```

### JSON Example

```
 JSON object
var person = {
"name": "rashid",
"age": 21,
address:"jaipur"

};

 JSON string
var personJSON = '{"name":"rashid","age":21,"address":"jaipur"}';

JSON string ko JSON object me parse krna
var personObj = JSON.parse(personJSON);

JSON object ko string me convert karna
var personStr = JSON.stringify(person);
```

# 4. In memories ke bare me btao

## Heap, Cache, Stack, Ram

### Heap

```
heap memory ek dynamic men=more allocation ka model h jo computer memory ka ek baada bhag hota h jo runtime me dynamic rup se bhata hota h or javascipt me heap memory ka use object our function ko store krne ke liye kiya jata h yh runtime environament ke dhara bada jata h our garbage collection ke dhara autometic saf kiya jata h
```

### Cache

```
cache ek tarah ki teji se access krne bali memory hoti h jo data access kr ke liye cpu me hoti h yh normal memory ki bajaye bahut tej hoti h
```

### Stack

```
stack memory me jb bhi koi function call hota h to fucntion ke arguments our local variables stack memory me isthan lete h jb function call ka execution complete ho jata h to stack memory se variablrs remove ho jate h
```

### Ram

```
ram ek tarah ki computer memory hoti h jiski fullform "Random Access Memory"h or jb bhi hamare computer ya other devise me koi program load es memory me hi hota h
yh hamre devise me temporary storage ka kaam krti h
```

# 5. Write difference between compiler and interpreter with example

```
Compiler aur Interpreter dono programming languages ke liye use hote hai, lekin inka kaam aur tareeka alag hota hai. Ek Compiler program ko puri tarah se ek baar compile karta hai, jabki ek Interpreter code ko line by line read karke execute karta hai.
```

### Compiler example

```
javascript code

let a = 5
let b = 5
console.log(a+b)// 10

machine code
1010
```

### interpreter Example

```
var x = 10;
var y = 15;
var z = x + y;
console.log(z);
```

# 6. Write difference between creation phase and code phase

```
jb bhi koi javascript function call kiya jata hain to be do bhago me vibhajit hota h
1 Creation phase
2 code execution phase

Creation phase javascript engine ke dara fuction scope ko banae ke liye use ki jati h esme fucntion scope,outer environment, this our valiables ke liye jageh banai jati h esme
hamare samne aate h function ke start me hoisted variable our function jo code me hamare
samne nhi aate
Code execution phase us samay aata h jb function call hota h our code run hota h es process me engine dhara antim natija prapt krne ke liye function srope me diye gaye statements ko execute kiya jata h

es tareh se Creation phase function ke liye mojuda srope ko banane ka process hota h
jbki code execution phase function ko execute krne ka process hota h
```

# 7. Primitive and non primitive data types me difference btao and memory me kaise save hoti hai ye data types vo b btao

```
primitive data type aamtor pr Aestayi hote h our enko memory me side store kr diya jate h javascript me yh primitive data type hote h
String
Number
Boolean
Null
Underfined
Symbol
```

```
non primitive data type Aestayi hote h our ene memory me side store nhi kiya ja skta h
ene ek reference ke rup me store kiya jata h jb non primitive data type ka Assignment hota h to ek reference utpan hota h jo memory me ek sumpun estan ka pta batata h
javascript me yh non primitive data type hote h
Objects
Arrays
Functions
```

# 8. Shallow copy vs deep copy me difference likho with example

```
    shallow copy= jab ham kisi array ya object ko copy karte h aur hum unme change karte h to dono me change hota h
    tab ham sallow copy ka use karte h sallow copy use karne se ham jisme change karte h usme hi
    change hota h lekin agar array ke andar array ya object ke under object ho aur unme hum change karte
    h to unme change nhi hota h
```

```
    example
    let arr=[1,2,3,4,5]
    let arr1=[...arr]

              let arr[1]=10 // [1,10,2,3,4,5]
              arr1=[1,2,3,4,5]
```

```
deep copy- agar array ke under array and object ke under object ho to hum dono me chnge karne ke liye deep copy
ka use karenge because nested array and nested object me deep copy ki help se hi change kar sakte h
```

# 9. What is scope chain ? Explain all type of scopes with example.

```
   Scope Chain - scope chain btati h hamre code me functions, variable kis kis jagah pe use hua h
```



### global
  ```
        let num=10
        function check(a){
         console.log(a)
        }
        check(num)
   ```
        ```
  function

             function test() {
                    var a = 2;
                     console.log(a);
                                }
        
                  test()
         
         ```
                  ```
     block scope

 {
 let a=10
 let b=20

      }
      ```

# 10. What is JIT? Explain
```
JIT ka mtbl hota h Just-in-time or JIT Compiler ek type ka compiler hota h jo runtime me compiler krta h jb koi javascript code execute hota h to be engine us code ko intermediate code me convert krta h es intermediate code ko machine code me badalne ke liye ek vishesh type ka compiler use me laya jata h jise hm JIT compiler kaha jata h
```
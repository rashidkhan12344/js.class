# Ajax

```
ajax ki full form asynchronous javascript and xml hoti h jiska use user interface our server ke bich dynamic deta ko load krne our update krne ke liye kiya jata h ajax network call krne , server se deta prapt krne our deta ko perst pr dikhane ki subida deta h bina pesrt ko punload kiye bina
```

```
var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {

        var responseData = JSON.parse(this.responseText);
        console.log(responseData);
    }
};
```

# XMLHttpRequest

```
  XHR javascript ka ek vilt-en object h jiska upyog ajax network call krne ke liye kiya jata h yh object url pr HTTP request bejne , server se deta prapt krne our perst pr
  deta ko prdasit krne ki samta prdaan krta h
```

```
var xhr = new XMLHttpRequest();

xhr.open('GET', "https://restcountries.com/v3.1/name/india",);

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {

        var responseData = JSON.parse(xhr.responseText);
        console.log(responseData);
    }
};

xhr.send();
```

# What is an API ?

```
api ki full form application programming interface hoti h hm api ka upyog krke deta praft kr skte h our api ko ajax ke madyam se access kr skte h our praft deta ko process kr skte h
```

```
let fetch=fetch(api)
fetch.then((res)=>{
   res.json().then((response)=>{
       console.log(response)
   })
})
```



## Server

```
javascript me server ek computer hota h jo desre computer ko data bhejta h 
server ki help se ham api ko chalana, application bnana etc. work kar sakte h
 ```     


## Client
```
Client ka matlab hota hai wo hissa jise hum user ke browser mein use karte hain.
Jab kabhi koi user server se webpage request karta hai
toh server usko HTML, CSS aur JavaScript files bhejta
hai. Fir client un files ko use karke webpage ko render karta hai.
```
## Request
```
javascript me ham request ke liye xmlhttprequest ya fetch ka use kar sakte h
inki help se ham server ko request bhej sekte h aur unse data le sakte h
```
## Response
```
 javascript me ham request ke liye xmlhttprequest ya fetch ka use kar sakte h
 inki help se ham server ko request bhej sekte h aur unse data le sakte h
 ```



# Callback
```
callback function ka use ham kisi dusre function ko call karne ke liye use me lete h
callback function ko hum promise me function ko call karne ke liye kam me lete h
```
```
example-

      let prom=new Promise((resolve,reject)=>{
  if(2 >1){
      resolve()
  } else{
      reject()
  }
})

prom.them(()=>{
  console.log("resolve)
}).catch(()=>{
  console.log("reject)
})
```



# promise
```
Promise ek JavaScript object hota hai jiska use kiya jaata hai asynchronous code ke liye. Asynchronous code ka matlab hota hai ki jab hum kisi task ko execute kar rahe hote hai aur uska result time lagakar aata hai tab tak hum dusre tasks ko perform kar sakte hai.
```
```
example-

fetch(url)
.then(response => {
  // handle the response
})
.catch(error => {
  // handle the error
});
```

# fatch
```
fetch ki help se ham kisi bhi api se data nikal sakte  h
fetch() ek Promise object return karta hai. Hum then() method me ek callback function pass karte hai jo response ko handle karti hai. Agar fetch() me koi error hota hai to catch() method error ko handle karta hai.
```
```
let fetch=fetch(https://restcountries.com/v3.1/name/japan)
     fetch.than((res)=>{
      res.json().then((response)=>{
          console.log(response)
      })
     })

```


# Chaining Promises .then .then .then .catch .catch
```
chaining Promises in JavaScript ka matlab hai ki ek Technique jismein ek se zyada async operations ko sequence mein execute kiya ja sakta hai, jahan ek operation ka output agle operation ka input banta hai.
```
```
example-

let fetch=fetch(https://restcountries.com/v3.1/name/japan)
     fetch.than((res)
        return  res.json()
     ).then((response)=>{
      return response[0]
     }).then((resp)=>{
      console.log(resp.capital[0])
     }).catch((){
           console.log("Error)
 })
```



# Consuming Promise using Async/Await
```
Async/Await ka use Promises ko consume karne ke liye hota hai. Asynchronous code ke liye Promises kaafi useful hote hain, aur ismein Async/Await ka use humein code ko cleaner aur readable banane mein help karta hai.
```
```
Example:-

          async function getData() {
              let fetch5 = await fetch("https://restcountries.com/v3.1/name/india");
               console.log(await fetch5.json());

                 let fetch6 = await fetch("https://restcountries.com/v3.1/name/japan");
                  console.log(await fetch6.json());
}

getData();
```

# Error Handling
```
Error handling ka use ham error ko handle karne ke liye use me lete h
```
```
Example:-

let fetch1 = fetch("https://restcountries.com/v3.1/name/india");

fetch1
.then(
  () => {
    throw new Error();
  },
  () => {
    console.log("js");
  }
)
.catch(() => {
  console.log("weCode");
});
```

# Try catch finally
```
try catch ka matlab h ki agar hamare code me error aa gya ho ya esa lagta ho ki is code
 me error aa sakta h to us error ko handle karne ke liye try catch ka use karte h and finnaly ka use error aane ya nhi aane per bhi hota h
```
```
try {
  let i = null;
  console.log("Wecode Academy Jaipur");
  console.log("Wecode Academy Jaipur");
  console.log("Wecode Academy Jaipur");
  console.log("Wecode Academy Jaipur");
  console.log(i.toString().toLowerCase());
  console.log("Wecode Academy Jaipur");
  console.log("Wecode Academy Jaipur");
} catch (err) {
  console.log("Error aa gyi hai", err);
}
console.log("Wecode Academy");
console.log("hello");
```

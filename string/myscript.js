// javascript string

// string function

// padStart
// padEnd
// split
// trim
// trimStart
// trimEnd
// concat
// repeat
// toLowerCase
// toUpperCase

// let a="we code academy"

// console.log(a .padEnd(20,"*"))
// String me kisi value ko hide krne ke liye use

// console.log(a.padEnd(20,"*"))
// string me kisi value ko end se hide krne ke liye

// console.log(a .split(" "))
//  string ko devide krne ke liye

// console.log(a .trim ())
//  string me left to right se space ko move krne ke liye

// console.log(a.trimEnd())
// string me end se space ko move krne ke liye

// console.log(a .trimStart())
//  string me start se space ko move krne ke liye

// console.log(a.concat("we"+"code"))
//  string ko jodne ke liye

// console.log(a .length);
// string ki length nikaal ne ke liye

// console.log(a.toLowerCase())
//  stirng ke test ko small krne ke liye

// console.log(a.toUpperCase())
// string ke test ko capital krne ke liye

// console.log(a.repeat(5))
// string ko repeat karane ke liye

//   question

// 1. Take any String with some space before and after. Store string length. Now do below exercises:
//     a. remove space from both end and print new length of the returned string
//     b. remove space from start and then print new string length
//     c. remove space from end then print new string length
// 2. Take any string in lowercase. Now using toUppercase function check if uppercase of the string is equal to uppercase of function or not
// 3. Introduction about your self. Use concat function
// 4. Take a big string and split it using below characters/string
//     a. " "   console.log(ans.length);
//     b. ","
//     c. "is"
//     d. "a"

// /1.

// let str = "  Wecode Academy  ";
// let len = str.length;
// console.log(len);
// let ans = str.trim();
// console.log(ans.length);
// let ansStart = str.trimStart();
// console.log(ansStart.length);
// let ansEnd = str.trimEnd();
// console.log(ansEnd.length);

// //2.
// str = "wecode academy";
// let strUpperCase = str.toUpperCase();
// if (strUpperCase === "WECoDE ACADEMY") {
//   console.log("Yes");
// } else {
//   console.log("No");
// }

// //3.
// console.log("My".concat(" Name", " is", " Wecode", " Academy"));

// //4.
// let intro = "My name, is wecode, academy";
// console.log(intro.split(" ").length);
// console.log(intro.split(",").length);
// console.log(intro.split("is").length);
// console.log(intro.split("a").length);

// ans-5

// esko print karao

// hahahahaha
// hahahaha
// hahaha
// haha
// ha

// for (let i = 5; i >= 1; i--) {
//     console.log("Ha".repeat(i));
//   }

// ans-6

// $$$$$#####
// $$$$####
// $$$###
// $$##
// $#

// for (let i = 5; i >= 1; i--) {
//     //console.log("$".repeat(i).concat("#".repeat(i)));
//     console.log("$".repeat(i) + "#".repeat(i));
//   }

// ans-7

// let mobile="34821";

// console.log(mobile .padStart(10,"*"))

// let mo="91662";

// console.log(mobile .padEnd(10,"*"))

// ans-8

// let str = "My name is learn javascript"; Split this string using space and find length.

// let str = "My name is learn javascript"
// let a = str.split(" ");
// console.log(a.length);

// ans-9

// 11111
// 2222
// 333
// 44
// 5

// let num = 1;
// for (let i = 5; i >= 1; i--) {
//   console.log(`${num}`.repeat(i));
//   num++;
// }

// let arr="rashid khan" .split("");
// for(let value of arr)
// {
//         console.log(value);
// }

// let arr="my name is Arun kumar" .split(" ");
// console.log(arr);
// let str="";
// let index=0;
// for(let val of arr){
//         if(index%2==0){
//                 str=str+""+val.toLocaleLowerCase();
//         }
// }
// else
// {
// str=str+""+val.to
// }

// let a="we code academy";

// if(a.length>10){
//         console.log("hello"+" " +a)
// }
// else{
//         console.log(a+"world")
// }

// let str = "we code academy";
// if (str.includes("code")) {
//   console.log(str.replace("code", "rashid"));
// } else {
//   console.log("no");
// }

// ans-10

// let email = "sajid@gmail.com";
// let index = email.indexOf("@");
// let rightSide = email.slice(index);
// let leftside = email.slice(0, index);
// let finalHalf = leftside.slice(0, leftside.length / 2);
// let masked = finalHalf.padEnd(leftside.length, "*");
// console.log(masked + rightSide);

// ans-11 wecode ko ulta print karao for se

// let str = "wecode";
// console.log(str[5]);
// console.log(str[4]);
// console.log(str[3]);
// console.log(str[2]);
// console.log(str[1]);
// console.log(str[0]);

// let str = "wecode";
// let x = "";
// for (let i = str.length - 1; i >= 0; i--) {
//   x = x + str[i];
// }
// console.log(x);

// test String

// test

//         ### Question 1

// Write a JavaScript function to capitalize the first character of the string.

// ```
// for example:
// wecodeacademy

// output:
// Wecodeacademy
// ```

// ### Question 2

// Write a JavaScript function to insert a string within a string at a particular position

// ```
// for example:
// We are learning exercises.

// now insert the word JavaScript at 14 position so output will be :

// We are learning JavaScript exercises.
// ```

// ### Question 3

// Write a JavaScript function to count the occurrence of a substring in a string.

// ```
// "My name is wecode academy and my friend name is Arun Kumar."

// find count of 'is' in this word is 2.
// ```

// ### Question 4

// Ask user below questions:

// 1. What is your name?
// 2. What is your mobile number?
// 3. What is your account number?
// 4. What is your atm card number?
// 5. What is your aadhar number?

// Now do below tasks:

// 1. Mask last 3 digits of the mobile number
// 2. Mask middle of 5 numbers of the account
// 3. Mask last 8 digit of atm card number
// 4. Mask starting 4 digits and last 4 digits of aadhar number

// ### Question 5

// Print below pattern using repeat function

// ```
//      $
//     $$$
//    $$$$$
//   $$$$$$$
//  $$$$$$$$$
// $$$$$$$$$$$
// ```

// ### Question 6

// Ask below questions :

// 1. What is your name?
// 2. What is your birth year?
// 3. What is your address ?
// 4. What is your country code?
// 5. What is your mobile number?

// Now using string template literal syntax show below output based on your answer:

// My name is Sajid Khan. I was born in 1993 and my current age is 30 years. My address is Jhotwara, Jaipur and my mobile number is +919565465654.

// ### Question 7

// Divide a string in two part.

// Now in right side part add Hello in the end
// In left side of the string add World in starting

// for example:

// ```
// let str = "Wecode Academy"

// output:
// Wecode Hello World Academy
// ```

// ### Question 8

// Guessing Game?
// Ask user what character is present at particular index in a word.

// If user guess is right then show him Congrulations message otherwise show Sorry message.

// for example:
// Wecode Academy

// What is the character you are guessing? A
// What is the index? 3

// Sorry

// ### Question 9

// Print Pattern using repeat function
// ```
// ***********
//  *********
//   *******
//    *****
//     ***
//      *
// ```

// ### Question 10

// Print below Series using repeat function
// ```
// 1 224 3339 44412 555520
// ```

// ans-1

// let str = "wecodeacademy";

// let arr = str.split(" ");

// for (var i = 0; i < arr.length; i++) {
//   arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
// }

// let str2 = arr.join(" ");
// console.log(str2);

// ans-9

// let a = 6;
// let string = "";

// for (let i = 0; i < a; i++) {
//   for (let j = 0; j < i; j++) {
//     string += " ";
//   }

//   for (let k = 0; k < 2 * (a - i) - 1; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);

// ans-5

// let n = 6;
// let string = "";

// for (let i = 1; i <= n; i++) {

//   for (let j = 1; j <= n - i; j++) {
//     string += " ";
//   }

//   for (let k = 0; k < 2 * i - 1; k++) {
//     string += "$";
//   }
//   string += "\n";
// }
// console.log(string);

// ans-6

// let Name=prompt("What is your name");
// let birth=Number(prompt("What is your birth year"));
// let address=prompt("What is your address ");
// let countryCode=Number(prompt("What is your country code"));
// let mobileNnumber=Number(prompt("What is your mobile number"));

// console.log(`My name is ${Name}.I was born in ${birth} and my current age is 30 year .my address is ${address} and my mobile number is
//  ${mobileNnumber}
// `
// )

// ans-7

// let str="Wecode Academy";

// console.log(str .replace("Wecode","Hello","Academy","World"))

// // ans-8

// let str = "Wecode Academy";
// let a = str.includes("Wecode");

// if (a) {
//   console.log("Congrulations");
// } else {
//   console.log("sorry");
// }

// end

//    practice questions

// ans-1

// console.log(" ".repeat(5) + "$".repeat(1));
// console.log(" ".repeat(4) + "$".repeat(3));
// console.log(" ".repeat(3) + "$".repeat(5));
// console.log(" ".repeat(2) + "$".repeat(7));
// console.log(" ".repeat(1) + "$".repeat(9));
// console.log(" ".repeat(0) + "$".repeat(11));
// console.log(" ".repeat(1) + "$".repeat(9));
// console.log(" ".repeat(2) + "$".repeat(7));
// console.log(" ".repeat(3) + "$".repeat(5));
// console.log(" ".repeat(4) + "$".repeat(3));
// console.log(" ".repeat(5) + "$".repeat(1));

// ans-2

// console.log(" ".repeat(1)+"*".repeat(1));
// console.log(" " .repeat(2)+"*" .repeat(2));
// console.log(" " .repeat(3)+"*" .repeat(3));
// console.log(" " .repeat(4)+"*" .repeat(4));
// console.log(" " .repeat(5)+"*" .repeat(5));
// console.log(" ".repeat(5)+"*".repeat(5));
// console.log(" " .repeat(4)+"*" .repeat(4));
// console.log(" " .repeat(3)+"*" .repeat(3));
// console.log(" " .repeat(2)+"*" .repeat(2));
// console.log(" " .repeat(1)+"*" .repeat(1));



// ans-3


// let str = "aabaa";
// let str2 = "";
// for (let i = str.length - 1; i >= 0; i--) {
//   str2 = str2 + str[i];
// }
// if (str == str2) {
//   console.log("yes");
// } else {
//   console.log("No");
// }



// let arr = [1, 20, 3, 44, 5, 69, 7, 80, 9, 10];
// let max = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (max < arr[i]) {
//     max = arr[i];
//   }
// }
// console.log(max);




// let arr=[4,3,5,6,2,7,8];
// let min=arr[0];
// for(let i=0;i <arr.length;i++){
//     if(min>arr[i]){
//         min=arr[i]
//     }
// }
// console.log(min)
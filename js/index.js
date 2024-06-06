//  =============== 1 - misol ==============

// let massiv = [];
// for (let i = 1; massiv.length <= 5; i++) {
//     massiv.push(i);
// }
// console.log(massiv);


// =============== 2 - misol ==============


// let Array = [];

// Array.push("element-one");
// Array.push("element-tue");
// Array.push("element-three");
// Array.pop();

// let result = Array.join(" ");
// console.log(result);

// =============== 3 - misol ==============


// let block = [];
// block.unshift("element-foo");
// block.unshift("element-three");
// block.unshift("element-tue");
// block.unshift("element-one");

// block.reverse();

// let result = block.length;


// console.log(block); 
// console.log(result); 


// =============== 4 - misol ==============


// let Array = [];

// Array.unshift("element-one");
// Array.unshift("element-tue");


// Array.shift();


// let vergulstring = Array.join(", ");


// console.log(vergulstring); 


// =============== 5 - misol ==============



// let arr = ["a", "b", "c", "d"];


// arr.pop();


// let arrlength = arr.length;


// let firstElement = arr[0];


// console.log(arrlength); 
// console.log(firstElement); 

// =============== 6 - misol ==============


// let arr = ["a", "b", "c"];


// arr.push("d");


// let Element = arr.at(-1);


// let result = Element.toString();


// console.log(result); 


// =============== 7 - misol ==============


// let sumArr = ["a", "b", "c", "d"];
// sumArr.unshift("new");


// sumArr.reverse();


// let length = sumArr.length;


// console.log(sumArr); 
// console.log(length); 



// =============== 8 - misol ==============


// let sumArr = ["a", "b", "c", "d"];


// sumArr.shift();


// let length = sumArr.length;


// let string = sumArr.join(", ");


// console.log(length);
// console.log(string);



// =============== 9 - misol ==============



// let myArr = ["a", "b", "c", "d"];


// myArr.push("1", "2", "3");
// myArr.unshift("one", "tue", "three");


// let length = myArr.length;


// myArr.reverse();


// let resultString = myArr.join(", ");


// console.log(length); 
// console.log(resultString);



// =============== 10 - misol ==============


// let counter = ["a", "b", "c", "d"];

// counter.reverse();

// let string = counter.toString();

// let length = string.length;

// console.log(string); 
// console.log(length); 


// =============== 12 - misol ==============



// let one = [1, 2, 3];
// let tue = [4, 5, 6];

// const onetue = one.concat(tue);

// let result = onetue.splice(1, onetue.length, 2);

// let length = result.length;

// console.log(length);




// =============== 13 - misol ==============

// let arr = [1, 2, 4, 5, 6, 7, 8, 9, 10];
// arr.splice(1, 3);
// let str = arr.join(' ');
// let length = str.length;
// console.log(str);
// console.log(length);

// =============== 14 - misol ==============

// const massivArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let kesish = massivArr.splice(2, 10);

// kesish.reverse();
// console.log(kesish);


// =============== 15 - misol ==============




// let berilganMassiv = [
//     [1, 2],
//     [3, 4, 5],
//     [6, 7, 8, 9]
//   ];
  
  
//   let flatMassiv = berilganMassiv.flat();
   
//   let oxirgiElement = flatMassiv.pop();
  
//   console.log(flatMassiv);
//   console.log(oxirgiElement);




// =============== 16 - misol ==============


// Berilgan massivdan at metodi yordamida uchinchi elementni oling. 
// So'ng, ushbu elementni massivning boshiga unshift metodi yordamida qo'shing va natijaviy massivning uzunligini toping.


// const massivArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let atArr = massivArr.at(2, 3);

// let boshigaqosh = massivArr.unshift("sonlar", "one", "tue");

// let length = massivArr.length;

// console.log(length);



// =============== 17 - misol ==============


// let massiv = [1, 2, 3, 4, 5];
// let teskari = massiv.reverse();
// let sum = teskari.join(", ");

// console.log(sum);

// let result = sum.substring(sum.length - 1);
// console.log(result);


// =============== 18 - misol ==============


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let Arr = arr.slice(0, 2);
// console.log(Arr); 
// arr.splice(4);
// console.log(arr); 



// =============== 19 - misol ==============



// let sumArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let som = sumArr.slice(0, 2);

// console.log(som);

// sumArr.splice(4);

// console.log(sumArr);


// =============== 20 - misol ==============


// Berilgan massivni join metodi yordamida vergul bilan ajratilgan string ko'rinishiga o'tkazing. 
// Keyin, stringni split metodi yordamida qayta massivga aylantirib, natijani chiqaring.


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let arrjoin = arr.join(", ");
// let string = arrjoin.toString(" ");

// console.log(string);

// let split = string.split(arr.length);

// console.log(split);

// ==================== THE END =================
// var three = 3;
// var string = '3';
// if(three==string){
//     console.log("equal");
// }
// else{
//     console.log("not equal");
// }
// if(three===string){
//     alert("equal");
// }
// else{
//     alert("not equal");
// }
// var mydog={
//     "name":"Jacky",
//     "age":24,
//     "legs":4
// };
// console.log(mydog);

// var dogname= mydog.name;
// alert(dogname)
// var names={
//     "name one":"hi ",
//     2:"bye",
//     3:"no"
// };
// var playername=3;
// var player=names[playername];
// var player=names["name one"];
// console.log(player);
// names[playername]="no way";
// alert(names[playername]);
// names[4]="yeah";
// delete names[playername];
// console.log(names);


// function phoneticlookup(val){
//     var result="";

//     var lookup={
//         "alpha":"Adams",
//         "bravo":"Boston",
//         "charlie":"Chicago",
//         "delta":"Denver",
//         "echo":"Easy",
//         "foxtrot":"Frank"
//     };
//     result=lookup[val];
//     return result;
// }
// alert(phoneticlookup("alpha"));

// var lookup={
//     "alpha":"Adams",
//     "bravo":"Boston",
//     "charlie":"Chicago",
//     "delta":"Denver",
//     "echo":"Easy",
//     "foxtrot":"Frank"
// };
// function checkobj(has){
//     if(lookup.hasOwnProperty(has)){
//         return lookup[has];
//     }
//     else{
//         return "not found";
//     }
// }
// alert(checkobj("delta"));


// var music=[

//     {
//         "artist":"billie",
//         "title":"love",
//         "release-year":2019,
//         "formats":[
//             "CD",
//             "Album",
//             "Raw"
//         ],
//         "gold":false
//     },
//     {
//         "artist":"henry",
//         "title":"selfish",
//         "release_year":2017,
//         "formats":[
//             "CD",
//             "DVD"
//         ],
//         "platinum":true,
//         "rating":"fabulous"
//     },
//     {
//         "artist":"Harry",
//         "title":"Falling",
//         "release_year":2017,
//         "formats":[
//             "CD",
//             "DVD"
//         ],
//         "rating":"avg"
//     }
// ];
// alert(music[1].artist);

// var onject=[
//     {
//     type:"fruit",
//     name:"apple",
//     color:[
//         "red",
//         "green"
//     ],
//     price:"low"
// },
// {
//     type:"fruit",
//     name:"papaya",
//     color:[
//         "orange",
//         "green"
//     ],
//     price:"high"
// }
// ];
// alert(onject[0].name);

// var collection = {
//     "2548": {
//         "album": "slippery when wet",
//         "artist": "bon Javi",
//         "tracks": [
//             "Let It Rock",
//             "You Give Love A Bad Name"
//         ]
//     },
//     "2468": {
//         "album": "1999",
//         "artist": "Prince",
//         "tracks": [
//             "1999",
//             "Little Red Corvette"
//         ]
//     },
//     "1245": {
//         "artist": "Robert Palmer",
//         "tracks": []
//     },
//     "5439": {
//         "album": "ABBA Gold"
//     }
// };
// //  var copy=JSON.parse(JSON.string(collection));
// function updateRecords(id, prop, value) {
//     if (value === "") {
//         delete collection[id][prop];
//     }
//     else if (prop === "tracks") {
//         collection[id][prop] = collection[id][prop] || [];
//         collection[id][prop].push(value);
//     }
//     else {
//         collection[id][prop] = value;
//     }
//     return collection;
// }
// console.log(updateRecords("2468", "tracks", "test"));
// console.log(updateRecords("1245", "artist", "ABBA"));
// console.log(updateRecords("5439", "rating", "A+"));
// console.log(updateRecords("5439", "artist"));

// var array1=[];

// var j=10;
// var i=0;
// while(i<5){
//     array1.push(i);
//     i++;
// }
// console.log(array1);
// var arr=[];
// var i=0;
// for(i=0;i<7;i++){
//     arr.push(i);
// }
// console.log(arr);

// var ourarr=[3,4,5,6];
// var ourtotal=0;
// for(var i=0; i< ourarr.length; i++){
//     ourtotal+=ourarr[i];

// }
// console.log(ourtotal);
// function multiplyall(arr){
//     var product=1;
//     for (var i=0;i<arr.length;i++){
//       for(var j=0;j<arr[i].length;j++){
//           product*=arr[i][j];
//       }
//     }
//     return product;
// }
// var product=multiplyall([[1,2,3],[3,4],[1,7,8,9]]);
// console.log(product);
// var arr=[1,2,3,4,5];

// var i=0;
//      var product=1;
//      do{ 
//        product*=arr[i];
//        i++;
//       } while(i<arr.length);
//       console.log(product);
// function multiplyall(arr){
//   var i=0;
//      var product=1;
//      do{ 
//        product*=arr[i];
//        i++;
//       } while(i<arr.length);
//      return product;
// }
// var mul=multiplyall[1,2,3,4,5,6];
// console.log(mul);

// var contacts=[
//   {
//     "first name ":"Akira",
//     "last name":"Laine",
//     "number":"0543236543",
//     "likes":["Pizza","Coding","Brownie points"]
//   },
//   {
//     "first name ":"Harry",
//     "last name":"Potter",
//     "number":"0994372684",
//     "likes":["hogwarts","magic","hagrid"]},
//     {
//       "first name ":"Sherlock",
//       "last name":"Holmes",
//       "number":"0487345643",
//       "likes":["Intriguing Cases","Violin"]
//     },
//     {
//       "first name ":"Kristian",
//       "last name":"Vos",
//       "number":"unknown",
//       "likes":["Javascript","Gaming","Foxes"]}
// ];

// function lookup(name, property){
//   for(var i=0;i<contacts.length;i++){

//     if(contacts[i]["first name "]==name){
//       return contacts[i][property];
//     }
//     else{
//       return "no such property";
//     }
//   }
// }
// var data=lookup("Akira","likes");
// console.log(data);


// console.log(Math.floor(Math.random()*10));
// function randomnum(min,max)
// {
//   return Math.floor(Math.random()*(max-min+1))+min;
// }
// console.log(randomnum(3,9));

// function  converttoint(str){
//   return parseInt(str);
// }
// console.log(converttoint("34"));

// function call(bin)
// function check(num){
//   return num>5?"greater":"smaller";
// }
// console.log(check(9));

// function printn(str){
//    var sentence=str+" is great";
//    sentence=str+"is great poet";
//   for(var i =0;i<str.length;i+=2){
//     console.log(sentence);
//   }

// }
// printn("shakeaspeare");

// const arr=[1,23,3];
// function change(){
//   arr[0]=5;
//   arr[1]=9;
//   arr[2]=7;
// }
// change();
// console.log(arr);

// function freeobj(){
//   const M_const={
//     pi:3.14
//   };
//   Object.freeze(M_const);
//   try{
//     M_const.pi=45;
//   }catch(ex){
//     console.log(ex);
//   }
//   return M_const.pi;
// }

// const pi=freeobj();
// console.log(pi);

// sum=(a,b)=>a+b;

// console.log(sum(1,3));


// myConcat=(arr1,arr2)=> arr1.concat(arr2);
// console.log(myConcat([1,2,3], [4,5,6,7]));

// realarr=[2,3,4,,5.6,-2,4.5,-9,0];

// square = (arr)=> arr.filter(num => Number.isInteger(num) && num>0).map(x=>x*x);
  
// console.log(square(realarr));

// increment=( num, value=1)=> num+value;

// console.log(increment(5));
// console.log(increment(5,5));




// var special_remember_this_method_of_declarinig_a_function;
// const increment= (function(){
//   return function increment(num,val=1){
//     return num+val;
//   };

// })();
// console.log(increment(5,76));
// console.log(increment(5));


// sum = (...args)=> args.reduce((a,b)=> a+b,0);
// console.log(sum(1,2,3,8));

// const arr1=["jan","feb","three","four","five"];
// let arr2;

//   arr2=[...arr1];
// arr1[0]='potato';
// console.log(arr2);

// var voxel={x:3.5,y:4.5,z:5.66};
// const avg_temperature={
//   today:77.5,
//   tommorow: 79
// };

// function getTempOfTmrw(avg_temperature){
//   const{tommorow:tempOfTommorrow}=avg_temperature;
//   return tempOfTommorrow;
// }
// console.log(getTempOfTmrw(avg_temperature));

// const greetings=`hi this is me not you
// ans only me i guess you got it`

// "coding challenge"
// const result={
//   success:["max-length","no-amd","prefer-arrow-function"],
//   failure:["no-var","var-on-top","linebreak"],
//   skipped:["id-blacklist","no-dup-keys"]
// };
// function makeList(arr){
//   const resultDisplayArray= [];
//   for(var i=0;i<arr.length;i++){
//     resultDisplayArray.push(`<li class="text">&{arr[i]}</li>`);
//   }

//   return resultDisplayArray;
// }
// const resultDisplayArray=makeList(result.failure);
// console.log(resultDisplayArray);

// const info=(name,age,gender)=>{
//   return{
//     name:name,
//     age:age,
//     gender:gender
//   }
// }
// console.log(info("sakshi Bisht","21","Female"));

// var age=prompt("enter your age");
// document.getElementById('hi').innerHTML= age;

// function name1(name){
//    var sen="hello"+name;
//   document.getElementById("hi").innerHTML=sen;
//   alert(sen);
// }
// your_name=prompt("your name pls");
// name1(your_name);
// function sum(){
//   var num1=prompt("enter the first number");
//   var num2=prompt("enter the number two");
//    var sum1=parseInt(num1)+parseInt(num2);
//   return sum1;
// }
// alert(sum());

// function sum(a,b){
//   var r=a+b;
//   return r;
// }
// alert(sum(56,6));

// var str="nameyour";
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());
// console.log(str.charAt(2)+str.charAt(5));
// console.log(str.slice(2,4)+str.slice(4,6));
// console.log(str.indexOf("a")+str.indexOf("y"));
// console.log(str.split(""));

// var arr=["banana","grapes","orange"];
// var a=new Array("banana","grapes","orange");
// a[2]="apple";
// console.log(a);
// console.log(arr[1]);
// console.log(arr.toString());
// console.log(arr.join("-"));
// console.log(arr.concat(a));
// console.log((arr.slice(0,2)).concat(a.slice(0,2)));
// console.log(arr.reverse());
// ar=[2,3,56,7,84,5667,876,224,7667,32,7,35];
// console.log (ar.sort(function(a,b) {return a-b}));
// console.log (ar.sort(function(a,b) {return b-a}));

// var classes=[
//   {
//     first:"sakshi",
//     last:"bisht",
//     age:20
//   },
//   {
//     first:"shev",
//     last:"tamatar",
//     age:20
//   },
//   {
//     first:"shiv",
//     last:"narayana",
//     age:32
//   }
// ];

// console.log(classes[2].first,classes[1].last,classes[0].age);


// alert("hello there.")
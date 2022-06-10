function your_age(){var birthYear=prompt("Your birth year pls: ");
var birthMonth=prompt("Your birth month pls: ");
var birthDay=prompt("your birth Day pls: ");


year1=2022-birthYear;
month1=02-birthMonth;
day1=2-birthDay;
var age=(year1*365)+(month1*30)+day1;
var result="you are "+age+" days old";
var h1=document.createElement("h1");
var anasweer=document.createTextNode(result);
h1.setAttribute("id","age");
h1.appendChild(anasweer);
document.getElementById("result1").appendChild(h1);
// document.getElementById("result1").innerHTML=result;
}
function reset(){
    document.getElementById("result1").innerHTML=" ";
}
// task1
var multi_array = [[],[],[]];

// task2
var multi_array = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];


// task3
for(i=1;i<=10;i++){
    document.write(i + "<br>")
}

// task4
var num = +prompt("Enter a number to show its multiplication table");
var length = +prompt("Enter length multipication table");
document.write("Multiplication Table of "+num+"<br>Length "+length+"<br><br>");
for(i=1;i<=length;i++){
    document.write(num+" x "+i+" = "+num*i+"<br>");
}


// task5
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for (var i=0;i<fruits.length;i++){
    document.write(fruits[i]+"<br>");
}
for (var i=0;i<fruits.length;i++){
    document.write("Element at index "+ i + " is " + fruits[i] + "<br>");
}


// task6
document.write("<h3>Counting:</h3>");
for (var a = 1;a<=15;a++){
    document.write(a+", ");
}
document.write("<br><h3>Reverse counting:</h3>");
for (var b = 10;b>=1;b--){
    document.write(b+", ");
}
document.write("<br><h3>Even:</h3>");
for (var c = 0; c<=20;c+=2){
    document.write(c+", ");
}
document.write("<br><h3>Odd:</h3>");
for (var d = 1; d<=20;d+=2){
    document.write(d+", ");
}
document.write("<br><h3>Series:</h3>");
for (var e = 2; e<=20;e+=2){
    document.write(e+"k, ");
}



// task7
var A = ["cake", "apple pie", "cookie", "chips", "patties"];

var search = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
var idx = A.indexOf(search);
if(idx>=0){
    document.write(search + " is <b>available</b> at index "+ idx +" in our bakery");
}
else{
    document.write("We are sorry. " + search + " is <b> not available</b> in our bakery");

}

// task8
var A = [24, 53, 78, 91, 12];
var largest = A[0];
for (var i=0; i<A.length;i++){
    if(A[i]>largest){
        largest = A[i];
    }
}
document.write("Array Items: "+ A +"<br>");
document.write("The largest number is "+ largest +"<br>");



// task9
//Task 9
var A = [24, 53, 78, 91, 12];
var smallest = A[0];
for (var i=0; i<A.length;i++){
    if(A[i]<smallest){
        smallest = A[i];
    }
}
document.write("Array Items: "+ A +"<br>");
document.write("The smallest number is "+ smallest +"<br>");



// task10
for(var i=5;i<=100;i+=5){
    document.write(i+", ")
}
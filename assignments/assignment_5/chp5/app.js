// task1
var a= 3;
var b= 5;
var c= a + b;
document.write("Sum of " + a + " and " + b + " is " + c);


// task2
var a= 3;
var b= 5;
var c= a - b;
document.write("Subtraction of " + a + " from " + b + " is " + c);

var a= 3;
var b= 5;
var c= a * b;
document.write("Multiplication of " + a + " and " + b + " is " + c);

var a= 3;
var b= 5;
var c= a / b;
document.write("Division of " + a + " by " + b + " is " + c);

var a= 3;
var b= 5;
var c= a % b;
document.write("Modulus of " + a + " and " + b + " is " + c);


// task3
var num;
document.write("Value after variable declaraton is " + num);
num = 5;
document.write("<br>Initial value: " + num);
num++;
document.write("<br>Value after increment is: " + num);
num = num + 7;
document.write("<br>Value after addition is: " + num);
num--;
document.write("<br>Value after decrement is: " + num);
var r = num % 3;
document.write("<br>The remainder is: " + r);


// task4
var ticket = 600;
var quantity = 5;
var total = ticket * quantity;
document.write("Total cost to buy " + quantity + " tickets to a movie is " + total);


// task5
document.write("Table of 4 <br><br>");
var num = 4;
for(i=1;i<=10;i++){
    document.write("<br>" + num + " x " + i + " = " + num*i);
}


// task6
var tc1 = 25;
var tf1 = (tc1 * (9 / 5)) + 32;
var tf2 = 70;
var tc2 = (tf2 - 32) * (5 / 9);
document.write(tc1 + "&deg C is " + tf1 + "&deg F " + "<br>" + tf2 + "&deg F is " + tc2 + "&deg C ");


// task7
var sc = "Shopping Cart"
var item1 = 650;
var q1 = 3;
var item2 = 100;
var q2 = 7;
var shc = 100;
var tc = (item1 * q1) + (item2 * q2)  + shc;
document.write(sc.big().bold() + "<br><br><br>");
document.write("Price of item 1 is " + item1 + "<br>Quantity of item 1 is " + q1 + "<br>Price of item 2 is " + item2 + "<br>Quantity of item 2 is " + q2 + "<br>Shipping Charges are " + shc);




// task8
var tm = 980;
var mo = 804;
var p = mo / tm * 100;
var ms = "Marks Sheet"
document.write(ms.bold().big() + "<br><br>Total marks: " + tm + "<br>Marks obtained: " + mo + "<br>Percentage: " + p);


// task9
var c = "Currency in PKR"
var usd = 104.80;
var sar = 28;
var qu = 10;
var qs = 25;
var TC = (usd * qu) + (sar * qs);
document.write(c.big().bold() + "<br><br>" + "Total Currency in PKR: " + TC);


// task10
var num = 9;
num = ((num + 5)*10)/2;
document.write(num);


// task11
var c_year = 2020;
var b_year = 1992;
var age1 = c_year - b_year;
var age2 = (c_year - 1) - b_year;
var a = "Age Calculator";
document.write(a.bold().big() + "<br><br>");
document.write("Current Year: " + c_year + "<br>Birth Year: " + b_year + "<br>");
document.write("Your age is: " + age1 + " or " + age2);


// task12
var radius = 20;
var cir = 2 * Math.PI * radius;
var area = Math.PI * radius * radius;
var G = "The Geometrizer"
document.write(G.big().bold() + "<br><br>");
document.write("Radius of a Circle: " + radius + "<br>The circumference is: " + cir + "<br>The area is: " + area);


// task13
var f_snack = "chocolate";
var c_age = 20;
var e_age = 65;
var a_snack = 3;
var total = (3*365*(65-20));
var a = "The Lifetime Supply Calculator";
document.write(a.bold().big() + "<br><br>");
document.write("Favourite Snack: " + f_snack + "<br>Current age: " + c_age + "<br>Estimated Maximum age: " + e_age + "<br>Amounts of Snacks per day: " + a_snack);
document.write("<br>You will need " + total + " " + f_snack + " to last you untill the ripe old age of " + e_age);
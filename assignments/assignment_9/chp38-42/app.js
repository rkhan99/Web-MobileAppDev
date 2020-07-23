// ============== Chapter 38-42 Task 1
// function power(a,b) {
//     var a =  Math.pow(a, b);
//     return a;
// }


// ============== Chapter 38-42 Task 2
// function LeapYear(year) {
//     var year;
//     return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
// }


// ============== Chapter 38-42 Task 3
// function AreaTriangle(a,b,c) {
//     var a,b,c;
//     function calcS(a,b,c) {
//        return (a+b+c)/2; 
//     } 
//     var s = calcS(a,b,c);
//     var area = s*(s-a)*(s-b)*(s-c);
//     area = area.toFixed(2);
//     alert(area);
// }



// ============== Chapter 38-42 Task 4
// function result(m1,m2,m3,tm){
//     function averageMarks(m1,m2,m3) {
//         return (m1+m2+m3)/3;
//     }
//     function percentageMarks(m1,m2,m3,tm){
//         return ((m1+m2+m3)/tm)*100;
//     }
//     var average = averageMarks(m1,m2,m3);
//     average = average.toFixed(2);
//     var percentage = percentageMarks(m1,m2,m3,tm);
//     percentage = percentage.toFixed(2);
//     alert(average+"\n"+ percentage);
// }


// ============== Chapter 38-42 Task 5
// function index(str,a) {
//     var str = str.toLowerCase();
//     var a = a.toLowerCase();
//     var index = -1;
//     for(var i=0; i<str.length;i++) {
//         if(str[i] === a[0] ) {
//             for(var j=0;j<a.length;j++) {
//                 if(str[i+j]===a[j]) {
//                     var index = i;
//                     continue;
//                 }
//                 else{
//                     index = -1;
//                     break;
//                 }
//             }
//         }
//     }
//     alert(index);
// }


// ============== Chapter 38-42 Task 6
// function removeVowels(str){
//     var vowels = "aieuo";
//     var strArr = str.toLowerCase().split("");
//     var newArr = strArr.filter(function(letter){
//         if(vowels.indexOf(letter)  == -1){
//             return letter;
//         }
//     });
//     var string = "";
//     newArr.forEach(function(letter){
//         string += letter;
//     });
//     alert(string);
// }


// ============== Chapter 38-42 Task 7
// function findOccurrences() {
//     var str = "Pleases read this application and give me gratuity";
//     var chars = str.toLowerCase().split("");
//     var count = 0;
//     for(let i = 0; i < chars.length - 1; i++) {
//       var char = chars[i];
//       var next = chars[i + 1];
//       if(isCorrectCharacter(char) && isCorrectCharacter(next)) {
//         count++
//       }
//     }
    
//     return count;
//   }
//   function isCorrectCharacter(char) {
//     switch (char) {
//       case 'a':
//       case 'e':
//       case 'i':
//       case 'o':
//       case 'u':
//         return true;
//       default:
//         return false;
//     }
// }


// ============== Chapter 38-42 Task 8
// function KmConversion(km) {
//     function meters(km) {
//         return km*1000 ;
//     }
//     function feet(km) {
//         return km*3280.84; 
//     }
//     function inches(km) {
//         return km*39370.1;
//     }
//     function centimeters(km) {
//         return km*100000;
//     }
//     var meters = meters(km);
//     var feet = feet(km)
//     var inches = inches(km)
//     var centimeters = centimeters(km)
//     document.write("meters: "+meters+"<br>feet: "+feet+"<br>inches: "+inches+"<br>centimeters: "+centimeters);
// }


// ============== Chapter 38-42 Task 9
// function OvertimePay(hours) {
//     var rate = 12;
//     var overtimeHours = hours - 40;
//     var Pay = rate*overtimeHours;
//     return Pay;
// }


// ============== Chapter 38-42 Task 10
// function WithdrawNotes(amount) {
//     var hundred = amount/100;
//     hundred =  Math.floor(hundred);
//     var remaining = amount-(hundred*100);
//     if(remaining>=50) {
//         var fifty = 1;
//     }
//     else{
//         fifty = 0;
//     }
//     var ten = (remaining-50)/10;
//     ten = Math.floor(ten);
//     alert("you will have "+hundred+" hundred notes "+fifty+" fifty notes "+ten+" ten notes.")
// }



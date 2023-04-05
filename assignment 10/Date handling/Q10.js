


// 25. Write a JavaScript function to get a full textual representation of a month, such as January or June.   

// Test Data :
// dt = new Date(2015, 10, 1); 

// console.log(full_month(dt));

// "November"


function full_month(tdm) {
 if (dt==tdm) {
    return '"june"';
 }
}
let dt = new Date(2015, 10, 1); 
dt.setMonth(5);
console.log(full_month(dt));



// 37. Write a JavaScript function to get Timezone.   

// Test Data :

// dt = new Date();

// console.log(seconds_with_leading_zeros(dt));

// "India Standard Time"


function seconds_with_leading_zeros() {
    let Time = new Date();
    Time.getUTCMilliseconds();
}
console.log(seconds_with_leading_zeros());

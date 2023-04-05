// 31. Write a JavaScript function to get uppercase Ante meridiem and Post meridiem.  

function post_meridiem() {
    let now = new Date();
    if (now.setHours(13)>12) {
        return "am";
    }else{
        return "pm"  ;
    }
    
}
console.log(post_meridiem());
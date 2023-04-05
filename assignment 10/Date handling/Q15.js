
// 30. Write a JavaScript function to get lowercase Ante meridiem and Post meridiem.   

function Ante_meridiem() {
    let now = new Date();
    if (now.getHours()<12) {
        return "am";
    }else{
        return "pm"  ;
    }
    
}
console.log(Ante_meridiem());
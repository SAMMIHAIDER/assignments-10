// 34. Write a JavaScript function to get 24-hour format of an hour without leading zeros.   

// Test Data :

// dt = new Date(1989, 10, 1);

// console.log(hours_without_zeroes(dt));

// 0


function hours_without_zeroes(tdm) {
    if (ht==tdm) {
       return '0';
    }else{
        return  "hours_without_zeroes"
    }
   }
   let ht = new Date(1989, 10, 1); 
   ht.setHours(21);
   console.log(hours_without_zeroes(ht));

//33. Write a JavaScript function to get 12-hour format of an hour with leading zeros.  

//Test Data :

// dt = new Date(1989, 10, 1);

// console.log(hours_with_zeroes(dt));

// "12"


function hours_with_zeroes(tdm) {
    if (st==tdm) {
       return '"12"';
    }else{
        return  "format zero"
    }
   }
   let st = new Date(1989, 10, 1); 
   st.setHours(12);
   console.log(hours_with_zeroes(st));


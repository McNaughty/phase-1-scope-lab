// Write your solution in this file!

var customerName = "bob";
const leastFavoriteCustomer = "Peter";

function test(){
    return customerName;
}


function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
    return customerName;
}


function setBestCustomer(value = "not bob"){
     window.bestCustomer = value;
}



function overwriteBestCustomer(value = "maybe bob"){
    window.bestCustomer = value;
    //return bestCustomer;
}


function changeLeastFavoriteCustomer(value="Paul"){
      leastFavoriteCustomer = value;
     //return leastFavoriteCustomer;
}



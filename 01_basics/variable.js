// In real project variable use for storing user details
const accountId = 1558376
let accountEmail = "sunil.yaadav958438@gmail.com"
var accountPassword = "767689" // now a days not use var because create issue same variable updated by different developer
accountCity = "Delhi"
 
//accountId = 2980 -- not allowd-  we can not change this value because it is defined by const keyword and const means fixed value

accountEmail = "ghvhgsjhg@.com"
accountPassword = "87898"
accountCity = "Bhopal"
let accountState; // output will show undefined further we can use
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]) // by this we can print all variable at a time

/* prefer not to use var
  because of issue in block scope and functional sope   */
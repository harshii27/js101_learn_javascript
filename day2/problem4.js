//Given stored username and password and input username and password, Print if the user can login or not.


let database_username="harshii27";
let database_password="luvfuggii";

//for login
let username="harshii27";
let password="luvfuggii";
if (database_username==username){
  if(database_password==password){
    console.log("Login successfully");
  }else{
    console.log("incorrect password");
  }
}else{
  console.log("wrong answer");
}
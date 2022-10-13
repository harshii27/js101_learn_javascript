//Given a string count the number of words in that string


let str="my name is harshita";
let count=0;
for (let i=0; i<=str.length-1; i++){
  if(str[i]==" "){
    count++
  }
}
if(str.length!=0){
  console.log(count+1);
}else{
  console.log(0);
}
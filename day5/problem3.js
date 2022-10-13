//Given an array of numbers find the average of all the even numbers.

let a=[2,3,7,42,122,4];
let sum=0;
let count=0;
for (let i=0;i<=a.length-1;i++){
  if (a[i]%2==0);
  sum+=a[i];
  count++
}console.log("The Avarage is", sum/count );
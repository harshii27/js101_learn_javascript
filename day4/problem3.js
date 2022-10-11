//Print the sum of all the multiples of 3 from 0 to the given limit

let p=0;
let sum=0;
while(p<=30){
  if(p%3==0){
    sum=sum+p;
  }
  p++;
}
console.log(sum);

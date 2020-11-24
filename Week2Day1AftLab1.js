// for (let count =1; count<=9; count++){
//  console.log(count);
//  count++;
// }
// for (let count2 =2; count2<=10; count2++){
//  console.log(count2);
//  count2++;
// }

// for (let count =0; count<=10; count++){
//   if (count%2==0) {
//     console.log(count);
//   }
// }



var prime = false;
for (let count =1; count<=20; count++){
  if (count%2==1) {
    console.log(count + " is odd");
  }
  if (count%2==0) {
    console.log(count + " is even");
  }
  for( let pCount = 2; pCount<count; pCount++)
  {
      if(count%pCount==0)
      {
          prime = false;
          break;
      }
      else
      {
          prime = true;

      }
  }
  if(prime == true)
  {
     console.log(count + " is also prime");
  }
}

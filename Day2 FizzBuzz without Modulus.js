count3=0
count5=0
count15=0
//Count variables


for(i=1; i<=100; i++)
{ count3++
  count5++
  count15++
  
  //@clashkingjeet
  
  if(count15==15)
  {
    console.log("FizzBuzz")
    count3=0;
    count5=0;
    count15=0;
    //As no. is divisible by 15, it is also divisible by 3 and 5 
    //so it will refresh all counts
  }
  
  else if(count3==3)
  {
    console.log("Fizz");
    count3=0;  //refresh count for divisible by 3
  }
  
  else if(count5==5) 
  {
    console.log("Buzz");
    count5=0;    //refresh count for divisible by 5
  }
  
  else
  {
    console.log(i);  //else print current no.
  }
}











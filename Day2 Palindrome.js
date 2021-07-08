
//problem string-->
s= 'madam hannah refer RBR Book which has moderate level stats problems'

s1=""  //null string to add problem string word by word

for(t of s)     //of loop will traverse string letter by letter
{ 
  if(t!=0)      // to check end of word condition
  {
    s1= s1+t;   //add string in null string letter by letter
  }
  
  if(t==0)      //if end of word
  {
    if(s1==s1.split('').reverse().join('')) //compare the word with its reverse
    {
    //@clashkingjeet  
    //if true print word, palindrome is found  
      
    console.log(s1);  
    s1="";
    }
    
    else
    {s1="";}
  }
  
}


//OUTPUT-

/*Output:

madam
hannah
refer
RBR
level
stats 

*/

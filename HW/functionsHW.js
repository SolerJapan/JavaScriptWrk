function maxOfTwoNumbers (a,b)
{
   if(a>b)
   {
      return a;
   }
   else if(a<b)
   {
      return b;
   }
   else
   return a;
};

function maxOfThree(a,b,c)
{
  if(a>b && a>c)
  {
    return a;
  }
  else if(a<b && b>c)
  {
    return b;
  }
  else if(c>a && c>b)
  {
    return c;
  }
  else
    return a;

};

function isCharacterAVowel(str)
{
  if(str=="a" || str=="e" || str=="i" || str=="o" || str=="u")
  {
    return true;
  }
  else
    return false;
};

function sumArray(a)
{
  let sum=0;
  let leng = a.length;
  for(let i=0; i<leng;i++)
  {
     sum+=a[i];
  }
  return sum;
}
function multiplyArray(a)
{
  let mult=1;
  let leng = a.length;
  for(let i=0; i<leng;i++)
  {
     mult*=a[i];
  }
  return mult;
};

function reverseString(str)
{
  let newstr='';
  let leng = str.length;

  while(leng>=0)
  {
    newstr+=str.charAt(leng);
    leng--;
  }
  return newstr;
};

function findLongestWord(str)
{
    var long = "";
    var lsize = long.length;
    let words=str.length;
    for(i=0;i<words;i++)
    {
       cword = str[i];
       csize = cword.length;
       if(lsize < csize)
       {
         long=cword;
         lsize = long.length;

       }
    }
    return long.length;
}

function findLongestWords(str, i)
{
  var newWord=[];
  var acount=0;
  let words=str.length;
  for(n=0;n<words;n++)
  {
     cword = str[n];
     csize = cword.length;
     if(i < csize)
     {
       newWord[acount] = cword;
       //console.log(newWord[acount]);
       acount++;
     }
  }
  return newWord;
}

//console.log("Per Scholas".reverseString());
//console.log(maxOfTwoNumbers(26,24));
//console.log(maxOfThree(44,33,255));
//console.log(isCharacterAVowel('a'));
//var a = [21,11,33];
//console.log(sumArray(a));
//console.log(multiplyArray(a));
//console.log(reverseString('per scholas'));
//var word=["wasted", "nihongo", "free", "jet"]
//console.log(findLongestWord(word));
// var array = findLongestWords(word, 5);

// var count= array.length;
// for(var c=0; c<count;c++)
// {
//   console.log(array[c]);
// }

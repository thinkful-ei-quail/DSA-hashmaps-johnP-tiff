const HashMap=require('./HashMap')

main=() => {
  const numMap=new HashMap()
  numMap.set(1, 'one')
  numMap.set(2, 'two')
  numMap.set(3, 'three')
  numMap.set(4, 'four')
  numMap.set(5, 'five')
  numMap.set(6, 'six')
  numMap.set(7, 'seven')
  numMap.set(8, 'eight') // max cap
  numMap.set(9, 'nine')
  numMap.set(10, 'ten')
  numMap.set(11, 'eleven')
  numMap.set(12, 'twelve') // last entry
  numMap.set(1, 'eleven')
  numMap.set(1, 'seven') // when no collision handling, maps out last read input
  // console.log(numMap)
  console.log(numMap._hashTable)
}
// main()

// What is the capacity of your hash table after you have hashed all the above items? Explain your answer.
/* Capacity is 24, map class won't resize unless told to do so.
Even if map length is greater than intialCapacity(8). This maps out 1-8 and last value in list totaling length of 9
*/


/* */

const WhatDoesThisDo=function () {
  let str1='Hello World.';
  let str2='Hello World.';
  let map1=new HashMap();
  map1.set(str1, 10);//10
  map1.set(str2, 20);//20
  let map2=new HashMap();
  let str3=str1;//
  let str4=str2;
  map2.set(str3, 20);
  map2.set(str4, 10);//10

  console.log(map1.get(str1));//  20
  console.log(map2.get(str3));//  10

}


// WhatDoesThisDo();



function firstOcc(str) {
  let newStr='';
  let newSet=[...new Set(str)]
  for(let [key, value] of newSet.entries()) newStr+=value
  return newStr
}




// console.log(firstOcc("google all that you think can think of"))



is_palindrome=(strVal) => {

  strVal=strVal.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  const revStack=new Stack();

  for(let i=0;i<strVal.length;i++) {
    revStack.push(strVal[i]);
  }

  for(let i=0;i<strVal.length;i++) {
    const currStrChar=strVal[i];
    const currStackChar=revStack.pop();
    if(currStrChar!==currStackChar) {
      return false;
    }
  }
  return true;
};


// console.log(is_palindrome('racecar'))


function isScrambledPalindrome(input) {
  let chars={};
  input.split("").forEach(
    function (char) {
      if(chars[char]) {
        delete chars[char]
      } else {
        chars[char]="odd"
      }
    });
  return (Object.keys(chars).length<=1);
}

// console.log(isScrambledPalindrome('accecarr'));
// console.log(isScrambledPalindrome("north"));
// console.log(isScrambledPalindrome("vegetable"));




function chekcPal(str) {
  let newHas=new Map();

  for(let i=0;i<str.length;i++) {
    if(newHas.has(str[i])) {
      let currval=newHas.get(str[i]);
      newHas.set(str[i], currval+1)
    } else {
      newHas.set(str[i], 1)
    }
  }
  if(str.length%2===0) {
    return newHas.size===str.length/2
  } else {return newHas.size===Math.ceil(str.length/2)}

}


console.log(chekcPal('sting'))

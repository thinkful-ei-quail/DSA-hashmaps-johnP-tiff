const HashMap = require( './HashMap' )

main = () =>
{
  const numMap = new HashMap()
  numMap.set( 1, 'one' )
  numMap.set( 2, 'two' )
  numMap.set( 3, 'three' )
  numMap.set( 4, 'four' )
  numMap.set( 5, 'five' )
  numMap.set( 6, 'six' )
  numMap.set( 7, 'seven' )
  numMap.set( 8, 'eight' ) // max cap
  numMap.set( 9, 'nine' )
  numMap.set( 10, 'ten' )
  numMap.set( 11, 'eleven' )
  numMap.set( 12, 'twelve' ) // last entry
  numMap.set( 1, 'eleven' )
  numMap.set( 1, 'seven' ) // when no collision handling, maps out last read input
  console.log( numMap )
}
// main()

// What is the capacity of your hash table after you have hashed all the above items? Explain your answer.
/* Capacity is 24, map class won't resize unless told to do so.
Even if map length is greater than intialCapacity(8). This maps out 1-8 and last value in list totaling length of 9
*/


/* */

const WhatDoesThisDo = function ()
{
  let str1 = 'Hello World.';
  let str2 = 'Hello World.';
  let map1 = new HashMap();
  map1.set( str1, 10 );//10
  map1.set( str2, 20 );//20
  let map2 = new HashMap();
  let str3 = str1;//
  let str4 = str2;
  map2.set( str3, 20 );
  map2.set( str4, 10 );//10

  console.log( map1.get( str1 ) );//  20
  console.log( map2.get( str3 ) );//  10

}


// WhatDoesThisDo();



function firstOcc ( str )
{
  let newSet = new Set();
  if ( str.length = 0 ) { return newSet; }
  newSet.set( str[ 0 ] );
  str = str - str[ 0 ];
  firstOcc( str, newStr );



}



console.log( firstOcc( "google all that you think can think of" ) );

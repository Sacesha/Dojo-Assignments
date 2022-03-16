// print numbers from 1- 100, multiples of 3 log fizz, while 5s log buzz 

function FizzBuzz(){
    for(i=1;i<=100;i++)
    // var Fizz
    if(i%3 == 0){
    console.log ("Fizz")
    }
    // then console.log Fizz
    // modulus 3 = 0 then console.log Fizz
    if(i%5 == 0){
    console.log ("Buzz")
    }
    // modulus 5 = 0 then console.log Buzz
}
return FizzBuzz()
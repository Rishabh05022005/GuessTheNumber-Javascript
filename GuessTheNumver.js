
let number = Math.floor(Math.random() * 100) + 1 //math.random generates the decimal random
                                                //  no , * 100 defines the limit of the defination , math.floor is to ensure random 
                                                //  numbers are whole , we make use of +1 to ensure the starting from one.
let input = prompt("Guess The Number") 
let chances = 0 

do
{ 
    if(input > number){
        console.log("number is greater, Try again")
        chances++
        input = prompt("Guess The Number")   
    }
    else if(input < number ){
        console.log("number is smaller, Try again")
        chances++
        input = prompt("Guess The Number")  
    }
}
while(input != number)

console.log("Congratulations! you guessed it right")
console.log("Random number was = " + number)
console.log("Your score is " + (100-chances))

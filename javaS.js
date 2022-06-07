function remainder(numrator , dom){
    if (numrator % dom == 0){
        return true;
    }
    else{
        return false;
    }

}

function game(x){
    if (x==0){
     console.log("end of game")
     return true
    }
    if (remainder(x,3) && remainder(x,5)){
        console.log("FizzBuzz", x)
    }
    else if (remainder(x,3)){
        console.log("Fizz", x)
    }
     else if (remainder(x,5)){
        console.log("buzz", x)
    }
    else{
        console.log("none", x)
    }
    game(x-1)
    }

game(100)
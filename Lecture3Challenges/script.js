function ThreeSpy(arrayInput){
    var count = 0
    for(var i = 0; i<arrayInput.length; i++){
        if(arrayInput[i] == 3){
            count += 1 
        }
    }
    return count
}

console.log(ThreeSpy([6,4,3,66,3,45,3]))
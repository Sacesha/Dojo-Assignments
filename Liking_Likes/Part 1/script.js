var count = 3;
var countElement = document.querySelector("#count");

function addLike() {
    count++;  
    countElement.innerText= "Like(s)- " + count;
    console.log(count); 
}
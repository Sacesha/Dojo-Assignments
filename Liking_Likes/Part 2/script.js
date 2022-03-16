// var count = 3;
var likes = [3, 12, 6]
var countElement = [ 
    document.querySelector("#count-1"),
    document.querySelector("#count-2"),
    document.querySelector("#count-3")
];

function addLike(id) {
    likes[id]++;  
    countElement[id].innerText= "Like(s)- " + likes[id];
    // console.log(count);
}
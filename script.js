// var text = document.getElementById(detail);

// detail:following or not
var text = document.querySelector("#detail");

// like icon
var like = document.querySelector("#heart1");
// console.log(detail)

// follow button
var button = document.querySelector("#button");

// popping heart 
var heartpop = document.querySelector("#heartpop");

// ronaldo image
var ronaldo = document.querySelector("#ronaldo");

// changes button style on follow and unfollow
var a = 1;
button.addEventListener("click", function () {
    if (a == 1) {
        text.innerHTML = "Following";
        text.style.color = "green";
        button.innerHTML = "Unfollow";
        button.style.color = "black";
        button.style.backgroundColor = "white";
        a = 2;
    }
    else {
        button.innerHTML = "Follow";
        text.innerHTML = "Not following yet";
        text.style.color = "rgb(204, 2, 2)";
        button.style.color = "rgb(255, 255, 255)";
        button.style.backgroundColor = "#0866ff";
        a = 1;
    }
})


// abc=0;
// var c=1;
// ronaldo.addEventListener("dblclick",function(){
//     if (c==1){
//     heartpop.style.visibility = ("visible");
// c=2;
//     }
//     else {
//     heartpop.style.visibility = ("hidden");
// c=1;
//     }
    
// setTimeout(function(){
//     if(c==2)
//     {
//      heartpop.style.visibility = ("hidden");
//      c=1;
//     }
//  },1500)
 
//     // console.log(abc=abc+1)
// })



// var idk =

// setTimeout helps to execute code after given time period
// to again hide the heartpop after liking the photo using setTimeout 
function pop(){
    heartpop.style.visibility = ("visible");
    if (like.src.includes("transparentHeart.png")) {
        like.src = "redHeart.png";}
    setTimeout(function(){
    heartpop.style.visibility = ("hidden");

    },1000)

}
ronaldo.addEventListener("dblclick",pop)

// to pop the heart even when the like icon is clicked
// pop function is called inside like function

// changes heart style on like or unlike
var b = 1;
like.addEventListener("click", function () {
    // b=b+1;
    // console.log(b)
    if (like.src.includes("transparentHeart.png")) {
        like.src = "redHeart.png";
        pop()
    } else {
        like.src = "transparentHeart.png";
        // heartpop.style.display = ("none");

    }

})
// const date = new Date();
// console.log(date)
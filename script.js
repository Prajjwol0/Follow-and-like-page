let btnEl = document.getElementById("btn")
let likeEl = document.querySelector(".fa-heart")
let saveEl = document.querySelector(".fa-bookmark")
let shareEl = document.querySelector(".fa-paper-plane")

let followingEl = document.getElementById("followingId")
let popupImageEl = document.getElementById("transparentHeart")

let likeIndex = 0, followIndex = 0, saveIndex = 0, shareIndex = 0

function likePopup(){
    popupImageEl.style.display = "flex"

    setTimeout(()=>{
        popupImageEl.style.display = "none"
    },1000)
}

btnEl.addEventListener("click",()=>{

    if(followIndex%2==0){
        btnEl.innerText = "Unfollow"
        followingEl.innerText = "Following."

      

    }
    else{
        btnEl.innerText = "Follow"
        followingEl.innerText = "Not Following Yet."
    }
   followIndex++
})


likeEl.addEventListener("click",()=>{
 
    if(likeIndex%2==0){
        likeEl.classList.remove("fa-regular")
        likeEl.classList.add("fa-solid")
     
        likePopup()
        
    }
    else{
        likeEl.classList.remove("fa-solid")
        likeEl.classList.add("fa-regular")
    }
    likeIndex++
})

saveEl.addEventListener("click",()=>{
   
     
    if(saveIndex%2==0){
        saveEl.classList.remove("fa-regular")
        saveEl.classList.add("fa-solid")

        
    }
    else{
        saveEl.classList.remove("fa-solid")
        saveEl.classList.add("fa-regular")
    }
    saveIndex++

})

shareEl.addEventListener("click",()=>{
   
     
    if(shareIndex%2==0){
        shareEl.classList.remove("fa-regular")
        shareEl.classList.add("fa-solid")

        
    }
    else{
        shareEl.classList.remove("fa-solid")
        shareEl.classList.add("fa-regular")
    }
    shareIndex++

})
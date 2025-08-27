// Clicking on the 💗 heart icon of any card will increase the count in the Navbar

document.getElementById("card-section")
.addEventListener("click", function(e){
    if(e.target.className.includes("fa-heart")){
        const heartNumber = document.getElementById("heart-count").innerText
        let increaseHeartNumber = Number(heartNumber)+1
        document.getElementById("heart-count").innerText = increaseHeartNumber;
        
        
    }

    
})





































// function for fetching element by id
function getElement(id){
    const result = document.getElementById(id)
    return result;
}



// Clicking on the 💗 heart icon of any card will increase the count in the Navbar

document.getElementById("card-section")
.addEventListener("click", function(e){
    if(e.target.className.includes("fa-heart")){
        const heartNumber = document.getElementById("heart-count").innerText
        let increaseHeartNumber = Number(heartNumber)+1
        document.getElementById("heart-count").innerText = increaseHeartNumber;
        
        
    }

    
})


// Call Buttons

document.getElementById("card-section")
.addEventListener("click", function(e){
    if(e.target.className.includes("call-button")){
const serviceName = e.target.parentNode.parentNode.children[1].children[0].innerText
const serviceNumber = e.target.parentNode.parentNode.children[1].children[2].innerText

const coinNumber = parseInt(getElement("coin-count").innerText)
if(coinNumber<=0){
    alert("Out of coins. Please recharge and try again")
    return;
}

const textMessage = `
You are going to call
${serviceName} 
${serviceNumber}
`
alert(
    textMessage
)



availableCoinNumber = Number(coinNumber) - 20;
getElement("coin-count").innerText = availableCoinNumber










        
        
        
    }

    
})


































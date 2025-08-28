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

// call history section
const callContainer = getElement("call-info")
const newDiv = document.createElement("div")
newDiv.innerHTML = `
<div class="call-section flex justify-between items-center mx-4 my-4 p-1 rounded-xl bg-gray-300">
  
        <div class="num-contact">
          <h1 class="font-semibold">${serviceName}</h1>
          <p>${serviceNumber}</p>
        </div>
  
        <p>${new Date().toLocaleTimeString()
}</p>
  
      </div>
`
callContainer.append(newDiv)


availableCoinNumber = Number(coinNumber) - 20;
getElement("coin-count").innerText = availableCoinNumber
        
    }    
})


// call clear feature

getElement("call-clear-button")
.addEventListener("click", function(){
    const callinfoDiv = getElement("call-info")    
    callinfoDiv.innerHTML = ""
})


// copy button fetch
document.getElementById("card-section")
.addEventListener("click", function(e){
    if(e.target.className.includes("copy-button")){
const text = e.target.parentNode.parentNode.children[1].children[2].innerText
navigator.clipboard.writeText(text)
alert("Number copied: " + text)

    }
    
})



























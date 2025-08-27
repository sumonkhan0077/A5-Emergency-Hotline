function getElementID(id){
    const element = document.getElementById(id);
    return element;
}
function getElementsClassName(className){
    return document.getElementsByClassName(className);
}

const card = getElementID('cards');
card.addEventListener('click', function(e){

    const cardTitle = card.parentNode.children[0].children[0].children[1].children[0].innerText;
    const cardNumber = card.parentNode.children[0].children[0].children[2].children[0].innerText;
    const date = new Date().toLocaleTimeString()

    // Heart button count
    if(e.target.className.includes("heart-btn")) {
        const count = getElementID('heart-count').innerText
        const totalCountHeart = Number(count) + 1;
        getElementID('heart-count').innerText = totalCountHeart;
    }

    // click copy button
    if(e.target.className.includes("copy-btn")) {
        const copyNumber = cardNumber;
        navigator.clipboard.writeText(copyNumber).then(() => {
            alert(`Number copied :  ${copyNumber}`)
            const totalCopy = getElementID("copy-count").innerText;
            const totalCountCopy = Number(totalCopy) + 1;
            getElementID('copy-count').innerText = totalCountCopy;
        })
    }

    // click call btn 
        if(e.target.className.includes("call-btn")) {
        const firstCoin = getElementID('coin').innerText;
        const numcoin = Number(firstCoin);
        if (numcoin >= 20) {
            alert(`📞 Calling ${cardTitle} ${cardNumber} ....`)
            const tillCoin = numcoin - 20;
            getElementID('coin').innerText = tillCoin;
            
            const historyContainer = getElementID('history-card-cointainer')

            const newCard = document.createElement('div')
            newCard.innerHTML = `
                 <div class="flex justify-between items-center bg-slate-100 rounded-lg p-2 mt-2">
                    <div>
                        <p class="font-semibold text-[13px]">${cardTitle} <br> <span class="text-gray-400"> ${cardNumber}</span></p>
                    </div>
                    <div><span class="text-[13px]">${date} </span></div>
                </div>
            `;
             historyContainer.append(newCard)
        }
        else{
            alert("❌ You need 20/20+ coins to call")
        }
    } 
})

// clear button click
const clearBtn = getElementID('clear-btn');
clearBtn.addEventListener('click', function() {
    const historyContainer = getElementID('history-card-cointainer');
    historyContainer.innerHTML = "";
})
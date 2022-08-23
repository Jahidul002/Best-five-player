const playerArray = [];


function displayName(allPlayer) {
    const playerField = document.getElementById('select-field')


    if (playerArray.length >= 6) {
        alert('You already select 5 player')
        playerArray.pop()
        return;
    } else {
        playerField.innerHTML = "";
    }
    for (let i = 0; i < playerArray.length; i++) {
        let serial = i + 1;
        let index = playerArray[i];
        const p = document.createElement('p')
        p.innerText = `
        ${serial}   ${index}
        
        `;
        playerField.appendChild(p)
    }
}

function addToSelect(element) {
    const playerName = element.parentNode.children[0].innerText;
    playerArray.push(playerName)
    element.disabled = true

    displayName(playerArray)
}



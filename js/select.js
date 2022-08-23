const playerLength = [];


function displayName(allPlayer) {
    const playerField = document.getElementById('select-field')


    if (playerLength.length >= 6) {
        alert('you can add only 5 player,reload The site again plz...')
        return;
    } else {
        playerField.innerHTML = "";
    }
    for (let i = 0; i < playerLength.length; i++) {
        let serial = i + 1;
        let index = playerLength[i];
        const p = document.createElement('p')
        p.innerText = `
        ${serial}   ${index}
        
        `;
        playerField.appendChild(p)
    }
}

function addToSelect(element) {
    const playerName = element.parentNode.children[0].innerText;
    playerLength.push(playerName)
    element.disabled = true

    displayName(playerLength)
}



const playerLength = [];


function displayName(allPlayer) {
    const playerField = document.getElementById('select-field')
    playerField.innerHTML = "";
    for (let i = 0; i < playerLength.length; i++) {
        if (playerLength.length >= 6) {
            alert('you can add only 5 player,reload The site again plz...(আসল কথা কেন রিমুভ হচ্চে বুঝতাসি না,তাই রিলোড দিতে বললাম ;-)')
            break
        }
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



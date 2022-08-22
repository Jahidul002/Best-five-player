const playerLength = [];


function displayName(allPlayer) {
    const playerField = document.getElementById('select-field')
    const allBtn = document.getElementsByClassName('btn-disable')
    playerField.innerHTML = "";
    for (let i = 0; i < playerLength.length; i++) {
        if (playerLength.length >= 6) {
            allBtn.disabled = true;
            break
        }
        let serial = i + 1;
        let index = playerLength[i];
        // console.log();
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



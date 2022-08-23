var cost = [];
document.getElementById('calculate-btn').addEventListener('click', function () {

    const perPlayerField = getFieldValueById('per-PlayerField');
    const playerAmmount = playerArray.length

    const playerExpenses = document.getElementById('player-expenses')
    const playerExpensesString = playerExpenses.innerText;

    const playerCost = playerAmmount * perPlayerField
    playerExpenses.innerText = playerCost;
    // cost.push(playerCost)
})
document.getElementById('total-btn').addEventListener('click', function () {

    const perPlayerField = getFieldValueById('per-PlayerField');
    const playerAmmount = playerArray.length

    const playerExpenses = document.getElementById('player-expenses')
    const playerExpensesString = playerExpenses.innerText;

    const playerCost = playerAmmount * perPlayerField
    playerExpenses.innerText = playerCost;








    const managerField = getFieldValueById('manager-field');
    const coachField = getFieldValueById('coach-field');

    const totalBalance = document.getElementById('total-balance');
    const blnString = totalBalance.innerText;


    const totalCost = playerCost + managerField + coachField

    totalBalance.innerText = totalCost;

})
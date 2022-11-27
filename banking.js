document.getElementById('deposit-button').addEventListener('click', function(){
    const userDepositAmountInput = document.getElementById('deposit-input');
    const userDepositAmount = userDepositAmountInput.value;
    const newDepositAmount = parseFloat(userDepositAmount);

    const depositTotal = document.getElementById('deposit-total');
    const previourDepositAmount = depositTotal.innerText;
    const newPreviousDepositAmount = parseFloat(previourDepositAmount);

    // previous amount + new deposit
    const newDepositTotal = parseFloat(newPreviousDepositAmount + newDepositAmount);
    depositTotal.innerText = newDepositTotal;

    // balance update
    const balanceTotal = document.getElementById('balance-input');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText);
    const newTotalBalance = balanceTotalAmount + newDepositAmount;
    balanceTotal.innerText = parseFloat(newTotalBalance);

    // clear
    userDepositAmountInput.value = '';
    
})

// Withdraw button 

document.getElementById('withdraw-button').addEventListener('click', function(){
    const userWithdrawInputAmount = document.getElementById('withdraw-input');
    const userWithdrawAmount = userWithdrawInputAmount.value;
    const newWithdrawAmount = parseFloat(userWithdrawAmount) ;

    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawAmount = withdrawTotal.innerText;
    const newPreviousWithdrawAmount = parseFloat(previousWithdrawAmount);

    const newWithdrawTotal = parseFloat(newPreviousWithdrawAmount + newWithdrawAmount);
    withdrawTotal.innerText = newWithdrawTotal;

      // balance update
      const balanceTotal = document.getElementById('balance-input');
      const balanceTotalText = balanceTotal.innerText;
      const balanceTotalAmount = parseFloat(balanceTotalText);

      const newTotalBalance = balanceTotalAmount - newWithdrawAmount;
      balanceTotal.innerText = parseFloat(newTotalBalance);




    // clear
    userWithdrawInputAmount.value = '';
})
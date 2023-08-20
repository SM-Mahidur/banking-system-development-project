// deposit
document.getElementById('btn-deposit').addEventListener('click',function(){
    const depositField =document.getElementById('deposit-field');
    const newDepositAmount = parseFloat(depositField.value);
    
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotal =parseFloat(depositTotalElement.innerText);

    const currentDepostAmount =parseFloat(previousDepositTotal  + newDepositAmount);

    depositTotalElement.innerText=currentDepostAmount;

    const totalAmount =document.getElementById('balanceAdd');
    const totalAmountPrevious = totalAmount.innerText;
    const currentTotalAmount =parseFloat( totalAmountPrevious)

    const totalCurrentBalance = currentDepostAmount + currentTotalAmount;
    totalAmount.innerText = totalCurrentBalance;
//   clear depost field
     depositField.value = ' ';

    });

// withdrow
    document.getElementById('btn-withdrow').addEventListener('click',function(){
    const withdrowField =document.getElementById('withdrow-field');
    const withdrowAmounNew = parseFloat(withdrowField.value);

    const withDrowTotalAmount = document.getElementById('withdrow-total');
    const withdrowPreviousAmount = parseFloat(withDrowTotalAmount.innerText);

    const totalCurrentWithdrow= parseFloat(withdrowPreviousAmount + withdrowAmounNew);
    withDrowTotalAmount.innerText=totalCurrentWithdrow ;


    const totalAmount =document.getElementById('balanceAdd');
    const totalAmountPrevious = totalAmount.innerText;
    const currentTotalAmount =parseFloat( totalAmountPrevious)

    const totalCurrentBalance = currentTotalAmount  - totalCurrentWithdrow ;
    totalAmount.innerText = totalCurrentBalance;
    // clear withdrowal history
    withdrowField.value =' ';
    });


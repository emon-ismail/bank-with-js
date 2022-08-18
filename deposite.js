// step1:add event listener to the deposite button
document.getElementById('btn-deposite').addEventListener("click", function() {
//  step2:get the deposite input field
const depositeField = document.getElementById('deposite-field');
// for input field use .value to the value inside the input field
const newDepositeAmountString = depositeField.value;
const newDepositeAmount = parseFloat(newDepositeAmountString);

// step3:get the current deposite total.
// for non input use inner text to get the text
const depositeTotalElement=document.getElementById('deposite-total');
const previousDepositeTotalString=depositeTotalElement.innerText;
const previousDepositeTotal=parseFloat(previousDepositeTotalString);
depositeTotalElement.innerText=newDepositeAmount;

// step4:add number
const currentTotal=previousDepositeTotal+newDepositeAmount;
depositeTotalElement.innerText=currentTotal;

// step5:get balance current total
const balanceTotalElement=document.getElementById("balance-total");
const previousBalanceTotalString=balanceTotalElement.innerText;
const previousBalanceTotal=parseFloat(previousBalanceTotalString);
// step6:calculate current total balance
const currentBalanceTotal=previousBalanceTotal+newDepositeAmount;
// set the balance total
balanceTotalElement.innerText=currentBalanceTotal;
// step7:clear the deposite value
depositeField.value=' ';

/**
 1.add event handler with the widthdraw button

 2:get the withdraw amount from the input field

 2.5:also make sure to convert the input into a number by parsefloat
 3.get previous withdraw total
 4.calculate total widthdraw total
 4.5: set total 
 5.get the previous balance total
 6.calculate new balance total
 6.5:set the new  balance total

 */
// step1:
document.getElementById("btn-widthdraw").addEventListener('click', function(){
    // step2:
const withdrawField=document.getElementById('widthdraw-field');
const newWithdrawAmountString=withdrawField.value;
const newWithdrawAmount=parseFloat(newWithdrawAmountString);

// step7:clear input field
withdrawField.value=' ';
if (isNaN(newWithdrawAmount)){
 alert('please provide a valid number');
 return;
}

// step3
  const withdrawTotalElement=document.getElementById('widthdraw-total');
  const previousWithdrawTotalString=withdrawTotalElement.innerText;
  const previousWithdrawTotal=parseFloat(previousWithdrawTotalString);
  console.log( previousWithdrawTotal);
//   step:4
const currentWithdrawTotal=previousWithdrawTotal+newDepositeAmount;
withdrawTotalElement.innerText=currentWithdrawTotal;
// step5
const balanceTotalElement=document.getElementById('balance-total');
const previousBalanceTotalString=balanceTotalElement.innerText;
const previousBalanceTotal=parseFloat(previousBalanceTotalString);
if(newWithdrawAmount>previousBalanceTotal){
  alert('B  aap er bank e eto tk nai')
  return;
}
// step6:
const newBalanceTotal=previousBalanceTotal - newWithdrawAmount;
balanceTotalElement.innerText=newBalanceTotal;


})



}
)
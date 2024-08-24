function calculateTip(){
   //get input values
   const billAmount = parseFloat(document.getElementById('billAmount').value);
   const tipPercentage =  parseFloat(document.getElementById('tipPercentage').value);  


   //claculate tipe and total
   const tipAmount = billAmount * (tipPercentage /100);
   const totalBill = billAmount + tipAmount;


   document.getElementById('tipAmount').textContent = tipAmount.toFixed(1);
   document.getElementById('totalBill').textContent =totalBill.toFixed(1);
}
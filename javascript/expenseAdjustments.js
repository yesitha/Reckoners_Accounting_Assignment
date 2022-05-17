
function calculate(form) {
    var expenseName=document.forms["form"]["E_name"].value;
    var expenseAmount=document.forms["form"]["E_amount"].value;
    var expenseMonthAmount=document.forms["form"]["E_Mamount"].value;
    var E_annualAmount=expenseMonthAmount*12;
    var Eremaining=E_annualAmount-expenseAmount;
   
    
     document.getElementById('eout1').innerHTML = "Expense Name :   "+expenseName;
    
    if (Eremaining>0){
        //accrued expense
        document.getElementById('eout2').innerHTML = "Adjustment Type :   Accrued Expenses";
        document.getElementById('eout3_1').innerHTML = expenseName+" expense("+expenseAmount+"+"+Eremaining+") :  ";
        document.getElementById('eout3_2').innerHTML ="Rs."+E_annualAmount;
        document.getElementById('eout4_1').innerHTML = "Current Liabilities";
        document.getElementById('eout4_2').innerHTML ="Accrued "+expenseName+" expense:  ";
        document.getElementById('eout4_3').innerHTML ="Rs."+Eremaining;
    }else if(Eremaining<0){
        //prepaid expense
        var EEremaining=-Eremaining;
        document.getElementById('eout2').innerHTML = "Adjustment Type  : Prepaid Expenses";
        document.getElementById('eout3_1').innerHTML = expenseName+" expense("+expenseAmount+"-"+EEremaining+") :  ";
        document.getElementById('eout3_2').innerHTML ="Rs."+E_annualAmount;
        document.getElementById('eout4_1').innerHTML = "Current Assets";
        document.getElementById('eout4_2').innerHTML = " Prepaid "+expenseName+" expense: ";
        document.getElementById('eout4_3').innerHTML ="Rs."+EEremaining;
    }else{
        //no adjustments
        document.getElementById('eout2').innerHTML = "         No adjustments          ";
    }
   
}

function isEmpty(){
    var paidAmount=document.getElementById('E_amount');
    var numbers = /^[0-9]+$/;
    if(paidAmount!=" "){
        document.getElementById('E_Mamount').removeAttribute("disabled");
        if(paidAmount.value.match(numbers)){
            document.getElementById('row8').innerHTML="";  
        }else{
            document.getElementById('row8').innerHTML="Please enter numbers!";
        }
    }else{
        document.getElementById('row8').innerHTML="xxx";
        document.getElementById("E_Mamount").disabled = true;
    }
}
function row1Check(){
    var row1Value=document.getElementById('E_name');
    var letters = /^[A-Za-z]+$/;
    if(row1Value.value.match(letters)){
        document.getElementById('row5').innerHTML="";
       
    }else{
        document.getElementById('row5').innerHTML="please enter letters!";
        //document.getElementById('row1').innerHTML("");
        
    }
    
}
function row4Check(){
    var row4Value=document.getElementById('E_Mamount');
    var numbers = /^[0-9]+$/;
    if(row4Value.value.match(numbers)){
        document.getElementById('row9').innerHTML="";
       
    }else{
        document.getElementById('row9').innerHTML="please enter numbers!";
        //document.getElementById('row1').innerHTML("");
        
    }
    
}


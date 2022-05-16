
function calculate(form) {
    var incomeName=document.forms["form"]["I_name"].value;
    var incomeAmount=document.forms["form"]["I_amount"].value;
    var incomeMonthAmount=document.forms["form"]["I_Mamount"].value;
    var I_annualAmount=incomeMonthAmount*12;
    var Iremaining=I_annualAmount-incomeAmount;
  
    
        document.getElementById('iout1').innerHTML = "Income Name :   "+incomeName;
    
    if (Iremaining>0){
        //accrued income
        document.getElementById('iout2').innerHTML = "Adjustment Type :   Income Receivable";
        document.getElementById('iout3_1').innerHTML = incomeName+" income("+incomeAmount+"+"+Iremaining+") :  ";
        document.getElementById('iout3_2').innerHTML ="Rs."+I_annualAmount;
        document.getElementById('iout4_1').innerHTML = "Current Asset";
        document.getElementById('iout4_2').innerHTML =incomeName+" income receivable :  ";
        document.getElementById('iout4_3').innerHTML ="Rs."+Iremaining;
    }else if(Iremaining<0){
        //prepaid income
        var IIremaining=-Iremaining;
        document.getElementById('iout2').innerHTML = "Adjustment Type  : Income in advance (Prepaid income)";
        document.getElementById('iout3_1').innerHTML = incomeName+" income("+incomeAmount+"-"+IIremaining+") :  ";
        document.getElementById('iout3_2').innerHTML ="Rs."+I_annualAmount;
        document.getElementById('iout4_1').innerHTML = "Current Liabilities";
        document.getElementById('iout4_2').innerHTML = " Prepaid "+incomeName+" Income: ";
        document.getElementById('iout4_3').innerHTML ="Rs."+IIremaining;
    }else{
        //no adjustments
        document.getElementById('iout2').innerHTML = "         No adjustments          ";
    }
   
}




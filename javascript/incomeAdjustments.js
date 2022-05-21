
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

function isEmpty(){
    var receivedAmount=document.getElementById('I_amount').value;
    var receivedMAmount=document.getElementById('I_Mamount').value;
    var numbers = /^[0-9]+$/;

    if(receivedAmount!=""){    
        if(receivedAmount.match(numbers)){
            document.getElementById('row2').innerHTML=" "; 
            if(receivedMAmount!=""){    
                if(receivedMAmount.match(numbers)){
                    document.getElementById('row4').innerHTML=" ";  
                    document.getElementById("btn").disabled = false; 
                }else{
                    document.getElementById('row4').innerHTML="Please enter numbers!";
                }
               
            }else{
                document.getElementById("btn").disabled = true;
                document.getElementById('row4').innerHTML="**Required";  

            }
        }    
        else{
             document.getElementById('row2').innerHTML="Please enter numbers!";
        }
    }else{
        document.getElementById("btn").disabled = true;
        document.getElementById('row2').innerHTML="**Required";
        if(receivedMAmount!=""){    
            if(receivedMAmount.match(numbers)){
                document.getElementById('row4').innerHTML=" ";  
            }else{
                document.getElementById('row4').innerHTML="Please enter numbers!";
            }
               
        }else{
            document.getElementById("btn").disabled = true;
            document.getElementById('row4').innerHTML="**Required";  

        }
    }
 }


function row1Check(){
    var row1Value=document.getElementById('I_name').value;
    var letters = /^[A-Za-z]+$/;
    if(row1Value!=""){
        if(row1Value.match(letters)){
            document.getElementById('row1').innerHTML="";
        
        }else{
            document.getElementById('row1').innerHTML="please enter letters!";
            //document.getElementById('row1').innerHTML("");
            
        }
    }else{
        document.getElementById('row1').innerHTML="";
    }
        
}
// function row4Check(){
//     var row4Value=document.getElementById('I_Mamount');
//     var numbers = /^[0-9]+$/;
//     if(row4Value.value.match(numbers)){
//         document.getElementById('row4').innerHTML="";
       
//     }else{
//         document.getElementById('row4').innerHTML="please enter numbers!";
//         //document.getElementById('row1').innerHTML("");
        
//     }
    
// }

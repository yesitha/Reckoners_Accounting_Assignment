
function calculate(form) {
    var debtorName=document.forms["form"]["D_name"].value;
    var dAmount=document.forms["form"]["D_amount"].value;
    var pRate=document.forms["form"]["P_rate"].value;
    var pAmount=document.forms["form"]["P_amount"].value;
    var Open=document.forms["form"]["DRadios"].value;
    // var NotOpenB=document.forms["form"]["DRadios2"].value;
    var provision=(dAmount*pRate)/100;
    var proB=pAmount-provision;
    //var Iremaining=I_annualAmount-incomeAmount;
  
    
        document.getElementById('dout1').innerHTML = "Debtor Name :   "+debtorName;
    
    if (Open=="noB"){
        //No open balance
       
        document.getElementById('dout2_1').innerHTML = " Provision for doubtful debt :  ";
        document.getElementById('dout2_2').innerHTML ="Rs."+provision;
        
        document.getElementById('dout3_1').innerHTML =" Debtor :  ";
        document.getElementById('dout3_2').innerHTML =dAmount;
        document.getElementById('dout3_3').innerHTML =" Provision for doubtful debt :  ";
        document.getElementById('dout3_4').innerHTML ="("+provision+")";
        document.getElementById('dout3_5').innerHTML =dAmount-provision;
    
    }else if (Open=="B"){
       //with open balance
        if(proB>0){
            //when opening balance greater than
        document.getElementById('dout2_1').innerHTML = " Over Provision :  ";
        document.getElementById('dout2_2').innerHTML ="Rs. ("+proB+")";
   
        document.getElementById('dout3_1').innerHTML =" Debtor :  ";
        document.getElementById('dout3_2').innerHTML =dAmount;
        document.getElementById('dout3_3').innerHTML =" Provision for doubtful debt :  ";
        document.getElementById('dout3_4').innerHTML ="("+provision+")";
        document.getElementById('dout3_5').innerHTML =dAmount-provision;
        }else if (proB<0){
            //when opening balance less than
            var PProB=-proB;
        document.getElementById('dout2_1').innerHTML = " Under Provision  :  ";
        document.getElementById('dout2_2').innerHTML ="Rs."+PProB;
   
        document.getElementById('dout3_1').innerHTML =" Debtor :  ";
        document.getElementById('dout3_2').innerHTML =dAmount;
        document.getElementById('dout3_3').innerHTML =" Provision for doubtful debt :  ";
        document.getElementById('dout3_4').innerHTML ="("+provision+")";
        document.getElementById('dout3_5').innerHTML =dAmount-provision;
        }else{
            document.getElementById('dout2_1').innerHTML = " Provision for doubtful debt :  ";
            document.getElementById('dout2_2').innerHTML ="Rs."+proB;
            
            document.getElementById('dout3_1').innerHTML =" Debtor :  ";
            document.getElementById('dout3_2').innerHTML =dAmount;
            document.getElementById('dout3_3').innerHTML =" Provision for doubtful debt :  ";
            document.getElementById('dout3_4').innerHTML ="("+provision+")";
            document.getElementById('dout3_5').innerHTML =dAmount-provision;
        }
    }
    else{
        //no adjustments
        document.getElementById('dout2').innerHTML = "         No adjustments          ";
    }
   
}



function row1Check(){
    var row1Value=document.getElementById('D_name').value;
    var letters = /^[A-Za-z]+$/;
    if (row1Value!=""){
        if(row1Value.match(letters)){
            document.getElementById('rowa').innerHTML="";
        
        }else{
            document.getElementById('rowa').innerHTML="please enter letters!";
            //document.getElementById('row1').innerHTML("");
            
        }
    }else{
        document.getElementById('rowa').innerHTML="";
    }
}


// function row2Check(){
//     var row2Value=document.getElementById('D_amount').value;
//     var row3Value=document.getElementById('P_rate').value;
//     var numbers = /^[0-9]+$/;
//     if(row2Value.value.match(numbers)){
//         document.getElementById('rowb').innerHTML="";
//         if(row3Value.value.match(numbers)){
//             document.getElementById('rowc').innerHTML="";
           
//         }else{
//             document.getElementById('rowc').innerHTML="please enter numbers!";
//             //document.getElementById('row1').innerHTML("");
            
//         }
       
//     }else{
//         document.getElementById('rowb').innerHTML="please enter numbers!";
//         //document.getElementById('row1').innerHTML("");
        
//     }
    
// }

function isEmpty(){
    var row2Value=document.getElementById('D_amount').value;
    var row3Value=document.getElementById('P_rate').value;
    var radioValue=document.getElementById('DRadios').value;
    document.write(radioValue);
    var numbers = /^[0-9]+$/;

    if(row2Value!=""){    
        if(row2Value.match(numbers)){
            document.getElementById('rowb').innerHTML=" "; 
            if(row3Value!=""){    
                if(row3Value.match(numbers)){
                    document.getElementById('rowc').innerHTML=" ";  
                    if(radioValue=="noB" || radioValue=='B'){    
                        document.getElementById('rowd').innerHTML=" ";  
                        document.getElementById("btn").disabled = false; 
                    }else{
                        document.getElementById('rowd').innerHTML="**Required--Select";
                    }
                }else{
                    document.getElementById('rowc').innerHTML="Please enter numbers!";
                }
               
            }else{
                document.getElementById("btn").disabled = true;
                document.getElementById('rowc').innerHTML="**Required";  

            }
        }    
        else{
             document.getElementById('rowb').innerHTML="Please enter numbers!";
        }
    }else{
        document.getElementById("btn").disabled = true;
        document.getElementById('rowb').innerHTML="**Required";
        if(row3Value!=""){    
            if(row3Value.match(numbers)){
                document.getElementById('rowc').innerHTML=" ";  
            }else{
                document.getElementById('rowc').innerHTML="Please enter numbers!";
            }
               
        }else{
            document.getElementById("btn").disabled = true;
            document.getElementById('row4').innerHTML="**Required";  

        }
    }
 }

// function row3Check(){
//     var row3Value=document.getElementById('P_rate');
//     var numbers = /^[0-9]+$/;
//     if(row3Value.value.match(numbers)){
//         document.getElementById('rowc').innerHTML="";
       
//     }else{
//         document.getElementById('rowc').innerHTML="please enter numbers!";
//         //document.getElementById('row1').innerHTML("");
        
//     }
    
// }

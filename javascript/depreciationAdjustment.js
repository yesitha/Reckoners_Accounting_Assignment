
function calculate(form) {
    var assetName=document.forms["form"]["A_name"].value;
    var aAmount=document.forms["form"]["A_amount"].value;
    // var pRate=document.forms["form"]["P_rate"].value;
    // var pAmount=document.forms["form"]["P_amount"].value;
    var type=document.forms["form"]["Radios1"].value;
    // var NotOpenB=document.forms["form"]["DRadios2"].value;
    var provision=(dAmount*pRate)/100;
    var proB=pAmount-provision;
    //var Iremaining=I_annualAmount-incomeAmount;
  
    
        document.getElementById('Dout1').innerHTML = "Debtor Name :   "+assetName;
    
    if (type=="line"){
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




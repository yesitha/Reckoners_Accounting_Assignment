
function calculate(form) {
    var assetName=document.forms["form"]["A_name"].value;
     var aValue=document.forms["form"]["A_value"].value;
     var purchaseDate=document.forms["form"]["datepicker1"].value;
     var evaluateDate=document.forms["form"]["datepicker2"].value;
    // var ULife=document.forms["form"]["usefulLife"].value;
    var drate=document.forms["form"]["dyear"].value;
    var d1 = new Date(purchaseDate);  
    var month=d.getMonth();
    var remainMonth=12-month;
    var forYear=(aValue*drate)/100;
    var forMonth=forYear/12;
    var aDepreciation=forMonth*remainMonth;
    var netvalue=aValue-aDepreciation;
    
        document.getElementById('Dout1').innerHTML = "Asset Name :   "+assetName;
        // var month_diff =  - .getTime();
        // document.getElementById('Dout2').innerHTML = "Asset Name :   "+year;
    
    if (drate!=" "){
        //No open balance
       
        document.getElementById('Dout2_1').innerHTML = assetName+" depreciation :  ";
        document.getElementById('Dout2_2').innerHTML ="Rs."+aDepreciation;
        
        document.getElementById('Dout3_1').innerHTML =assetName;
        document.getElementById('Dout3_2').innerHTML =aValue;
        document.getElementById('Dout3_3').innerHTML ="("+aDepreciation+")";
        document.getElementById('Dout3_4').innerHTML =netvalue;
    }
    else{
        //no adjustments
        document.getElementById('Dout2').innerHTML = "         No adjustments          ";
    }
   
}




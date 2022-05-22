
function calculate(form) {
    var assetName = document.forms["form"]["A_name"].value;
    var aValue = document.forms["form"]["A_value"].value;
    var purchaseDate = document.forms["form"]["datepicker1"].value;
    var evaluateDate = document.forms["form"]["datepicker2"].value;
    var ULife = document.forms["form"]["usefulLife"].value;
    var residual = document.forms["form"]["Rvv"].value;
    var method = document.forms["form"]["Radios"].value;
    //document.write(method);
    // if (document.getElementById('Radios1').checked) {
    //     var method = "StraightLineBasis";
    // } else {
    //     method = "ReducingBalanceMethod";
    // }

    var d1 = new Date(purchaseDate);
    // var day1=d1.getDate();
    // var month1=d1.getMonth();
    // var year1=d1.getFullYear();

    var d2 = new Date(evaluateDate);
    // var day2=d2.getDay();
    // var month2=d1.getMonth();
    // var year2=d1.getFullYear();

    var ulifeinDays = ULife * 365;

    var ptime = Math.abs(d2 - d1);
    var pdays = Math.ceil(ptime / (1000 * 60 * 60 * 24));
    
    if (method == "linr") {

        var foraYear = (aValue - residual) / ULife;
        var foraMonth = foraYear / 12;
        var foraday = foraYear / 365;

        var aDepreciation = pdays * foraday;
        var netvalue = aValue - aDepreciation;



        


        document.getElementById('Dout1').innerHTML = "Asset Name :   " + assetName;



        if (ulifeinDays > pdays) {

            document.getElementById('Dout2').innerHTML = "Depreciation for a year : Rs." + foraYear;
            document.getElementById('Dout3').innerHTML = "Depreciation for a month :  Rs." + foraMonth;
            document.getElementById('Dout2_1').innerHTML = assetName + " depreciation :  ";
            document.getElementById('Dout2_2').innerHTML = "Rs." + aDepreciation;

            document.getElementById('Dout3_1').innerHTML = assetName;

            document.getElementById("Dout3_2").innerHTML = aValue;
            document.getElementById('Dout3_3').innerHTML = "(" + aDepreciation + ")";
            document.getElementById('Dout3_4').innerHTML = netvalue;
        }
        else if (ulifeinDays <= pdays) {
            document.getElementById('Dout2').innerHTML = "#........Your given evaluated time period is greater than the useful life of " + assetName + " .....#";
            document.getElementById('Dout3').innerHTML = "Residual Value : Rs." + residual;
        } else {
            //no adjustments
            document.getElementById('Dout2').innerHTML = "         No adjustments          ";
        }
    }

    else if(method == "reducing"){
       
        var depreciation = 0;
        var a=document.forms["form"]["A_value"].value;
         var depreciationPerDay=0;
        
        // var rate1=(1 - (residual / aValue));
        // var rate2=rate1^ (1 / ulifeinDays);
        // var rate3=rate2*100;


        var rate= ((1 - ((residual / aValue)) ** (1 / ulifeinDays)) * 100);
        
      
        for (var i = 0; i < pdays; i++) {
             depreciationPerDay = a *rate/100;
            
            depreciation = depreciation + depreciationPerDay;
            
    
            a=a-depreciationPerDay;
        }
        var netvalue = aValue - depreciation;
        // var ulifeinDays = ULife * 365;


        document.getElementById('Dout1').innerHTML = "Asset Name :   " + assetName;

        

        if (ulifeinDays >= pdays) {

            document.getElementById('Dout2_1').innerHTML = assetName + " depreciation :  ";
            document.getElementById('Dout2_2').innerHTML = "Rs." + roundToTwo(depreciation);

            document.getElementById('Dout3_1').innerHTML = assetName;
            document.getElementById('Dout3_2').innerHTML = aValue;
            document.getElementById('Dout3_3').innerHTML = "(" + roundToTwo(depreciation) + ")";
            document.getElementById('Dout3_4').innerHTML = roundToTwo(netvalue);
        }
        else if (ulifeinDays < pdays) {
            document.getElementById('Dout2').innerHTML = "#........Your given evaluated time period is greater than the useful life of " + assetName + " .....#";
            document.getElementById('Dout3').innerHTML = "Residual Value : Rs." + residual;
        } else {
            //no adjustments
            document.getElementById('Dout2').innerHTML = "         No adjustments          ";
        }
    }
    else {
        //no adjustments
        document.getElementById('Dout2').innerHTML = "         No adjustments          ";
    }

}


function rowACheck(){
    var row1Value=document.getElementById('A_name').value;
    var letters = /^[A-Za-z]+$/;
    if(row1Value!=""){
        if(row1Value.match(letters)){
            document.getElementById('rowA').innerHTML="";
        
        }else{
            document.getElementById('rowA').innerHTML="please enter letters!";
            //document.getElementById('row1').innerHTML("");
            
        }
    }else{
        document.getElementById('rowA').innerHTML="";
    }
    
}
function roundToTwo(num) {
    return +(Math.round(num + "e+2")  + "e-2");
}

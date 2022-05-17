
function calculate(form) {
    var assetName = document.forms["form"]["A_name"].value;
    var aValue = document.forms["form"]["A_value"].value;
    var purchaseDate = document.forms["form"]["datepicker1"].value;
    var evaluateDate = document.forms["form"]["datepicker2"].value;
    var ULife = document.forms["form"]["usefulLife"].value;
    var residual = document.forms["form"]["Rvv"].value;

    if (document.getElementById('Radios1').checked) {
        var method = StraightLineBasis;
    } else {
        method = ReducingBalanceMethod;
    }

    var d1 = new Date(purchaseDate);
    // var day1=d1.getDate();
    // var month1=d1.getMonth();
    // var year1=d1.getFullYear();

    var d2 = new Date(evaluateDate);
    // var day2=d2.getDay();
    // var month2=d1.getMonth();
    // var year2=d1.getFullYear();



    var ptime = Math.abs(d2 - d1);
    var pdays = Math.ceil(ptime / (1000 * 60 * 60 * 24));
    if (method == StraightLineBasis) {

        var foraYear = (aValue - residual) / ULife;
        var foraMonth = foraYear / 12;
        var foraday = foraYear / 365;

        var aDepreciation = pdays * foraday;
        var netvalue = aValue - aDepreciation;



        var ulifeinDays = ULife * 365;


        document.getElementById('Dout1').innerHTML = "Asset Name :   " + assetName;



        if (ulifeinDays >= pdays) {
            
            document.getElementById('Dout2').innerHTML = "Depreciation for a year : Rs." + foraYear;
            document.getElementById('Dout3').innerHTML = "Depreciation for a month :  Rs." + foraMonth;
            document.getElementById('Dout2_1').innerHTML = assetName + " depreciation :  ";
            document.getElementById('Dout2_2').innerHTML = "Rs." + aDepreciation;

            document.getElementById('Dout3_1').innerHTML = assetName;
           
            document.querySelector("#Dout3_2").innerHTML = aValue;
            document.getElementById('Dout3_3').innerHTML = "(" + aDepreciation + ")";
            document.getElementById('Dout3_4').innerHTML = netvalue;
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
        var depreciation = 0;

        for (var i = 0; i <= ULife; i++) {
            depreciationPeryear = aValue * (1 - (residual / aValue) ^ (1 / n)) * 100;

            depreciation = depreciation + depreciationPeryear;
        }
        var netvalue = aValue -depreciation;
        var ulifeinDays = ULife * 365;


        document.getElementById('Dout1').innerHTML = "Asset Name :   " + assetName;



        if (ulifeinDays >= pdays) {
           
            document.getElementById('Dout2_1').innerHTML = assetName + " depreciation :  ";
            document.getElementById('Dout2_2').innerHTML = "Rs." + depreciation;

            document.getElementById('Dout3_1').innerHTML = assetName;
            document.getElementById('Dout3_2').innerHTML = aValue;
            document.getElementById('Dout3_3').innerHTML = "(" + depreciation + ")";
            document.getElementById('Dout3_4').innerHTML = netvalue;
        }
        else if (ulifeinDays < pdays) {
            document.getElementById('Dout2').innerHTML = "#........Your given evaluated time period is greater than the useful life of " + assetName + " .....#";
            document.getElementById('Dout3').innerHTML = "Residual Value : Rs." + residual;
        } else {
            //no adjustments
            document.getElementById('Dout2').innerHTML = "         No adjustments          ";
        }
    }


}




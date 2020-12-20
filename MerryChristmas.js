var c = 0;
var current =0;
var Rudolph = 0;
var flag1 = false;
var flag2 = false;
var flag3 = false;
var flag4 = false;
var flag5 = false;
var x1;
var y1;
var wavelength;
var absorbance = 0;

window.test = function(e) 
{
    if (e.value === '1') 
    {
      Kirti();
    } 
    else if (e.value === '2') 
    {
      Aashna();
    } 
    else if (e.value === '3') 
    {
      Neil();
    }
    else if (e.value === '4') 
    {
        Manasi();
    }
    else if (e.value === '5') 
    {
        Rathish();
    }

}

function Kirti()
{   
    flag1 = true;
    current = 1;
    f2();
    checkall();
}
function Aashna()
{
    flag2 = true;
    current =2;
    f2();
    checkall();
}
function Neil()
{
    flag3 = true;
    current = 3;
    f2();
    checkall();
}
function Manasi()
{
    flag4 = true;
    current = 4;
    f2();
    checkall();
}
function Rathish()
{
    flag5 = true;
    current = 5;
    f2();
    checkall();
}

function checkall()
{
    if(flag1==true && flag2==true && flag3==true && flag4==true && flag5 == true)
    {
        document.getElementById("fun11").style.display="none";
    }
}

function f1()
{   
    c++;
    if(c==1)
    {
        document.getElementById("Green_LED").style.display= "block";
        document.getElementById("Red_LED").style.display= "none";
        setTimeout(function(){      
            document.getElementById("fun1").style.display="none";
            document.getElementById("svg1").style.display="none";
            document.getElementById("svg2").style.display="block";
          }, (1000))
        setTimeout(function(){
                document.getElementById("svg1").style.display="block";
                document.getElementById("svg2").style.display="none";
                document.getElementById("Grinch").style.display= "block";
                c++;
        }, (6000))
    }
    else if(c==10)
    {
        f10();
    }
    else
    {
        c--;
        alert("You Clicked on the Wrong Apparatus, Please refresh to avoid potential glitches");
    }
}

function f2()
{      
        document.getElementById("fun2").style.display="none";
        document.getElementById("KMnO4_in_beaker").style.display="block";
        if(current ==1)
        {
            document.getElementById("KMnO4_in_specto").style.fill= "#eeaaff";
            document.getElementById("KMnO4_in_beaker").style.fill= "#eeaaff";
            document.getElementById("KMnO4_in_cuvette").style.fill= "#eeaaff";
            document.getElementById("KMnO4_in_micro pipette").style.fill= "#eeaaff";
        }
        else if(current==2)
        {
            document.getElementById("KMnO4_in_specto").style.fill= "#963b9c";
            document.getElementById("KMnO4_in_beaker").style.fill= "#963b9c";
            document.getElementById("KMnO4_in_cuvette").style.fill= "#963b9c";
            document.getElementById("KMnO4_in_micro pipette").style.fill= "#963b9c";
        }
        else if(current ==3)
        {
                    
        document.getElementById("KMnO4_in_specto").style.fill=  "#812285";
        document.getElementById("KMnO4_in_beaker").style.fill= "#812285";
        document.getElementById("KMnO4_in_cuvette").style.fill= "#812285";
        document.getElementById("KMnO4_in_micro pipette").style.fill= "#812285";
        }
        else if(current ==4)
        {
                    
            document.getElementById("KMnO4_in_specto").style.fill= "#660066";
            document.getElementById("KMnO4_in_beaker").style.fill= "#660066";
            document.getElementById("KMnO4_in_cuvette").style.fill= "#660066";
            document.getElementById("KMnO4_in_micro pipette").style.fill= "#660066";
        }
        else if(current ==5)
        {
            document.getElementById("KMnO4_in_specto").style.fill= "#660066";
            document.getElementById("KMnO4_in_beaker").style.fill= "#660066";
            document.getElementById("KMnO4_in_cuvette").style.fill= "#660066";
            document.getElementById("KMnO4_in_micro pipette").style.fill= "#660066";
        }
    
}
function f3()
{
    c++
    if(c==3)
    {   
        document.getElementById("Grinch").style.display= "none";
        document.getElementById("fun3").style.display="none";
    }
    else
    {
        c--;
        alert("You Clicked on the Wrong Apparatus, Please refresh to avoid potential glitches");
    }
}

function f4()
{
    c++;
    if(c==4)
    {
        document.getElementById("fun4").style.display="none";
        setTimeout(function(){
            document.getElementById("cuvette2").style.display="none";
            document.getElementById("cuvette3").style.display="block";
        }, (1500))
    }
    else
    {
        c--;
        alert("You Clicked on the Wrong Apparatus, Please refresh to avoid potential glitches");
    }
}

function f5()
{
    c++;
    if(c==5)
    {
        document.getElementById("fun5").style.display="none";
        setTimeout(function(){
            document.getElementById("KMnO4_in_micro pipette").style.display="block";
        }, (1500))
    }
    else
    {
        c--;
        alert("You Clicked on the Wrong Apparatus, Please refresh to avoid potential glitches");
    }
}

function f6()
{
    c++;
    if(c==6)
    {
        document.getElementById("fun6").style.display="none";
        setTimeout(function(){
            document.getElementById("KMnO4_in_cuvette").style.display="block";
            document.getElementById("KMnO4_in_micro pipette").style.display="none";
            document.getElementById("cuvette3").style.display="none";
            document.getElementById("cuvette2_v2").style.display="block";
        }, (1500))
    }
    else
    {
        c--;
        alert("You Clicked on the Wrong Apparatus, Please refresh to avoid potential glitches");
    }
}

function f7()
{   
    alert("Yeppppp");
    c++
    if(c==7)
    {
        alert("Yeooooo");
        document.getElementById("fun7").style.display="none";
        setTimeout(function(){
            alert("Yeppppp");
            document.getElementById("cuvette1").style.display="none";
            document.getElementById("water_in_cuvette").style.display="none";
            document.getElementById("close").style.display="block";
            document.getElementById("close2").style.display="block";
            document.getElementById("close3").style.display="block";
            document.getElementById("close7").style.display="block";
            document.getElementById("close6").style.display="block";
            document.getElementById("close4").style.display="block";
        }, (1500))
    }
    else
    {
        c--;
        alert("You Clicked on the Wrong Apparatus, Please refresh to avoid potential glitches");
    }
}

function f8()
{
    c++
    if(c==8)
    {
        document.getElementById("fun8").style.display="none";
        setTimeout(function(){
            document.getElementById("cuvette2").style.display="none";
            document.getElementById("KMnO4_in_cuvette").style.display="none";
            document.getElementById("close5").style.display="block";
            document.getElementById("KMnO4_in_cuvette").style.display="none";
            document.getElementById("cuvette2_v2").style.display="none";
            document.getElementById("KMnO4_in_specto").style.display="block";
        }, (1500))
    }
    else
    {
        c--;
        alert("You Clicked on the Wrong Apparatus, Please refresh to avoid potential glitches");
    }
}

function f9()
{
    c++;
    if(c==9 | c==11)
    {
        document.getElementById("fun9").style.display="none";
        if(current ==1)
        {
            var A =[
        
                0.0006,
                0.0009,
                0.0015,
                0.0065,
                0.0195,
                0.0451,
                0.0905,
                0.1377,
                0.1789,
                0.1611,
                0.1568,
                0.1092,
                0.0383,
                0.0189,
                0.0152,
                0.0133,
                0.0109,
                0.0082,
                0.0055,
                0.0033,
                0.0031,
                0.0029
            
                ]
    
            var B = [
                417,
                426,
                427,
                442,
                458,
                474,
                490,
                506,
                528,
                538,
                554,
                570,
                586,
                602,
                618,
                634,
                650,
                666,
                682,
                698,
                699,
                700
    
            ]
            var k =0;
            var totalvalues =  21;    //enter total number of values here
            setInterval(function(){
                x1 = A[k];
                y1 = B[k];
                console.log(k);
                if(k <= totalvalues)
                {   
                    document.getElementById("Pisplay1").innerHTML = y1;
                    document.getElementById("Pisplay2").innerHTML = x1;
                    k+=1;
                }
                if(k==totalvalues)
                {
                    document.getElementById("fun9").style.display="none";
                }
            }, (700))
            g1();
        }
        else if(current==2)
        {
            var A =[
                0.005,
                0.006,
                0.006,
                0.019,
                0.049,
                0.109,
                0.199,
                0.246,
                0.269,
                0.26,
                0.253,
                0.242,
                0.099,
                0.049,
                0.04,
                0.035,
                0.029,
                0.023,
                0.016,
                0.01,
                0.01,
                0.01
            
            ]
            var B = [
                417,
                426,
                427,
                442,
                458,
                474,
                490,
                506,
                528,
                538,
                554,
                570,
                586,
                602,
                618,
                634,
                650,
                666,
                682,
                698,
                699,
                700
    
            ]
            var k =0;
            var totalvalues =  21;   ;    //enter total number of values here
            setInterval(function(){
                x1 = A[k];
                y1 = B[k];
                if(k <= totalvalues)
                {   
                    document.getElementById("Pisplay1").innerHTML = y1;
                    document.getElementById("Pisplay2").innerHTML = x1;
                    k+=1;
                }
                if(k==totalvalues)
                {
                    document.getElementById("fun9").style.display="none";
                }
            }, (700))
            g1();
        }
        else if(current ==3)
        {
            var A =[
                0.015,
                0.016,
                0.016,
                0.043,
                0.108,
                0.226,
                0.322,
                0.354,
                0.398,
                0.38,
                0.363,
                0.343,
                0.213,
                0.108,
                0.088,
                0.078,
                0.064,
                0.05,
                0.035,
                0.023,
                0.021,
                0.018
                ]
                var B = [
                417,
                426,
                427,
                442,
                458,
                474,
                490,
                506,
                528,
                538,
                554,
                570,
                586,
                602,
                618,
                634,
                650,
                666,
                682,
                698,
                699,
                700
                ]
                var k =0;
                var totalvalues =  21;       //enter total number of values here
                setInterval(function(){
                    x1 = A[k];
                    y1 = B[k];
                    if(k <= totalvalues)
                    {   
                        document.getElementById("Pisplay1").innerHTML = y1;
                        document.getElementById("Pisplay2").innerHTML = x1;
                        k+=1;
                    }
                    if(k==totalvalues)
                    {
                        document.getElementById("fun9").style.display="none";
                    }
                }, (700))
                g1();
        }
        else if(current ==4)
        {
            var A =[
                0.029,
                0.031,
                0.033,
                0.085,
                0.213,
                0.412,
                0.563,
                0.608,
                0.667,
                0.613,
                0.588,
                0.550,
                0.411,
                0.215,
                0.174,
                0.154,
                0.128,
                0.1,
                0.07,
                0.045,
                0.043,
                0.04
            ]
            var B = [
                417,
                426,
                427,
                442,
                458,
                474,
                490,
                506,
                528,
                538,
                554,
                570,
                586,
                602,
                618,
                634,
                650,
                666,
                682,
                698,
                699,
                700
    
            ]
            var k =0;
            var totalvalues =  21;    //enter total number of values here
            setInterval(function(){
                x1 = A[k];
                y1 = B[k];
                if(k <= totalvalues)
                {   
                    document.getElementById("Pisplay1").innerHTML = y1;
                    document.getElementById("Pisplay2").innerHTML = x1;
                    k+=1;
                }
                if(k==totalvalues)
                {
                    document.getElementById("fun9").style.display="none";
                }
            }, (700))
            g1();   
        }
        else if(current ==5)
        {
            var A =[
                0.043,
                0.045,
                0.048,
                0.125,
                0.312,
                0.604,
                0.825,
                0.891,
                0.978,
                0.899,
                0.862,
                0.807,
                0.651,
                0.355,
                0.289,
                0.255,
                0.212,
                0.165,
                0.117,
                0.075,
                0.073,
                0.07        
            ]
            var B = [
                417,
                426,
                427,
                442,
                458,
                474,
                490,
                506,
                528,
                538,
                554,
                570,
                586,
                602,
                618,
                634,
                650,
                666,
                682,
                698,
                699,
                700
    
            ]
            var k =0;
            var totalvalues =  21;    //enter total number of values here
            setInterval(function(){
                x1 = A[k];
                y1 = B[k];
                if(k <= totalvalues)
                {   
                    document.getElementById("Pisplay1").innerHTML = y1;
                    document.getElementById("Pisplay2").innerHTML = x1;
                    k+=1;
                }
                if(k==totalvalues)
                {
                    document.getElementById("fun9").style.display="none";
                }
            }, (700))
            g1();
        }
    }
    else
    {
        c--;
        alert("You Clicked on the Wrong Apparatus, Please refresh to avoid potential glitches");
    }
}

function f10()
{   
        
    document.getElementById("close4").style.display="none";
    document.getElementById("close5").style.display="none";
    document.getElementById("close").style.display="none";
    document.getElementById("close2").style.display="none";
    document.getElementById("close3").style.display="none";
    document.getElementById("close7").style.display="none";
    document.getElementById("close6").style.display="none";
    document.getElementById("KMnO4_in_specto").style.display="none";
    document.getElementById("Pisplay1").innerHTML = "";
    document.getElementById("Pisplay2").innerHTML = "";
    document.getElementById("cuvette1").style.display="block";
    document.getElementById("water_in_cuvette").style.display="block";
    document.getElementById("cuvette2").style.display="block";
    document.getElementById("KMnO4_in_cuvette").style.display="block";
    document.getElementById("fun10").style.display="none";
    setTimeout(function(){
        document.getElementById("KMnO4_in_cuvette").style.display="none";
        document.getElementById("cuvette1").style.display="block";
        document.getElementById("cuvette2").style.display="block";
        document.getElementById("water_in_cuvette").style.display="block";
        document.getElementById("Grinch").style.display= "block";
    }, (1500))

}

function g1() {

    var dps = []; // dataPoints
    var chart = new CanvasJS.Chart("chartContainer", {
        title :{
            text: "Absorbance (mM) vs Wavelength (nm)"
        },
        data: [{
            type: "line",
            dataPoints: dps
        }]
    });
    //var op= 0;
    var xVal;
    var yVal; 
    var updateInterval = 700;
    var dataLength = 31; // number of dataPoints visible at any point
    
    var updateChart = function (count) {
    
        count = count || 1;
    
        for (var j = 0; j < 31; j++) {
            yVal = x1;
            xVal = y1;
             dps.push({
                    x: xVal,
                    y: yVal
                });
        }
    
        if (dps.length > dataLength) {
            dps.shift();
        }
        chart.render();
    };
        updateChart(dataLength);
        setInterval(function(){updateChart()}, updateInterval);
    }



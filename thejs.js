var c = 0;
var wavelength = 510;
var absorbance = 0;
function f1()
{   
    c++;
    if(c==1)
    {
        document.getElementById("Green_LED").style.display= "block";
        document.getElementById("Red_LED").style.display= "none";
        document.getElementById("fun1").style.display="none";
    }
    else if(c==9)
    {
        f9();
    }
    else if(c==17)
    {
        f17();
    }
    else
    {
        c--;
        alert("You Clicked on the Wrong Apparatus, Please refresh to avoid potential glitches");
    }
}

function f2()
{
    c++;
    if(c==2)
    {
        document.getElementById("fun2").style.display="none";
    }
    else if(c==10)
    {
        f10();
    }
    else if(c==18)
    {
        f18();
    }
    else
    {
        c--;
        alert("You Clicked on the Wrong Apparatus, Please refresh to avoid potential glitches");
    }
}

function f3()
{
    c++;
    if(c==3)
    {
        document.getElementById("fun3").style.display="none";
    }
    else if(c==5)
    {
       f5();
    }
    else if(c==7)
    {
        f7();
    }
    else if (c==11)
    {
        f11();
    }
    else if (c==13)
    {
        f13();
    }
    else if(c==15)
    {
        f15();
    }
    else if (c==19)
    {
        f19();
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
            document.getElementById("KMnO4_in_dropper").style.display="block";
        }, (1500))
    }
    else if (c==12)
    {
        f12();
    }
    else if (c==20)
    {
        f20();
    }
    else
    {
        c--;
        alert("You Clicked on the Wrong Apparatus, Please refresh to avoid potential glitches");
    }
}

function f5()
{
    document.getElementById("fun5").style.display="none";
    setTimeout(function(){
        document.getElementById("KMnO4_in_cuvette").style.display="block";
        document.getElementById("KMnO4_in_dropper").style.display="none";
    }, (1500))
}

function f6()
{
    c++;
    if(c==6)
    {
        document.getElementById("fun6").style.display="none";
        setTimeout(function(){
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
    else if (c==14)
    {
        f14();
    }
    else
    {
        c--;
        alert("You Clicked on the Wrong Apparatus, Please refresh to avoid potential glitches");
    }
}

function f7()
{   
    document.getElementById("fun7").style.display="none";
    setTimeout(function(){
        document.getElementById("cuvette2").style.display="none";
        document.getElementById("KMnO4_in_cuvette").style.display="none";
        document.getElementById("close5").style.display="block";
        document.getElementById("KMnO4_in_specto").style.display="block";
    }, (1500))
}

function f8()
{   
    c++;
    if(c==8)
    {   
        document.getElementById("fun8").style.display="none";
        var A =[11,21,31,41,51,61,17,18,19,110,111,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
        setInterval(function(){
            absorbance = A[wavelength-510];
            y1= wavelength;
            x1 = absorbance;
            if(wavelength<=540)
            {   
                document.getElementById("Pisplay1").innerHTML = wavelength;
                document.getElementById("Pisplay2").innerHTML = absorbance;
                wavelength+=1;
            }
        }, (700))
        g1();
        /*for (wavelength=510; wavelength<=540; wavelength++)
        {
            absorbance = A[wavelength-510];
            g1();
        } */
    }
    else if (c==16)
    {
        f16();
    }
    else
    {
        c--;
        alert("You Clicked on the Wrong Apparatus, Please refresh to avoid potential glitches");
    }
}

function f9()
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
    document.getElementById("fun9").style.display="none";
    setTimeout(function(){
        document.getElementById("KMnO4_in_cuvette").style.display="none";
    }, (1500))
}

function f10()
{
    document.getElementById("fun10").style.display="none";
}

function f11()
{
    document.getElementById("fun11").style.display="none";
}

function f12()
{
    document.getElementById("fun12").style.display="none";
    setTimeout(function(){
        document.getElementById("KMnO4_in_dropper").style.display="block";
    }, (1500))
}
function f13()
{
    document.getElementById("fun13").style.display="none";
    setTimeout(function(){
        document.getElementById("KMnO4_in_cuvette").style.display="block";
        document.getElementById("KMnO4_in_dropper").style.display="none";
    }, (1500))
}

function f14()
{
    document.getElementById("fun14").style.display="none";
    setTimeout(function(){
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

function f15()
{
    document.getElementById("fun15").style.display="none";
    setTimeout(function(){
        document.getElementById("cuvette2").style.display="none";
        document.getElementById("KMnO4_in_cuvette").style.display="none";
        document.getElementById("close5").style.display="block";
        document.getElementById("KMnO4_in_specto").style.display="block";
    }, (1500))
}

function f16()
{     
    wavelength=510;
    document.getElementById("fun16").style.display="none";
    var A =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
    setInterval(function(){
        absorbance = A[wavelength-510];
        y1= wavelength;
        x1 = absorbance;
        if(wavelength<=540)
        {   
            document.getElementById("Pisplay1").innerHTML = wavelength;
            document.getElementById("Pisplay2").innerHTML = absorbance;
            wavelength+=1;
        }
    }, (700))
    g1();
}

function f17()
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
    document.getElementById("Pisplay1").innerHTML = "";
    document.getElementById("cuvette1").style.display="block";
    document.getElementById("water_in_cuvette").style.display="block";
    document.getElementById("cuvette2").style.display="block";
    document.getElementById("KMnO4_in_cuvette").style.display="block";
    document.getElementById("fun17").style.display="none";
    setTimeout(function(){
        document.getElementById("KMnO4_in_cuvette").style.display="none";
    }, (1500))
}

function f18()
{
    document.getElementById("fun18").style.display="none";
}

function f19()
{
    document.getElementById("fun19").style.display="none";
}

function f20()
{
    document.getElementById("fun20").style.display="none";
    setTimeout(function(){
        document.getElementById("KMnO4_in_dropper").style.display="block";
    }, (1500))
}


function g1() {

    var dps = []; // dataPoints
    var chart = new CanvasJS.Chart("chartContainer", {
        title :{
            text: "Absorbance vs Volume of Base added"
        },
        data: [{
            type: "line",
            dataPoints: dps
        }]
    });
    //var op= 0;
    var xVal = 0;
    var yVal = 0; 
    var updateInterval = 700;
    var dataLength = 31; // number of dataPoints visible at any point
    
    var updateChart = function (count) {
    
        count = count || 1;
    
        for (var j = 0; j < 31; j++) {
            yVal = absorbance;
            xVal = wavelength;
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

    
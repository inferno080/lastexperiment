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
    else if (c==25)
    {
        f25();
    }
    else if(c==33)
    {
        f33();
    }
    else if(c==41)
    {
        f41();
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
    else if (c==26)
    {
        f26();
    }
    else if(c==34)
    {
        f34();
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
    else if(c==37)
    {
        f37();
    }
    else if(c==15)
    {
        f15();
    }
    else if(c==39)
    {
        f39();
    }
    else if (c==19)
    {
        f19();
    }
    else if(c==21)
    {
        f21();
    }
    else if (c==23)
    {
        f23();
    }
    else if (c==27)
    {
        f27();
    }
    else if(c==29)
    {
        f29();
    }
    else if (c==31)
    {
        f31();
    }
    else if (c==35)
    {
        f35();
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
    else if (c==36)
    {
        f36();
    }
    else if (c==20)
    {
        f20();
    }
    else if(c==28)
    {
        f28();
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
    else if(c==38)
    {
        f38();
    }
    else if (c==22)
    {
        f22();
    }
    else if (c==30)
    {
        f30();
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
            if(wavelength==540)
            {
                document.getElementById("fun8").style.display="none";
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
    else if(c==24)
    {
        f24();
    }
    else if(c==32)
    {
        f32();
    }
    else if(c==40)
    {
        f40();
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
        if(wavelength==540)
        {
            document.getElementById("fun16").style.display="none";
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
    document.getElementById("Pisplay2").innerHTML = "";
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

function f21()
{
    document.getElementById("fun21").style.display="none";
    setTimeout(function(){
        document.getElementById("KMnO4_in_cuvette").style.display="block";
        document.getElementById("KMnO4_in_dropper").style.display="none";
    }, (1500))
}

function f22()
{
    document.getElementById("fun22").style.display="none";
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

function f23()
{
    document.getElementById("fun23").style.display="none";
    setTimeout(function(){
        document.getElementById("cuvette2").style.display="none";
        document.getElementById("KMnO4_in_cuvette").style.display="none";
        document.getElementById("close5").style.display="block";
        document.getElementById("KMnO4_in_specto").style.display="block";
    }, (1500))
}

function f24()
{
    wavelength=510;
    var A =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,25,30,35,45,55,56,57,78,79,90,91]
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
        if(wavelength==537)
        {
            document.getElementById("fun24").style.display="none";
        }
    }, (700))
    g1();
}

function f25()
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
    document.getElementById("fun25").style.display="none";
    setTimeout(function(){
        document.getElementById("KMnO4_in_cuvette").style.display="none";
    }, (1500))
}

function f26()
{
    document.getElementById("fun26").style.display="none";
}
function f27()
{
    document.getElementById("fun27").style.display="none";
}
function f28()
{
    document.getElementById("fun28").style.display="none";
    setTimeout(function(){
        document.getElementById("KMnO4_in_dropper").style.display="block";
    }, (1500))
}
function f29()
{
    document.getElementById("fun29").style.display="none";
    setTimeout(function(){
        document.getElementById("KMnO4_in_cuvette").style.display="block";
        document.getElementById("KMnO4_in_dropper").style.display="none";
    }, (1500))
}

function f30()
{
    document.getElementById("fun30").style.display="none";
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

function f31()
{
    document.getElementById("fun31").style.display="none";
    setTimeout(function(){
        document.getElementById("cuvette2").style.display="none";
        document.getElementById("KMnO4_in_cuvette").style.display="none";
        document.getElementById("close5").style.display="block";
        document.getElementById("KMnO4_in_specto").style.display="block";
    }, (1500))
}

function f32()
{   
    wavelength = 510;
    
    var A =[110,121,131,141,151,161,117,118,119,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,206,207,28,29,30,31]
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
        if(wavelength>535)
        {
            document.getElementById("fun32").style.display="none";
        }
    }, (700))
    g1();
}
function f33()
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
    document.getElementById("fun33").style.display="none";
    setTimeout(function(){
        document.getElementById("KMnO4_in_cuvette").style.display="none";
    }, (1500))
}

function f34()
{
    document.getElementById("fun34").style.display="none";
}

function f35()
{
    document.getElementById("fun35").style.display="none";
}
function f36()
{
    document.getElementById("fun36").style.display="none";
    setTimeout(function(){
        document.getElementById("KMnO4_in_dropper").style.display="block";
    }, (1500))
}
function f37()
{
    document.getElementById("fun37").style.display="none";
    setTimeout(function(){
        document.getElementById("KMnO4_in_cuvette").style.display="block";
        document.getElementById("KMnO4_in_dropper").style.display="none";
    }, (1500))
}
function f38()
{
    document.getElementById("fun38").style.display="none";
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
function f39()
{
    document.getElementById("fun39").style.display="none";
    setTimeout(function(){
        document.getElementById("cuvette2").style.display="none";
        document.getElementById("KMnO4_in_cuvette").style.display="none";
        document.getElementById("close5").style.display="block";
        document.getElementById("KMnO4_in_specto").style.display="block";
    }, (1500))
}
function f40()
{
    wavelength = 510;
    var A =[11,21,31,41,51,61,17,18,19,110,111,12,13,300,505,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
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
        if(wavelength>535)
        {
            document.getElementById("fun40").style.display="none";
        }
    }, (700))
    g1();
}

function f41()
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
    document.getElementById("fun41").style.display="none";
    setTimeout(function(){
        document.getElementById("KMnO4_in_cuvette").style.display="none";
    }, (1500))
}

function f42()
{
    c+=1;
    if(c==42)
    {
        g2();
        document.getElementById("fun42").style.display="none";
    }
    if(c==43)
    {
        f43();
        document.getElementById("fun43").style.display="none";
    }
}

function f43()
{
    g3();
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

function g2()
{
    var chart = new CanvasJS.Chart("chartContainer", {
        title: {
            text: "Comaparison between samples of different concentrations",
            fontSize: 10
        },
        legend:{
            fontSize: 7,
           },
     /*   axisX: {
            valueFormatString: "MMM YYYY"
        },
        axisY2: {
            title: "Median List Price",
            prefix: "$",
            suffix: "K"
        },
        toolTip: {
            shared: true
        },
        legend: {
            cursor: "pointer",
            verticalAlign: "top",
            horizontalAlign: "center",
            dockInsidePlotArea: true,
            itemclick: toogleDataSeries
        },
    */
        data: [{
            type:"line",
            //axisYType: "secondary",
            name: "Sample 1",
            showInLegend: true,
            markerSize: 0,
            //yValueFormatString: "$#,###k",
            dataPoints: [		
               {x: 510 , y:30},
               {x: 511 , y:30},
               {x: 512 , y:30},
               {x: 513 , y:30},
               {x: 514, y:30},
               {x: 515 , y:30},
               {x: 516 , y:30},
               {x: 517 , y:30},
               {x: 518 , y:30},
               {x: 519 , y:30},
               {x: 520 , y:30},
               {x: 521 , y:30},
               {x: 522 , y:30},
               {x: 523, y:30},
               {x: 524, y:30},
               {x: 525 , y:30},
               {x: 526, y:30},
               {x: 527, y:30},
               {x: 528, y:30},
               {x: 529 , y:30},
               {x: 530 , y:30},
               {x: 531 , y:30},
               {x: 532, y:30},
               {x: 533, y:30},
               {x: 534, y:30},
               {x: 535 , y:30},
               {x: 536, y:30},
               {x: 537, y:30},
               {x: 538, y:30},
               {x: 539 , y:30},
               {x: 540, y:30},

            ]
        },
        {
            type: "line",
            //axisYType: "secondary",
            name: "Sample2",
            showInLegend: true,
            markerSize: 0,
            //yValueFormatString: "$#,###k",
            dataPoints: [
                {x: 510 , y:30},
                {x: 511 , y:30},
                {x: 512 , y:78},
                {x: 513 , y:30},
                {x: 514, y:90},
                {x: 515 , y:30},
                {x: 516 , y:30},
                {x: 517 , y:30},
                {x: 518 , y:30},
                {x: 519 , y:30},
                {x: 520 , y:30},
                {x: 521 , y:30},
                {x: 522 , y:30},
                {x: 523, y:30},
                {x: 524, y:77},
                {x: 525 , y:30},
                {x: 526, y:30},
                {x: 527, y:30},
                {x: 528, y:30},
                {x: 529 , y:30},
                {x: 530 , y:30},
                {x: 531 , y:30},
                {x: 532, y:30},
                {x: 533, y:30},
                {x: 534, y:30},
                {x: 535 , y:30},
                {x: 536, y:30},
                {x: 537, y:30},
                {x: 538, y:30},
                {x: 539 , y:30},
                {x: 540, y:30},
            ]
        },
        {
            type: "line",
            //axisYType: "secondary",
            name: "Sample 3",
            showInLegend: true,
            markerSize: 0,
            //yValueFormatString: "$#,###k",
            dataPoints: [
                {x: 510 , y:30},
                {x: 511 , y:30},
                {x: 512 , y:30},
                {x: 513 , y:30},
                {x: 514, y:30},
                {x: 515 , y:30},
                {x: 516 , y:30},
                {x: 517 , y:30},
                {x: 518 , y:30},
                {x: 519 , y:30},
                {x: 520 , y:30},
                {x: 521 , y:30},
                {x: 522 , y:30},
                {x: 523, y:30},
                {x: 524, y:30},
                {x: 525 , y:80},
                {x: 526, y:30},
                {x: 527, y:30},
                {x: 528, y:30},
                {x: 529 , y:30},
                {x: 530 , y:30},
                {x: 531 , y:30},
                {x: 532, y:65},
                {x: 533, y:30},
                {x: 534, y:30},
                {x: 535 , y:30},
                {x: 536, y:30},
                {x: 537, y:30},
                {x: 538, y:30},
                {x: 539 , y:32},
                {x: 540, y:30},
            ]
        },
        {
            type: "line",
            //axisYType: "secondary",
            name: "Sample4",
            showInLegend: true,
            markerSize: 0,
            yValueFormatString: "$#,###k",
            dataPoints: [
                {x: 510 , y:30},
                {x: 511 , y:30},
                {x: 512 , y:78},
                {x: 513 , y:30},
                {x: 514, y:90},
                {x: 515 , y:30},
                {x: 516 , y:30},
                {x: 517 , y:30},
                {x: 518 , y:30},
                {x: 519 , y:30},
                {x: 520 , y:30},
                {x: 521 , y:30},
                {x: 522 , y:30},
                {x: 523, y:30},
                {x: 524, y:77},
                {x: 525 , y:30},
                {x: 526, y:30},
                {x: 527, y:30},
                {x: 528, y:30},
                {x: 529 , y:30},
                {x: 530 , y:30},
                {x: 531 , y:300},
                {x: 532, y:30},
                {x: 533, y:30},
                {x: 534, y:30},
                {x: 535 , y:30},
                {x: 536, y:30},
                {x: 537, y:30},
                {x: 538, y:30},
                {x: 539 , y:30},
                {x: 540, y:30},
            ]
        },
        {
            type: "line",
            //axisYType: "secondary",
            name: "Sample5",
            showInLegend: true,
            markerSize: 0,
            //yValueFormatString: "$#,###k",
            dataPoints: [
                {x: 510 , y:30},
                {x: 511 , y:30},
                {x: 512 , y:78},
                {x: 513 , y:30},
                {x: 514, y:90},
                {x: 515 , y:30},
                {x: 516 , y:30},
                {x: 517 , y:30},
                {x: 518 , y:30},
                {x: 519 , y:30},
                {x: 520 , y:30},
                {x: 521 , y:30},
                {x: 522 , y:30},
                {x: 523, y:30},
                {x: 524, y:77},
                {x: 525 , y:30},
                {x: 526, y:30},
                {x: 527, y:30},
                {x: 528, y:30},
                {x: 529 , y:30},
                {x: 530 , y:30},
                {x: 531 , y:30},
                {x: 532, y:30},
                {x: 533, y:30},
                {x: 534, y:30},
                {x: 535 , y:500},
                {x: 536, y:30},
                {x: 537, y:30},
                {x: 538, y:30},
                {x: 539 , y:30},
                {x: 540, y:30},
            ]
        
        }]
    });
    chart.render();
    
    function toogleDataSeries(e){
        if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        } else{
            e.dataSeries.visible = true;
        }
        chart.render();
    }
    
    
}

function g3()
{
    var dps = []; // dataPoints
    var chart = new CanvasJS.Chart("chartContainer", {
        title :{
            text: "Absorbance vs Concentration"
        },
        data: [{
            type: "line",
            dataPoints: dps
        }]
    });
    //var op= 0;
    var xVal = 0.001;
    var yVal = 0.001; 
    var updateInterval = 700;
    var dataLength = 31; // number of dataPoints visible at any point
    
    var updateChart = function (count) {
    
        count = count || 1;
    
        for (var j = 0; j <5; j++) {
            yVal +=1;
            xVal +=1;
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
    
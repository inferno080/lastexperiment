var c = 0;
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
                c++;
        }, (5000))
    }
}

function f2()
{
    if(c==2)
    {
        document.getElementById("fun2").style.display="none";
    }
}


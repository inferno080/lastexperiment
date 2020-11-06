var c = 0;

function f1()
{   
    c++;
    if(c==1)
    {
        document.getElementById("Green_LED").style.display= "block";
        document.getElementById("Red_LED").style.display= "none";
        document.getElementById("fun1").style.display="none";
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
        document.getElementById("KMnO4_in_dropper").style.display="block";
    }, (1500))
}
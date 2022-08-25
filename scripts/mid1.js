




var count5=1;
function nxtbut1()
{
    if(count5==8)
    {
        count5=1;
    }
    else
    {
        count5++;
    }
    display5()
}

function prvbut1()
{
    if(count5==1)
    {
        count5=8;
    }
    else
    {
        count5--;
    }
    display5()
}

function display5()
{
    var val=document.querySelectorAll("#allimg1 > div");
    console.log(val.length)

    for(var i=0;i<8;i++)
    {
        if(i+1==count5)
        {
            val[i].style.display="block";
            console.log(val[i])
        }
        else
        {
            val[i].style.display="none";
        }
    }
}

setInterval(nxtbut1,3000)




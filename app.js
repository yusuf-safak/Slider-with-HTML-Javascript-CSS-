window.onload = function()
{
    var images =  new Array;
    images = document.getElementsByClassName("images");
    var i = 0;
    function loop()
    {
        document.getElementById("prev").onclick =  function()
        {
            i--;
            if(i >= images.length)
                i = 0;
            if(i <= -1)
                i = images.length - 1;
            images[i].style.display = "table";
            for(var j = 0; j < images.length; j++)
            {
                if(j != i)
                    images[j].style.display = "none";
            }
        }  
        document.getElementById("next").onclick = function()
        {
            i++;
            if(i >= images.length)
                i = 0;
            images[i].style.display = "table";
            for(var j = 0; j < images.length; j++)
            {
                if(j != i)
                    images[j].style.display = "none";
            }
        }      
        if(i >= images.length)
            i = 0;
        images[i].style.display = "table";
        for(var j = 0; j < images.length; j++)
        {
            if(j != i)
                images[j].style.display = "none";
        }
        document.getElementById("prev").style.display = "table";
        document.getElementById("next").style.display = "table";
        i++;
    }
    setInterval(loop,3000);
}

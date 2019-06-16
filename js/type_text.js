var toType = "";
var consoleTextBox = document.getElementById("console-text");
var onScreen = "<b>willumz.github.io</b>";
var intervalHand;
var typing = false;

class Typer
{
    constructor(interval)
    {
        intervalHand = setInterval(this.write_char, interval);
        this.interval = interval;
    }
    type(string)
    {
        toType += string;
        if (!typing)
        {
            intervalHand = setInterval(this.write_char, this.interval);
            typing = true;
        }
    }
    write_char()
    {
        var a = 1;
        if (toType.length > 0)
        {
            var typeThisTime = toType[0];
            if (toType[0] === "<")
            {
                while (toType[a] !== ">") {typeThisTime += toType[a]; a++;}
                typeThisTime += toType[a];
                a++;
            }
            consoleTextBox.innerHTML += typeThisTime;
            onScreen += typeThisTime;
            toType = toType.substr(a);
        }
        else
        {
            consoleTextBox.innerHTML = onScreen;
            //checkLinks();
            clearInterval(intervalHand);
            typing = false;
        }
    }
}

// function checkLinks()
// {
//     var links = document.getElementsByTagName("a");
//     for (var i of links)
//     {
//         i.onclick = (function() { window.location.href = i.href; });
//     }
// }
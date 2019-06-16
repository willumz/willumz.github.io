var toType = "";
var consoleTextBox = document.getElementById("console-text");
var onScreen = "";//"<b><a href=\"https://willumz.github.io/\">willumz.github.io</a></b>";
var intervalHand;
var typing = false;

class Typer
{
    constructor(interval)
    {
        intervalHand = setInterval(this.write_char, interval);
        this.interval = interval;
        typing = true;
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
            clearInterval(intervalHand);
            typing = false;
        }
    }
}
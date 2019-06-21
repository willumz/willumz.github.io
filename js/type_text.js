//var toType = "";
//var consoleTextBox = document.getElementById("console-text");
//var onScreen = "";//"<b><a href=\"https://willumz.github.io/\">willumz.github.io</a></b>";
//var intervalHand;
//var onScreenSetHand;
//var typing = false;

class Typer
{
    constructor(interval, output)
    {
        this.consoleTextBox = output;
        this.toType = "";
        this.onScreen = "";
        this.onScreenSetHand;
        this.typing = false;
        //var intervalHand = setInterval(() => {this.write_char(this)}, interval);
        this.interval = interval;
        //typing = true;
    }
    type(string)
    {
        console.log(string);
        this.toType += string;
        if (!this.typing)
        {
            this.intervalHand = setInterval(() => {this.write_char(this)}, this.interval);
            this.onScreenSetHand = setInterval(() => {
                this.consoleTextBox.set = this.onScreen;
            }, this.interval*10);
            this.typing = true;
        }
    }
    write_char(self)
    {
        var a = 1;
        if (self.toType.length > 0)
        {
            var typeThisTime = self.toType[0];
            if (self.toType[0] === "<")
            {
                while (self.toType[a] !== ">") {typeThisTime += self.toType[a]; a++;}
                typeThisTime += self.toType[a];
                a++;
            }
            self.consoleTextBox.add = typeThisTime;
            self.onScreen += typeThisTime;
            self.toType = self.toType.substr(a);
        }
        else
        {
            self.consoleTextBox.set = self.onScreen;
            clearInterval(self.intervalHand);
            clearInterval(self.onScreenSetHand);
            self.typing = false;
        }
    }
}
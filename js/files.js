

files = {
    "/socialmedia.txt":
        "<br>Github: <a href=\"https://github.com/willumz\">Willumz</a>",
    "/projects/ps-minifier.txt":
        "<br>A very basic minifier for PowerShell scripts.<br><a href=\"https://github.com/willumz/ps-minifier\">Link to the Github</a> <a href=\"https://pypi.org/project/ps-minifier\">Link to the PyPi</a>",
    "/projects/keybscript/keybscript.txt":
        "<br>A scripting language for keyboard input which aims to build some complexity upon the simplicity of DuckyScript.<br><a href=\"https://willumz.github.io/keybscript\">Link to the converter</a>"
};

executables = {
    "/projects/keybscript/keybscript.sh":
        function() {
            window.location.href = "https://willumz.github.io/keybscript";
        },
    "/hack.sh":
        function() {
            Console.typer.type("<br>This is currently a work in progress.");
            //Console.typer.type((Console.toSource()+Typer.toSource()+keyDown.toSource()).replace(/\n/g, "<br>").replace(/    /g, "&nbsp;&nbsp;&nbsp;&nbsp;"));
        }
};
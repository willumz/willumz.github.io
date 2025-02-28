files = {
    "/socialmedia.txt": '<br>Github: <a href="https://github.com/willumz">Willumz</a>',
    "/projects/ps-minifier.txt":
        '<br>A very basic minifier for PowerShell scripts.<br><a href="https://github.com/willumz/ps-minifier">Link to the Github</a> <a href="https://pypi.org/project/ps-minifier">Link to the PyPi</a>',
    "/projects/generic-pseudocode-vscode.txt":
        '<br>An extension for generic syntax highlighting for pseudocode in VSCode.<br><a href="https://github.com/willumz/generic-pseudocode-vscode">Link to the Github</a> <a href="https://marketplace.visualstudio.com/items?itemName=willumz.generic-pseudocode">Link to the Marketplace</a>',
    "/projects/keybscript/keybscript.txt":
        '<br>A scripting language for keyboard input which aims to build some complexity upon the simplicity of DuckyScript.<br><a href="https://willumz.github.io/keybscript">Link to the converter</a>',
    "/projects/cmdcell.txt":
        '<br>An in-development command handler/parser designed for use with a Discord bot (but can be used in any situation requiring handling commands).<br><a href="https://willumz.github.io/cmdcell">Link to the docs</a><br><a href="https://www.npmjs.com/package/cmdcell">Link to NPM</a>',
};

executables = {
    "/projects/keybscript/keybscript.sh": function () {
        window.location.href = "https://willumz.github.io/keybscript";
    },
    "/hack.sh": function () {
        //handler.controller.console.typer.type("<br>This is currently a work in progress.");
        var con = new InputController();
        con.console.commands = {};
        con.console.typer.interval = 1;
        con.hackerSource = (
            Console.toSource() +
            InputController.toSource() +
            Typer.toSource() +
            InputHandler.toSource()
        ).split("\n");
        con.hackerLineCount = 0;
        //con.console.typer.type("<pre style=\"font-family: 'Comic Sans MS';\">");
        con.onKey = function (event) {
            if (event.key === "Escape") {
                this.outputStream.set = "";
                this.inputStream.set = "";
                handler.deactivateController();
                handler.activateController(old_con);
            } else {
                if (!this.outputStream.get.startsWith("<pre>")) this.outputStream.set = "<pre>";
                if (this.hackerLineCount >= this.hackerSource.length) this.hackerLineCount = 0;
                //this.console.typer.type(this.hackerSource[this.hackerLineCount]);
                //this.console.typer.onScreen += ""+this.hackerSource[this.hackerLineCount];
                this.outputStream.parentHandler.outputElement.getElementsByTagName(
                    "pre"
                )[0].innerHTML += this.hackerSource[this.hackerLineCount] + "\n";
                //this.outputStream.add = ""+this.hackerSource[this.hackerLineCount];
                this.hackerLineCount++;
                this.inputStream.value = "";
            }
        };
        var old_con = handler.deactivateController();
        handler.activateController(con);
        // setTimeout(() => {
        //     handler.controller.outputStream.set = "<pre style=\"font-family: 'Comic Sans MS';\">";
        //     handler.controller.console.typer.onScreen = "<pre style=\"font-family: 'Comic Sans MS';\">";
        // }, 1000);
    },
};

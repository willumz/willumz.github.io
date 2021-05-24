var welcomeMessage =
    "Welcome to <a href=\"https://willumz.github.io/\">willumz.github.io</a><br>Type 'help' for help";

var helpMessage =
    "<br>HELP:<br>ls - list all files in the current directory<br>cd DIRECTORY - change the current directory to DIRECTORY<br>cat FILE - read the contents of FILE<br>bash FILE - runs the executable (.sh file) FILE<br>clear - clears the terminal";

var fileTree = {
    "": [
        ["projects", "dir"],
        ["socialmedia.txt", "file"],
        ["hack.sh", "exe"],
    ],
    "/projects": [
        ["..", "dir"],
        ["ps-minifier.txt", "file"],
        ["generic-pseudocode-vscode.txt", "file"],
        ["keybscript", "dir"],
        ["cmdcell.txt", "file"],
    ],
    "/projects/keybscript": [
        ["..", "dir"],
        ["keybscript.txt", "file"],
        ["keybscript.sh", "exe"],
    ],
};

class Console {
    constructor(inputStream = null, outputStream = null) {
        this.inStream = inputStream;
        this.outStream = outputStream;
        this.test = 1;
        this.typer = new Typer(20, this.outStream);
        this.typer.type(welcomeMessage);
        this.comInput = document.getElementById("input-command");
        this.directory = "";
        this.history = [];
        this.historyCount = 1;
        this.tabCount = 1;
        this.tabSet = "";
        this.tabPrevEntered = "";
        this.commands = Console.defaultCommands;
    }
    runCommand() {
        var com = this.inStream.value.split(" ");
        this.inStream.value = "";
        this.history.push(com.join(" "));
        this.historyCount = 1;
        if (com[0] !== "clear") {
            if (this.typer.onScreen !== "")
                this.typer.onScreen += `<br>${this.directory}$ ${com.join(" ")}`;
            else this.typer.onScreen += `${this.directory}$ ${com.join(" ")}`;
            this.outStream.set = this.typer.onScreen;
        }

        for (var i in this.commands) {
            if (com[0].toLowerCase() === i) {
                this.commands[i](this, com);
                return;
            }
        }
        this.typer.type(`<br>Could not find command '${com[0]}'`);
    }
    getPath(path) {
        if (path.startsWith("/")) return path;
        //if (!path.includes("/"))
        else {
            var temp = this.directory.split("/");
            temp.push(path);
            return temp.join("/");
        }
    }
}

Console.defaultCommands = {
    help: function (self, com) {
        self.typer.type(helpMessage);
    },
    ls: function (self, com) {
        var items = fileTree[self.directory];
        for (var i of items) {
            self.typer.type(`<br>${i[0]}`);
        }
    },
    cd: function (self, com) {
        var items = fileTree[self.directory];
        var exists = false;
        for (var i of items) {
            if (i[0] === com[1]) {
                exists = true;
                if (i[1] === "dir") {
                    if (com[1] === "..") {
                        self.directory = self.directory.split("/");
                        self.directory.pop();
                        self.directory = self.directory.join("/");
                    } else self.directory = [self.directory, com[1]].join("/");
                } else self.typer.type(`<br>'${com[1]}' is not a directory`);
            }
        }
        if (!exists) self.typer.type(`<br>'${com[1]}' does not exist in self directory`);
        document.getElementById("prompt").innerHTML = `${self.directory}$`;
    },
    clear: function (self, com) {
        self.typer.onScreen = "";
        self.outStream.set = self.typer.onScreen;
    },
    cat: function (self, com) {
        var items = fileTree[self.directory];
        var exists = false;
        for (var i of items) {
            if (i[0] === com[1]) {
                exists = true;
                if (i[1] === "file") {
                    var full_path = [self.directory, com[1]].join("/");
                    self.typer.type(files[full_path]);
                } else if (i[1] === "exe")
                    self.typer.type(`<br>'${com[1]}' cannot be read as it is an executable`);
                else self.typer.type(`<br>'${com[1]}' is not a file`);
            }
        }
        if (!exists) self.typer.type(`<br>'${com[1]}' does not exist in self directory`);
    },
    bash: function (self, com) {
        var items = fileTree[self.directory];
        var exists = false;
        for (var i of items) {
            if (i[0] === com[1]) {
                exists = true;
                if (i[1] === "exe") {
                    var full_path = [self.directory, com[1]].join("/");
                    executables[full_path]();
                } else self.typer.type(`<br>'${com[1]}' is not executable`);
            }
        }
        if (!exists) self.typer.type(`<br>'${com[1]}' does not exist in self directory`);
    },
};

//var cons = new Console();

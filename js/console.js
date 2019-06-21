
var welcomeMessage = 'Welcome to <a href="https://willumz.github.io/">willumz.github.io</a><br>Type \'help\' for help';

var helpMessage = '<br>HELP:<br>ls - list all files in the current directory<br>cd DIRECTORY - change the current directory to DIRECTORY<br>cat FILE - read the contents of FILE<br>bash FILE - runs the executable (.sh file) FILE<br>clear - clears the terminal';

var fileTree = {"": [["projects", "dir"], ["socialmedia.txt", "file"], ["hack.sh", "exe"]],
    "/projects": [["..", "dir"], ["ps-minifier.txt", "file"], ["keybscript", "dir"]],
    "/projects/keybscript": [["keybscript.txt", "file"], ["keybscript.sh", "exe"]]
};

class Console
{
    constructor(inputStream=null, outputStream=null)
    {
        this.inStream = inputStream;
        this.outStream = outputStream;
        this.test = 1;
        console.log("test");
        this.typer = new Typer(20, this.outStream);
        this.typer.type(welcomeMessage);
        this.comInput = document.getElementById("input-command");
        this.directory = "";
        this.history = [];
        this.historyCount = 1;
        this.tabCount = 1;
        this.tabSet = "";
        this.tabPrevEntered = "";
    }
    runCommand()
    {
        var com = this.inStream.value.split(" ");
        this.inStream.value = "";
        this.history.push(com.join(" "));
        this.historyCount = 1;
        if (com[0] !== "clear")
        {
            if (this.typer.onScreen !== "") this.typer.onScreen += `<br>${this.directory}$ ${com.join(" ")}`;
            else this.typer.onScreen += `${this.directory}$ ${com.join(" ")}`;
            this.outStream.set = this.typer.onScreen;
        }
        switch (com[0].toLowerCase())
        {
            case "help":
                this.typer.type(helpMessage);
                break;
            case "ls":
                var items = fileTree[this.directory];
                for (var i of items)
                {
                    this.typer.type(`<br>${i[0]}`);
                }
                break;
            case "cd":
                var items = fileTree[this.directory];
                var exists = false;
                for (var i of items)
                {
                    if (i[0] === com[1])
                    {
                        exists = true;
                        if (i[1] === "dir")
                        {
                            if (com[1] === "..")
                            {
                                this.directory = this.directory.split("/");
                                this.directory.pop();
                                this.directory = this.directory.join("/");
                            }
                            else this.directory = [this.directory, com[1]].join("/");
                        }
                        else this.typer.type(`<br>'${com[1]}' is not a directory`);
                    }
                }
                if (!exists) this.typer.type(`<br>'${com[1]}' does not exist in this directory`);
                document.getElementById("prompt").innerHTML = `${this.directory}$`;
                break;
            case "clear":
                this.typer.onScreen = "";
                this.outStream.set = this.typer.onScreen;
                break;
            case "cat":
                var items = fileTree[this.directory];
                var exists = false;
                for (var i of items)
                {
                    if (i[0] === com[1])
                    {
                        exists = true;
                        if (i[1] === "file")
                        {
                            var full_path = [this.directory, com[1]].join("/");
                            this.typer.type(files[full_path]);
                        }
                        else if (i[1] === "exe") this.typer.type(`<br>'${com[1]}' cannot be read as it is an executable`);
                        else this.typer.type(`<br>'${com[1]}' is not a file`);
                    }
                }
                if (!exists) this.typer.type(`<br>'${com[1]}' does not exist in this directory`);
                break;
            case "bash":
                var items = fileTree[this.directory];
                var exists = false;
                for (var i of items)
                {
                    if (i[0] === com[1])
                    {
                        exists = true;
                        if (i[1] === "exe")
                        {
                            var full_path = [this.directory, com[1]].join("/");
                            executables[full_path]();
                        }
                        else this.typer.type(`<br>'${com[1]}' is not executable`);
                    }
                }
                if (!exists) this.typer.type(`<br>'${com[1]}' does not exist in this directory`);
                break;
            default:
                this.typer.type(`<br>Could not find command '${com[0]}'`)
                break;
        }
    }
    getPath(path)
    {
        if (path.startsWith("/")) return path;
        else //if (!path.includes("/"))
        {
            var temp = this.directory.split("/");
            temp.push(path);
            return temp.join("/");
        }
    }
}

//var cons = new Console();

var welcomeMessage = 'Welcome to <a href="https://willumz.github.io/">willumz.github.io</a><br>Type \'help\' for help';

var helpMessage = '<br>HELP:<br>ls - list all files in the current directory<br>cd DIRECTORY - change the current directory to DIRECTORY<br>cat FILE - read the contents of FILE<br>clear - clears the terminal';

var fileTree = {"": [["projects", "dir"], ["socialmedia.txt", "file"]],
    "projects": [["..", "dir"], ["ps-minifier.txt", "file"], ["keybscript.txt", "file"]]};

class Console
{
    constructor()
    {
        Console.typer = new Typer(20);
        Console.typer.type(welcomeMessage);
        Console.comInput = document.getElementById("input-command");
        Console.directory = "";
    }
    static runCommand()
    {
        var com = Console.comInput.value.split(" ");
        Console.comInput.value = "";
        if (com[0] !== "clear")
        {
            if (onScreen !== "") onScreen += `<br>${Console.directory}$ ${com.join(" ")}`;
            else onScreen += `${Console.directory}$ ${com.join(" ")}`;
            consoleTextBox.innerHTML = onScreen;
        }
        switch (com[0].toLowerCase())
        {
            case "help":
                Console.typer.type(helpMessage);
                break;
            case "ls":
                var items = fileTree[Console.directory];
                for (var i of items)
                {
                    Console.typer.type(`<br>${i[0]}`);
                }
                break;
            case "cd":
                var items = fileTree[Console.directory];
                var exists = false;
                for (var i of items)
                {
                    if (i[0] === com[1])
                    {
                        exists = true;
                        if (i[1] === "dir")
                        {
                            if (com[1] === "..") Console.directory = "";
                            else Console.directory = com[1];
                        }
                        else Console.typer.type(`<br>'${com[1]}' is not a directory`);
                    }
                }
                if (!exists) Console.typer.type(`<br>'${com[1]}' does not exist in this directory`);
                document.getElementById("prompt").innerHTML = `${Console.directory}$`;
                break;
            case "clear":
                onScreen = "";
                consoleTextBox.innerHTML = onScreen;
                break;
            case "cat":
                var items = fileTree[Console.directory];
                var exists = false;
                for (var i of items)
                {
                    if (i[0] === com[1])
                    {
                        exists = true;
                        if (i[1] === "file")
                        {
                            Console.typer.type(files[com[1]]);
                        }
                        else Console.typer.type(`<br>'${com[1]}' is not a file`);
                    }
                }
                if (!exists) Console.typer.type(`<br>'${com[1]}' does not exist in this directory`);
                break;
            default:
                Console.typer.type(`<br>Could not find command '${com[0]}'`)
                break;
        }
    }
}

var cons = new Console();
console.log(Console.comInput);

function keyDown(e, cons)
{
    if (event.key === "Enter")
    {
        Console.runCommand();
    }
}
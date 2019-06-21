class InputController
{
    constructor()
    {
        this.inputStream = {
            parentHandler: null,
            get value()
            {
                return this.parentHandler.inputElement.value;
            },
            set value(val)
            {
                this.parentHandler.inputElement.value = val;
            }
        };
        this.outputStream = {
            parentHandler: null,
            set add(val)
            {
                if (this.parentHandler != null) this.parentHandler.addOutput(val);
            },
            set set(val)
            {
                if (this.parentHandler != null) this.parentHandler.setOutput(val);
            },
            get get()
            {
                return this.parentHandler.outputElement.innerHTML;
            }
        };
        this.console = new Console(this.inputStream, this.outputStream);
    }
    onKey(event)
    {
        if (event.key === "Enter")
        {
            this.console.runCommand();
            this.console.tabCount = 1;
            this.console.tabSet = "";
            this.console.tabPrevEntered = "";
            this.inputStream.value = "";
        }
        else if (event.key === "ArrowUp")
        {
            if (this.console.history.length >= this.console.historyCount)
            {
                this.inputStream.value = this.console.history[this.console.history.length-this.console.historyCount];
                this.console.historyCount++;
            }
        }
        else if (event.key === "ArrowDown")
        {
            if (this.console.historyCount - 2 > 0)
            {
                this.console.historyCount -= 2;
                if (this.console.history.length >= this.console.historyCount)
                {
                    this.inputStream.value = this.console.history[this.console.history.length-this.console.historyCount];
                    this.console.historyCount++;
                }
            }   
        }
        else if (event.key === "Tab")
        {
            event.preventDefault();
            var items = fileTree[this.console.directory];
            var good_items = [];
            var entered = this.inputStream.value.split(" ")[1];
            if (entered === this.console.tabSet) entered = this.console.tabPrevEntered;
            else
            {
                this.console.tabSet = "";
                this.console.tabPrevEntered = entered;
            }
            if (entered == null) this.console.tabPrevEntered = "";
            for (var i of items)
            {
                if (i[0].startsWith(entered))
                {
                    good_items.push(i[0]);
                }
            }
            if (this.console.tabCount > good_items.length) this.console.tabCount = 1;
            if (good_items.length > 0)
            {
                var temp = this.inputStream.value.split(" ");
                temp.pop();
                temp.push(good_items[this.console.tabCount-1]);
                this.inputStream.value = temp.join(" ");
                this.console.tabSet = good_items[this.console.tabCount-1];
                this.console.tabCount++;
            }
            
        }
    }
}
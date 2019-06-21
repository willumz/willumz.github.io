class InputHandler
{
    constructor(inputEl, outputEl)
    {
        this.inputElement = inputEl;
        this.outputElement = outputEl;
        this.activateController(new InputController());
    }
    deactivateController()
    {
        var con = this.controller;
        this.controller.outputStream.parentHandler = null;
        this.controller.inputStream.parentHandler = null;
        this.controller = null;
        return con;
    }
    activateController(control)
    {
        this.controller = control;
        this.controller.outputStream.parentHandler = this;
        this.controller.inputStream.parentHandler = this;
    }
    setOutput(val)
    {
        console.log("test");
        this.outputElement.innerHTML = val;
    }
    addOutput(val)
    {
        console.log("test");
        this.outputElement.innerHTML += val;
    }
    keyDown(e)
    {
        this.controller.onKey(event);
    }
}